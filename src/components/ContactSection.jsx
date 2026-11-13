import { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields before submitting.');
      return;
    }
    const subject = `Software Engineering Opportunity / Inquiry from ${formData.name}`;
    const body = `Hi Mouiezuddin,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`;
    
    // Open default mail client
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatusMessage('Opening your email client with the pre-filled message...');
  };

  const handleWhatsApp = () => {
    const text = `Hello Mouiezuddin, I reviewed your developer portfolio and would like to discuss an engineering opportunity with you.`;
    window.open(`https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="section-contact">
      <div className="container">
        
        <div className="contact-card-main">
          
          <div className="contact-header-block">
            <span className="section-eyebrow">GET IN TOUCH</span>
            <h2 className="contact-main-heading">Let's Discuss Opportunities</h2>
            <p className="contact-lead-text">
              I am actively interviewing for <strong>Junior Full-Stack Python Developer</strong> and <strong>Software Engineer</strong> roles. Whether you have an open position, an inquiry, or want to discuss a project, my inbox is open.
            </p>
          </div>

          <div className="contact-channels-grid">
            
            {/* Direct Email Card */}
            <div className="contact-channel-card">
              <div className="channel-icon" aria-hidden="true">✉</div>
              <div className="channel-title">Direct Email</div>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="channel-link">
                {PERSONAL_INFO.email}
              </a>
              <button 
                type="button" 
                onClick={handleCopyEmail} 
                className="btn btn-secondary btn-xs copy-btn"
                aria-label="Copy email address"
              >
                {copied ? '✓ Copied to Clipboard' : '📋 Copy Email'}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="contact-channel-card">
              <div className="channel-icon" aria-hidden="true">in</div>
              <div className="channel-title">LinkedIn Profile</div>
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="channel-link"
              >
                linkedin.com/in/mouiezuddin-killedar ↗
              </a>
              <span className="channel-subtext">Professional background &amp; connection</span>
            </div>

            {/* GitHub Card */}
            <div className="contact-channel-card">
              <div className="channel-icon" aria-hidden="true">⌥</div>
              <div className="channel-title">GitHub Profile</div>
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="channel-link"
              >
                github.com/Mouiezuddin ↗
              </a>
              <span className="channel-subtext">Repositories, commit history &amp; code</span>
            </div>

            {/* WhatsApp Card */}
            <div className="contact-channel-card">
              <div className="channel-icon" aria-hidden="true">💬</div>
              <div className="channel-title">WhatsApp / Phone</div>
              <a 
                href={`https://wa.me/${PERSONAL_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-link"
              >
                {PERSONAL_INFO.phone} ↗
              </a>
              <span className="channel-subtext">Fast response for recruiters &amp; hiring managers</span>
            </div>

          </div>

          {/* Quick Message Form */}
          <div className="contact-form-container">
            <h3 className="form-heading">Send a Direct Message</h3>
            <p className="form-subheading">Submitting will open your email client pre-filled with this subject and body.</p>
            
            <form onSubmit={handleSendEmail} className="quick-contact-form">
              <div className="form-row-2">
                <div className="form-field">
                  <label htmlFor="user-name" className="field-label">Your Name</label>
                  <input 
                    type="text" 
                    id="user-name" 
                    className="field-input" 
                    placeholder="e.g. Sarah Jenkins" 
                    value={formData.name} 
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                    required 
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="user-email" className="field-label">Your Email</label>
                  <input 
                    type="email" 
                    id="user-email" 
                    className="field-input" 
                    placeholder="e.g. sarah@company.com" 
                    value={formData.email} 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                    required 
                  />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="user-message" className="field-label">Message / Role Details</label>
                <textarea 
                  id="user-message" 
                  className="field-input field-textarea" 
                  rows="4" 
                  placeholder="Tell me about the engineering role, team, or technical requirements..." 
                  value={formData.message} 
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                  required 
                />
              </div>

              {statusMessage && (
                <div className="form-status-alert">
                  {statusMessage}
                </div>
              )}

              <div className="form-actions-row">
                <button type="submit" className="btn btn-primary">
                  Compose Email →
                </button>
                <button type="button" onClick={handleWhatsApp} className="btn btn-secondary">
                  Chat on WhatsApp ↗
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
