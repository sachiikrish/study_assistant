import React, { useState } from 'react';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/login/SignupPage';
import StudentDashboard from './pages/dashboard/StudentDashboard';
import './index.css'; 

export default function App() {
  const [currentView, setCurrentView] = useState('landing'); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // 🎨 Accessibility Mode State Settings
  const [accessibilityMode, setAccessibilityMode] = useState('dark'); // 'light', 'dark', 'high-contrast'

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('landing'); 
  };

  // Dynamic Theme Styling Variable Matrix based on selection
  const getContainerStyle = () => {
    const baseStyle = {
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      transition: 'all 0.3s ease'
    };

    if (accessibilityMode === 'light') {
      return { ...baseStyle, backgroundColor: '#f8fafc', color: '#0f172a' };
    }
    if (accessibilityMode === 'high-contrast') {
      return { ...baseStyle, backgroundColor: '#000000', color: '#ffff00' }; // Standard AAA Blind Accessibility standard
    }
    return { ...baseStyle, backgroundColor: '#0f172a', color: '#ffffff' }; // Default Premium Dark Mode
  };

  return (
    <div style={getContainerStyle()} aria-label={`Stride AI app running in ${accessibilityMode} mode`}>
      
      {/* 🛠️ INTEGRATED ACCESSIBILITY TOOLBAR (Top fixed row navbar setup) */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '12px 40px', 
          backgroundColor: accessibilityMode === 'high-contrast' ? '#000' : '#1e293b', 
          borderBottom: `1px solid ${accessibilityMode === 'high-contrast' ? '#fff' : '#334155'}`,
        }}
        role="navigation"
        aria-label="Accessibility Mode Preferences"
      >
        <div style={{ fontSize: '14px', fontWeight: '700', color: accessibilityMode === 'high-contrast' ? '#fff' : '#94a3b8' }}>
          ♿ Choose Display Mode:
        </div>
        
        <div style={{ display: 'flex', gap: '8px' }}>
          <button 
            onClick={() => setAccessibilityMode('light')}
            style={{
              padding: '6px 14px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: '700',
              border: accessibilityMode === 'light' ? '2px solid #38bdf8' : '1px solid #cbd5e1',
              backgroundColor: '#ffffff', color: '#0f172a'
            }}
            aria-label="Switch to Normal Light Mode"
          >
            Light Mode
          </button>
          <button 
            onClick={() => setAccessibilityMode('dark')}
            style={{
              padding: '6px 14px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: '700',
              border: accessibilityMode === 'dark' ? '2px solid #38bdf8' : '1px solid #475569',
              backgroundColor: '#0f172a', color: '#ffffff'
            }}
            aria-label="Switch to Premium Dark Mode"
          >
            Dark Mode
          </button>
          <button 
            onClick={() => setAccessibilityMode('high-contrast')}
            style={{
              padding: '6px 14px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: '800',
              border: accessibilityMode === 'high-contrast' ? '3px solid #ffff00' : '1px solid #ffff00',
              backgroundColor: '#000000', color: '#ffff00'
            }}
            aria-label="Switch to High Contrast Yellow on Black mode for low vision users"
          >
            High Contrast 
          </button>
        </div>
      </div>

      {/* 🚀 VIEW 1: PREMIUM LANDING PAGE (Logic Flow) */}
      {currentView === 'landing' && !isLoggedIn && (
        <div style={{ padding: '60px 20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '20px' }}>Supercharge Your Learning With Stride AI</h1>
          <p style={{ fontSize: '18px', color: accessibilityMode === 'light' ? '#475569' : '#94a3b8', marginBottom: '32px', lineHeight: '1.6' }}>Your inclusive personal smart study assistant module framework.</p>
          <button onClick={() => setCurrentView('login')} style={{ backgroundColor: '#0284c7', color: '#ffffff', fontSize: '18px', padding: '14px 32px', borderRadius: '12px', border: 'none', cursor: 'pointer', fontWeight: '600' }}>Get Started Free →</button>
        </div>
      )}

      {/* 🔐 VIEW 2: LOGIN / SIGNUP INNER CARD SCREENS */}
      {(currentView === 'login' || currentView === 'signup') && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 20px' }}>
          <div style={{ width: '100%', maxWidth: '400px', backgroundColor: accessibilityMode === 'light' ? '#fff' : '#1e293b', padding: '40px 30px', borderRadius: '16px', border: '1px solid #334155', boxShadow: '0 20px 25px rgba(0,0,0,0.1)' }}>
            <h2 style={{ textAlign: 'center', fontSize: '26px', fontWeight: '700', marginBottom: '24px', color: '#38bdf8' }}>{currentView === 'login' ? 'Sign In' : 'Create Account'}</h2>
            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', color: '#000000' }}>
              {currentView === 'login' && <LoginPage onLoginSuccess={handleLoginSuccess} />}
              {currentView === 'signup' && <SignupPage />}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px', fontSize: '14px' }}>
              <span onClick={() => setCurrentView(currentView === 'login' ? 'signup' : 'login')} style={{ color: '#38bdf8', cursor: 'pointer', fontWeight: '600' }}>{currentView === 'login' ? 'Register' : 'Sign In'}</span>
              <span style={{ color: '#64748b' }}>|</span>
              <span onClick={() => setCurrentView('landing')} style={{ color: '#64748b', cursor: 'pointer' }}>← Back Home</span>
            </div>
          </div>
        </div>
      )}

      {/* 📊 VIEW 3: MAIN STUDENT DASHBOARD (Renders perfectly inside frame) */}
      {currentView === 'dashboard' && isLoggedIn && (
        <div style={{ padding: '30px 20px' }}>
          <StudentDashboard onLogout={handleLogout} themeMode={accessibilityMode} />
        </div>
      )}

    </div>
  );
}
