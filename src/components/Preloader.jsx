import React, { useState, useEffect, useCallback } from 'react';

/**
 * Preloader Component - Option 2: Build Pipeline
 * Technical / Terminal-themed preloader featuring real projects,
 * pipeline stage checkmarks, animated progress bar, and instant skip support.
 */
export default function Preloader({ onComplete }) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(10);
  const [isExiting, setIsExiting] = useState(false);

  // Projects listed in the pipeline box
  const projects = [
    { id: 'hisabpoint', name: 'HisabPoint', icon: '📖' },
    { id: 'ai-lms', name: 'AI Learning Platform', icon: '🎓' },
    { id: 'battery-erp', name: 'Battery Shop Management', icon: '🏪' },
    { id: 'vehicle-assist', name: 'Vehicle Assistance (Concept)', icon: '📍' },
  ];

  // Handle immediate skip or completion
  const handleFinish = useCallback(() => {
    setIsExiting(true);
    try {
      sessionStorage.setItem('mk_preloader_seen', 'true');
    } catch {
      // Ignore storage errors in private browsing modes
    }
    setTimeout(() => {
      onComplete?.();
    }, 450);
  }, [onComplete]);

  // Keyboard shortcut: Escape or Enter skips
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFinish]);

  // Lock body scroll while preloader is active
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Sequential pipeline animation timer (extended pace for realistic terminal flow)
  useEffect(() => {
    const timeline = [
      { step: 1, progress: 18, delay: 350 },   // > loading projects...
      { step: 2, progress: 32, delay: 750 },   // HisabPoint ✓
      { step: 3, progress: 46, delay: 1150 },  // AI Learning Platform ✓
      { step: 4, progress: 60, delay: 1550 },  // Battery Shop Management ✓
      { step: 5, progress: 72, delay: 1950 },  // Vehicle Assistance ✓
      { step: 6, progress: 80, delay: 2350 },  // > loading experience... ✓
      { step: 7, progress: 87, delay: 2700 },  // > loading skills... ✓
      { step: 8, progress: 93, delay: 3050 },  // > loading interface... ✓
      { step: 9, progress: 98, delay: 3400 },  // > optimizing performance... ✓
      { step: 10, progress: 100, delay: 3800 },// > system ready.
      { step: 11, progress: 100, delay: 4500 },// Auto-exit trigger
    ];

    const timeouts = timeline.map(({ step: s, progress: p, delay }) => {
      return setTimeout(() => {
        setStep(s);
        setProgress(p);
        if (s === 11) {
          handleFinish();
        }
      }, delay);
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [handleFinish]);

  return (
    <aside 
      className={`build-pipeline-preloader ${isExiting ? 'preloader-exit' : ''}`}
      aria-label="Portfolio Loading Screen"
      aria-live="polite"
      role="status"
    >
      {/* Background ambient grid overlay */}
      <div className="preloader-grid-bg" aria-hidden="true" />
      <div className="preloader-radial-glow" aria-hidden="true" />

      <div className="preloader-container">
        
        {/* Top Header */}
        <header className="preloader-header">
          <div className="preloader-brand">
            <span className="preloader-brand-logo">MK</span>
            <span className="preloader-brand-dot" aria-hidden="true" />
          </div>

          <div className="preloader-header-meta">
            <span className="preloader-version">v1.0.0</span>
            <button 
              type="button" 
              onClick={handleFinish} 
              className="preloader-skip-btn"
              title="Skip intro (Press Esc)"
              aria-label="Skip preloader animation"
            >
              Skip <span className="preloader-kbd">ESC</span>
            </button>
          </div>
        </header>

        {/* Terminal Body */}
        <main className="preloader-terminal-body">
          
          {/* Step 0: Init */}
          <div className={`pipeline-line ${step >= 0 ? 'visible' : ''}`}>
            <span className="pipeline-prompt">&gt;</span>
            <span className="pipeline-cmd">initializing MK.portfolio...</span>
          </div>

          {/* Step 1: Loading projects prompt */}
          <div className={`pipeline-line ${step >= 1 ? 'visible' : ''}`}>
            <span className="pipeline-prompt">&gt;</span>
            <span className="pipeline-cmd">loading projects...</span>
          </div>

          {/* Projects Checklist Box */}
          <div className={`pipeline-project-box ${step >= 1 ? 'visible' : ''}`}>
            {projects.map((proj, idx) => {
              const isChecked = step >= idx + 2;
              return (
                <div 
                  key={proj.id} 
                  className={`pipeline-project-item ${isChecked ? 'item-checked' : ''}`}
                >
                  <div className="project-item-left">
                    <span className="project-item-icon" aria-hidden="true">{proj.icon}</span>
                    <span className="project-item-name">{proj.name}</span>
                  </div>
                  <div className="project-item-status">
                    {isChecked ? (
                      <span className="checkmark" aria-label="Loaded">✓</span>
                    ) : (
                      <span className="pending-dot" aria-hidden="true" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Step 6: Experience */}
          <div className={`pipeline-line pipeline-subline ${step >= 6 ? 'visible' : ''}`}>
            <span className="pipeline-prompt">&gt;</span>
            <span className="pipeline-text">loading experience...</span>
            <span className="pipeline-check">✓</span>
          </div>

          {/* Step 7: Skills */}
          <div className={`pipeline-line pipeline-subline ${step >= 7 ? 'visible' : ''}`}>
            <span className="pipeline-prompt">&gt;</span>
            <span className="pipeline-text">loading skills...</span>
            <span className="pipeline-check">✓</span>
          </div>

          {/* Step 8: Interface */}
          <div className={`pipeline-line pipeline-subline ${step >= 8 ? 'visible' : ''}`}>
            <span className="pipeline-prompt">&gt;</span>
            <span className="pipeline-text">loading interface...</span>
            <span className="pipeline-check">✓</span>
          </div>

          {/* Step 9: Optimizing performance */}
          <div className={`pipeline-line pipeline-subline ${step >= 9 ? 'visible' : ''}`}>
            <span className="pipeline-prompt">&gt;</span>
            <span className="pipeline-text">optimizing performance...</span>
            <span className="pipeline-check">✓</span>
          </div>

          {/* Step 10: System Ready */}
          <div className={`pipeline-line pipeline-ready-line ${step >= 10 ? 'visible' : ''}`}>
            <span className="pipeline-prompt-ready">&gt;</span>
            <span className="pipeline-ready-text">system ready.</span>
            <span className="pipeline-blink-cursor" aria-hidden="true">_</span>
          </div>

          {/* Progress Bar & Numerical Counter */}
          <div className="pipeline-progress-section">
            <div className="pipeline-progress-track">
              <div 
                className="pipeline-progress-fill" 
                style={{ width: `${progress}%` }} 
                role="progressbar" 
                aria-valuenow={progress} 
                aria-valuemin="0" 
                aria-valuemax="100" 
              />
            </div>
            <div className="pipeline-progress-val">
              {progress}%
            </div>
          </div>

        </main>

        {/* Footer */}
        <footer className="preloader-footer">
          <div className="preloader-footer-quote">
            <span>Building useful software</span>
            <span className="quote-sub">for real-world problems.</span>
          </div>

          <div className="preloader-footer-stamp">
            <span className="stamp-logo">MK</span>
            <span className="stamp-line" aria-hidden="true" />
          </div>
        </footer>

      </div>
    </aside>
  );
}
