import { TECH_STACK } from '../data/portfolioData';

export default function TechStack() {
  const categories = [
    { key: 'backend', title: 'Backend Systems', desc: 'Server architecture, API design, and transaction integrity', items: TECH_STACK.backend },
    { key: 'frontend', title: 'Frontend & UI', desc: 'Component architectures, state management, and responsive layouts', items: TECH_STACK.frontend },
    { key: 'database', title: 'Database & Storage', desc: 'Relational schema modeling, index optimization, and persistence', items: TECH_STACK.database },
    { key: 'engineering', title: 'Engineering & DevOps', desc: 'Security protocols, version control, automated testing, and cloud deployment', items: TECH_STACK.engineering }
  ];

  return (
    <section id="stack" className="section-tech-stack">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-eyebrow">CURATED TOOLKIT</span>
          <h2 className="section-title">Technical Stack</h2>
          <p className="section-lead">
            The technologies below are not a wishlist or a collection of keywords. They are tools I have actively deployed in working code, tested across production projects, and refined through real debugging cycles.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="stack-category-grid">
          {categories.map((cat) => (
            <div key={cat.key} className="stack-category-card">
              <div className="stack-cat-header">
                <h3 className="stack-cat-title">{cat.title}</h3>
                <p className="stack-cat-desc">{cat.desc}</p>
              </div>
              <ul className="stack-item-list">
                {cat.items.map((tech) => (
                  <li key={tech.name} className="stack-item">
                    <span className="stack-item-name">{tech.name}</span>
                    <span className="stack-item-highlight">{tech.highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
