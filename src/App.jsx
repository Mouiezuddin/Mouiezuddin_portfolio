import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroVisual from './components/HeroVisual';
import ProjectCard from './components/ProjectCard';
import CaseStudyModal from './components/CaseStudyModal';
import EngineeringSection from './components/EngineeringSection';
import TechStack from './components/TechStack';
import ExperienceTimeline from './components/ExperienceTimeline';
import CertificationsSection from './components/CertificationsSection';
import AboutSection from './components/AboutSection';
import GitHubProof from './components/GitHubProof';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import RecruiterAssistant from './components/RecruiterAssistant';
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

      <main id="main-content">
        {/* ── 2. HERO SECTION ───────────────────────────────────── */}
        <header id="hero" className="hero-section">
          <div className="container hero-container">
            
            <div className="hero-grid-layout">
              {/* Left Column: Positioning & CTAs */}
              <div className="hero-text-col">
                {/* Availability Status Badge */}
                <div className="hero-availability-pill">
                  <span className="pulsing-status-dot" aria-hidden="true" />
                  <span className="availability-label">Available for Junior Full-Stack Python Developer Roles</span>
                </div>

                {/* Identity & Headline */}
                <div className="hero-title-group">
                  <h1 className="hero-name">{PERSONAL_INFO.name}</h1>
                  <p className="hero-headline">
                    Full-Stack Python Developer building practical web applications, scalable APIs, and intuitive digital experiences.
                  </p>
                </div>

                <p className="hero-subheadline">
                  Specialized in <strong>Python</strong>, <strong>Django</strong>, <strong>Django REST Framework</strong>, <strong>React.js</strong>, and <strong>PostgreSQL</strong>. Focused on database integrity, query performance, and reliable business tools that solve real operational problems.
                </p>

                {/* Core Tech Strip */}
                <div className="hero-tech-strip">
                  <span className="strip-label">Primary Stack:</span>
                  <div className="strip-pills">
                    <span className="pill">Python</span>
                    <span className="divider">·</span>
                    <span className="pill">Django &amp; DRF</span>
                    <span className="divider">·</span>
                    <span className="pill">Flask</span>
                    <span className="divider">·</span>
                    <span className="pill">React.js</span>
                    <span className="divider">·</span>
                    <span className="pill">PostgreSQL</span>
                    <span className="divider">·</span>
                    <span className="pill">REST APIs</span>
                  </div>
                </div>

                {/* Primary & Secondary CTAs */}
                <div className="hero-cta-group">
                  <a href="#projects" className="btn btn-primary">
                    View Projects ↓
                  </a>
                  <a 
                    href={PERSONAL_INFO.resumePath} 
                    download="Mouiezuddin_Killedar_Resume.pdf" 
                    className="btn btn-secondary"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginRight: '6px' }}>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Download Resume
                  </a>
                  <a href="#contact" className="btn btn-outline">
                    Contact Me
                  </a>
                </div>

                {/* Direct Verified Links */}
                <div className="hero-social-row">
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hero-social-link">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ marginRight: '6px' }}>
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub Profile ↗
                  </a>
                  <span className="dot-sep">•</span>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social-link">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ marginRight: '6px' }}>
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn ↗
                  </a>
                  <span className="dot-sep">•</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hero-social-link">
                    ✉ {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Right Column: Subtle Interactive Visual Element */}
              <div className="hero-visual-col">
                <HeroVisual />
              </div>
            </div>

          </div>
        </header>

        {/* ── 3. ABOUT ME SECTION ───────────────────────────────── */}
        <AboutSection />

        {/* ── 4. TECHNICAL SKILLS ─────────────────────────────────── */}
        <TechStack />

        {/* ── 5. FEATURED PROJECTS ──────────────────────────────── */}
        <section id="projects" className="section-selected-work">
          <div className="container">
            
            <div className="section-header-block">
              <span className="section-eyebrow">PORTFOLIO SHOWCASE</span>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-lead">
                Real software built to solve actual business and consumer problems. Every project card below showcases working applications with real source code, live deployments, and architectural implementations.
              </p>
            </div>

            {/* Featured Projects List */}
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

            {/* Additional Projects Archive */}
            <div className="more-projects-section">
              <div className="more-projects-header">
                <div>
                  <h3 className="more-projects-title">Additional Repositories &amp; Utilities</h3>
                  <p className="more-projects-sub">Other full-stack web applications, REST services, and database utilities built with Python, Django, and Flask.</p>
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

        {/* ── 6. ENGINEERING CREDIBILITY & SYSTEM ARCHITECTURE ──── */}
        <EngineeringSection />

        {/* ── 7. EXPERIENCE & EDUCATION ─────────────────────────── */}
        <ExperienceTimeline />

        {/* ── 8. VERIFIED CERTIFICATIONS ────────────────────────── */}
        <CertificationsSection />

        {/* ── 9. GITHUB DEVELOPMENT PROOF ──────────────────────── */}
        <GitHubProof />

        {/* ── 10. CONTACT SECTION ───────────────────────────────── */}
        <ContactSection />
      </main>

      {/* ── 11. FOOTER ────────────────────────────────────────── */}
      <Footer />

      {/* ── CASE STUDY MODAL OVERLAY ──────────────────────────── */}
      {selectedCaseStudy && (
        <CaseStudyModal 
          project={selectedCaseStudy} 
          onClose={() => setSelectedCaseStudy(null)} 
        />
      )}

      {/* ── RECRUITER ASSISTANT COPILOT ───────────────────────── */}
      <RecruiterAssistant onOpenCaseStudy={setSelectedCaseStudy} />
    </div>
  );
}
