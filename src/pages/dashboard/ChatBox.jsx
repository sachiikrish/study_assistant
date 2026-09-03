import React, { useState } from 'react';

export default function ChatBox() {
  const [complexity, setComplexity] = useState('normal');
  const [activeTab, setActiveTab] = useState('summary');

  const summaryData = {
    normal: "Photosynthesis is the biochemical process by which green plants convert light energy into chemical energy using carbon dioxide and water to release oxygen.",
    simpler: "Photosynthesis is how plants use sunlight, water, and air to create food for themselves and release fresh oxygen for us to breathe.",
    simplest: "Plants eat sunlight and water to grow! They make clean air for us."
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '20px auto', fontFamily: 'system-ui, sans-serif', background: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
      
      {/* Shiny & Glow Effect Brand Header */}
      <h2 style={{ fontSize: '24px', color: '#0f172a', marginBottom: '20px', textAlign: 'center', fontWeight: '800' }}>
        ⚡ <span style={{ background: 'linear-gradient(to right, #0070f3, #7928ca)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Stride AI Engine</span>
      </h2>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={() => setActiveTab('summary')} style={{ flex: 1, padding: '10px', cursor: 'pointer', fontWeight: 'bold', backgroundColor: activeTab === 'summary' ? '#0070f3' : '#f1f5f9', color: activeTab === 'summary' ? '#fff' : '#475569', border: 'none', borderRadius: '6px' }}>Summarizer</button>
        <button onClick={() => setActiveTab('quiz')} style={{ flex: 1, padding: '10px', cursor: 'pointer', fontWeight: 'bold', backgroundColor: activeTab === 'quiz' ? '#0070f3' : '#f1f5f9', color: activeTab === 'quiz' ? '#fff' : '#475569', border: 'none', borderRadius: '6px' }}>Practice Quiz</button>
      </div>

      {activeTab === 'summary' && (
        <div>
          <div style={{ marginBottom: '15px', background: '#f8fafc', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>Adjustment Tool: Explain Simpler ({complexity.toUpperCase()})</label>
            <input type="range" min="1" max="3" step="1" value={complexity === 'normal' ? 1 : complexity === 'simpler' ? 2 : 3} onChange={(e) => {
              const val = parseInt(e.target.value);
              if (val === 1) setComplexity('normal');
              if (val === 2) setComplexity('simpler');
              if (val === 3) setComplexity('simplest');
            }} style={{ width: '100%', cursor: 'pointer' }} />
          </div>
          <div style={{ padding: '15px', background: '#f0fdf4', borderRadius: '4px', borderLeft: '4px solid #22c55e' }}>
            <p style={{ margin: 0, fontSize: '15px', color: '#1e293b' }}>{summaryData[complexity]}</p>
          </div>
        </div>
      )}

      {activeTab === 'quiz' && (
        <div style={{ padding: '15px', background: '#fffbeb', borderRadius: '6px', border: '1px solid #fef3c7' }}>
          <p style={{ fontWeight: 'bold' }}>Q: What is the main source of energy for photosynthesis?</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
            <button onClick={() => alert("Correct Answer!")} style={{ padding: '10px', textAlign: 'left', cursor: 'pointer', borderRadius: '4px', border: '1px solid #cbd5e1', backgroundColor: '#fff' }}>A) The Sun ☀️</button>
            <button onClick={() => alert("Try again!")} style={{ padding: '10px', textAlign: 'left', cursor: 'pointer', borderRadius: '4px', border: '1px solid #cbd5e1', backgroundColor: '#fff' }}>B) Water 💧</button>
          </div>
        </div>
      )}
    </div>
  );
}
