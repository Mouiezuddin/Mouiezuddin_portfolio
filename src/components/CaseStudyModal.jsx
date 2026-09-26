import { useEffect } from 'react';
import ProjectPlaceholder from './ProjectPlaceholder';

export default function CaseStudyModal({ project, onClose }) {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Lock body scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="case-study-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="case-study-modal" onClick={(e) => e.stopPropagation()}>
        
        {/* Sticky Modal Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-category-badge">
              <span>{project.category}</span>
              <span className={`badge-pill badge-${project.badgeType}`}>{project.badge}</span>
            </div>
            <h2 id="modal-title" className="modal-title">{project.title}</h2>
            <p className="modal-subtitle">{project.subtitle}</p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close Case Study Modal">
            ✕
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-body">

          {/* Quick Action Links Bar */}
          <div className="modal-action-bar">
            {project.links?.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                ↗ Launch Live Application
              </a>
            )}
            {project.links?.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                ⌥ View GitHub Source
              </a>
            )}
          </div>

          {/* Media / Visual Preview */}
          <div className="modal-visual-container">
            {project.hasRealImage && project.image ? (
              <img src={project.image} alt={`${project.title} interface preview`} className="modal-visual-img" />
            ) : (
              <ProjectPlaceholder type={project.placeholderType} title={project.title} />
            )}
          </div>

          {/* Overview */}
          <div className="case-study-section">
            <h3 className="section-label">Product Overview</h3>
            <p className="case-study-text">{project.caseStudy?.overview || project.oneLiner}</p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="problem-solution-grid">
            <div className="callout-box callout-problem">
              <h4 className="callout-heading">The Real-World Problem</h4>
              <p className="case-study-text">{project.problem}</p>
            </div>
            <div className="callout-box callout-solution">
              <h4 className="callout-heading">The Implemented Solution</h4>
              <p className="case-study-text">{project.solution}</p>
            </div>
          </div>

          {/* Key Implemented Features */}
          <div className="case-study-section">
            <h3 className="section-label">Key Features & Capabilities</h3>
            <ul className="case-study-list">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="case-study-list-item">
                  <span className="check-bullet">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* User Flow */}
          {project.caseStudy?.userFlow && (
            <div className="case-study-section">
              <h3 className="section-label">User Flow & Operational Workflow</h3>
              <div className="workflow-steps">
                {project.caseStudy.userFlow.map((step, idx) => (
                  <div key={idx} className="workflow-step">
                    <div className="step-number">{idx + 1}</div>
                    <div className="step-content">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Architecture */}
          {project.caseStudy?.architecture && (
            <div className="case-study-section">
              <h3 className="section-label">Technical Architecture & Data Flow</h3>
              <div className="architecture-grid">
                {project.caseStudy.architecture.map((arch, idx) => (
                  <div key={idx} className="arch-card">
                    <div className="arch-label">{arch.label}</div>
                    <div className="arch-detail">{arch.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Engineering Decisions */}
          {project.caseStudy?.decisions && (
            <div className="case-study-section">
              <h3 className="section-label">Engineering Decisions & Trade-offs</h3>
              <ul className="case-study-list">
                {project.caseStudy.decisions.map((dec, idx) => (
                  <li key={idx} className="case-study-list-item">
                    <span className="arrow-bullet">▸</span>
                    <span>{dec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges & Solutions */}
          {project.caseStudy?.challenges && (
            <div className="case-study-section">
              <h3 className="section-label">Key Challenges Overcome</h3>
              <div className="challenge-box">
                <p className="case-study-text">{project.caseStudy.challenges}</p>
              </div>
            </div>
          )}

          {/* Technology Stack */}
          <div className="case-study-section">
            <h3 className="section-label">Technologies Used</h3>
            <div className="tech-tags-wrap">
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <div className="modal-footer-actions">
            {project.links?.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                ↗ Launch Live App
              </a>
            )}
            {project.links?.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                ⌥ GitHub Source
              </a>
            )}
          </div>
          <button className="btn btn-ghost btn-sm" onClick={onClose}>
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
}
