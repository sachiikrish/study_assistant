import React, { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light'); // light, dark, high-contrast

  useEffect(() => {
    document.body.className = theme;
    // Visually announce theme switches to screen readers
    const announcement = document.getElementById('theme-announcer');
    if (announcement) {
      announcement.textContent = `Theme changed to ${theme} mode`;
    }
  }, [theme]);

  return (
    <div style={{ padding: '15px', background: '#f3f4f6', borderRadius: '8px', margin: '20px auto', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <span id="theme-label" style={{ fontWeight: 'bold', color: '#000' }}>Choose Display & Accessibility Mode:</span>
      
      {/* Hidden announcer for screen reader feedback */}
      <div id="theme-announcer" aria-live="assertive" style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: '0' }}></div>

      <div style={{ display: 'flex', gap: '10px' }} role="group" aria-labelledby="theme-label">
        <button 
          onClick={() => setTheme('light')}
          aria-pressed={theme === 'light'}
          style={{ padding: '8px 12px', cursor: 'pointer', border: theme === 'light' ? '2px solid black' : '1px solid gray' }}
        >
          Normal Light
        </button>
        <button 
          onClick={() => setTheme('dark')}
          aria-pressed={theme === 'dark'}
          style={{ padding: '8px 12px', cursor: 'pointer', background: '#1e293b', color: '#fff', border: theme === 'dark' ? '2px solid white' : '1px solid gray' }}
        >
          Dark Mode
        </button>
        <button 
          onClick={() => setTheme('high-contrast')}
          aria-pressed={theme === 'high-contrast'}
          aria-label="High Contrast Mode for visually impaired users"
          style={{ padding: '8px 12px', cursor: 'pointer', background: '#000', color: '#ffff00', border: theme === 'high-contrast' ? '3px solid #ffff00' : '1px solid gray', fontWeight: 'bold' }}
        >
          High Contrast (Blind/Low Vision)
        </button>
      </div>
    </div>
  );
}
