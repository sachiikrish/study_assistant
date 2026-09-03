import React, { useState } from 'react';

export default function HistoryPage() {
  const documents = [
    { id: 1, title: 'Biology Chapter 3 Notes.pdf', subject: 'Biology', content: 'Cell Structure: The cell is the basic structural, functional, and biological unit of all known organisms. Cells are the smallest units of life.' },
    { id: 2, title: 'Organic Chemistry Formulas.docx', subject: 'Chemistry', content: 'Alkanes formula: CnH2n+2. Alkenes formula: CnH2n. Functional groups determine chemical properties.' },
    { id: 3, title: 'Calculus Integration Doubts.txt', subject: 'Mathematics', content: 'Integration is the act of bringing together smaller components into a single system. In calculus, it finds the area under curves.' },
  ];

  const [selectedDoc, setSelectedDoc] = useState(documents[0]);
  const [zoomLevel, setZoomLevel] = useState(16);

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px', fontFamily: 'sans-serif', minHeight: '70vh' }}>
      
      {/* FEATURE: Library (Left Side) */}
      <div style={{ flex: '1', borderRight: '1px solid #cbd5e1', paddingRight: '20px' }}>
        <h2 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '15px' }}>📚 Your Document Library</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {documents.map((doc) => (
            <button
              key={doc.id}
              onClick={() => setSelectedDoc(doc)}
              style={{
                width: '100%', padding: '12px', textAlign: 'left', borderRadius: '8px', cursor: 'pointer',
                border: selectedDoc.id === doc.id ? '2px solid #0070f3' : '1px solid #cbd5e1',
                backgroundColor: selectedDoc.id === doc.id ? '#eff6ff' : '#fff'
              }}
            >
              <strong style={{ display: 'block', color: '#334155' }}>{doc.title}</strong>
              <span style={{ fontSize: '12px', color: '#64748b' }}>Subject: {doc.subject}</span>
            </button>
          ))}
        </div>
      </div>

      {/* FEATURE: Document Viewer (Right Side) */}
      <div style={{ flex: '2', paddingLeft: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h2 style={{ fontSize: '18px', color: '#1e293b', margin: 0 }}>📖 Document Viewer</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button onClick={() => setZoomLevel(prev => Math.max(12, prev - 2))} style={{ padding: '4px 10px', cursor: 'pointer' }}>Text A-</button>
            <button onClick={() => setZoomLevel(prev => Math.min(26, prev + 2))} style={{ padding: '4px 10px', cursor: 'pointer' }}>Text A+</button>
          </div>
        </div>

        <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '250px' }}>
          <h3 style={{ marginTop: '0', color: '#0070f3' }}>{selectedDoc.title}</h3>
          <p style={{ fontSize: `${zoomLevel}px`, lineHeight: '1.6', color: '#334155' }}>{selectedDoc.content}</p>
        </div>
      </div>

    </div>
  );
}
