import { useState } from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import CaseStudyModal from './components/CaseStudyModal';
import EngineeringSection from './components/EngineeringSection';
import TechStack from './components/TechStack';
import ExperienceTimeline from './components/ExperienceTimeline';
import AboutSection from './components/AboutSection';
import GitHubProof from './components/GitHubProof';
import ContactSection from './components/ContactSection';
import { PERSONAL_INFO, FEATURED_PROJECTS, MORE_PROJECTS } from './data/portfolioData';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [showAllMoreProjects, setShowAllMoreProjects] = useState(false);

  const displayedMoreProjects = showAllMoreProjects 
    ? MORE_PROJECTS 
    : MORE_PROJECTS.slice(0, 3);

  return (
    <div className="portfolio-app">
      {/* ── 1. NAVBAR ─────────────────────────────────────────── */}
      <Navbar />

      {/* ── 2. HERO SECTION ───────────────────────────────────── */}
      <header id="hero" className="hero-section">
        <div className="container hero-container">
          
          {/* Availability Status Badge */}
          <div className="hero-availability-pill">
            <span className="pulsing-status-dot" aria-hidden="true" />
            <span className="availability-label">Available for Software Engineering Roles & Selected Projects</span>
          </div>

          {/* Primary Identity & Value Prop */}
          <div className="hero-content">
            <div className="hero-role-eyebrow">FULL-STACK DEVELOPER</div>
            <h1 className="hero-headline">
              Building practical software for real-world problems.
            </h1>
            <p className="hero-subheadline">
              Specialized in <strong>Python</strong>, <strong>Django</strong>, <strong>React</strong>, and <strong>PostgreSQL</strong>. Focused on database integrity, <span className="mono-sub">&lt;200ms</span> query latency, and reliable business tools that solve genuine day-to-day operational pain points.
            </p>
          </div>

          {/* Tech Ribbon */}
          <div className="hero-tech-strip">
            <span className="strip-label">Core Tech:</span>
            <div className="strip-pills">
              <span>Python</span>
              <span className="divider">·</span>
              <span>Django & DRF</span>
              <span className="divider">·</span>
              <span>React 19</span>
              <span className="divider">·</span>
              <span>PostgreSQL</span>
              <span className="divider">·</span>
              <span>REST APIs</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero-cta-group">
            <a href="#work" className="btn btn-primary">
              View My Work ↓
            </a>
            <a 
              href={PERSONAL_INFO.resumePath} 
              download="Mouiezuddin_Killedar_Resume.pdf" 
              className="btn btn-secondary"
            >
              ↓ Download Résumé
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          {/* Direct Social Links */}
          <div className="hero-social-row">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hero-social-link">
              ⌥ GitHub Profile
            </a>
            <span className="dot-sep">•</span>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social-link">
              in LinkedIn
            </a>
            <span className="dot-sep">•</span>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hero-social-link">
              ✉ {PERSONAL_INFO.email}
            </a>
          </div>

        </div>
      </header>

      {/* ── 3. SELECTED WORK (FEATURED PROJECTS) ──────────────── */}
      <section id="work" className="section-selected-work">
        <div className="container">
          
          <div className="section-header-block">
            <span className="section-eyebrow">PORTFOLIO SPOTLIGHT</span>
            <h2 className="section-title">Selected Work</h2>
            <p className="section-lead">
              Real-world systems engineered to solve tangible operational problems—ranging from offline-first digital ledgers and multi-role inventory ERPs to location-aware dispatch architectures.
            </p>
          </div>

          {/* Featured Project Cards List */}
          <div className="featured-projects-list">
            {FEATURED_PROJECTS.map((proj, idx) => (
              <ProjectCard 
                key={proj.id} 
                project={proj} 
                reverse={idx % 2 !== 0}
                onOpenCaseStudy={(p) => setSelectedCaseStudy(p)} 
              />
            ))}
          </div>

          {/* More Projects Archive */}
          <div className="more-projects-section">
            <div className="more-projects-header">
              <div>
                <h3 className="more-projects-title">Additional Production & Backend Projects</h3>
                <p className="more-projects-sub">Other full-stack web applications, REST services, and database utilities.</p>
              </div>
              <button 
                type="button" 
                onClick={() => setShowAllMoreProjects(!showAllMoreProjects)} 
                className="btn btn-secondary btn-sm"
              >
                {showAllMoreProjects ? 'Show Fewer Projects ↑' : `View All (${MORE_PROJECTS.length}) Projects ↓`}
              </button>
            </div>

            <div className="more-projects-grid">
              {displayedMoreProjects.map((item, idx) => (
                <div key={idx} className="archive-card">
                  <div className="archive-top">
                    <span className="archive-status-tag">{item.status}</span>
                    <div className="archive-links">
                      {item.live && (
                        <a href={item.live} target="_blank" rel="noopener noreferrer" className="archive-icon-link" title="Live Demo">
                          ↗
                        </a>
                      )}
                      {item.github && (
                        <a href={item.github} target="_blank" rel="noopener noreferrer" className="archive-icon-link" title="GitHub Repo">
                          ⌥
                        </a>
                      )}
                    </div>
                  </div>
                  <h4 className="archive-title">{item.title}</h4>
                  <p className="archive-desc">{item.description}</p>
                  <div className="archive-tech-tags">
                    {item.tech.map((t) => (
                      <span key={t} className="tech-badge-xs">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. ENGINEERING CREDIBILITY & SYSTEM DESIGN ───────── */}
      <EngineeringSection />

      {/* ── 5. TECHNICAL STACK ─────────────────────────────────── */}
      <TechStack />

      {/* ── 6. EXPERIENCE & EDUCATION ──────────────────────────── */}
      <ExperienceTimeline />

      {/* ── 7. ABOUT SECTION ───────────────────────────────────── */}
      <AboutSection />

      {/* ── 8. GITHUB / DEVELOPMENT PROOF ──────────────────────── */}
      <GitHubProof />

      {/* ── 9. CONTACT SECTION ─────────────────────────────────── */}
      <ContactSection />

      {/* ── 10. SITE FOOTER ────────────────────────────────────── */}
      <footer className="site-footer">
        <div className="container footer-container">
          <div className="footer-left">
            <span className="footer-logo">M. KILLEDAR</span>
            <span className="footer-role">Full-Stack Python Developer</span>
            <p className="footer-copy">
              Built with React 19 and semantic Vanilla CSS. No generic templates, no artificial hype.
            </p>
          </div>
          <div className="footer-nav">
            <a href="#hero" className="footer-link">Top ↑</a>
            <a href="#work" className="footer-link">Work</a>
            <a href="#engineering" className="footer-link">Engineering</a>
            <a href="#experience" className="footer-link">Experience</a>
            <a href={PERSONAL_INFO.resumePath} download="Mouiezuddin_Killedar_Resume.pdf" className="footer-link">Resume</a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* ── CASE STUDY MODAL OVERLAY ──────────────────────────── */}
      {selectedCaseStudy && (
        <CaseStudyModal 
          project={selectedCaseStudy} 
          onClose={() => setSelectedCaseStudy(null)} 
        />
      )}
    </div>
  );
}
