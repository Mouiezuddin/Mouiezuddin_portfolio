import { useState } from 'react';

const TABS = [
  {
    id: 'ledger',
    label: 'HisabPoint API',
    method: 'POST',
    path: '/api/v1/ledger/entry/',
    status: '201 Created',
    latency: '142ms',
    code: `{
  "transaction_id": "tx_9041a",
  "customer": "Ramesh Kirana Store",
  "type": "CREDIT_PURCHASE",
  "amount": 1450.00,
  "balance_due": 3200.00,
  "database": "PostgreSQL",
  "atomic_lock": true,
  "status": "committed"
}`
  },
  {
    id: 'stock',
    label: 'Royal Enterprises ERP',
    method: 'POST',
    path: '/api/v1/billing/sale/',
    status: '200 OK',
    latency: '168ms',
    code: `{
  "invoice_id": "INV-2026-0842",
  "product": "Okaya 150AH Tubular Battery",
  "unit_price": 12500.00,
  "scrap_battery_allowance": -2200.00,
  "net_payable": 10300.00,
  "stock_inventory": "updated",
  "whatsapp_receipt": "dispatched"
}`
  },
  {
    id: 'profile',
    label: 'System Profile',
    method: 'GET',
    path: '/api/v1/engineer/spec/',
    status: '200 OK',
    latency: '45ms',
    code: `{
  "engineer": "Mouiezuddin Killedar",
  "role": "Junior Full-Stack Python Developer",
  "backend": ["Python", "Django", "DRF", "Flask"],
  "frontend": ["React.js", "JavaScript", "Bootstrap"],
  "databases": ["PostgreSQL", "MySQL", "SQLite"],
  "education": "BCA (8.5/10 GPA Coursework)",
  "status": "Available Immediately"
}`
  }
];

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState('ledger');
  const [copied, setCopied] = useState(false);

  const currentTab = TABS.find((t) => t.id === activeTab) || TABS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTab.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="hero-visual-card" aria-label="Interactive Developer Console">
      {/* Console Header Bar */}
      <div className="console-header-bar">
        <div className="console-window-dots" aria-hidden="true">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>

        {/* Tab Switcher */}
        <div className="console-tabs-list" role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`console-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="console-copy-btn"
          title="Copy JSON Payload"
          aria-label="Copy payload"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>

      {/* Endpoint Path & Status Ribbon */}
      <div className="console-sub-bar">
        <div className="console-request-meta">
          <span className={`method-pill method-${currentTab.method.toLowerCase()}`}>
            {currentTab.method}
          </span>
          <span className="request-path">{currentTab.path}</span>
        </div>
        <div className="console-response-meta">
          <span className="status-badge-ok">{currentTab.status}</span>
          <span className="latency-badge">{currentTab.latency}</span>
        </div>
      </div>

      {/* JSON Code Viewer */}
      <div className="console-body">
        <pre className="console-code-block">
          <code>{currentTab.code}</code>
        </pre>
      </div>

      {/* Footer Info Strip */}
      <div className="console-footer-strip">
        <span className="console-indicator">
          <span className="pulse-dot" />
          PostgreSQL Atomic Transactions &amp; REST Serializers Verified
        </span>
      </div>
    </div>
  );
}

