import { useState, useEffect, useRef } from 'react'
import ThreeCanvas from './components/ThreeCanvas'
import TerminalConsole from './components/TerminalConsole'
import ContactForm from './components/ContactForm'
import ArchitectureDiagram from './components/ArchitectureDiagram'
import ThemeSwitcher, { THEMES } from './components/ThemeSwitcher'

/* ─── Scroll-reveal hook ──────────────────────────────────────────────────── */
function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.12 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

/* ─── Chapter node component ─────────────────────────────────────────────── */
function ChapterMarker({ num, title, sub }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className={`chapter-marker ${visible ? 'revealed' : ''}`}>
      <div className="chapter-spine-node" />
      <div className="chapter-label-block">
        <span className="chapter-num">Chapter {num}</span>
        <h2 className="chapter-title">{title}</h2>
        {sub && <p className="chapter-sub">{sub}</p>}
      </div>
    </div>
  )
}

/* ─── Story block (content card) ─────────────────────────────────────────── */
function StoryBlock({ side = 'right', children, delay = 0 }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`story-block story-${side} ${visible ? 'revealed' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function App() {
  const [activeSection, setActiveSection] = useState('prologue')
  const [activeTheme, setActiveTheme] = useState('amber')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id], header[id]')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) })
    }, { threshold: 0.25 })
    sections.forEach(s => obs.observe(s))
    return () => sections.forEach(s => obs.unobserve(s))
  }, [])

  const currentThemeColors = THEMES[activeTheme]?.colors || THEMES.amber.colors

  const projects = [
    { id: '01', date: 'Feb 2024', title: 'Library Management System', story: 'The first real battle. Replaced brittle spreadsheets for 50+ concurrent users, carved search latency from 2.5s down to 0.3s, and shipped RBAC across three roles.', tags: ['Django 4.2', 'SQLite', 'Bootstrap 5'], live: 'https://librarymanagementsystem-0cty.onrender.com', repo: 'https://github.com/Mouiezuddin', status: 'LIVE' },
    { id: '02', date: 'Mar 2024', title: 'Restaurant & Ordering Platform', story: 'An e-commerce engine with live menu catalogs, inventory sync, and payment routing. Three user roles, 500+ concurrent order pipelines — handled without breaking a sweat.', tags: ['Django', 'PostgreSQL', 'React', 'REST API'], repo: 'https://github.com/Mouiezuddin', status: 'BACKEND' },
    { id: '03', date: 'Apr 2024', title: "Developer's Tale Blog", story: 'A writing platform built for developers, with rich-text editing, category filtering, and admin moderation. Deployed and humming at 99%+ uptime.', tags: ['Django', 'PostgreSQL', 'Bootstrap 5'], live: 'https://developers-tale.onrender.com', repo: 'https://github.com/Mouiezuddin/Blog_platform', status: 'LIVE' },
    { id: '04', date: 'Apr 2024', title: 'Calorie Tracker', story: 'A health analytics engine that logs 500+ food items, visualises weekly trends, and serves nutrition data through a clean REST layer. 1000+ daily inputs per user, zero slowdowns.', tags: ['Django ORM', 'SQLite', 'JavaScript'], repo: 'https://github.com/Mouiezuddin/Calories_Counter', status: 'DEV' },
    { id: '05', date: 'Mar 2024', title: 'SpendWise Expenses', story: 'Personal finance tracking with Flask blueprints for clean modular structure, session-secured CRUD, and dynamic category breakdowns.', tags: ['Flask', 'Blueprints', 'SQLite'], repo: 'https://github.com/Mouiezuddin/Expense_tracker', status: 'DEV' },
    { id: '06', date: 'Feb 2024', title: 'MedRemind System', story: 'An async reminder engine with secure user profiles, dosage triggers, and real-time UI rendering — managing 100+ concurrent medication schedules reliably.', tags: ['Flask', 'REST API', 'JavaScript'], repo: 'https://github.com/Mouiezuddin/Medicine_remainder', status: 'DEV' },
  ]

  return (
    <>
      <ThreeCanvas primaryColor={currentThemeColors.primary} secondaryColor={currentThemeColors.secondary} mutedColor={currentThemeColors.muted} />

      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">M.KILLEDAR<span>//DEV</span></div>
          <ul className="nav-links">
            {[['prologue','Prologue'],['origin','Ch.1 Origin'],['craft','Ch.2 Craft'],['works','Ch.3 Works'],['journey','Ch.4 Journey'],['connect','Epilogue']].map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className={`nav-link ${activeSection === id ? 'active' : ''}`}>{label}</a>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="/mouiezuddin_resume.pdf" download="Mouiezuddin_Killedar_Resume.pdf" className="btn btn-secondary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.72rem' }}>RÉSUMÉ</a>
            <a href="mailto:killedarmouiezuddin@gmail.com" className="btn" style={{ padding: '0.65rem 1.25rem', fontSize: '0.72rem' }}>CONNECT</a>
          </div>
        </div>
      </nav>

      {/* ── PROLOGUE / HERO ─────────────────────────────────────────────── */}
      <header id="prologue" className="prologue-hero">
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
          <img src="/assets/hero_bg.png" alt="bg" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.12, filter: 'brightness(0.7)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, var(--bg-color) 100%)' }} />
        </div>
        <div className="container prologue-inner">
          <div className="prologue-eyebrow">— A Developer's Story —</div>
          <h1 className="prologue-name">Mouiezuddin<br />Killedar</h1>
          <p className="prologue-role">Full Stack Python Developer · Software Engineer</p>
          <p className="prologue-tagline">
            Every great product begins with a problem worth solving. This is the story of how I learned to build things that matter — one line of code, one shipped feature, one solved constraint at a time.
          </p>
          <div className="prologue-cta">
            <a href="#origin" className="btn">Read the Story ↓</a>
            <a href="/mouiezuddin_resume.pdf" download className="btn btn-secondary" style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}>Download Résumé</a>
          </div>
          <div className="prologue-scroll-hint">
            <div className="scroll-line" />
            <span>scroll to begin</span>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════════
           THE STORYLINE SPINE
         ══════════════════════════════════════════════════════════════════ */}
      <main className="story-main">
        <div className="story-spine" />

        {/* ── CHAPTER 1: ORIGIN ───────────────────────────────────────── */}
        <section id="origin" className="story-chapter">
          <ChapterMarker num="01" title="The Origin" sub="Who I am and where this journey began." />

          <StoryBlock side="right">
            <div className="story-card">
              <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '260px' }}>
                  <p className="story-narrative">
                    It started, as most stories do, with curiosity. I'm <strong>Mouiezuddin Killedar</strong>, a Full Stack Python Developer from Bijapur, Karnataka — currently completing my Bachelor of Computer Applications at Kumudben Darbar College with a <strong>GPA of 8.5</strong>.
                  </p>
                  <p className="story-narrative" style={{ marginTop: '1rem' }}>
                    What began as tinkering with Python scripts turned into designing production systems. I found that I don't just want to write code — I want to solve real problems, with the architecture to back it up.
                  </p>
                </div>
                <div style={{ width: '200px', flexShrink: 0, margin: '0 auto' }}>
                  <div className="avatar-frame">
                    <img src="/avatar.jpg" alt="Mouiezuddin Killedar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
              <div className="stat-row" style={{ marginTop: '2rem' }}>
                {[['8+', 'Production apps shipped'],['75%', 'API latency reduced'],['2000+', 'Monthly active users'],['8.5', 'GPA / 10.0']].map(([num, label]) => (
                  <div key={label} className="stat-pill">
                    <span className="stat-num">{num}</span>
                    <span className="stat-label">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </StoryBlock>
        </section>

        {/* ── CHAPTER 2: THE CRAFT ────────────────────────────────────── */}
        <section id="craft" className="story-chapter">
          <ChapterMarker num="02" title="The Craft" sub="Skills forged through real projects, not tutorials." />

          <StoryBlock side="left" delay={0}>
            <div className="story-card craft-card">
              <div className="craft-icon">⚙</div>
              <h3 className="craft-title">Backend Architecture</h3>
              <p className="story-narrative">
                My core arena. I design scalable APIs, model clean databases, implement JWT-based auth with granular RBAC, and squeeze every millisecond out of ORM queries. Django and Flask are my primary weapons.
              </p>
              <div className="tag-cloud">
                {['Python', 'Django', 'Flask', 'DRF', 'PostgreSQL', 'SQLite', 'JWT', 'RBAC'].map(t => <code key={t} className="tag">{t}</code>)}
              </div>
            </div>
          </StoryBlock>

          <StoryBlock side="right" delay={100}>
            <div className="story-card craft-card">
              <div className="craft-icon">✦</div>
              <h3 className="craft-title">Interactive Frontends</h3>
              <p className="story-narrative">
                A backend is nothing without the interface that brings it to life. I build state-driven React SPAs with responsive grids, DOM-savvy JavaScript, and component systems that scale without spaghetti.
              </p>
              <div className="tag-cloud">
                {['React JS', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Bootstrap 5', 'Responsive UI'].map(t => <code key={t} className="tag">{t}</code>)}
              </div>
            </div>
          </StoryBlock>

          <StoryBlock side="left" delay={200}>
            <div className="story-card craft-card">
              <div className="craft-icon">◈</div>
              <h3 className="craft-title">DevOps & Security</h3>
              <p className="story-narrative">
                Shipping isn't the finish line — reliability is. I containerise with Docker, automate with GitHub Actions, protect with CSRF/password hashing, and validate everything through Pytest TDD suites.
              </p>
              <div className="tag-cloud">
                {['Docker', 'Git & GitHub', 'GitHub Actions', 'Render', 'Postman', 'Pytest TDD'].map(t => <code key={t} className="tag">{t}</code>)}
              </div>
            </div>
          </StoryBlock>

          {/* Architecture Diagram */}
          <StoryBlock side="right" delay={100}>
            <div className="story-card">
              <h3 className="craft-title" style={{ marginBottom: '1.25rem' }}>The Stack in Action</h3>
              <p className="story-narrative" style={{ marginBottom: '1.5rem' }}>Click any node to inspect how I wire a full-stack system — from React SPA to PostgreSQL, routed through Nginx and cached by Redis.</p>
              <ArchitectureDiagram />
            </div>
          </StoryBlock>
        </section>

        {/* ── CHAPTER 3: THE WORKS ────────────────────────────────────── */}
        <section id="works" className="story-chapter">
          <ChapterMarker num="03" title="The Works" sub="Six real systems. Each one a problem solved." />

          {projects.map((proj, i) => (
            <StoryBlock key={proj.id} side={i % 2 === 0 ? 'right' : 'left'} delay={i * 60}>
              <div className="story-card project-card">
                <div className="project-card-top">
                  <div>
                    <span className="project-num">Project {proj.id}</span>
                    <span className={`project-status status-${proj.status.toLowerCase()}`}>{proj.status}</span>
                  </div>
                  <span className="project-date">{proj.date}</span>
                </div>
                <h3 className="project-title">{proj.title}</h3>
                <p className="story-narrative">{proj.story}</p>
                <div className="tag-cloud" style={{ marginTop: '1rem' }}>
                  {proj.tags.map(t => <code key={t} className="tag">{t}</code>)}
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
                  {proj.live && <a href={proj.live} target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '0.5rem 1.1rem', fontSize: '0.68rem' }}>↗ Live Demo</a>}
                  <a href={proj.repo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1.1rem', fontSize: '0.68rem' }}>⌥ GitHub Repo</a>
                </div>
              </div>
            </StoryBlock>
          ))}
        </section>

        {/* ── CHAPTER 4: THE JOURNEY ──────────────────────────────────── */}
        <section id="journey" className="story-chapter">
          <ChapterMarker num="04" title="The Journey" sub="How experience, education and credentials shaped the engineer." />

          <StoryBlock side="right">
            <div className="story-card journey-card">
              <div className="journey-badge">Work Experience</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>Full Stack Developer Intern</h3>
                <span className="mono-label" style={{ color: 'var(--secondary)' }}>Feb 2024 – Apr 2024</span>
              </div>
              <p className="story-narrative" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '1.25rem', color: 'var(--primary)' }}>Innoovatum · Remote</p>
              <p className="story-narrative">
                Three months that changed how I see software. Working in real sprints with code reviews, feature branches, and Pytest suites, I shipped 8 production apps, cut API latency by 75%, and learned that good architecture is a discipline — not an afterthought.
              </p>
              <ul className="journey-list">
                <li>Built DRF APIs with JWT auth and role-based authorization for 2000+ monthly users.</li>
                <li>Optimised ORM queries and DB indices, dropping latency from 800ms → 200ms.</li>
                <li>Configured full-text search indexes, reducing query execution to 0.3s.</li>
                <li>Operated in agile sprints: feature branches, peer reviews, TDD with Pytest.</li>
              </ul>
            </div>
          </StoryBlock>

          <StoryBlock side="left" delay={100}>
            <div className="story-card journey-card">
              <div className="journey-badge">Education</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>Bachelor of Computer Applications</h3>
                <span className="mono-label" style={{ color: 'var(--primary)' }}>Completed Jun 2026</span>
              </div>
              <p className="story-narrative" style={{ marginBottom: '0.5rem' }}>Kumudben Darbar College, Rani Channamma University, Belagavi</p>
              <p className="story-narrative" style={{ fontFamily: 'var(--font-mono)', color: 'var(--secondary)', fontWeight: 700 }}>GPA: 8.5 / 10.0</p>
            </div>
          </StoryBlock>

          <StoryBlock side="right" delay={150}>
            <div className="story-card journey-card">
              <div className="journey-badge">Certifications</div>
              <ul className="cert-list">
                {[
                  ['Generative AI for Everyone', 'Coursera', '2025'],
                  ['Microsoft Copilot for Security', 'Microsoft', '2025'],
                  ['Data Analyst 101', 'Code: 8615099', '2024'],
                ].map(([name, issuer, year]) => (
                  <li key={name} className="cert-item">
                    <span className="cert-check">✓</span>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>{name}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-dark)', fontFamily: 'var(--font-mono)' }}>{issuer} · {year}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </StoryBlock>
        </section>

        {/* ── EPILOGUE / CONTACT ──────────────────────────────────────── */}
        <section id="connect" className="story-chapter">
          <ChapterMarker num="∞" title="What's Next" sub="Every good story ends with a new beginning." />

          <StoryBlock side="right">
            <div className="story-card epilogue-card">
              <p className="story-narrative epilogue-text">
                The story doesn't end here. I'm actively looking for opportunities to work on ambitious products, solve hard engineering problems, and grow with a team that cares about craft. If that sounds like your company — let's talk.
              </p>
            </div>
          </StoryBlock>

          <div className="contact-grid">
            <div className="story-card" style={{ padding: 0 }}><TerminalConsole /></div>
            <div className="story-card"><ContactForm /></div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="story-footer">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>— The End —</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dark)' }}>© 2026 Mouiezuddin Killedar · All Systems Operational</div>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            {[
              ['https://github.com/Mouiezuddin', 'GitHub', 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'],
              ['https://linkedin.com/in/mouiezuddin-killedar', 'LinkedIn', 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'],
              ['mailto:killedarmouiezuddin@gmail.com', 'Gmail', 'M24 5.457v13.909c0 .904-.733 1.634-1.636 1.634h-3.818V11l-6.545 4.545L5.455 11v10H1.636C.733 21 0 20.27 0 19.366V5.457c0-1.298 1.458-2.057 2.518-1.318L12 10.73l9.482-6.591C22.542 3.4 24 4.159 24 5.457z'],
            ].map(([href, title, d]) => (
              <a key={title} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" className="footer-link" title={title} style={{ display: 'flex' }}>
                <svg style={{ width: '20px', height: '20px', fill: 'currentColor' }} viewBox="0 0 24 24"><path d={d} /></svg>
              </a>
            ))}
          </div>
        </div>
      </footer>

      <ThemeSwitcher activeTheme={activeTheme} onThemeChange={setActiveTheme} />
    </>
  )
}
