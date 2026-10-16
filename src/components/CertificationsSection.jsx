import { useState, useEffect } from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';

// Issuer SVG Icons for rich visual branding
function IssuerIcon({ type }) {
  if (type === 'microsoft') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
        <rect x="1" y="1" width="10" height="10" fill="#f25022" rx="1" />
        <rect x="13" y="1" width="10" height="10" fill="#7fba00" rx="1" />
        <rect x="1" y="13" width="10" height="10" fill="#00a4ef" rx="1" />
        <rect x="13" y="13" width="10" height="10" fill="#ffb900" rx="1" />
      </svg>
    );
  }
  if (type === 'ibm') {
    return (
      <svg width="28" height="16" viewBox="0 0 60 25" fill="#0f62fe" aria-hidden="true" style={{ flexShrink: 0 }}>
        {/* Simplified IBM stripes */}
        <rect y="0" width="14" height="2.8" />
        <rect y="5" width="14" height="2.8" />
        <rect y="10" width="14" height="2.8" />
        <rect y="15" width="14" height="2.8" />
        <rect y="20" width="14" height="2.8" />

        <rect x="18" y="0" width="18" height="2.8" />
        <rect x="18" y="5" width="8" height="2.8" />
        <rect x="28" y="5" width="8" height="2.8" />
        <rect x="18" y="10" width="18" height="2.8" />
        <rect x="18" y="15" width="8" height="2.8" />
        <rect x="28" y="15" width="8" height="2.8" />
        <rect x="18" y="20" width="18" height="2.8" />

        <rect x="40" y="0" width="18" height="2.8" />
        <rect x="40" y="5" width="4" height="2.8" />
        <rect x="47" y="5" width="4" height="2.8" />
        <rect x="54" y="5" width="4" height="2.8" />
        <rect x="40" y="10" width="18" height="2.8" />
        <rect x="40" y="15" width="4" height="2.8" />
        <rect x="54" y="15" width="4" height="2.8" />
        <rect x="40" y="20" width="18" height="2.8" />
      </svg>
    );
  }
  if (type === 'innoovatum') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
        <path d="M12 2L2 7l10 5 10-5-10-5z" fill="rgba(59, 130, 246, 0.15)" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    );
  }
  // Simplilearn SkillUP
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10" stroke="#f59e0b" strokeWidth="2" fill="rgba(245, 158, 11, 0.1)" />
      <path d="M12 6v12M8 10l4-4 4 4" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CertificationsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);
  const [copiedCode, setCopiedCode] = useState(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  const categories = [
    { id: 'all', label: 'All Credentials', count: CERTIFICATIONS.length },
    { id: 'fullstack', label: 'Full-Stack & Cloud', count: CERTIFICATIONS.filter(c => c.category === 'fullstack').length },
    { id: 'ai', label: 'AI & Security', count: CERTIFICATIONS.filter(c => c.category === 'ai').length },
    { id: 'professional', label: 'Professional Skills', count: CERTIFICATIONS.filter(c => c.category === 'professional').length },
    { id: 'data', label: 'Data & Analytics', count: CERTIFICATIONS.filter(c => c.category === 'data').length }
  ];

  const filteredCerts = activeCategory === 'all'
    ? CERTIFICATIONS
    : CERTIFICATIONS.filter(c => c.category === activeCategory);

  const handleCopyCode = (code, id) => {
    try {
      navigator.clipboard.writeText(code);
      setCopiedCode(id);
      setTimeout(() => setCopiedCode(null), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <section id="certifications" className="section-certifications">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-block">
          <div className="cert-eyebrow-wrap">
            <span className="section-eyebrow">VERIFIED CREDENTIALS & INDUSTRY ACADEMIA</span>
            <span className="cert-verified-count-badge">
              <span className="pulsing-cert-dot" aria-hidden="true" />
              4 Authenticated Certifications
            </span>
          </div>
          <h2 className="section-title">Certifications & Industrial Training</h2>
          <p className="section-lead">
            Authentic industry credentials issued by global technology leaders and engineering organizations, validating full-stack Python/Django architecture, generative AI security, interpersonal agility, and data analytics.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="cert-filter-bar" role="tablist" aria-label="Certification Categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`cert-filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span>{cat.label}</span>
              <span className="cert-filter-count">{cat.count}</span>
            </button>
          ))}
        </div>

        {/* Option A: Dedicated Glassmorphism Grid */}
        <div className="cert-grid">
          {filteredCerts.map((cert) => (
            <article 
              key={cert.id} 
              className="cert-card"
              style={{ '--cert-accent': cert.accentColor }}
            >
              {/* Card Top Brand & Status Strip */}
              <div className="cert-card-header">
                <div className="cert-issuer-group">
                  <div className="cert-issuer-icon-wrap">
                    <IssuerIcon type={cert.issuerLogoType} />
                  </div>
                  <div>
                    <span className="cert-issuer-name">{cert.issuerShort}</span>
                    <span className="cert-issuer-type">{cert.issuerOrg}</span>
                  </div>
                </div>

                <div className="cert-status-badge">
                  <span className="cert-status-dot" />
                  <span>Verified</span>
                </div>
              </div>

              {/* Certificate Image Thumbnail Preview */}
              <div 
                className="cert-thumbnail-wrapper"
                onClick={() => setSelectedCert(cert)}
                title={`Click to preview full certificate: ${cert.title}`}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedCert(cert);
                  }
                }}
              >
                <img 
                  src={cert.image} 
                  alt={`${cert.title} Certificate`}
                  className="cert-thumbnail-img"
                  loading="lazy"
                />
                <div className="cert-thumbnail-overlay">
                  <span className="cert-zoom-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                    Inspect Full Certificate
                  </span>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="cert-card-body">
                <div className="cert-type-pill">{cert.credentialType}</div>
                <h3 className="cert-title">{cert.title}</h3>

                <div className="cert-meta-row">
                  <span className="cert-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {cert.issueDate}
                  </span>
                  {cert.credentialId && (
                    <span className="cert-meta-id" title="Credential ID">
                      ID: <code>{cert.credentialId}</code>
                    </span>
                  )}
                </div>

                <p className="cert-desc">{cert.description}</p>

                {/* Highlights */}
                <div className="cert-highlights-list">
                  {cert.highlights.map((item, idx) => (
                    <div key={idx} className="cert-highlight-item">
                      <span className="cert-check">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Pills */}
                <div className="cert-skills-wrap">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="cert-skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="cert-card-footer">
                <button
                  type="button"
                  className="cert-btn-preview"
                  onClick={() => setSelectedCert(cert)}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  Preview Document
                </button>

                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-btn-verify"
                    title="Verify on official Coursera validation ledger"
                  >
                    <span>Verify Credential</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                ) : cert.credentialId && cert.hasCode ? (
                  <button
                    type="button"
                    className={`cert-btn-verify ${copiedCode === cert.id ? 'copied' : ''}`}
                    onClick={() => handleCopyCode(cert.credentialId, cert.id)}
                    title="Copy verification code"
                  >
                    <span>{copiedCode === cert.id ? '✓ Code Copied' : `Code: ${cert.credentialId}`}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  </button>
                ) : (
                  <span className="cert-verified-seal-tag">
                    Official Innoovatum Seal
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* ── HIGH-RESOLUTION CERTIFICATE LIGHTBOX MODAL ───────── */}
      {selectedCert && (
        <div 
          className="cert-modal-backdrop" 
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <div 
            className="cert-modal-window"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="cert-modal-header">
              <div className="cert-modal-title-wrap">
                <div className="cert-modal-issuer-badge">
                  <IssuerIcon type={selectedCert.issuerLogoType} />
                  <span>{selectedCert.issuer}</span>
                </div>
                <h3 id="cert-modal-title" className="cert-modal-title">
                  {selectedCert.title}
                </h3>
                <span className="cert-modal-subtitle">
                  {selectedCert.credentialType} · Issued {selectedCert.issueDate}
                </span>
              </div>
              <button 
                type="button" 
                className="cert-modal-close-btn"
                onClick={() => setSelectedCert(null)}
                aria-label="Close Certificate Preview"
              >
                ✕
              </button>
            </div>

            {/* Modal Body: High Resolution Certificate View */}
            <div className="cert-modal-body">
              <div className="cert-modal-image-container">
                <img 
                  src={selectedCert.image} 
                  alt={`High resolution view of ${selectedCert.title} Certificate`}
                  className="cert-modal-full-img"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="cert-modal-footer">
              <div className="cert-modal-footer-meta">
                {selectedCert.credentialId && (
                  <div className="cert-modal-id-row">
                    <span className="meta-label">Credential Verification ID:</span>
                    <code className="meta-value-code">{selectedCert.credentialId}</code>
                  </div>
                )}
                {selectedCert.signatories && (
                  <div className="cert-modal-sign-row">
                    <span className="meta-label">Signatories:</span>
                    <span className="meta-value">{selectedCert.signatories}</span>
                  </div>
                )}
              </div>

              <div className="cert-modal-footer-actions">
                <a
                  href={selectedCert.image}
                  download={`${selectedCert.id}.jpg`}
                  className="btn btn-secondary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ↓ Open High-Res Original
                </a>
                {selectedCert.verificationUrl && (
                  <a
                    href={selectedCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Verify on Coursera ↗
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
