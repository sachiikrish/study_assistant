import React, { useState } from 'react';

export default function LoginPage({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Login successfully simulated
    onLoginSuccess();
  };

  return (
    <div style={{ padding: '30px', width: '100%', maxWidth: '400px', margin: '0 auto', fontFamily: 'sans-serif', boxSizing: 'border-box' }}>
      <h2 aria-live="polite" style={{ fontSize: '22px', marginBottom: '25px', textAlign: 'center', color: '#1e293b' }}>
        Sign In to Study Assistant
      </h2>
      
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label htmlFor="email" style={{ fontWeight: 'bold', fontSize: '14px', color: '#475569' }}>
            Email Address (or press Alt+E)
          </label>
          <input
            id="email"
            type="email"
            accessKey="e"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="student@university.com"
            required
            style={{ width: '100%', padding: '12px', fontSize: '16px', borderRadius: '6px', border: '1px solid #cbd5e1', backgroundColor: '#fff', color: '#000', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label htmlFor="password" style={{ fontWeight: 'bold', fontSize: '14px', color: '#475569' }}>
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            style={{ width: '100%', padding: '12px', fontSize: '16px', borderRadius: '6px', border: '1px solid #cbd5e1', backgroundColor: '#fff', color: '#000', boxSizing: 'border-box' }}
          />
        </div>

        <button 
          type="submit" 
          style={{ padding: '12px', fontSize: '16px', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
