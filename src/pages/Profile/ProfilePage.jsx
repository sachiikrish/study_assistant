// src/pages/Profile/Profile.jsx
// ============================================
// PROFILE PAGE
// Shows the logged-in student's basic info and
// lets them see/edit a few personal details.
//
// CURRENT STATE: Uses MOCK profile data only.
// Nothing is saved permanently - refreshing resets edits.
//
// BACKEND TODO: When a backend/database is added,
// fetch the real logged-in user's profile on load
// (e.g. GET /api/user/profile) and save edits via
// POST/PUT /api/user/profile instead of local state.
// ============================================

import { useState } from 'react';

export default function Profile() {
  // Mock starting profile data - stands in for a real fetched user
  const [profile, setProfile] = useState({
    name: 'Nandini Singh',
    email: 'nandinisingh4004@gmail.com',
    course: 'B.Tech, Computer Science',
    year: 'Final Year',
  });

  // Tracks whether the form is in edit mode or read-only view mode
  const [isEditing, setIsEditing] = useState(false);

  // Temporary copy of profile fields while editing, so cancel can discard changes cleanly
  const [draft, setDraft] = useState(profile);

  const handleEditClick = () => {
    setDraft(profile); // start editing from the current saved values
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false); // discard whatever was typed in draft
  };

  const handleSave = () => {
    // BACKEND TODO: replace this with a real API call, e.g.:
    // await fetch('/api/user/profile', { method: 'PUT', body: JSON.stringify(draft) });
    setProfile(draft); // commit the draft as the new saved profile
    setIsEditing(false);
  };

  // Updates one field in the draft as the user types
  const handleChange = (field, value) => {
    setDraft((prev) => ({ ...prev, [field]: value }));
  };

  // Each editable field, so we can render them in a loop instead of repeating JSX
  const fields = [
    { key: 'name', label: 'Full Name' },
    { key: 'email', label: 'Email Address' },
    { key: 'course', label: 'Course' },
    { key: 'year', label: 'Year' },
  ];

  return (
    <div
      style={{
        maxWidth: '480px',
        margin: '0 auto',
        padding: '24px',
        background: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        fontFamily: 'sans-serif',
      }}
    >
      {/* ---------- Avatar + heading ---------- */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: '#2563eb',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '22px',
            fontWeight: 'bold',
          }}
        >
          {/* Shows the user's first initial as a simple placeholder avatar */}
          {profile.name.charAt(0)}
        </div>
        <div>
          <h1 style={{ fontSize: '20px', margin: 0, color: '#1e293b' }}>{profile.name}</h1>
          <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>{profile.email}</p>
        </div>
      </div>

      {/* ---------- Profile fields (view or edit mode) ---------- */}
      {fields.map((field) => (
        <div key={field.key} style={{ marginBottom: '14px' }}>
          <label
            style={{
              display: 'block',
              fontSize: '13px',
              fontWeight: 'bold',
              color: '#475569',
              marginBottom: '4px',
            }}
          >
            {field.label}
          </label>

          {isEditing ? (
            <input
              type="text"
              value={draft[field.key]}
              onChange={(e) => handleChange(field.key, e.target.value)}
              style={{
                width: '100%',
                padding: '8px 10px',
                borderRadius: '6px',
                border: '1px solid #cbd5e1',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
            />
          ) : (
            <p style={{ margin: 0, fontSize: '14px', color: '#1e293b' }}>{profile[field.key]}</p>
          )}
        </div>
      ))}

      {/* ---------- Action buttons ---------- */}
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              style={{
                flex: 1,
                padding: '10px',
                background: '#2563eb',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Save Changes
            </button>
            <button
              onClick={handleCancel}
              style={{
                flex: 1,
                padding: '10px',
                background: '#fff',
                color: '#1e293b',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={handleEditClick}
            style={{
              width: '100%',
              padding: '10px',
              background: '#2563eb',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
}