// ============================================
// SHARED THEME FILE
// Central place for colors, spacing, and fonts
// used across the app. Reuse these values instead
// of hardcoding new colors in each component, so
// the whole app stays visually consistent.
// ============================================

export const theme = {
  // Color palette used throughout the app
  colors: {
    primary: '#2563eb',        // Main blue - used for buttons, active states, links
    primaryDark: '#1d4ed8',    // Darker blue - used for hover states
    background: '#0f172a',     // Dark background - used for Dark Mode display setting
    surface: '#ffffff',        // White - main card/panel background
    surfaceAlt: '#f8fafc',     // Light gray - secondary panel background
    text: '#1e293b',           // Main text color on light surfaces
    textMuted: '#64748b',      // Secondary/muted text color
    border: '#e2e8f0',         // Default border color for inputs and cards
    success: '#16a34a',        // Green - used for "Saved!" confirmation state
    highContrastBg: '#000000', // Background for High Contrast accessibility mode
    highContrastText: '#facc15', // Text color for High Contrast accessibility mode
  },

  // Consistent spacing values (in pixels) for margins/padding
  spacing: {
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },

  // Standard corner radius used on buttons, cards, inputs
  radius: '10px',

  // Typography scale
  font: {
    family: 'sans-serif',
    heading: '22px', // Page titles
    body: '15px',    // Normal text, labels
    small: '13px',   // Buttons, captions
  },
};