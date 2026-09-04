// ============================================
// SETTINGS PAGE
// Lets students adjust accessibility preferences:
// font size and display/contrast mode.
//
// CURRENT STATE: All preferences are stored in
// local component state (useState) only. Nothing
// is saved permanently yet - refreshing the page
// resets everything to defaults.
//
// BACKEND TODO: When a backend/database is added,
// this component should:
//   1. On load, fetch the logged-in student's saved
//      preferences (e.g. GET /api/user/preferences)
//      and use them as the initial state instead of
//      the hardcoded defaults below.
//   2. On "Save Preferences" click, send the current
//      fontSize and contrastMode values to the backend
//      (e.g. POST /api/user/preferences) instead of
//      just showing a local "Saved!" message.
//   3. These preferences likely need to apply globally
//      across the whole app (not just this page) - that
//      probably means lifting this state up to App.jsx
//      or a global context, once the app grows.
// ============================================

import { useState } from 'react';
import { theme } from '../../theme';


  // Currently selected font size: 'small' | 'medium' | 'large'
  // BACKEND TODO: initialize this from the user's saved preference instead of 'medium'
  export default function SettingsPage({ fontSize, setFontSize, contrastMode, setContrastMode }) {
  // Controls the temporary "Saved!" button feedback
  const [saved, setSaved] = useState(false);

  // Runs when the user clicks "Save Preferences"
  const handleSave = () => {
    // BACKEND TODO: replace this local-only logic with an actual API call, e.g.:
    // await fetch('/api/user/preferences', {
    //   method: 'POST',
    //   body: JSON.stringify({ fontSize, contrastMode }),
    // });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000); // Reset button text after 2 seconds
  };

  // Static list of font size options shown as buttons
  const fontSizes = [
    { id: 'small', label: 'Small' },
    { id: 'medium', label: 'Medium' },
    { id: 'large', label: 'Large' },
  ];

  // Static list of display/contrast mode options shown as buttons
  const contrastModes = [
    { id: 'normal', label: 'Normal Light' },
    { id: 'dark', label: 'Dark Mode' },
    { id: 'high', label: 'High Contrast' },
  ];

  return (
    <div
      style={{
        maxWidth: '480px',
        margin: '40px auto',
        padding: theme.spacing.xl,
        background: theme.colors.surface,
        borderRadius: theme.radius,
        fontFamily: theme.font.family,
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      }}
    >
      {/* Page heading */}
      <h1
        style={{
          fontSize: theme.font.heading,
          color: theme.colors.text,
          marginBottom: theme.spacing.lg,
        }}
      >
        Accessibility Settings
      </h1>

      {/* ---------- Font size section ---------- */}
      <div style={{ marginBottom: theme.spacing.lg }}>
        <p
          style={{
            fontSize: theme.font.body,
            fontWeight: 'bold',
            color: theme.colors.text,
            marginBottom: theme.spacing.sm,
          }}
        >
          Font size
        </p>
        <div style={{ display: 'flex', gap: theme.spacing.sm }}>
          {/* Renders one button per font size option */}
          {fontSizes.map((size) => (
            <button
              key={size.id}
              onClick={() => setFontSize(size.id)} // Updates selected font size
              style={{
                padding: '10px 16px',
                borderRadius: theme.radius,
                border: `2px solid ${
                  fontSize === size.id ? theme.colors.primary : theme.colors.border
                }`,
                background: fontSize === size.id ? theme.colors.primary : theme.colors.surfaceAlt,
                color: fontSize === size.id ? '#fff' : theme.colors.text,
                fontWeight: fontSize === size.id ? 'bold' : 'normal',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {size.label}
            </button>
          ))}
        </div>
      </div>

      {/* ---------- Display / contrast mode section ---------- */}
      <div style={{ marginBottom: theme.spacing.xl }}>
        <p
          style={{
            fontSize: theme.font.body,
            fontWeight: 'bold',
            color: theme.colors.text,
            marginBottom: theme.spacing.sm,
          }}
        >
          Display mode
        </p>
        <div style={{ display: 'flex', gap: theme.spacing.sm }}>
          {/* Renders one button per display mode option */}
          {contrastModes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setContrastMode(mode.id)} // Updates selected display mode
              style={{
                padding: '10px 16px',
                borderRadius: theme.radius,
                border: `2px solid ${
                  contrastMode === mode.id ? theme.colors.primary : theme.colors.border
                }`,
                // Each mode preview shows its own background color
                background:
                  mode.id === 'high'
                    ? theme.colors.highContrastBg
                    : mode.id === 'dark'
                    ? theme.colors.background
                    : theme.colors.surfaceAlt,
                color:
                  mode.id === 'high'
                    ? theme.colors.highContrastText
                    : mode.id === 'dark'
                    ? '#fff'
                    : theme.colors.text,
                fontWeight: contrastMode === mode.id ? 'bold' : 'normal',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      {/* ---------- Save button ---------- */}
      <button
        onClick={handleSave}
        style={{
          width: '100%',
          padding: '12px',
          background: saved ? theme.colors.success : theme.colors.primary,
          color: '#fff',
          border: 'none',
          borderRadius: theme.radius,
          fontSize: theme.font.body,
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'background 0.2s',
        }}
      >
        {saved ? 'Saved!' : 'Save Preferences'}
      </button>
    </div>
  );
}