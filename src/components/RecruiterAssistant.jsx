import { useState, useEffect, useRef } from 'react';
import { findBestKnowledgeMatch, RECRUITER_KNOWLEDGE } from '../data/recruiterKnowledge';
import { FEATURED_PROJECTS, PERSONAL_INFO } from '../data/portfolioData';

export default function RecruiterAssistant({ onOpenCaseStudy }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      text: `👋 **Welcome! I'm Mouiezuddin's Recruiter & Engineering Copilot.**\n\nI can answer any technical or hiring question about his projects, Innoovatum internship, BCA 8.5 GPA, or availability.\n\nWhat would you like to know?`,
      actions: [
        { type: 'prompt', text: 'Why should we hire Mouiezuddin?', label: '🎯 Why hire him?' },
        { type: 'prompt', text: 'Tell me about the Royal Enterprises ERP project', label: '⚡ Royal Enterprises ERP' },
        { type: 'prompt', text: 'What is your core backend tech stack?', label: '🛠️ Backend Stack' },
        { type: 'prompt', text: 'What is your notice period and location?', label: '📍 Notice & Location' },
        { type: 'resume', label: '📄 Download Résumé' }
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => {
        inputRef.current?.focus();
        scrollToBottom();
      }, 150);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleActionClick = (action) => {
    if (!action) return;

    if (action.type === 'prompt') {
      sendMessage(action.text);
    } else if (action.type === 'case_study') {
      const project = FEATURED_PROJECTS.find(p => p.id === action.target);
      if (project && onOpenCaseStudy) {
        onOpenCaseStudy(project);
      }
    } else if (action.type === 'resume') {
      const link = document.createElement('a');
      link.href = PERSONAL_INFO.resumePath;
      link.download = 'Mouiezuddin_Killedar_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (action.type === 'whatsapp') {
      window.open(PERSONAL_INFO.whatsappUrl || 'https://wa.me/918867555660', '_blank', 'noopener,noreferrer');
    } else if (action.type === 'email') {
      window.location.href = `mailto:${PERSONAL_INFO.email}`;
    } else if (action.type === 'scroll') {
      const el = document.querySelector(action.target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (action.type === 'github') {
      window.open(PERSONAL_INFO.github, '_blank', 'noopener,noreferrer');
    } else if (action.type === 'external' && action.url) {
      window.open(action.url, '_blank', 'noopener,noreferrer');
    }
  };

  const sendMessage = async (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    setInputValue('');

    const userMessageId = 'u_' + Date.now();
    const newUserMessage = {
      id: userMessageId,
      role: 'user',
      text: query
    };

    setMessages(prev => [...prev, newUserMessage]);
    setIsTyping(true);

    try {
      // First attempt to call the free Gemini serverless route (/api/chat)
      let botResponse = null;
      let actions = [];

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);

        const historyPayload = messages.slice(-6).map(m => ({
          role: m.role,
          text: m.text
        }));

        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: query, history: historyPayload }),
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          if (data && data.reply && !data.fallback) {
            botResponse = data.reply;
            
            // Check if user asked about specific projects to attach direct buttons
            const qLower = query.toLowerCase();
            if (qLower.includes('royal')) {
              actions.push({ type: 'case_study', target: 'royal-enterprises', label: 'View Royal Enterprises Case Study' });
            } else if (qLower.includes('hisab')) {
              actions.push({ type: 'case_study', target: 'hisabpoint', label: 'View HisabPoint Case Study' });
            }
            if (qLower.includes('resume') || qLower.includes('cv')) {
              actions.push({ type: 'resume', label: 'Download Résumé' });
            }
            if (qLower.includes('contact') || qLower.includes('hire') || qLower.includes('interview')) {
              actions.push({ type: 'whatsapp', label: 'Message on WhatsApp' });
            }
          }
        }
      } catch (apiErr) {
        // Serverless API either timed out or not available, seamlessly fall back
      }

      // If no response from API, use the high-precision client-side knowledge engine
      if (!botResponse) {
        // Small organic delay to feel natural
        await new Promise(r => setTimeout(r, 280));
        const match = findBestKnowledgeMatch(query);
        botResponse = match.reply;
        actions = match.actions || [];
      }

      const botMessageId = 'b_' + Date.now();
      setMessages(prev => [
        ...prev,
        {
          id: botMessageId,
          role: 'assistant',
          text: botResponse,
          actions: actions
        }
      ]);
    } catch (err) {
      console.error('Chat error:', err);
      // Failsafe response
      const fallback = findBestKnowledgeMatch(query);
      setMessages(prev => [
        ...prev,
        {
          id: 'b_' + Date.now(),
          role: 'assistant',
          text: fallback.reply,
          actions: fallback.actions || []
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Helper to render bold and lists cleanly in markdown
  const renderFormattedText = (rawText) => {
    if (!rawText) return null;

    const lines = rawText.split('\n');
    return lines.map((line, idx) => {
      if (line.trim() === '') {
        return <div key={idx} style={{ height: '8px' }} />;
      }

      // Parse bold **text**
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const parsedLine = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={pIdx} style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return <code key={pIdx} style={{ fontFamily: 'var(--font-mono)', background: 'var(--bg-subtle)', padding: '2px 5px', borderRadius: '3px', fontSize: '0.85em', color: 'var(--accent)' }}>{part.slice(1, -1)}</code>;
        }
        return part;
      });

      const isBullet = line.trim().startsWith('- ') || line.trim().startsWith('• ');
      const isNumbered = /^\d+\.\s/.test(line.trim());

      return (
        <div 
          key={idx} 
          style={{ 
            marginBottom: isBullet || isNumbered ? '4px' : '6px',
            paddingLeft: isBullet || isNumbered ? '12px' : '0',
            position: 'relative'
          }}
        >
          {parsedLine}
        </div>
      );
    });
  };

  return (
    <>
      {/* ── FLOATING LAUNCHER BUTTON ──────────────────────────── */}
      <div 
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 990,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '8px'
        }}
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open Recruiter & Technical Assistant"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 18px',
            background: isOpen ? 'var(--bg-surface-raised)' : 'var(--bg-surface)',
            color: 'var(--text-primary)',
            border: '1px solid',
            borderColor: isOpen ? 'var(--accent)' : 'var(--border-highlight)',
            borderRadius: '9999px',
            cursor: 'pointer',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.45), 0 0 0 1px var(--border-card)',
            fontFamily: 'var(--font-sans)',
            fontSize: '13.5px',
            fontWeight: 500,
            transition: 'all var(--transition-normal)',
            transform: 'translateY(0)',
            outline: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.borderColor = 'var(--accent)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            if (!isOpen) e.currentTarget.style.borderColor = 'var(--border-highlight)';
          }}
        >
          {/* Animated Pulsing Status Dot */}
          <span style={{ position: 'relative', display: 'flex', width: '9px', height: '9px' }}>
            <span 
              style={{
                position: 'absolute',
                display: 'inline-flex',
                height: '100%',
                width: '100%',
                borderRadius: '9999px',
                background: 'var(--success)',
                opacity: 0.75,
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }} 
            />
            <span 
              style={{
                position: 'relative',
                display: 'inline-flex',
                borderRadius: '9999px',
                width: '9px',
                height: '9px',
                background: 'var(--success)'
              }} 
            />
          </span>

          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontWeight: 600 }}>MK</span>
            <span>Recruiter Assistant</span>
          </span>

          <span 
            style={{ 
              fontSize: '11px',
              background: 'var(--accent-subtle)',
              color: 'var(--accent-text)',
              border: '1px solid var(--accent-border)',
              padding: '1px 6px',
              borderRadius: '4px',
              fontFamily: 'var(--font-mono)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}
          >
            {isOpen ? 'Close ✕' : 'Ask AI'}
          </span>
        </button>
      </div>

      {/* ── CHAT PANEL WINDOW ─────────────────────────────────── */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Recruiter Assistant Chat"
          style={{
            position: 'fixed',
            bottom: '76px',
            right: '24px',
            width: 'min(420px, calc(100vw - 32px))',
            height: 'min(620px, calc(100vh - 110px))',
            maxHeight: '620px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-card)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 0 1px var(--border-highlight)',
            zIndex: 991,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            fontFamily: 'var(--font-sans)',
            animation: 'fadeInUp 200ms cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '14px 16px',
              background: 'var(--bg-surface-raised)',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'var(--accent-subtle)',
                  border: '1px solid var(--accent-border)',
                  color: 'var(--accent)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                MK
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Mouiezuddin's Copilot
                  </span>
                  <span 
                    style={{ 
                      fontSize: '9.5px', 
                      background: 'var(--success-subtle)', 
                      color: 'var(--success)', 
                      border: '1px solid var(--success-border)',
                      padding: '1px 5px',
                      borderRadius: '3px',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    ONLINE
                  </span>
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  Trained on verified projects, resume & code metrics
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <button
                type="button"
                onClick={() => {
                  setMessages([
                    {
                      id: 'reset',
                      role: 'assistant',
                      text: `Conversation cleared. What would you like to know about Mouiezuddin?`,
                      actions: [
                        { type: 'prompt', text: 'Why should we hire Mouiezuddin?', label: '🎯 Why hire him?' },
                        { type: 'prompt', text: 'Tell me about the Royal Enterprises ERP project', label: '⚡ Royal Enterprises ERP' },
                        { type: 'resume', label: '📄 Download Résumé' }
                      ]
                    }
                  ]);
                }}
                title="Clear conversation"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-dim)',
                  cursor: 'pointer',
                  padding: '6px 8px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close chat"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '6px 8px',
                  borderRadius: '4px',
                  fontSize: '16px',
                  lineHeight: 1
                }}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div
            style={{
              padding: '6px 14px',
              background: 'var(--bg-base)',
              borderBottom: '1px solid var(--border-subtle)',
              fontSize: '11px',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <span>STATUS: Available Immediately (0 days notice)</span>
            <span style={{ color: 'var(--accent)' }}>BCA 8.5 GPA</span>
          </div>

          {/* Messages Stream */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              scrollBehavior: 'smooth'
            }}
          >
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: isUser ? 'flex-end' : 'flex-start',
                    maxWidth: '100%'
                  }}
                >
                  <div
                    style={{
                      maxWidth: '88%',
                      padding: '10px 14px',
                      borderRadius: isUser ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                      background: isUser ? 'var(--accent)' : 'var(--bg-surface-raised)',
                      color: isUser ? '#0a0b0e' : 'var(--text-secondary)',
                      fontWeight: isUser ? 500 : 400,
                      border: isUser ? 'none' : '1px solid var(--border-card)',
                      fontSize: '13px',
                      lineHeight: '1.5',
                      wordBreak: 'break-word',
                      boxShadow: isUser ? '0 2px 10px rgba(245, 158, 11, 0.25)' : 'none'
                    }}
                  >
                    {isUser ? msg.text : renderFormattedText(msg.text)}
                  </div>

                  {/* Action Buttons attached to assistant message */}
                  {!isUser && msg.actions && msg.actions.length > 0 && (
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        marginTop: '8px',
                        maxWidth: '95%'
                      }}
                    >
                      {msg.actions.map((act, actIdx) => (
                        <button
                          key={actIdx}
                          type="button"
                          onClick={() => handleActionClick(act)}
                          style={{
                            background: 'var(--bg-base)',
                            border: '1px solid var(--border-highlight)',
                            color: 'var(--text-primary)',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            fontSize: '11.5px',
                            fontFamily: 'var(--font-sans)',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            transition: 'all var(--transition-fast)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--accent)';
                            e.currentTarget.style.color = 'var(--accent-text)';
                            e.currentTarget.style.background = 'var(--accent-subtle)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border-highlight)';
                            e.currentTarget.style.color = 'var(--text-primary)';
                            e.currentTarget.style.background = 'var(--bg-base)';
                          }}
                        >
                          {act.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {isTyping && (
              <div
                style={{
                  alignSelf: 'flex-start',
                  padding: '10px 14px',
                  borderRadius: '12px 12px 12px 2px',
                  background: 'var(--bg-surface-raised)',
                  border: '1px solid var(--border-card)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <span style={{ fontSize: '11.5px', color: 'var(--text-muted)', marginRight: '4px', fontFamily: 'var(--font-mono)' }}>
                  Analyzing profile
                </span>
                <span 
                  style={{ 
                    width: '5px', 
                    height: '5px', 
                    borderRadius: '50%', 
                    background: 'var(--accent)',
                    animation: 'bounce 1s infinite 0ms'
                  }} 
                />
                <span 
                  style={{ 
                    width: '5px', 
                    height: '5px', 
                    borderRadius: '50%', 
                    background: 'var(--accent)',
                    animation: 'bounce 1s infinite 200ms'
                  }} 
                />
                <span 
                  style={{ 
                    width: '5px', 
                    height: '5px', 
                    borderRadius: '50%', 
                    background: 'var(--accent)',
                    animation: 'bounce 1s infinite 400ms'
                  }} 
                />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div
            style={{
              padding: '12px 14px',
              background: 'var(--bg-surface-raised)',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask anything (e.g. Django, Royal Enterprises, GPA)..."
                disabled={isTyping}
                style={{
                  flex: 1,
                  background: 'var(--bg-base)',
                  border: '1px solid var(--border-card)',
                  borderRadius: '8px',
                  padding: '9px 12px',
                  color: 'var(--text-primary)',
                  fontSize: '13px',
                  fontFamily: 'var(--font-sans)',
                  outline: 'none',
                  transition: 'border-color var(--transition-fast)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--accent)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border-card)';
                }}
              />

              <button
                type="button"
                onClick={() => sendMessage()}
                disabled={!inputValue.trim() || isTyping}
                aria-label="Send query"
                style={{
                  background: inputValue.trim() && !isTyping ? 'var(--accent)' : 'var(--bg-subtle)',
                  color: inputValue.trim() && !isTyping ? '#0a0b0e' : 'var(--text-dim)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '9px 14px',
                  cursor: inputValue.trim() && !isTyping ? 'pointer' : 'default',
                  fontWeight: 600,
                  fontSize: '13px',
                  fontFamily: 'var(--font-sans)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                Send
              </button>
            </div>

            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                fontSize: '10.5px', 
                color: 'var(--text-dim)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <span>Instant exact responses • 100% Free</span>
              <span style={{ color: 'var(--accent)' }}>© Mouiezuddin Killedar</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
