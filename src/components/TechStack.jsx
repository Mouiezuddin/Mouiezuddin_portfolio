import { useState } from 'react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...TECHNICAL_SKILLS.map((c) => c.category)];

  const displayedSkills = selectedCategory === 'All'
    ? TECHNICAL_SKILLS
    : TECHNICAL_SKILLS.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="section-tech-stack">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-eyebrow">PRACTICAL COMPETENCIES</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-lead">
            Organized by functional domains. Every technology listed below is a tool I can genuinely explain, demonstrate in working code, and defend in technical interviews.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-filter-nav" role="tablist" aria-label="Skill Categories">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              className={`skills-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="skills-categories-grid">
          {displayedSkills.map((catGroup) => (
            <div key={catGroup.category} className="skill-category-card">
              <div className="skill-cat-header">
                <div className="skill-cat-title-row">
                  <h3 className="skill-cat-title">{catGroup.category}</h3>
                  <span className="skill-count-badge">{catGroup.skills.length} skills</span>
                </div>
                <p className="skill-cat-desc">{catGroup.description}</p>
              </div>

              <div className="skill-items-list">
                {catGroup.skills.map((skill) => (
                  <div key={skill.name} className="skill-item-row">
                    <div className="skill-main-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-highlight-tag">{skill.highlight}</span>
                    </div>
                    <p className="skill-note">{skill.note}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
