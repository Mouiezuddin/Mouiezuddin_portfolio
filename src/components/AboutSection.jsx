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
                alt="Mouiezuddin Killedar" 
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
                <span className="meta-lbl">CORE STACK</span>
                <span className="meta-val">Python, Django, React, PostgreSQL</span>
              </div>
              <div className="meta-item">
                <span className="meta-lbl">STATUS</span>
                <span className="meta-val status-active">Open to Opportunities</span>
              </div>
            </div>
          </div>

          {/* Editorial Text */}
          <div className="about-text-col">
            <span className="section-eyebrow">ABOUT ME</span>
            <h2 className="section-title">Practical Engineering Over Tech Lists</h2>
            
            <div className="about-editorial-content">
              <p className="about-lead">
                I am a full-stack developer based in Bijapur, Karnataka, focused on building practical web applications and business systems that solve genuine everyday problems.
              </p>
              <p className="about-paragraph">
                Rather than collecting programming languages or chasing fleeting framework trends, I care about software that works reliably in production—whether that means designing an ACID-compliant digital ledger for local retail shopkeepers, an inventory ERP for battery dealers, or responsive REST APIs with clean composite database indexing.
              </p>
              <p className="about-paragraph">
                My core stack is built on Python, Django, React, PostgreSQL, and modern web tooling. I enjoy working on clean relational database design, query latency reduction, and intuitive user interfaces for non-technical users.
              </p>
              <p className="about-paragraph highlight-box">
                <strong>What I am looking for:</strong> I am actively seeking full-time junior to mid-level software engineering roles and selective freelance web product collaborations where I can contribute dependable code, thoughtful architecture, and immediate value.
              </p>
            </div>

            <div className="about-cta-row">
              <a href="#contact" className="btn btn-primary">Start a Conversation →</a>
              <a href={PERSONAL_INFO.resumePath} download="Mouiezuddin_Killedar_Resume.pdf" className="btn btn-secondary">↓ Download Résumé</a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
