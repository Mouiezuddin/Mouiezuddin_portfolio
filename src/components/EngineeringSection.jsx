import { ENGINEERING_PRINCIPLES } from '../data/portfolioData';

export default function EngineeringSection() {
  return (
    <section id="engineering" className="section-engineering">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-eyebrow">SYSTEM DESIGN & ARCHITECTURE</span>
          <h2 className="section-title">Engineering Credibility</h2>
          <p className="section-lead">
            Good software isn't just about rendering UI elements—it is about data integrity, predictable query latency, defensive authentication, and clean abstractions. Here is how I approach engineering in production.
          </p>
        </div>

        {/* Engineering Grid */}
        <div className="engineering-grid">
          {ENGINEERING_PRINCIPLES.map((item, idx) => (
            <div key={idx} className="engineering-card">
              <div className="card-header-bar">
                <span className="card-number">0{idx + 1}</span>
                <span className="card-tag">PRODUCTION PRACTICE</span>
              </div>
              <h3 className="card-heading">{item.title}</h3>
              <p className="card-body">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Live Architecture Diagram Callout */}
        <div className="architecture-highlight-banner">
          <div className="banner-text">
            <span className="banner-tag">FULL-STACK REQUEST LIFECYCLE</span>
            <h3 className="banner-title">Predictable, Layered System Design</h3>
            <p className="banner-desc">
              Every production system I build follows strict isolation of concerns: React SPA client with optimistic UI updates ⟶ rate-limited Django REST API gateway with JWT/session validation ⟶ atomic service layer ⟶ indexed PostgreSQL database storage.
            </p>
          </div>
          <div className="banner-stats">
            <div className="micro-stat">
              <span className="micro-stat-val">&lt;200ms</span>
              <span className="micro-stat-lbl">Target Query Latency</span>
            </div>
            <div className="micro-stat">
              <span className="micro-stat-val">100%</span>
              <span className="micro-stat-lbl">ACID Transaction Accuracy</span>
            </div>
            <div className="micro-stat">
              <span className="micro-stat-val">40+</span>
              <span className="micro-stat-lbl">Automated Test Assertions</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
