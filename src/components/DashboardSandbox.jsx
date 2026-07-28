import { useState } from 'react'

export default function DashboardSandbox() {
  const [endpoint, setEndpoint] = useState('/api/v1/profile')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [latency, setLatency] = useState(null)
  const [responseMeta, setResponseMeta] = useState(null)

  const mockPayloads = {
    '/api/v1/profile': {
      data: {
        name: "Mouiezuddin Killedar",
        title: "Full Stack Python Developer | Django | Flask | React JS | REST API | AI Integration",
        location: "Bijapur, Karnataka, India",
        contact: "+91 8867555660 | killedarmouiezuddin@gmail.com",
        education: "BCA (GPA: 8.5 / 10.0) — Kumudben Darbar College",
        systems_status: "ACTIVE_FOR_SOFTWARE_ENGINEER_ROLES",
        active_channels: ["WhatsApp", "Gmail", "GitHub", "LinkedIn"]
      },
      latencyRange: [15, 30],
      kbSize: 0.52
    },
    '/api/v1/competencies': {
      data: {
        backend_architecture: ["Python", "Django 5.0", "Flask", "Django REST Framework (DRF)", "PostgreSQL", "MySQL", "SQLite", "JWT Auth", "RBAC", "OAuth2"],
        frontend_ui: ["React 19", "Vite 6", "Tailwind CSS", "Bootstrap 5", "JavaScript (ES6+)", "HTML5 / CSS3", "PWA Workbox"],
        ai_ml_integration: ["scikit-learn", "Generative AI", "AI API Integration", "Data Analytics"],
        devops_infrastructure: ["Docker", "Git & GitHub", "GitHub Actions CI/CD", "Render", "Netlify", "Postman", "Pytest (TDD)"]
      },
      latencyRange: [25, 45],
      kbSize: 0.95
    },
    '/api/v1/projects': {
      data: {
        total_projects: 1,
        deployed_systems: [
          { name: "Royal Enterprises — Battery & Lighting Stock Management System", tech: "React 19, Vite 6, Tailwind CSS, Django 5.0, DRF, SimpleJWT, PostgreSQL", status: "LIVE", live_url: "https://royalenterprise.netlify.app/" }
        ]
      },
      latencyRange: [15, 30],
      kbSize: 0.65
    },
    '/api/v1/metrics': {
      data: {
        performance_stats: {
          deployed_production_applications: 8,
          average_api_response_latency_reduction: "75% (800ms -> 200ms)",
          database_search_latency_reduction: "88% (2.5s -> 0.3s)",
          monthly_active_users_served: "2000+",
          operational_uptime_achieved: "99.5%"
        }
      },
      latencyRange: [10, 20],
      kbSize: 0.38
    }
  }

  const handleSendRequest = () => {
    setLoading(true)
    setResponse(null)
    setLatency(null)
    setResponseMeta(null)

    // Simulate network delay
    const payload = mockPayloads[endpoint]
    const minLat = payload.latencyRange[0]
    const maxLat = payload.latencyRange[1]
    const simulatedLatency = Math.floor(Math.random() * (maxLat - minLat + 1)) + minLat

    setTimeout(() => {
      setResponse(payload.data)
      setLatency(simulatedLatency)
      setResponseMeta({
        status: 200,
        statusText: "OK",
        size: `${payload.kbSize} KB`,
        contentType: "application/json"
      })
      setLoading(false)
    }, 600)
  }

  return (
    <div className="glass-card" style={{ padding: '2rem', borderRadius: '12px', width: '100%', maxWidth: '850px', margin: '2rem auto', textAlign: 'left' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.75rem' }}>
        <span className="mono-label" style={{ color: 'var(--primary)' }}>[ REST_API_SANDBOX_CONSOLES ]</span>
        <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>QUERY REST API SERVICES</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        {/* URL Bar Controls */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <div style={{ 
            display: 'flex', 
            flexGrow: 1, 
            alignItems: 'center', 
            background: 'rgba(1, 4, 10, 0.9)', 
            border: '1px solid var(--border-color)', 
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <span style={{ 
              backgroundColor: 'rgba(16, 185, 129, 0.1)', 
              color: '#10b981', 
              fontSize: '0.75rem', 
              fontWeight: 'bold', 
              padding: '0.75rem 1rem', 
              fontFamily: 'var(--font-mono)',
              borderRight: '1px solid var(--border-color)' 
            }}>
              GET
            </span>
            
            <select 
              value={endpoint} 
              onChange={(e) => setEndpoint(e.target.value)}
              style={{ 
                flexGrow: 1, 
                background: 'transparent', 
                border: 'none', 
                color: 'var(--text-main)', 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.85rem', 
                padding: '0.75rem 1rem',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="/api/v1/profile" style={{ backgroundColor: '#02070d' }}>/api/v1/profile</option>
              <option value="/api/v1/competencies" style={{ backgroundColor: '#02070d' }}>/api/v1/competencies</option>
              <option value="/api/v1/projects" style={{ backgroundColor: '#02070d' }}>/api/v1/projects</option>
              <option value="/api/v1/metrics" style={{ backgroundColor: '#02070d' }}>/api/v1/metrics</option>
            </select>
          </div>

          <button 
            className="btn" 
            onClick={handleSendRequest}
            disabled={loading}
            style={{ 
              padding: '0.75rem 1.75rem', 
              fontSize: '0.8rem',
              backgroundColor: 'linear-gradient(180deg, var(--primary) 0%, rgba(100, 210, 195, 0.9) 100%)',
              color: loading ? 'var(--text-muted)' : 'inherit'
            }}
          >
            {loading ? 'SENDING...' : 'RUN_QUERY'}
          </button>
        </div>

        {/* Sandbox Output Area */}
        <div style={{ 
          background: '#02060c', 
          border: '1px solid rgba(129, 230, 217, 0.1)', 
          borderRadius: '6px', 
          overflow: 'hidden', 
          minHeight: '220px',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Header Console Meta */}
          <div style={{ 
            background: 'rgba(20, 35, 55, 0.4)', 
            padding: '0.6rem 1.2rem', 
            borderBottom: '1px solid rgba(129, 230, 217, 0.08)',
            display: 'flex', 
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)'
          }}>
            <div>RESPONSE_HEADERS</div>
            {responseMeta && (
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span>STATUS: <b style={{ color: '#10b981' }}>{responseMeta.status} {responseMeta.statusText}</b></span>
                <span>LATENCY: <b style={{ color: 'var(--secondary)' }}>{latency} ms</b></span>
                <span>SIZE: <b>{responseMeta.size}</b></span>
              </div>
            )}
          </div>

          {/* Console Body JSON */}
          <div style={{ padding: '1.25rem', overflowY: 'auto', flexGrow: 1, fontFamily: 'var(--font-mono)', fontSize: '0.8rem', lineHeight: '1.6' }}>
            {loading && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '150px', gap: '0.75rem' }}>
                <span className="blink" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>&gt; TRANSMITTING DATA PAYLOAD...</span>
                <div style={{ width: '30px', height: '30px', border: '3px solid rgba(245,166,35,0.1)', borderTopColor: 'var(--primary)', borderRadius: '50%', animation: 'float-animation 1s linear infinite' }} />
              </div>
            )}

            {!loading && !response && (
              <div style={{ color: 'var(--text-dark)', padding: '2rem 0', textAlign: 'center' }}>
                &gt; SELECT AN ENDPOINT FROM THE URL DROP-DOWN BAR AND CLICK "RUN_QUERY" TO SIMULATE AN API CALL.
              </div>
            )}

            {!loading && response && (
              <pre style={{ margin: 0, color: 'var(--text-main)', textAlign: 'left', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                <code>{JSON.stringify(response, null, 2)}</code>
              </pre>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
