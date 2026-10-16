import { EXPERIENCE_DATA, EDUCATION_DATA, PERSONAL_INFO } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="section-experience">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-eyebrow">BACKGROUND & CREDENTIALS</span>
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-lead">
            Factual record of professional internship experience, academic degree, and verified technical certifications.
          </p>
        </div>

        <div className="experience-layout-grid">
          
          {/* Work Experience Column */}
          <div className="experience-column">
            <h3 className="column-heading">Work Experience</h3>
            
            <div className="timeline-wrap">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div key={idx} className="timeline-entry">
                  <div className="timeline-marker" />
                  <div className="timeline-content-card">
                    <div className="timeline-meta-row">
                      <div>
                        <h4 className="timeline-role">{exp.role}</h4>
                        <div className="timeline-company">{exp.company} · {exp.location}</div>
                      </div>
                      <span className="timeline-period-badge">{exp.period}</span>
                    </div>

                    <p className="timeline-summary">{exp.summary}</p>

                    <ul className="timeline-bullets">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="timeline-bullet-item">
                          <span className="bullet-point">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="timeline-tech-tags">
                      {exp.tech.map((t) => (
                        <span key={t} className="tech-badge-sm">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Column */}
          <div className="education-column">
            <h3 className="column-heading">Education & Certifications</h3>

            {/* Academic Card */}
            <div className="education-card">
              <div className="edu-badge">ACADEMIC DEGREE</div>
              <h4 className="edu-degree">{EDUCATION_DATA.degree}</h4>
              <p className="edu-institution">{EDUCATION_DATA.institution}</p>
              <div className="edu-meta-row">
                <span className="edu-gpa">GPA: {EDUCATION_DATA.gpa}</span>
                <span className="edu-date">{EDUCATION_DATA.period}</span>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="certifications-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                <div className="edu-badge" style={{ margin: 0 }}>VERIFIED CREDENTIALS</div>
                <a href="#certifications" style={{ fontSize: '0.8rem', color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>
                  View All & Badges ↓
                </a>
              </div>
              <ul className="cert-list">
                {EDUCATION_DATA.certifications.map((cert, idx) => (
                  <li key={idx} className="cert-list-item">
                    <span className="cert-check-icon">✓</span>
                    <div className="cert-info">
                      <div className="cert-name">{cert.title}</div>
                      <div className="cert-meta">
                        {cert.issuer} · {cert.year}
                        {cert.code && <span style={{ marginLeft: '6px', opacity: 0.8, fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>({cert.code})</span>}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resume Download Action Banner */}
            <div className="resume-download-banner">
              <div className="resume-banner-text">
                <h4 className="banner-h4">Need an offline copy?</h4>
                <p className="banner-p">Complete chronological résumé including technical competencies and references.</p>
              </div>
              <a 
                href={PERSONAL_INFO.resumePath} 
                download="Mouiezuddin_Killedar_Resume.pdf" 
                className="btn btn-secondary btn-sm"
              >
                ↓ Download Résumé (PDF)
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
