import React, { useState } from 'react';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/login/SignupPage';
import ThemeToggle from './pages/login/ThemeToggle';
import StudentDashboard from './pages/dashboard/StudentDashboard';
import './index.css'; // Global color settings connect karein

export default function App() {
  const [currentView, setCurrentView] = useState('login'); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

        {/* Dynamic Display Layout Box */}
        <div style={{ width: '100%', maxWidth: currentView === 'dashboard' ? '1100px' : '450px', background: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', transition: 'all 0.2s' }}>
          {currentView === 'login' && <LoginPage onLoginSuccess={handleLoginSuccess} />}
          {currentView === 'signup' && <SignupPage />}
          {currentView === 'dashboard' && <StudentDashboard onLogout={handleLogout} />}
        </div>
      </main>
    </div>
  );
}
