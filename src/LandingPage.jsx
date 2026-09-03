import React from 'react';

const LandingPage = ({ onGetStarted }) => {
  return (
    <div style={styles.container}>
      {/* Navbar Section */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>Stride AI</div>
        <button onClick={onGetStarted} style={styles.loginBtn}>Login</button>
      </nav>

      {/* Hero Section */}
      <header style={styles.hero}>
        <span style={styles.badge}>Next-Gen AI Study Assistant</span>
        <h1 style={styles.title}>
          Supercharge Your Learning With <span style={styles.highlight}>Stride AI</span>
        </h1>
        <p style={styles.subtitle}>
          Your personal smart study assistant. Summarise long lectures, generate interactive practice quizzes, and manage your learning schedule all in one dashboard.
        </p>
        <button onClick={onGetStarted} style={styles.ctaBtn}>
          Get Started For Free →
        </button>
      </header>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <h2 style={styles.featuresHeading}>Powerful Learning Tools</h2>
        <div style={styles.grid}>
          {/* Card 1 */}
          <div style={styles.card}>
            <div style={styles.icon}>Docs 📝</div>
            <h3 style={styles.cardTitle}>Smart Summariser</h3>
            <p style={styles.cardText}>Convert long PDF notes, reference books, and complex lectures into clean, readable bullet points in seconds using AI.</p>
          </div>
          {/* Card 2 */}
          <div style={styles.card}>
            <div style={styles.icon}>Quiz 🎯</div>
            <h3 style={styles.cardTitle}>Interactive Quizzes</h3>
            <p style={styles.cardText}>Test your conceptual knowledge by generating real-time quizzes directly from your syllabus or topics.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        © 2026 Stride AI. Built for IGDTUW Minor Project.
      </footer>
    </div>
  );
};

// Inline JavaScript Styles (No Tailwind needed)
const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0f172a', // Premium Dark Blue Background
    color: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    paddingBottom: '40px',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'between',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    borderBottom: '1px solid #1e293b',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#38bdf8', // Neon Blue color
    letterSpacing: '0.5px',
  },
  loginBtn: {
    backgroundColor: 'transparent',
    color: '#38bdf8',
    border: '1px solid #38bdf8',
    padding: '8px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s',
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '80px 20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  badge: {
    backgroundColor: '#1e3a8a',
    color: '#60a5fa',
    fontSize: '14px',
    padding: '6px 16px',
    borderRadius: '20px',
    border: '1px solid #1d4ed8',
    marginBottom: '24px',
    fontWeight: '500',
  },
  title: {
    fontSize: '48px',
    fontWeight: '800',
    lineHeight: '1.2',
    marginBottom: '20px',
    letterSpacing: '-1px',
  },
  highlight: {
    color: '#38bdf8',
  },
  subtitle: {
    fontSize: '18px',
    color: '#94a3b8',
    lineHeight: '1.6',
    marginBottom: '32px',
  },
  ctaBtn: {
    backgroundColor: '#0284c7',
    color: '#ffffff',
    fontSize: '18px',
    padding: '14px 32px',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    boxShadow: '0 10px 15px -3px rgba(2, 132, 199, 0.3)',
    transition: 'all 0.3s',
  },
  featuresSection: {
    maxWidth: '1000px',
    margin: '40px auto 0 auto',
    padding: '0 20px',
  },
  featuresHeading: {
    fontSize: '28px',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '40px',
  },
  grid: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap',
  },
  card: {
    flex: '1',
    minWidth: '280px',
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    padding: '30px',
    borderRadius: '16px',
    transition: 'transform 0.3s',
  },
  icon: {
    fontSize: '16px',
    color: '#38bdf8',
    backgroundColor: '#0f172a',
    padding: '6px 12px',
    borderRadius: '6px',
    display: 'inline-block',
    marginBottom: '16px',
    fontWeight: '600',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '10px',
  },
  cardText: {
    color: '#94a3b8',
    lineHeight: '1.5',
    fontSize: '15px',
  },
  footer: {
    textAlign: 'center',
    paddingTop: '60px',
    color: '#64748b',
    fontSize: '14px',
  }
};

export default LandingPage;
