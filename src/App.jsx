import React, { useState } from 'react';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/login/SignupPage';
import ThemeToggle from './pages/login/ThemeToggle';
import StudentDashboard from './pages/dashboard/StudentDashboard';
import './index.css'; // Global color settings connect karein
 import SettingsPage from './pages/settings/SettingsPage';
export default function App() {
  const [currentView, setCurrentView] = useState('login'); ,settings
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fontSize, setFontSize] = useState('medium');
  const [contrastMode, setContrastMode] = useState('normal');

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('login');
  };

  return (
    <div style={{ minHeight: '100vh', padding: '20px', transition: 'all 0.2s' }}>
      
      {/* Persistent Accessibility Toolbar */}
      <header style={{ paddingBottom: '10px', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
        <ThemeToggle />
      </header>

      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {!isLoggedIn && (
          <div style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
            <button 
              onClick={() => setCurrentView('login')} 
              style={{ padding: '10px 20px', fontWeight: currentView === 'login' ? 'bold' : 'normal', cursor: 'pointer', borderRadius: '6px', border: '1px solid #cbd5e1' }}
            >
              Login Form
            </button>
            <button 
              onClick={() => setCurrentView('signup')} 
              style={{ padding: '10px 20px', fontWeight: currentView === 'signup' ? 'bold' : 'normal', cursor: 'pointer', borderRadius: '6px', border: '1px solid #cbd5e1' }}
            >
              Create Account (Signup)
            </button>
          </div>
        )}

        {/* Dynamic screen rendering flow */}
        <div style={{
        width: '100%',
        maxWidth: currentView === 'dashboard' ? '900px' : '450px',
        fontSize: fontSize === 'small' ? '14px' : fontSize === 'large' ? '20px' : '16px',
        background: contrastMode === 'high' ? '#000' : contrastMode === 'dark' ? '#0f172a' : '#fff',
        color: contrastMode === 'high' ? '#facc15' : contrastMode === 'dark' ? '#fff' : '#1e293b',
  /* ...keep everything else that was already here... */
        }}>
          {currentView === 'login' && <LoginPage onLoginSuccess={handleLoginSuccess} />}
          {currentView === 'signup' && <SignupPage />}
          {currentView === 'dashboard' && <StudentDashboard onLogout={handleLogout} />}
          {currentView === 'settings' && (
          <SettingsPage
          fontSize={fontSize}
          setFontSize={setFontSize}
          contrastMode={contrastMode}
          setContrastMode={setContrastMode}
          />
          )}
          {currentView === 'dashboard' && (
         <button onClick={() => setCurrentView('settings')} style={{ marginTop: '12px' }}>
          Go to Settings
          </button>
)}
        </div>
      </main>
    </div>
  );
}
