import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleWhatsApp = (e) => {
    e.preventDefault()
    if (!name || !email || !message) {
      alert('Please fill out all fields before sending.')
      return
    }

    const text = `Hello Mouiezuddin,\n\nMy name is ${name}.\nEmail: ${email}\n\nMessage:\n${message}`
    const whatsappUrl = `https://wa.me/918867555660?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleEmail = (e) => {
    e.preventDefault()
    if (!name || !email || !message) {
      alert('Please fill out all fields before sending.')
      return
    }

    const body = `Hello Mouiezuddin,\n\n${message}\n\nFrom:\nName: ${name}\nEmail: ${email}`
    const mailtoUrl = `mailto:killedarmouiezuddin@gmail.com?subject=Contact from Portfolio - ${encodeURIComponent(name)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
  }

  return (
    <div className="glass-card">
      <span className="mono-label" style={{ display: 'block', marginBottom: '1.5rem', color: 'var(--primary)' }}>
        [ SECURE_CONTACT_PORT ]
      </span>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-name">sender_identity</label>
          <input 
            className="form-input" 
            type="text" 
            id="contact-name" 
            placeholder="Enter your name..." 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-email">return_address</label>
          <input 
            className="form-input" 
            type="email" 
            id="contact-email" 
            placeholder="Enter your email..." 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-message">payload_content</label>
          <textarea 
            className="form-input" 
            id="contact-message" 
            placeholder="Type your message here..." 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="contact-buttons-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
          <button 
            className="btn" 
            type="button" 
            onClick={handleWhatsApp} 
            style={{ borderColor: 'var(--secondary)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
          >
            <svg style={{ width: '16px', height: '16px', fill: 'currentColor' }} viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.16 1.44 4.87 1.44 5.33 0 9.68-4.34 9.68-9.68 0-2.56-1.00-4.96-2.81-6.77-1.81-1.81-4.22-2.81-6.87-2.81-5.33 0-9.68 4.34-9.68 9.68 0 1.78.47 3.52 1.37 5.02L2.12 21.8l5.527-1.45-.003-.004zm11.306-6.882c-.344-.173-2.036-1.004-2.35-1.118-.314-.115-.544-.173-.772.173-.228.347-.88 1.118-1.08 1.348-.198.23-.397.258-.74.084-1.248-.625-2.137-1.148-2.982-2.597-.272-.47.272-.435.778-1.443.084-.173.042-.323-.02-.45-.062-.128-.544-1.314-.746-1.793-.197-.475-.397-.406-.544-.413-.14-.007-.302-.007-.463-.007-.162 0-.424.06-.647.3-.223.238-.85.83-.85 2.025 0 1.194.87 2.347.99 2.51.12.163 1.71 2.613 4.14 3.662.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.20-.57.20-1.06.14-1.16-.06-.1-.22-.16-.56-.33z"/>
            </svg>
            WhatsApp
          </button>
          <button 
            className="btn" 
            type="button" 
            onClick={handleEmail} 
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
          >
            <svg style={{ width: '16px', height: '16px', fill: 'currentColor' }} viewBox="0 0 24 24">
              <path d="M24 5.457v13.909c0 .904-.733 1.634-1.636 1.634h-3.818V11l-6.545 4.545L5.455 11v10H1.636C.733 21 0 20.27 0 19.366V5.457c0-1.298 1.458-2.057 2.518-1.318L12 10.73l9.482-6.591C22.542 3.4 24 4.159 24 5.457z"/>
            </svg>
            Gmail
          </button>
        </div>
      </form>
    </div>
  )
}
