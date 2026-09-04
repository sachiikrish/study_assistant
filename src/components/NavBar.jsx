// src/components/NavBar.jsx
// ============================================
// NAVIGATION BAR
// Shows page-switching menu once the user is logged in.
// Uses the same currentView pattern as App.jsx (no router).
// ============================================

export default function NavBar({ currentView, setCurrentView, onLogout }) {
  // Each nav item: what view it switches to, and its label
  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'ocr', label: 'OCR Upload' },      // TODO: connect once OCR page exists
    { id: 'history', label: 'History' },
    { id: 'settings', label: 'Settings' },
    { id: 'profile', label: 'Profile' },
  ];

  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '20px',
        padding: '12px 20px',
        borderBottom: '1px solid #e2e8f0',
        marginBottom: '20px',
      }}
    >
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            style={{
              padding: '8px 14px',
              borderRadius: '6px',
              border: '1px solid #cbd5e1',
              background: currentView === item.id ? '#2563eb' : '#fff',
              color: currentView === item.id ? '#fff' : '#1e293b',
              fontWeight: currentView === item.id ? 'bold' : 'normal',
              cursor: 'pointer',
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      <button
        onClick={onLogout}
        style={{
          padding: '8px 14px',
          borderRadius: '6px',
          border: '1px solid #ef4444',
          background: '#fff',
          color: '#ef4444',
          cursor: 'pointer',
        }}
      >
        Logout
      </button>
    </nav>
  );
}