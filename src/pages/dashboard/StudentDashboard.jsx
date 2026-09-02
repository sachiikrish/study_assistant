import React from 'react';

export default function StudentDashboard({ onLogout }) {
  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '2px solid #cbd5e1', paddingBottom: '10px' }}>
        <h1 aria-live="polite" style={{ fontSize: '26px', color: '#1e293b' }}>Student Study Dashboard</h1>
        <button 
          onClick={onLogout} 
          aria-label="Log out from assistant"
          style={{ padding: '8px 16px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Logout
        </button>
      </header>
      
      <main style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <p style={{ fontSize: '18px', color: '#475569' }}>Welcome! This is where your friend will build the AI ChatBox and PDF Uploader components.</p>
      </main>
    </div>
  );
}
