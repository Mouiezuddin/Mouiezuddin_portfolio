import { EXPERIENCE_DATA, EDUCATION_DATA, PERSONAL_INFO } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="section-experience">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-eyebrow">PROFESSIONAL TIMELINE</span>
          <h2 className="section-title">Experience &amp; Education</h2>
          <p className="section-lead">
            An authentic, verified record of software engineering internship experience, client deliverables, academic coursework, and industry credentials.
          </p>
        </div>

        <div className="experience-layout-grid">
          
          {/* Work Experience Column */}
          <div className="experience-column">
            <div className="column-header-row">
              <h3 className="column-heading">Engineering Experience</h3>
              <span className="column-sub-badge">VERIFIED ROLES</span>
            </div>
            
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

                    <div className="timeline-responsibilities-block">
                      <span className="timeline-subhead">Key Responsibilities &amp; Technical Work:</span>
                      <ul className="timeline-bullets">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className="timeline-bullet-item">
                            <span className="bullet-point" aria-hidden="true">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="timeline-tech-tags">
                      {exp.tech.map((t) => (
                        <span key={t} className="tech-badge-sm">{t}</span>
                      ))}
                    </div>

                    {exp.certificateImage && (
                      <div className="timeline-cert-preview-link">
                        <a href="#certifications" className="cert-preview-inline-btn">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <polyline points="21 15 16 10 5 21" />
                          </svg>
                          View Verified Innoovatum Internship Certificate ↓
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Academic Credentials Column */}
          <div className="education-column" id="education">
            <div className="column-header-row">
              <h3 className="column-heading">Education &amp; Credentials</h3>
              <span className="column-sub-badge">ACADEMIC RECORD</span>
            </div>

            {/* Academic Card */}
            <div className="education-card">
              <div className="edu-badge">DEGREE COURSEWORK</div>
              <h4 className="edu-degree">{EDUCATION_DATA.degree}</h4>
              <p className="edu-institution">{EDUCATION_DATA.institution}</p>
              
              <div className="edu-meta-row">
                <span className="edu-gpa">Academic GPA: {EDUCATION_DATA.gpa}</span>
                <span className="edu-date">{EDUCATION_DATA.period}</span>
              </div>

              {/* Honest Academic Status Note */}
              <div className="edu-status-note">
                <div className="status-note-icon" aria-hidden="true">ℹ</div>
                <p className="status-note-text">{EDUCATION_DATA.statusNote}</p>
              </div>

              {/* Core Coursework List */}
              <div className="edu-coursework-section">
                <span className="edu-coursework-heading">Key Academic Subjects:</span>
                <ul className="edu-coursework-list">
                  {EDUCATION_DATA.coreCoursework.map((course, idx) => (
                    <li key={idx} className="coursework-item">
                      <span className="course-dot" />
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Secondary Education */}
              {EDUCATION_DATA.secondary && (
                <div className="edu-secondary-section">
                  <div className="secondary-title">{EDUCATION_DATA.secondary.title}</div>
                  <div className="secondary-meta">{EDUCATION_DATA.secondary.institution} · {EDUCATION_DATA.secondary.subjects}</div>
                </div>
              )}
            </div>

            {/* Certifications Quick Overview */}
            <div className="certifications-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                <div className="edu-badge" style={{ margin: 0 }}>VERIFIED CERTIFICATIONS</div>
                <a href="#certifications" className="cert-section-jump-link">
                  View Full Credentials &amp; Badges ↓
                </a>
              </div>
              <ul className="cert-list">
                <li className="cert-list-item">
                  <span className="cert-check-icon">✓</span>
                  <div className="cert-info">
                    <div className="cert-name">AI-Integrated Python-Django Full-Stack</div>
                    <div className="cert-meta">Innoovatum Engineering · Verified Internship</div>
                  </div>
                </li>
                <li className="cert-list-item">
                  <span className="cert-check-icon">✓</span>
                  <div className="cert-info">
                    <div className="cert-name">Microsoft Copilot for Security</div>
                    <div className="cert-meta">Microsoft via Coursera · ID: YD42Y93U5L6V</div>
                  </div>
                </li>
                <li className="cert-list-item">
                  <span className="cert-check-icon">✓</span>
                  <div className="cert-info">
                    <div className="cert-name">Developing Interpersonal Skills</div>
                    <div className="cert-meta">IBM via Coursera · ID: Z3KJALTAMU7H</div>
                  </div>
                </li>
                <li className="cert-list-item">
                  <span className="cert-check-icon">✓</span>
                  <div className="cert-info">
                    <div className="cert-name">Data Analyst 101</div>
                    <div className="cert-meta">Simplilearn SkillUP · Code: 8615099</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Resume Download Action Banner */}
            <div className="resume-download-banner">
              <div className="resume-banner-text">
                <h4 className="banner-h4">Need an offline copy?</h4>
                <p className="banner-p">Download the clean, 1-page PDF résumé with all verified technical competencies and contact details.</p>
              </div>
              <a 
                href={PERSONAL_INFO.resumePath} 
                download="Mouiezuddin_Killedar_Resume.pdf" 
                className="btn btn-secondary btn-sm"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginRight: '6px' }}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Résumé (PDF)
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
