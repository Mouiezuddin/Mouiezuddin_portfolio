import { useState, useEffect } from 'react'

export default function TerminalConsole() {
  const [line1, setLine1] = useState('')
  const [showOutput1, setShowOutput1] = useState(false)
  const [line2, setLine2] = useState('')
  const [showOutput2, setShowOutput2] = useState(false)
  const [showPrompt3, setShowPrompt3] = useState(false)

  const cmd1 = 'cat info.txt'
  const cmd2 = 'status --system'

  useEffect(() => {
    let index = 0
    let timer

    // Stage 1: Type "cat info.txt"
    const typeCmd1 = () => {
      if (index < cmd1.length) {
        setLine1((prev) => prev + cmd1.charAt(index))
        index++
        timer = setTimeout(typeCmd1, 50)
      } else {
        // Wait a bit, then show output of command 1
        timer = setTimeout(() => {
          setShowOutput1(true)
          // Start Stage 2: Type "status --system"
          index = 0
          timer = setTimeout(typeCmd2, 400)
        }, 300)
      }
    }

    // Stage 2: Type "status --system"
    const typeCmd2 = () => {
      if (index < cmd2.length) {
        setLine2((prev) => prev + cmd2.charAt(index))
        index++
        timer = setTimeout(typeCmd2, 50)
      } else {
        // Wait a bit, then show output of command 2
        timer = setTimeout(() => {
          setShowOutput2(true)
          setShowPrompt3(true)
        }, 300)
      }
    }

    // Start simulation after 500ms delay
    timer = setTimeout(typeCmd1, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="glass-card" style={{ padding: 0, borderRadius: '6px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.10)' }}>
      {/* Terminal Titlebar */}
      <div style={{ background: 'rgba(241, 245, 249, 0.9)', padding: '0.75rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <span style={{ width: '10px', height: '10px', backgroundColor: '#ef4444', borderRadius: '50%' }}></span>
          <span style={{ width: '10px', height: '10px', backgroundColor: '#eab308', borderRadius: '50%' }}></span>
          <span style={{ width: '10px', height: '10px', backgroundColor: '#22c55e', borderRadius: '50%' }}></span>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
          mouiezuddin@terminal:~
        </span>
        <div style={{ width: '30px' }}></div>
      </div>

      {/* Terminal Body */}
      <div style={{ padding: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: '1.8', color: 'var(--text-main)', backgroundColor: '#f8f9fb', textAlign: 'left' }}>
        
        {/* Command 1 */}
        <div style={{ marginBottom: '1rem' }}>
          <span className="text-secondary">guest@killedar:~$</span>{' '}
          <span style={{ color: 'var(--text-main)' }}>{line1}</span>
          {!showOutput1 && <span className="blink" style={{ fontWeight: 'bold', color: 'var(--primary)' }}>_</span>}
        </div>

        {/* Output 1 */}
        {showOutput1 && (
          <div className="terminal-output" style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', borderLeft: '2px solid var(--text-dark)', paddingLeft: '1rem' }}>
            MOUIEZUDDIN KILLEDAR<br />
            Software Engineer / Full Stack Python Developer<br />
            ----------------------------------------------<br />
            LOCATION: Bijapur, Karnataka, India<br />
            PHONE: +91 8867555660<br />
            EMAIL: killedarmouiezuddin@gmail.com<br />
            GITHUB: <a href="https://github.com/Mouiezuddin" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>github.com/Mouiezuddin</a><br />
            PORTFOLIO: <a href="https://mouiezuddin.github.io/Portfolio" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>mouiezuddin.github.io/Portfolio</a>
          </div>
        )}

        {/* Command 2 */}
        {showOutput1 && (
          <div style={{ marginBottom: '1rem' }}>
            <span className="text-secondary">guest@killedar:~$</span>{' '}
            <span style={{ color: 'var(--text-main)' }}>{line2}</span>
            {!showOutput2 && <span className="blink" style={{ fontWeight: 'bold', color: 'var(--primary)' }}>_</span>}
          </div>
        )}

        {/* Output 2 */}
        {showOutput2 && (
          <div style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }}>
            &gt; SYSTEM STATE: [ ACTIVE_FOR_OPPORTUNITIES ]<br />
            &gt; STACK READY: Django API Services & React Client SPA Applications.
          </div>
        )}

        {/* Active blinking prompt */}
        {showPrompt3 && (
          <div>
            <span className="text-secondary">guest@killedar:~$</span>{' '}
            <span className="blink" style={{ fontWeight: 'bold', color: 'var(--primary)' }}>_</span>
          </div>
        )}
      </div>
    </div>
  )
}
