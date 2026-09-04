// src/pages/dashboard/StudentDashboard.jsx
// ============================================
// STUDENT DASHBOARD
// Overview screen shown right after login.
// Shows quick stats, shortcuts to other pages,
// and the AI Tools panel (Summarizer/Quiz).
//
// NOTE: The full Document Library + Viewer lives
// on its own page (the "History" nav button), so
// this page just links to it instead of repeating it.
// ============================================

import React from 'react';
import ChatBox from './ChatBox';

export default function StudentDashboard({ setCurrentView }) {
  // Mock stats - stands in for real counts once a backend exists
  const stats = [
    { label: 'Documents saved', value: 3 },
    { label: 'Quizzes attempted', value: 1 },
    { label: 'Notes converted', value: 0 },
  ];

  // Quick-access shortcuts, shown as a compact list rather than big cards
  const quickLinks = [
    { id: 'history', label: 'Open Document Library' },
    { id: 'ocr', label: 'OCR Upload' },
    { id: 'settings', label: 'Adjust Accessibility Settings' },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>

      {/* ---------- Header row: title + stats side by side ---------- */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '24px',
          paddingBottom: '20px',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        <div>
          <h1 style={{ fontSize: '22px', margin: '0 0 4px 0', color: '#1e293b' }}>Your Workspace</h1>
          <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
            A quick snapshot of your study activity.
          </p>
        </div>

        {/* Stats laid out as plain numbers, not cards - avoids the generic "icon in a box" look */}
        <div style={{ display: 'flex', gap: '28px' }}>
          {stats.map((stat) => (
            <div key={stat.label} style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2563eb' }}>{stat.value}</div>
              <div style={{ fontSize: '11px', color: '#94a3b8', whiteSpace: 'nowrap' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- Two-column layout: shortcuts list (left) + AI Tools (right) ---------- */}
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>

        {/* Left: shortcuts as a simple list, not oversized icon cards */}
        <div style={{ flex: '1', minWidth: '220px' }}>
          <h2 style={{ fontSize: '13px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
            Quick Actions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {quickLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => setCurrentView(link.id)}
                style={{
                  textAlign: 'left',
                  padding: '14px 4px',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: index < quickLinks.length - 1 ? '1px solid #f1f5f9' : 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  color: '#1e293b',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {link.label}
                <span style={{ color: '#94a3b8' }}>&rarr;</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: AI Tools panel */}
        <div style={{ flex: '2', minWidth: '300px' }}>
          <h2 style={{ fontSize: '13px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
            AI Tools
          </h2>
          <div style={{ background: '#f8fafc', padding: '18px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  );
}