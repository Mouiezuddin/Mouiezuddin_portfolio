import { useEffect } from 'react'

export const THEMES = {
  amber: {
    name: 'AMBER_GOLD',
    swatch: '#d97706',
    vars: {
      '--primary': '#d97706',
      '--primary-glow': 'rgba(217, 119, 6, 0.25)',
      '--secondary': '#0369a1',
      '--secondary-glow': 'rgba(3, 105, 161, 0.20)',
      '--border-color': 'rgba(180, 130, 30, 0.22)',
      '--border-hover': 'rgba(180, 130, 30, 0.50)',
      '--bg-dots': 'rgba(180, 130, 30, 0.08)',
      '--card-bg': 'rgba(255, 255, 255, 0.80)',
      '--text-main': '#111827',
      '--text-muted': '#374151',
      '--text-dark': '#6b7280',
    },
    colors: { primary: '#d97706', secondary: '#0369a1', muted: '#64748b' }
  },
  forest: {
    name: 'FOREST_GREEN',
    swatch: '#16a34a',
    vars: {
      '--primary': '#16a34a',
      '--primary-glow': 'rgba(22, 163, 74, 0.25)',
      '--secondary': '#0891b2',
      '--secondary-glow': 'rgba(8, 145, 178, 0.20)',
      '--border-color': 'rgba(22, 163, 74, 0.22)',
      '--border-hover': 'rgba(22, 163, 74, 0.45)',
      '--bg-dots': 'rgba(22, 163, 74, 0.06)',
      '--card-bg': 'rgba(255, 255, 255, 0.80)',
      '--text-main': '#111827',
      '--text-muted': '#374151',
      '--text-dark': '#6b7280',
    },
    colors: { primary: '#16a34a', secondary: '#0891b2', muted: '#64748b' }
  },
  violet: {
    name: 'VIOLET_INK',
    swatch: '#7c3aed',
    vars: {
      '--primary': '#7c3aed',
      '--primary-glow': 'rgba(124, 58, 237, 0.25)',
      '--secondary': '#db2777',
      '--secondary-glow': 'rgba(219, 39, 119, 0.20)',
      '--border-color': 'rgba(124, 58, 237, 0.20)',
      '--border-hover': 'rgba(124, 58, 237, 0.45)',
      '--bg-dots': 'rgba(124, 58, 237, 0.06)',
      '--card-bg': 'rgba(255, 255, 255, 0.80)',
      '--text-main': '#111827',
      '--text-muted': '#374151',
      '--text-dark': '#6b7280',
    },
    colors: { primary: '#7c3aed', secondary: '#db2777', muted: '#64748b' }
  },
  ocean: {
    name: 'OCEAN_BLUE',
    swatch: '#0284c7',
    vars: {
      '--primary': '#0284c7',
      '--primary-glow': 'rgba(2, 132, 199, 0.25)',
      '--secondary': '#0d9488',
      '--secondary-glow': 'rgba(13, 148, 136, 0.20)',
      '--border-color': 'rgba(2, 132, 199, 0.20)',
      '--border-hover': 'rgba(2, 132, 199, 0.45)',
      '--bg-dots': 'rgba(2, 132, 199, 0.06)',
      '--card-bg': 'rgba(255, 255, 255, 0.80)',
      '--text-main': '#111827',
      '--text-muted': '#374151',
      '--text-dark': '#6b7280',
    },
    colors: { primary: '#0284c7', secondary: '#0d9488', muted: '#64748b' }
  }
}

export default function ThemeSwitcher({ activeTheme, onThemeChange }) {
  // Apply CSS variables to document root on every theme change
  useEffect(() => {
    const theme = THEMES[activeTheme]
    if (!theme) return
    const root = document.documentElement
    Object.entries(theme.vars).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })
  }, [activeTheme])

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .theme-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid transparent;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        .theme-btn:hover {
          transform: scale(1.2);
          box-shadow: 0 0 12px currentColor;
        }
        .theme-btn.active {
          border-color: rgba(255,255,255,0.8);
          transform: scale(1.15);
          box-shadow: 0 0 14px currentColor;
        }
        .theme-btn.active::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.3);
        }
        .switcher-panel {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255, 255, 255, 0.80);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 50px;
          padding: 1rem 0.65rem;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.95),
            0 8px 32px rgba(0,0,0,0.12),
            0 0 1px rgba(0,0,0,0.06);
        }
        .switcher-label {
          font-family: var(--font-mono);
          font-size: 0.5rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.30);
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          margin-top: 0.4rem;
          user-select: none;
        }
      `}} />

      <div className="switcher-panel" title="HUD_THEME_SELECTOR">
        {Object.entries(THEMES).map(([key, theme]) => (
          <button
            key={key}
            className={`theme-btn ${activeTheme === key ? 'active' : ''}`}
            style={{ 
              backgroundColor: theme.swatch,
              color: theme.swatch,
            }}
            onClick={() => onThemeChange(key)}
            title={theme.name}
          />
        ))}
        <span className="switcher-label">HUD_THEME</span>
      </div>
    </>
  )
}
