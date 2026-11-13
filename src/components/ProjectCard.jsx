export default function ProjectCard({ project, onOpenCaseStudy, reverse = false }) {
  return (
    <article className={`project-showcase-card ${reverse ? 'layout-reverse' : ''}`} id={`project-${project.id}`}>
      
      {/* Media Column */}
      <div className="project-media-col">
        <div className="project-media-frame">
          {project.image ? (
            <div className="project-screenshot-wrap">
              <img 
                src={project.image} 
                alt={`${project.title} - ${project.subtitle}`} 
                className="project-screenshot-img" 
                loading="lazy" 
              />
              <div className="screenshot-badge-overlay">
                <span className={`badge-pill badge-${project.badgeType || 'production'}`}>{project.badge}</span>
              </div>
            </div>
          ) : (
            <div className="project-schematic-wrap">
              <div className="schematic-inner">
                <span className="schematic-category">{project.category}</span>
                <h4 className="schematic-title">{project.title}</h4>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content Column */}
      <div className="project-content-col">
        
        {/* Meta Header */}
        <div className="project-meta-bar">
          <span className="project-index-num">PROJECT {project.number}</span>
          <span className="project-category-name">{project.category}</span>
        </div>

        {/* Title & One-Liner */}
        <h3 className="project-heading">{project.title}</h3>
        <p className="project-subtitle-lead">{project.subtitle}</p>
        <p className="project-oneliner">{project.oneLiner}</p>

        {/* Problem & Solution Panels */}
        <div className="project-narrative-panels">
          <div className="narrative-panel">
            <h4 className="narrative-label text-problem">The Problem</h4>
            <p className="narrative-body">{project.problem}</p>
          </div>
          <div className="narrative-panel">
            <h4 className="narrative-label text-solution">The Solution</h4>
            <p className="narrative-body">{project.solution}</p>
          </div>
        </div>

        {/* My Contribution Highlight */}
        {project.myContribution && (
          <div className="project-contribution-box">
            <span className="contribution-tag">MY ROLE &amp; CONTRIBUTION</span>
            <p className="contribution-text">{project.myContribution}</p>
          </div>
        )}

        {/* Key Implemented Features */}
        <div className="project-features-block">
          <h4 className="narrative-label">Verified Implemented Features</h4>
          <ul className="project-feature-list">
            {project.keyFeatures.map((feat, idx) => (
              <li key={idx} className="feature-item">
                <span className="feature-bullet" aria-hidden="true">✓</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="project-tech-cloud">
          {project.tech.map((t) => (
            <code key={t} className="tech-badge">{t}</code>
          ))}
        </div>

        {/* Action Links */}
        <div className="project-cta-row">
          {project.links?.live && (
            <a 
              href={project.links.live} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-sm"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginRight: '5px' }}>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Live Demo ↗
            </a>
          )}
          {project.links?.github && (
            <a 
              href={project.links.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary btn-sm"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ marginRight: '5px' }}>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub Source
            </a>
          )}
          <button 
            type="button" 
            onClick={() => onOpenCaseStudy(project)} 
            className="btn btn-outline btn-sm"
          >
            Engineering Case Study →
          </button>
        </div>

      </div>

    </article>
  );
}
