import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar({ theme = 'dark', onToggleTheme }) {
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
        <a href="#hero" className="header-logo" onClick={closeMenu}>
          <span className="logo-name">M. KILLEDAR</span>
          <span className="logo-badge">FULL-STACK</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="header-nav" aria-label="Main Navigation">
          <ul className="nav-menu">
            <li><a href="#work" className="nav-link">Selected Work</a></li>
            <li><a href="#engineering" className="nav-link">Engineering</a></li>
            <li><a href="#stack" className="nav-link">Stack</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          {/* Light / Dark Theme Toggle */}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <a 
            href={PERSONAL_INFO.resumePath} 
            download="Mouiezuddin_Killedar_Resume.pdf" 
            className="btn btn-secondary btn-sm"
            aria-label="Download Resume PDF"
          >
            ↓ Resume
          </a>
          <a 
            href="#contact" 
            className="btn btn-primary btn-sm header-contact-btn"
          >
            Get in Touch
          </a>

          {/* Mobile Hamburger Button */}
          <button 
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
            <li><a href="#work" className="mobile-nav-link" onClick={closeMenu}>Selected Work</a></li>
            <li><a href="#engineering" className="mobile-nav-link" onClick={closeMenu}>Engineering Depth</a></li>
            <li><a href="#stack" className="mobile-nav-link" onClick={closeMenu}>Tech Stack</a></li>
            <li><a href="#experience" className="mobile-nav-link" onClick={closeMenu}>Experience & Education</a></li>
            <li><a href="#about" className="mobile-nav-link" onClick={closeMenu}>About</a></li>
            <li><a href="#contact" className="mobile-nav-link" onClick={closeMenu}>Contact</a></li>
          </ul>

          <div className="mobile-drawer-theme-row">
            <span className="mobile-theme-label">Theme Mode:</span>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>

          <div className="mobile-drawer-cta">
            <a 
              href={PERSONAL_INFO.resumePath} 
              download="Mouiezuddin_Killedar_Resume.pdf" 
              className="btn btn-secondary btn-block"
              onClick={closeMenu}
            >
              ↓ Download Resume (PDF)
            </a>
            <a 
              href="#contact" 
              className="btn btn-primary btn-block"
              onClick={closeMenu}
            >
              Get in Touch →
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
