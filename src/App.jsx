import React, { useState } from 'react';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/login/SignupPage';
import ThemeToggle from './pages/login/ThemeToggle';

export default function App() {
  const [currentView, setCurrentView] = useState('login'); // login ya signup badalne ke liye

  return (
    <div style={{ minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      {/* Screen reader aur normal users ke liye theme badalne ka button */}
      <header style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '20px' }}>
        <ThemeToggle />
      </header>

      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Login aur signup page ke beech switch karne ka navigation */}
        <div style={{ marginBottom: '20px', display: 'flex', gap: '15px' }} role="navigation" aria-label="Auth Navigation">
          <button 
            onClick={() => setCurrentView('login')} 
            style={{ padding: '8px 16px', fontWeight: currentView === 'login' ? 'bold' : 'normal', cursor: 'pointer' }}
          >
            Login Form
          </button>
          <button 
            onClick={() => setCurrentView('signup')} 
            style={{ padding: '8px 16px', fontWeight: currentView === 'signup' ? 'bold' : 'normal', cursor: 'pointer' }}
          >
            Create Account (Signup)
          </button>
        </div>

        {/* Jo button click hoga wahi screen samne dikhegi */}
        <div style={{ width: '100%', maxWidth: '450px', background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          {currentView === 'login' ? <LoginPage /> : <SignupPage />}
        </div>
      </main>
    </div>
  );
}
