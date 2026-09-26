import ProjectPlaceholder from './ProjectPlaceholder';

export default function ProjectCard({ project, onOpenCaseStudy, reverse = false }) {
  return (
    <article className={`project-showcase-card ${reverse ? 'layout-reverse' : ''}`} id={`project-${project.id}`}>
      
      {/* Media Column */}
      <div className="project-media-col">
        <div className="project-media-frame">
          {project.hasRealImage && project.image ? (
            <div className="project-screenshot-wrap">
              <img 
                src={project.image} 
                alt={`${project.title} product interface`} 
                className="project-screenshot-img" 
                loading="lazy" 
              />
              <div className="screenshot-badge-overlay">
                <span className={`badge-pill badge-${project.badgeType}`}>{project.badge}</span>
              </div>
            </div>
          ) : (
            <div className="project-schematic-wrap">
              <ProjectPlaceholder type={project.placeholderType} title={project.title} />
              <div className="screenshot-badge-overlay">
                <span className={`badge-pill badge-${project.badgeType}`}>{project.badge}</span>
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

        {/* Key Features (3-5 items) */}
        <div className="project-features-block">
          <h4 className="narrative-label">Key Implemented Features</h4>
          <ul className="project-feature-list">
            {project.keyFeatures.slice(0, 4).map((feat, idx) => (
              <li key={idx} className="feature-item">
                <span className="feature-bullet">▸</span>
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
              ↗ Live Demo
            </a>
          )}
          {project.links?.github && (
            <a 
              href={project.links.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary btn-sm"
            >
              ⌥ GitHub Source
            </a>
          )}
          <button 
            type="button" 
            onClick={() => onOpenCaseStudy(project)} 
            className="btn btn-outline btn-sm"
          >
            📖 Deep Dive / Case Study
          </button>
        </div>

      </div>

    </article>
  );
}
