import { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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
    const subject = `Engineering Inquiry from ${formData.name}`;
    const body = `Hi Mouiezuddin,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`;
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleWhatsApp = () => {
    const text = `Hello Mouiezuddin, I came across your portfolio and would like to discuss an engineering opportunity.`;
    window.open(`https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="section-contact">
      <div className="container">
        
        <div className="contact-card-main">
          
          <div className="contact-header-block">
            <span className="section-eyebrow">READY TO COLLABORATE</span>
            <h2 className="contact-main-heading">Let's Build Something Useful.</h2>
            <p className="contact-lead-text">
              I am currently available for full-time software engineering roles, technical contract work, and selective freelance web projects. Typical response time is within 24 hours.
            </p>
          </div>

          <div className="contact-channels-grid">
            
            {/* Direct Email Card */}
            <div className="contact-channel-card">
              <div className="channel-icon">✉</div>
              <div className="channel-title">Direct Email</div>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="channel-link">
                {PERSONAL_INFO.email}
              </a>
              <button 
                type="button" 
                onClick={handleCopyEmail} 
                className="btn btn-secondary btn-xs copy-btn"
              >
                {copied ? '✓ Copied to Clipboard' : '📋 Copy Email Address'}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="contact-channel-card">
              <div className="channel-icon">in</div>
              <div className="channel-title">LinkedIn Profile</div>
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="channel-link"
              >
                linkedin.com/in/mouiezuddin-killedar ↗
              </a>
              <span className="channel-subtext">Professional network & recommendations</span>
            </div>

            {/* GitHub Card */}
            <div className="contact-channel-card">
              <div className="channel-icon">⌥</div>
              <div className="channel-title">GitHub Profile</div>
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="channel-link"
              >
                github.com/Mouiezuddin ↗
              </a>
              <span className="channel-subtext">Codebases, commits & repositories</span>
            </div>

          </div>

          {/* Quick Message Form */}
          <div className="contact-form-container">
            <h3 className="form-heading">Send a Quick Message</h3>
            <form onSubmit={handleSendEmail} className="quick-contact-form">
              <div className="form-row-2">
                <div className="form-field">
                  <label htmlFor="user-name" className="field-label">Your Name</label>
                  <input 
                    type="text" 
                    id="user-name" 
                    className="field-input" 
                    placeholder="Enter your name" 
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
                    placeholder="name@company.com" 
                    value={formData.email} 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                    required 
                  />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="user-message" className="field-label">Project or Opportunity Details</label>
                <textarea 
                  id="user-message" 
                  className="field-input field-textarea" 
                  rows="4" 
                  placeholder="Tell me about the role, project, or technical challenge..." 
                  value={formData.message} 
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                  required 
                />
              </div>
              <div className="form-actions-row">
                <button type="submit" className="btn btn-primary">
                  Send Message via Email →
                </button>
                <button type="button" onClick={handleWhatsApp} className="btn btn-secondary">
                  💬 Quick Chat on WhatsApp
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
