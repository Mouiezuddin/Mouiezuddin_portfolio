import { useState } from 'react'

export default function ArchitectureDiagram() {
  const [hoveredNode, setHoveredNode] = useState(null)
  const [selectedNode, setSelectedNode] = useState('django')
  const [flowSpeed, setFlowSpeed] = useState('normal') // normal, fast, paused

  const systemNodes = {
    react: {
      name: "React Client App",
      role: "Frontend SPA",
      tech: "React 19, Vite, Three.js",
      specs: [
        "Componentized SPA structure",
        "Interactive 3D WebGL Canvas overlays",
        "Responsive, state-driven UI nodes",
        "Client-side router & session storage"
      ]
    },
    nginx: {
      name: "Nginx Gateway",
      role: "Reverse Proxy & Load Balancer",
      tech: "Nginx, SSL/TLS, Rate Limiting",
      specs: [
        "Proxy requests to backend servers",
        "Terminates HTTPS (glowing TLS handshakes)",
        "Handles static asset cache headers",
        "Gzip & Brotli text compressions"
      ]
    },
    django: {
      name: "Django API Core",
      role: "Backend Web Service",
      tech: "Python 3.12, Django 5.0, DRF",
      specs: [
        "Granular Role-Based Access Controls (RBAC)",
        "Token-based JWT authentications",
        "SQL Query Prefetching & ORM index layers",
        "Secure POST/PUT request sanitization"
      ]
    },
    postgres: {
      name: "PostgreSQL DB",
      role: "Relational Storage",
      tech: "Postgres 16, SQL Indices, Normalization",
      specs: [
        "Optimized B-tree indices on foreign keys",
        "Strict database constraints (1NF to 3NF)",
        "Connection pooling to handle spikes",
        "Query execution plan analytics (EXPLAIN/ANALYZE)"
      ]
    },
    redis: {
      name: "Redis Cache Store",
      role: "In-Memory Database",
      tech: "Redis, Session Cache, Rate Counter",
      specs: [
        "Sub-millisecond read/write latency",
        "Key-value cache for hot endpoints",
        "Token blacklist cache storage",
        "API rate limit counter bucket"
      ]
    }
  }

  const handleNodeClick = (nodeKey) => {
    setSelectedNode(nodeKey)
  }

  const activeNodeInfo = systemNodes[selectedNode] || systemNodes.django

  // Dashoffset animations for flow speed
  const getDashAnimationClass = () => {
    if (flowSpeed === 'paused') return 'none'
    return flowSpeed === 'fast' ? 'dash-pulse 1s linear infinite' : 'dash-pulse 2.5s linear infinite'
  }

  return (
    <div className="glass-card" style={{ padding: '2rem', borderRadius: '12px', width: '100%', maxWidth: '850px', margin: '2rem auto', textAlign: 'left' }}>
      
      {/* Styles for dynamic SVG line flow */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dash-pulse {
          to {
            stroke-dashoffset: -20;
          }
        }
        .flow-line {
          stroke-dasharray: 6, 4;
          animation: ${getDashAnimationClass()};
        }
        .node-box {
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .node-box:hover {
          filter: brightness(1.2);
        }
      `}} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.07)', paddingBottom: '0.75rem' }}>
        <span className="mono-label" style={{ color: 'var(--primary)' }}>[ FULL_STACK_INFRASTRUCTURE ]</span>
        
        {/* Flow Speed Selectors */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>FLOW_SPEED:</span>
          {['paused', 'normal', 'fast'].map((speed) => (
            <button
              key={speed}
              onClick={() => setFlowSpeed(speed)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                padding: '0.15rem 0.4rem',
                background: flowSpeed === speed ? 'var(--primary)' : 'rgba(0,0,0,0.06)',
                color: flowSpeed === speed ? '#fff' : 'var(--text-muted)',
                border: '1px solid rgba(0,0,0,0.10)',
                borderRadius: '3px',
                cursor: 'pointer',
                textTransform: 'uppercase'
              }}
            >
              {speed}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
        
        {/* Left Side: SVG Network Architecture Diagram */}
        <div style={{ background: 'rgba(248, 247, 244, 0.8)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox="0 0 420 300" width="100%" height="260px">
            {/* Definitions for arrow marker */}
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#f5a623" />
              </marker>
              <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
              </marker>
            </defs>

            {/* Background connection paths */}
            {/* Client <-> Nginx */}
            <path d="M 70 150 L 150 150" stroke="#f5a623" strokeWidth="2" className="flow-line" markerEnd="url(#arrow)" fill="none" opacity="0.6" />
            {/* Nginx <-> Django */}
            <path d="M 210 150 L 270 150" stroke="#f5a623" strokeWidth="2" className="flow-line" markerEnd="url(#arrow)" fill="none" opacity="0.6" />
            {/* Django <-> Postgres */}
            <path d="M 330 150 L 370 150" stroke="#38bdf8" strokeWidth="2" className="flow-line" markerEnd="url(#arrow-blue)" fill="none" opacity="0.6" />
            {/* Django <-> Redis */}
            <path d="M 300 120 L 300 70" stroke="#38bdf8" strokeWidth="2" className="flow-line" markerEnd="url(#arrow-blue)" fill="none" opacity="0.6" />

            {/* React Node */}
            <g 
              className="node-box" 
              onClick={() => handleNodeClick('react')}
              onMouseEnter={() => setHoveredNode('react')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <rect x="10" y="120" width="60" height="60" rx="6" fill={selectedNode === 'react' ? 'rgba(3, 105, 161, 0.12)' : 'rgba(248, 250, 252, 0.9)'} stroke={selectedNode === 'react' ? 'var(--secondary)' : 'var(--border-color)'} strokeWidth="1.5" />
              <text x="40" y="145" textAnchor="middle" fill="var(--text-main)" fontSize="10" fontFamily="var(--font-mono)" fontWeight="bold">REACT</text>
              <text x="40" y="160" textAnchor="middle" fill="var(--text-muted)" fontSize="8" fontFamily="var(--font-mono)">CLIENT</text>
            </g>

            {/* Nginx Node */}
            <g 
              className="node-box" 
              onClick={() => handleNodeClick('nginx')}
              onMouseEnter={() => setHoveredNode('nginx')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <rect x="150" y="120" width="60" height="60" rx="6" fill={selectedNode === 'nginx' ? 'rgba(217, 119, 6, 0.12)' : 'rgba(248, 250, 252, 0.9)'} stroke={selectedNode === 'nginx' ? 'var(--primary)' : 'var(--border-color)'} strokeWidth="1.5" />
              <text x="180" y="145" textAnchor="middle" fill="var(--text-main)" fontSize="10" fontFamily="var(--font-mono)" fontWeight="bold">NGINX</text>
              <text x="180" y="160" textAnchor="middle" fill="var(--text-muted)" fontSize="8" fontFamily="var(--font-mono)">GATEWAY</text>
            </g>

            {/* Django API Server Node */}
            <g 
              className="node-box" 
              onClick={() => handleNodeClick('django')}
              onMouseEnter={() => setHoveredNode('django')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <rect x="270" y="120" width="60" height="60" rx="6" fill={selectedNode === 'django' ? 'rgba(217, 119, 6, 0.12)' : 'rgba(248, 250, 252, 0.9)'} stroke={selectedNode === 'django' ? 'var(--primary)' : 'var(--border-color)'} strokeWidth="1.5" />
              <text x="300" y="145" textAnchor="middle" fill="var(--text-main)" fontSize="10" fontFamily="var(--font-mono)" fontWeight="bold">DJANGO</text>
              <text x="300" y="160" textAnchor="middle" fill="var(--text-muted)" fontSize="8" fontFamily="var(--font-mono)">DRF_API</text>
            </g>

            {/* PostgreSQL DB Node */}
            <g 
              className="node-box" 
              onClick={() => handleNodeClick('postgres')}
              onMouseEnter={() => setHoveredNode('postgres')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <rect x="370" y="120" width="45" height="60" rx="6" fill={selectedNode === 'postgres' ? 'rgba(3, 105, 161, 0.12)' : 'rgba(248, 250, 252, 0.9)'} stroke={selectedNode === 'postgres' ? 'var(--secondary)' : 'var(--border-color)'} strokeWidth="1.5" />
              <text x="392.5" y="145" textAnchor="middle" fill="var(--text-main)" fontSize="10" fontFamily="var(--font-mono)" fontWeight="bold">POSTGRES</text>
              <text x="392.5" y="160" textAnchor="middle" fill="var(--text-muted)" fontSize="8" fontFamily="var(--font-mono)">RDBMS</text>
            </g>

            {/* Redis Cache Node */}
            <g 
              className="node-box" 
              onClick={() => handleNodeClick('redis')}
              onMouseEnter={() => setHoveredNode('redis')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <rect x="270" y="10" width="60" height="60" rx="6" fill={selectedNode === 'redis' ? 'rgba(3, 105, 161, 0.12)' : 'rgba(248, 250, 252, 0.9)'} stroke={selectedNode === 'redis' ? 'var(--secondary)' : 'var(--border-color)'} strokeWidth="1.5" />
              <text x="300" y="35" textAnchor="middle" fill="var(--text-main)" fontSize="10" fontFamily="var(--font-mono)" fontWeight="bold">REDIS</text>
              <text x="300" y="50" textAnchor="middle" fill="var(--text-muted)" fontSize="8" fontFamily="var(--font-mono)">CACHE</text>
            </g>
          </svg>
        </div>

        {/* Right Side: Glassmorphic Details Pane */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.75)', 
          backdropFilter: 'blur(16px)', 
          border: '1px solid var(--border-color)', 
          borderRadius: '8px', 
          padding: '1.5rem', 
          boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.9), 0 4px 15px rgba(0,0,0,0.07)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '260px'
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', borderBottom: '1px solid rgba(0,0,0,0.07)', paddingBottom: '0.5rem' }}>
              <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem', margin: 0, fontFamily: 'var(--font-mono)' }}>{activeNodeInfo.name}</h4>
              <span className="mono-label" style={{ color: 'var(--secondary)', fontSize: '0.65rem' }}>{activeNodeInfo.role}</span>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-dark)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '0.2rem' }}>TECHNOLOGY_USED</span>
              <code style={{ fontSize: '0.75rem', color: 'var(--primary)', fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}>{activeNodeInfo.tech}</code>
            </div>

            <div>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-dark)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '0.5rem' }}>ENGINEERING_SPECS</span>
              <ul style={{ paddingLeft: '1rem', margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {activeNodeInfo.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ marginTop: '1rem', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dark)', borderTop: '1px solid rgba(0,0,0,0.07)', paddingTop: '0.5rem' }}>
            STATUS: [ ONLINE ] // CLICK ON OTHER DIAGRAM NODES TO INSPECT
          </div>
        </div>

      </div>

    </div>
  )
}
