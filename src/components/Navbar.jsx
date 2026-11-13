import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        
        {/* Brand / Logo */}
        <a href="#hero" className="header-logo" onClick={closeMenu} aria-label="Mouiezuddin Killedar - Home">
          <span className="logo-name">M. KILLEDAR</span>
          <span className="logo-badge">FULL-STACK PYTHON</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="header-nav" aria-label="Main Navigation">
          <ul className="nav-menu">
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#engineering" className="nav-link">Architecture</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#education" className="nav-link">Education</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <a 
            href={PERSONAL_INFO.resumePath} 
            download="Mouiezuddin_Killedar_Resume.pdf" 
            className="btn btn-secondary btn-sm"
            aria-label="Download Resume PDF"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginRight: '6px' }}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Resume
          </a>
          <a 
            href="#contact" 
            className="btn btn-primary btn-sm header-contact-btn"
          >
            Get in Touch
          </a>

          {/* Mobile Hamburger Button */}
          <button 
            type="button"
            className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-nav-inner">
          <ul className="mobile-nav-links">
            <li><a href="#projects" className="mobile-nav-link" onClick={closeMenu}>Projects</a></li>
            <li><a href="#skills" className="mobile-nav-link" onClick={closeMenu}>Technical Skills</a></li>
            <li><a href="#engineering" className="mobile-nav-link" onClick={closeMenu}>System Architecture</a></li>
            <li><a href="#experience" className="mobile-nav-link" onClick={closeMenu}>Experience</a></li>
            <li><a href="#education" className="mobile-nav-link" onClick={closeMenu}>Education</a></li>
            <li><a href="#certifications" className="mobile-nav-link" onClick={closeMenu}>Certifications</a></li>
            <li><a href="#about" className="mobile-nav-link" onClick={closeMenu}>About Me</a></li>
            <li><a href="#contact" className="mobile-nav-link" onClick={closeMenu}>Contact</a></li>
          </ul>

          <div className="mobile-drawer-cta">
            <a 
              href={PERSONAL_INFO.resumePath} 
              download="Mouiezuddin_Killedar_Resume.pdf" 
              className="btn btn-secondary btn-block"
              onClick={closeMenu}
            >
              Download Resume (PDF)
            </a>
            <a 
              href="#contact" 
              className="btn btn-primary btn-block"
              onClick={closeMenu}
            >
              Contact Mouiezuddin →
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
