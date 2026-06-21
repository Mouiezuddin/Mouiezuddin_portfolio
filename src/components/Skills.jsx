export default function Skills() {
  const competencies = [
    {
      title: "01 // BACKEND ARCH",
      description: "Scalable API development, request validation, secure authentication layers, normalized database modeling, and complex ORM query optimization.",
      image: "https://lh3.googleusercontent.com/aida/AP1WRLvycZ0dpRktGhyxRB3pQWEwftXm3F_TFkCa3dwcg6JzZLKjA9Uv1c4dAafKm7iO88FPhUSNEEhsS9AUfuofl0mhWvW9OG4OSVf7R3jqhSgwUeha6oE1NoYRmKkDos-JpCywpfbxw8XARLXLyqL8prPL0YyWUYEiqeyTdD3M7v_cWxwMGtii-PtPld-cnYTlaWHcuHmwy1QT7pP_qfmVfZ3v28zoe27qMHPEf3-UC3SLK5N5nQi52-Sm8-U",
      imageAlt: "Crystalline CPU",
      tags: ["Python", "Django", "Flask", "DRF", "PostgreSQL", "SQLite", "JWT", "RBAC"],
      glowClass: "var(--primary-glow)",
      hueRotate: "0deg",
      delay: "0s"
    },
    {
      title: "02 // INTERACTIVE UI",
      description: "High-fidelity user interfaces, state management, responsive grid layouts, styling systems, DOM manipulation, and cross-browser compatibility.",
      image: "/assets/coding_concept.png",
      imageAlt: "Hypercube Data Strands",
      tags: ["React JS", "JavaScript ES6+", "HTML5", "CSS3", "Bootstrap 5", "Responsive UI"],
      glowClass: "var(--primary-glow)",
      hueRotate: "90deg",
      delay: "1.5s"
    },
    {
      title: "03 // DEVOPS & SEC",
      description: "CI/CD pipeline automation, containerization, virtual environment configuration, password hashing, CSRF protection, and version control structures.",
      image: "/assets/architecture_concept.png",
      imageAlt: "Neural Network Nodes",
      tags: ["Docker", "Git & GitHub", "GitHub Actions", "Render", "Postman", "Pytest TDD"],
      glowClass: "var(--secondary-glow)",
      hueRotate: "-45deg",
      delay: "3s"
    }
  ]

  return (
    <section id="skills" className="section">
      <div className="container">
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="mono-label" style={{ color: 'var(--primary)' }}>02 // SYSTEM_ARCH</span>
          <h2 style={{ fontSize: '2.2rem', textTransform: 'uppercase', marginTop: '0.5rem', fontFamily: 'var(--font-mono)' }}>
            CORE COMPETENCIES
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {competencies.map((comp, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              {/* 3D Asset */}
              <div style={{ height: '140px', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <img 
                  src={comp.image} 
                  alt={comp.imageAlt} 
                  className="float-animation"
                  style={{ 
                    height: '100%', 
                    objectFit: 'contain', 
                    filter: `drop-shadow(0 0 10px ${comp.glowClass}) ${idx === 0 ? '' : `hue-rotate(${comp.hueRotate})`}`,
                    animationDelay: comp.delay
                  }}
                />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)', fontFamily: 'var(--font-mono)' }}>
                {comp.title}
              </h3>
              <p style={{ marginBottom: '1.5rem', flexGrow: 1, textAlign: 'left' }}>
                {comp.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {comp.tags.map((tag, tIdx) => (
                  <span key={tIdx} className={`tag ${idx === 2 ? 'tag-secondary' : ''}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
