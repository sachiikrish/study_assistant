import React, { useState } from 'react';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/login/SignupPage';
import ThemeToggle from './pages/login/ThemeToggle';
import StudentDashboard from './pages/dashboard/StudentDashboard';

export default function App() {
  const [currentView, setCurrentView] = useState('login'); // login, signup, dashboard
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        <div style={{ width: '100%', maxWidth: currentView === 'dashboard' ? '900px' : '450px', background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          {currentView === 'login' && <LoginPage onLoginSuccess={handleLoginSuccess} />}
          {currentView === 'signup' && <SignupPage />}
          {currentView === 'dashboard' && <StudentDashboard onLogout={handleLogout} />}
        </div>
      </main>
    </div>
  );
}
