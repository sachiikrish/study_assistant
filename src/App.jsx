import React, { useState } from 'react';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/login/SignupPage';
import ThemeToggle from './pages/login/ThemeToggle';
import StudentDashboard from './pages/dashboard/StudentDashboard';
 import SettingsPage from './pages/settings/SettingsPage';
export default function App() {
  const [currentView, setCurrentView] = useState('login'); // login, signup, dashboard,settings
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fontSize, setFontSize] = useState('medium');
  const [contrastMode, setContrastMode] = useState('normal');

  // Jab successfully login ho jaye
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCurrentView('dashboard');
  };

  // Jab user logout kare
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('login');
  };

  return (
    <div style={{ minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '20px' }}>
        <ThemeToggle />
      </header>

      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Agar user logged in nahi hai toh normal Login/Signup toggle dikhao */}
        {!isLoggedIn && (
          <div style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
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
