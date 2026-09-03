import React, { useState } from 'react';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [fontSize, setFontSize] = useState('normal');
  const [initialTheme, setInitialTheme] = useState('light');
  const [ttsSpeed, setTtsSpeed] = useState('1');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long!');
      return;
    }
    setErrorMessage('');
    alert(`Account created successfully for ${name} with customized preferences!`);
  };

  return (
    <div style={{ padding: '20px', width: '100%', maxWidth: '400px', margin: '0 auto', fontFamily: 'system-ui, sans-serif', boxSizing: 'border-box' }}>
      {/* Attractive Sign Up Title */}
      <h2 style={{ fontSize: '32px', marginBottom: '25px', textAlign: 'center', fontWeight: '800', letterSpacing: '-0.8px', color: '#0f172a' }}>
        Create <span style={{ color: '#22c55e' }}>Stride</span> Account
      </h2>

      <div 
        role="alert" 
        aria-live="assertive" 
        style={{ color: '#ef4444', backgroundColor: errorMessage ? '#fef2f2' : 'transparent', padding: errorMessage ? '10px' : '0', borderRadius: '4px', marginBottom: '15px', fontWeight: 'bold', fontSize: '14px', textAlign: 'center' }}
      >
        {errorMessage}
      </div>
      
      <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label htmlFor="signup-name" style={{ fontWeight: 'bold', fontSize: '14px', color: '#475569' }}>Full Name</label>
          <input
            id="signup-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            required
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label htmlFor="signup-email" style={{ fontWeight: 'bold', fontSize: '14px', color: '#475569' }}>Email Address</label>
          <input
            id="signup-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="student@university.com"
            required
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label htmlFor="signup-password" style={{ fontWeight: 'bold', fontSize: '14px', color: '#475569' }}>Password</label>
          <input
            id="signup-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Min 6 characters"
            required
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
          />
        </div>

        <fieldset style={{ border: '1px solid #cbd5e1', borderRadius: '6px', padding: '15px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <legend style={{ fontWeight: 'bold', fontSize: '14px', color: '#0070f3', padding: '0 5px' }}>Initial Accessibility Setup</legend>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label htmlFor="pref-font" style={{ fontSize: '13px', color: '#475569', fontWeight: 'bold' }}>Default Text Size:</label>
            <select id="pref-font" value={fontSize} onChange={(e) => setFontSize(e.target.value)} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}>
              <option value="normal">Normal Text</option>
              <option value="large">Large Text (Low Vision)</option>
              <option value="dyslexia">Dyslexia Friendly Font</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label htmlFor="pref-theme" style={{ fontSize: '13px', color: '#475569', fontWeight: 'bold' }}>Default Theme:</label>
            <select id="pref-theme" value={initialTheme} onChange={(e) => setInitialTheme(e.target.value)} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}>
              <option value="light">Standard Light</option>
              <option value="dark">Dark Mode</option>
              <option value="high-contrast">High Contrast (Blind Assistance)</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label htmlFor="pref-tts" style={{ fontSize: '13px', color: '#475569', fontWeight: 'bold' }}>Screen Reader Voice Speed:</label>
            <select id="pref-tts" value={ttsSpeed} onChange={(e) => setTtsSpeed(e.target.value)} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}>
              <option value="1">Normal Speed (1x)</option>
              <option value="1.25">Slightly Faster (1.25x)</option>
              <option value="0.75">Slower (0.75x)</option>
            </select>
          </div>
        </fieldset>

        <div style={{ textAlign: 'center', fontSize: '13px', color: '#64748b', margin: '5px 0' }}>
          <span>Or sign up with: </span>
          <button type="button" style={{ background: 'none', border: 'none', color: '#0070f3', cursor: 'pointer', fontWeight: 'bold', textDecoration: 'underline' }}>Google SSO</button>
        </div>

        <button 
          type="submit"
          style={{ padding: '12px', fontSize: '16px', backgroundColor: '#22c55e', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', marginTop: '5px' }}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
