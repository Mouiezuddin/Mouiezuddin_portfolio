import { GITHUB_REPOS, PERSONAL_INFO } from '../data/portfolioData';

export default function GitHubProof() {
  return (
    <section id="github-proof" className="section-github-proof">
      <div className="container">
        
        {/* Header Block */}
        <div className="section-header-block">
          <span className="section-eyebrow">OPEN SOURCE & REPOSITORIES</span>
          <h2 className="section-title">Development Proof</h2>
          <p className="section-lead">
            Direct access to my active GitHub repositories, complete commits, test files, and technical implementations. No fabricated activity or vanity numbers.
          </p>
        </div>

        {/* ── 165+ VERIFIED GITHUB CONTRIBUTIONS HEATMAP CARD ── */}
        <div className="github-contributions-card">
          <div className="github-card-header">
            <div className="github-user-info">
              <div className="github-avatar-badge" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <div>
                <div className="github-name-row">
                  <span className="github-account-name">Mouiezuddin Killedar</span>
                  <span className="github-status-pill">
                    <span className="pulsing-status-dot" aria-hidden="true" />
                    Active Contributor
                  </span>
                </div>
                <span className="github-username">@Mouiezuddin · Verified Contribution Cadence</span>
              </div>
            </div>

            <div className="github-stat-pill">
              <span className="stat-count">165</span>
              <span className="stat-label">Contributions in the last year</span>
            </div>
          </div>

          {/* Authentic Heatmap Visual Preview */}
          <div className="github-heatmap-container">
            <div className="heatmap-scroll-wrapper">
              <img 
                src="/assets/github_contributions.png" 
                alt="Mouiezuddin Killedar GitHub Contributions Heatmap (165 contributions in the last year)" 
                className="github-heatmap-img"
                loading="lazy"
              />
            </div>
            <div className="heatmap-caption-row">
              <span className="heatmap-caption">
                ✓ Continuous engineering cadence across production ERPs, ACID ledgers, test suites, and schema optimizations.
              </span>
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="heatmap-verify-link"
              >
                Inspect GitHub Profile ↗
              </a>
            </div>
          </div>

          {/* Micro Engineering Metrics Strip */}
          <div className="github-metrics-row">
            <div className="github-metric-item">
              <span className="metric-val">165+</span>
              <span className="metric-lbl">Total Contributions</span>
            </div>
            <div className="github-metric-item">
              <span className="metric-val">8+</span>
              <span className="metric-lbl">Production Repos</span>
            </div>
            <div className="github-metric-item">
              <span className="metric-val">Python · Django · React</span>
              <span className="metric-lbl">Primary Tech Cadence</span>
            </div>
            <div className="github-metric-item">
              <span className="metric-val">TDD & Atomic</span>
              <span className="metric-lbl">Commit Standard</span>
            </div>
          </div>
        </div>

        {/* Repos Grid */}
        <div className="repos-grid">
          {GITHUB_REPOS.map((repo) => (
            <a 
              key={repo.name} 
              href={repo.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="repo-card"
            >
              <div className="repo-card-top">
                <span className="repo-icon">📂</span>
                <span className="repo-name">{repo.name}</span>
                <span className="repo-badge">{repo.stars}</span>
              </div>
              <p className="repo-desc">{repo.description}</p>
              <div className="repo-meta-footer">
                <span className="repo-tech">{repo.tech}</span>
                <span className="repo-arrow">↗</span>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub Profile Banner */}
        <div className="github-profile-banner">
          <div className="github-banner-content">
            <span className="github-handle">github.com/Mouiezuddin</span>
            <p className="github-tagline">Browse commit history, feature branches, pull requests, and automated test suites directly.</p>
          </div>
          <a 
            href={PERSONAL_INFO.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary"
          >
            ⌥ Visit GitHub Profile ↗
          </a>
        </div>

      </div>
    </section>
  );
}
