import { PERSONAL_INFO } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="section-about">
      <div className="container">
        
        <div className="about-grid">
          
          {/* Avatar and Info Card */}
          <div className="about-profile-col">
            <div className="profile-frame">
              <img 
                src="/avatar.jpg" 
                alt="Mouiezuddin Killedar - Full-Stack Python Developer" 
                className="profile-img" 
                loading="lazy" 
              />
            </div>
            <div className="profile-meta-card">
              <div className="meta-item">
                <span className="meta-lbl">LOCATION</span>
                <span className="meta-val">{PERSONAL_INFO.location}</span>
              </div>
              <div className="meta-item">
                <span className="meta-lbl">PRIMARY FOCUS</span>
                <span className="meta-val">Python, Django, React, PostgreSQL</span>
              </div>
              <div className="meta-item">
                <span className="meta-lbl">CAREER TARGET</span>
                <span className="meta-val">Junior Full-Stack Python Developer</span>
              </div>
              <div className="meta-item">
                <span className="meta-lbl">STATUS</span>
                <span className="meta-val status-active">Available for Full-Time Roles</span>
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="about-text-col">
            <span className="section-eyebrow">ABOUT ME</span>
            <h2 className="section-title">Building Software That Solves Real Problems</h2>
            
            <div className="about-editorial-content">
              <p className="about-lead">
                I am a junior full-stack developer based in Bijapur, Karnataka, dedicated to engineering practical, dependable software applications.
              </p>
              
              <div className="about-pillars-grid">
                <div className="pillar-card">
                  <span className="pillar-icon" aria-hidden="true">⚡</span>
                  <div>
                    <h3 className="pillar-title">Python &amp; Django Development</h3>
                    <p className="pillar-desc">Building robust server-side architectures, clean class-based views, and maintainable services.</p>
                  </div>
                </div>

                <div className="pillar-card">
                  <span className="pillar-icon" aria-hidden="true">⚛</span>
                  <div>
                    <h3 className="pillar-title">React.js Frontend Engineering</h3>
                    <p className="pillar-desc">Designing state-driven, componentized user interfaces that render fast on mobile and desktop screens.</p>
                  </div>
                </div>

                <div className="pillar-card">
                  <span className="pillar-icon" aria-hidden="true">🔌</span>
                  <div>
                    <h3 className="pillar-title">REST API Architecture</h3>
                    <p className="pillar-desc">Constructing predictable, token-authenticated REST endpoints using Django REST Framework and Flask.</p>
                  </div>
                </div>

                <div className="pillar-card">
                  <span className="pillar-icon" aria-hidden="true">🗄</span>
                  <div>
                    <h3 className="pillar-title">Relational Database Design</h3>
                    <p className="pillar-desc">Modeling normalized schemas in PostgreSQL, MySQL, and SQLite with composite indexing and ACID transactions.</p>
                  </div>
                </div>
              </div>

              <p className="about-paragraph">
                Rather than chasing fleeting trends, I prioritize practical problem-solving: whether that means building an ACID-compliant digital ledger for local shopkeepers (HisabPoint) or a real-world stock management platform for a battery and solar dealership (Royal Enterprises).
              </p>

              <div className="about-objective-callout">
                <strong>Career Target:</strong> I am actively seeking an entry-level / junior Full-Stack Python Developer or Software Engineer role where I can contribute dependable backend code, thoughtful API design, and collaborate with an engineering team.
              </div>
            </div>

            <div className="about-cta-row">
              <a href="#contact" className="btn btn-primary">
                Get in Touch →
              </a>
              <a 
                href={PERSONAL_INFO.resumePath} 
                download="Mouiezuddin_Killedar_Resume.pdf" 
                className="btn btn-secondary"
              >
                Download Résumé (PDF)
              </a>
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline"
              >
                View GitHub Repos ↗
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
