import React from 'react';
import ChatBox from './ChatBox';
import HistoryPage from '../history/HistoryPage';

export default function StudentDashboard({ onLogout }) {
  return (
    <div style={{ padding: '20px', maxWidth: '1100px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      {/* Top Header Section */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', borderBottom: '2px solid #cbd5e1', paddingBottom: '15px' }}>
        <div>
          <h1 aria-live="polite" style={{ fontSize: '24px', color: '#1e293b', margin: '0 0 5px 0' }}>
            📬 Teammate Core Portal
          </h1>
          <span style={{ fontSize: '14px', color: '#64748b', fontWeight: 'bold' }}>Allotted Features Active</span>
        </div>
        <button 
          onClick={onLogout} 
          aria-label="Log out from assistant"
          style={{ padding: '10px 20px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Logout
        </button>
      </header>
      
      {/* Main Workspace Grid - Splits into AI Tools & Library Viewer */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        {/* SECTION 1: Your AI Tools Feature */}
        <section style={{ background: '#f8fafc', padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <ChatBox />
        </section>

        {/* SECTION 2: Your Library & Document Viewer Feature */}
        <section style={{ background: '#fff', padding: '15px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
          <HistoryPage />
        </section>

      </div>
    </div>
  );
}
