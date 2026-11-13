import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        
        {/* Footer Left: Identity */}
        <div className="footer-left">
          <div className="footer-brand-row">
            <span className="footer-logo">MOUIEZUDDIN KILLEDAR</span>
            <span className="footer-role-badge">Junior Full-Stack Python Developer</span>
          </div>
          <p className="footer-copy">
            Building practical web applications, scalable APIs, and intuitive digital experiences. Built with React.js &amp; clean modular styling.
          </p>
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Mouiezuddin Killedar. All rights reserved.
          </div>
        </div>

        {/* Footer Right: Links & Back to Top */}
        <div className="footer-right">
          <div className="footer-nav-col">
            <span className="footer-nav-title">Navigation</span>
            <ul className="footer-links-list">
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#skills" className="footer-link">Skills</a></li>
              <li><a href="#engineering" className="footer-link">Architecture</a></li>
              <li><a href="#experience" className="footer-link">Experience</a></li>
              <li><a href="#education" className="footer-link">Education</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <span className="footer-nav-title">Connect</span>
            <ul className="footer-links-list">
              <li>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="footer-link">
                  GitHub ↗
                </a>
              </li>
              <li>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="footer-link">
                  Email ↗
                </a>
              </li>
              <li>
                <a href={PERSONAL_INFO.resumePath} download="Mouiezuddin_Killedar_Resume.pdf" className="footer-link">
                  Download Résumé ↓
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-top-action">
            <button 
              type="button" 
              onClick={scrollToTop} 
              className="back-to-top-btn"
              aria-label="Back to top of page"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="18 15 12 9 6 15" />
              </svg>
              <span>Back to Top</span>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}

