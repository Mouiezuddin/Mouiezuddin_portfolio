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
