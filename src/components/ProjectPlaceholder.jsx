/**
 * ProjectPlaceholder Component
 * Provides clean, technical schematic wireframe mockups for projects
 * where raw production screenshots do not exist (e.g. LMS, VehicleAssist).
 * Does NOT invent fake marketing screenshots; renders a clean architectural interface blueprint.
 */

export default function ProjectPlaceholder({ type, title }) {
  if (type === 'lms') {
    return (
      <div className="schematic-placeholder lms-schematic" role="img" aria-label={`Schematic interface wireframe for ${title}`}>
        <div className="schematic-header">
          <div className="schematic-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="schematic-url">app.lms-platform.internal/workspace/curriculum</div>
          <div className="schematic-tag">ROLE: STUDENT / EDUCATOR</div>
        </div>
        <div className="schematic-body">
          <div className="schematic-sidebar">
            <div className="schematic-nav-item active">Curriculum Overview</div>
            <div className="schematic-nav-item">Coding Sandbox</div>
            <div className="schematic-nav-item">AI Revision Companion</div>
            <div className="schematic-nav-item">Progress Analytics</div>
            <div className="schematic-nav-item muted">Mock Interviews (Planned)</div>
          </div>
          <div className="schematic-content">
            <div className="schematic-row">
              <div className="schematic-card wide">
                <div className="schematic-title">Interactive Module 04: Relational DB Indexing & ORM Latency</div>
                <div className="schematic-progress-bar"><div className="schematic-progress-fill" style={{ width: '68%' }} /></div>
              </div>
            </div>
            <div className="schematic-columns">
              <div className="schematic-code-panel">
                <div className="schematic-panel-header">Code Execution Sandbox [Python 3.11]</div>
                <pre className="schematic-code">
{`# Django Query Optimization Benchmark
from django.db import transaction

@transaction.atomic
def process_batch(items):
    return Ledger.objects.filter(
        customer_id=102
    ).select_related('customer')`}
                </pre>
              </div>
              <div className="schematic-ai-panel">
                <div className="schematic-panel-header">AI Study Assistant Prompt</div>
                <div className="schematic-ai-chat">
                  <div className="schematic-bubble user">Explain B-Tree composite indexing</div>
                  <div className="schematic-bubble ai">Composite indexes on (customer_id, created_at) allow PostgreSQL to perform index scans without sorting.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'dispatch') {
    return (
      <div className="schematic-placeholder dispatch-schematic" role="img" aria-label={`Schematic dispatch wireframe for ${title}`}>
        <div className="schematic-header">
          <div className="schematic-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="schematic-url">dispatch.vehicleassist.internal/geospatial/map</div>
          <div className="schematic-tag">STATUS: MVP PROTOTYPE</div>
        </div>
        <div className="schematic-body">
          <div className="schematic-map-panel">
            <div className="schematic-map-grid">
              <div className="map-radar-circle" />
              <div className="map-pin customer" style={{ top: '48%', left: '42%' }}>
                <span className="pin-pulse" />
                <span className="pin-label">Incident: Dead Battery (15.8497° N, 74.4977° E)</span>
              </div>
              <div className="map-pin provider" style={{ top: '35%', left: '60%' }}>
                <span className="pin-label">Assigned Mechanic (2.4 km away)</span>
              </div>
            </div>
            <div className="schematic-dispatch-overlay">
              <div className="dispatch-status-badge">STATE: EN_ROUTE</div>
              <div className="dispatch-metrics">
                <span>EST: 8 mins</span> · <span>Vehicle: Flatbed / Jumper</span> · <span>Auth: httpOnly JWT + CSRF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="schematic-placeholder default-schematic" role="img" aria-label={`Architectural diagram for ${title}`}>
      <div className="schematic-header">
        <div className="schematic-dots">
          <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
        </div>
        <div className="schematic-url">system.architecture/{title.toLowerCase().replace(/\s+/g, '-')}</div>
      </div>
      <div className="schematic-body default-body">
        <div className="schematic-node">Client (React SPA)</div>
        <div className="schematic-arrow">⟶ [JWT / REST API] ⟶</div>
        <div className="schematic-node">Service (Django / DRF)</div>
        <div className="schematic-arrow">⟶ [ACID Transaction] ⟶</div>
        <div className="schematic-node">Storage (PostgreSQL)</div>
      </div>
    </div>
  );
}
