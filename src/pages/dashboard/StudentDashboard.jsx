import React, { useState } from 'react';

// 📚 Mock Questions Pool for the Quiz Engine
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is the main source of energy for photosynthesis?",
    options: ["A) The Sun ☀️", "B) Water", "C) Soil", "D) Oxygen"],
    correctIndex: 0
  }
];

export default function StudentDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('tracker'); 
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS;

  const handleAnswerSelect = (option) => {
    if (option === 'A') {
      setScore(1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowModal(true);
  };

  return (
    <div style={styles.dashboardContainer} aria-label="Student Learning Dashboard">
      
      {/* 🚀 Top Premium Brand Header Row */}
      <div style={styles.navbar} role="banner">
        <div>
          <h2 style={styles.brandTitle} aria-level="2">Stride AI Dashboard</h2>
          <p style={styles.brandSubtitle}>Welcome back, Student! All system features active.</p>
        </div>
        <button 
          onClick={onLogout} 
          style={styles.logoutBtn}
          aria-label="Logout from account"
        >
          Logout Account
        </button>
      </div>

      {/* 📊 Premium Futuristic Navigation Tabs */}
      <div style={styles.tabContainer} role="tablist" aria-label="Dashboard Navigation">
        <button 
          role="tab"
          aria-selected={activeTab === 'quiz'}
          onClick={() => setActiveTab('quiz')}
          style={{ ...styles.tabButton, backgroundColor: activeTab === 'quiz' ? '#38bdf8' : 'transparent', color: activeTab === 'quiz' ? '#0f172a' : '#94a3b8' }}
        >
          🎯 Practice Quiz
        </button>
        <button 
          role="tab"
          aria-selected={activeTab === 'summarizer'}
          onClick={() => setActiveTab('summarizer')}
          style={{ ...styles.tabButton, backgroundColor: activeTab === 'summarizer' ? '#38bdf8' : 'transparent', color: activeTab === 'summarizer' ? '#0f172a' : '#94a3b8' }}
        >
          📝 AI Summarizer
        </button>
        <button 
          role="tab"
          aria-selected={activeTab === 'tracker'}
          onClick={() => setActiveTab('tracker')}
          style={{ ...styles.tabButton, backgroundColor: activeTab === 'tracker' ? '#38bdf8' : 'transparent', color: activeTab === 'tracker' ? '#0f172a' : '#94a3b8' }}
        >
          📈 Core Tracker
        </button>
      </div>

      {/* 🎛️ DYNAMIC CONTENT SWITCH BODY */}
      <main role="main">
        
        {/* 1. QUIZ TRACK MODULE */}
        {activeTab === 'quiz' && (
          <div style={styles.contentCard} aria-label="Practice Quiz Section">
            <div style={styles.cardHeader}>
              <span style={styles.progressText}>Question 1 of 5</span>
              <span style={styles.scoreBadge} aria-label={`Current Score: ${score}`}>Live Score: {score}</span>
            </div>

            <h3 style={styles.questionText}>Q: What is the main source of energy for photosynthesis?</h3>
            
            <div style={styles.optionsStack}>
              <button onClick={() => handleAnswerSelect('A')} style={styles.optionButton} aria-label="Option A: The Sun">A) The Sun ☀️</button>
              <button onClick={() => handleAnswerSelect('B')} style={styles.optionButton} aria-label="Option B: Water">B) Water</button>
            </div>
          </div>
        )}

        {/* 2. SUMMARIZER NOTES MODULE */}
        {activeTab === 'summarizer' && (
          <div style={styles.contentCard} aria-label="AI Text Summarizer Section">
            <h3 style={styles.sectionHeading}>AI Text Summarizer Dashboard 📝</h3>
            <p style={styles.sectionSubtext}>Upload notes or book sheets below to extract core summary blocks instantly.</p>
            
            <div style={styles.uploadBox} role="button" tabIndex="0" aria-label="Upload document area. Click to upload files, PDF, text, or docx up to 10 megabytes.">
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>📥</div>
              <span style={{ color: '#38bdf8', fontWeight: '700' }}>Click to upload files</span> or drag and drop<br />
              <span style={{ fontSize: '12px', color: '#64748b', marginTop: '4px', display: 'block' }}>PDF, TXT, or DOCX (Max 10MB)</span>
            </div>
            
            <button style={styles.primaryActionBtn} aria-label="Generate Smart Summary button">
              Generate Smart Summary ✨
            </button>
          </div>
        )}

        {/* 3. TYPE OF PROGRESS TRACKER MODULE */}
        {activeTab === 'tracker' && (
          <div style={styles.contentCard} aria-label="Teammate Core Performance Portal">
            <h3 style={styles.sectionHeading}>Teammate Core Performance Portal 📈</h3>
            <p style={styles.sectionSubtext}>Track feature allocation status and system engine response reviews.</p>
            
            <div style={styles.trackerStack}>
              <div style={styles.trackerRow} tabIndex="0" aria-label="Study Assistant AI Engine: Allotted Features Active">
                <span style={styles.trackerLabel}>Study Assistant AI Engine</span>
                <span style={styles.statusActive}>● Allotted Features Active</span>
              </div>
              <div style={styles.trackerRow} tabIndex="0" aria-label="Database Schema Pipeline: Connected to MongoDB Cloud">
                <span style={styles.trackerLabel}>Database Schema Pipeline</span>
                <span style={styles.statusActive}>● Connected (MongoDB Cloud)</span>
              </div>
              <div style={styles.trackerRow} tabIndex="0" aria-label="Overall Project Progress Rate: 85 percent completed">
                <span style={styles.trackerLabel}>Overall Project Progress Rate</span>
                <span style={styles.statusProgress}>85% Completed</span>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 🟢 4. ACCESSIBLE FLOATING MODAL POPUP OVERLAY */}
      {showModal && (
        <div style={styles.modalOverlay} role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div style={styles.modalContent}>
            <div style={{ ...styles.modalIconBox, backgroundColor: isCorrect ? '#14532d' : '#7f1d1d' }}>
              <span style={{ fontSize: '36px' }} role="img" aria-label={isCorrect ? "Checkmark" : "Crossmark"}>{isCorrect ? '✅' : '❌'}</span>
            </div>

            <h3 id="modal-title" style={{ ...styles.modalHeading, color: isCorrect ? '#4ade80' : '#f87171' }}>
              {isCorrect ? 'Correct Answer!' : 'Incorrect Target!'}
            </h3>

            <p style={styles.modalSubtext}>
              {isCorrect 
                ? "Excellent analysis! Your core conceptual background matches this response layout perfectly." 
                : "The optimal correct option was: A) The Sun ☀️"
              }
            </p>
            <button 
              onClick={() => setShowModal(false)} 
              style={styles.modalCloseBtn}
              aria-label="Close window and return to quiz"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

// 🎨 5. Clean & Fully Formatted Styles Object
const styles = {
  dashboardContainer: {
    minHeight: '100vh',
    backgroundColor: '#0f172a', 
    color: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    padding: '20px 40px',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '20px',
    borderBottom: '1px solid #1e293b',
    marginBottom: '30px'
  },
  brandTitle: {
    fontSize: '24px',
    fontWeight: '800',
    color: '#38bdf8', 
    margin: 0
  },
  brandSubtitle: {
    fontSize: '14px',
    color: '#94a3b8',
    margin: '4px 0 0 0'
  },
  logoutBtn: {
    backgroundColor: '#ef4444',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
  },
  tabContainer: {
    display: 'flex',
    gap: '12px',
    marginBottom: '30px',
    backgroundColor: '#1e293b',
    padding: '6px',
    borderRadius: '12px',
    maxWidth: '500px',
    border: '1px solid #334155'
  },
  tabButton: {
    flex: 1,
    padding: '12px 16px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '700',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  contentCard: {
    backgroundColor: '#1e293b', 
    border: '1px solid #334155',
    borderRadius: '16px',
    padding: '35px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '25px',
    borderBottom: '1px dashed #334155',
    paddingBottom: '15px'
  },
  progressText: {
    color: '#94a3b8',
    fontWeight: '600',
    fontSize: '14px'
  },
  scoreBadge: {
    backgroundColor: '#14532d',
    color: '#4ade80',
    padding: '6px 14px',
    borderRadius: '20px',
    fontWeight: '700',
    fontSize: '13px',
    border: '1px solid #166534'
  },
  questionText: {
    fontSize: '22px',
    fontWeight: '700',
    lineHeight: '1.4',
    marginBottom: '30px',
    color: '#ffffff'
  },
  optionsStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px'
  },
  optionButton: {
    width: '100%',
    textAlign: 'left',
    padding: '16px 24px',
    backgroundColor: '#0f172a',
    border: '1px solid #334155',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    color: '#cbd5e1',
    transition: 'all 0.2s',
  },
  sectionHeading: {
    fontSize: '22px',
    fontWeight: '700',
    marginBottom: '10px',color: '#ffffff'},sectionSubtext: {color: '#94a3b8',fontSize: '15px',marginBottom: '25px'},uploadBox: {border: '2px dashed #475569',padding: '45px 20px',borderRadius: '14px',backgroundColor: '#0f172a',color: '#94a3b8',cursor: 'pointer',marginBottom: '25px',textAlign: 'center',transition: 'all 0.2s'},primaryActionBtn: {padding: '14px 32px',backgroundColor: '#0284c7',color: '#ffffff',border: 'none',borderRadius: '10px',fontWeight: '700',fontSize: '15px',cursor: 'pointer',boxShadow: '0 4px 12px rgba(2, 132, 199, 0.2)'},trackerStack: {display: 'flex',flexDirection: 'column',gap: '16px'},trackerRow: {display: 'flex',justifyContent: 'space-between',alignItems: 'center',padding: '18px 24px',backgroundColor: '#0f172a',borderRadius: '12px',border: '1px solid #334155',outline: 'none'},trackerLabel: {fontWeight: '600',fontSize: '16px',color: '#e2e8f0'},statusActive: {color: '#4ade80',fontWeight: '700',fontSize: '15px'},statusProgress: {color: '#38bdf8',fontWeight: '700',fontSize: '15px'},modalOverlay: {position: 'fixed',top: 0,left: 0,width: '100vw',height: '100vh',backgroundColor: 'rgba(15, 23, 42, 0.7)',display: 'flex',alignItems: 'center',justifyContent: 'center',zIndex: 9999,backdropFilter: 'blur(4px)'},modalContent: {backgroundColor: '#1e293b',border: '1px solid #334155',padding: '40px 30px',borderRadius: '24px',width: '90%',maxWidth: '400px',textAlign: 'center',boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'},modalIconBox: {width: '74px',height: '74px',borderRadius: '50%',display: 'flex',alignItems: 'center',justifyContent: 'center',margin: '0 auto 20px auto'},modalHeading: {fontSize: '24px',fontWeight: '800',marginBottom: '12px'},modalSubtext: {color: '#94a3b8',fontSize: '15px',lineHeight: '1.5',marginBottom: '30px'},modalCloseBtn: {backgroundColor: '#38bdf8',color: '#0f172a',border: 'none',width: '100%',padding: '14px 0',borderRadius: '12px',fontSize: '16px',fontWeight: '700',cursor: 'pointer'}};
