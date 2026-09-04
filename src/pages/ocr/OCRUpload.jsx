// src/pages/ocr/OCRUpload.jsx
// ============================================
// OCR UPLOAD PAGE
// Lets students upload an image of handwritten notes
// and see it "converted" into readable text.
//
// CURRENT STATE: Uses MOCK data to simulate OCR conversion.
// No real text-recognition library is connected yet - we
// fake a processing delay, then return sample extracted text.
//
// BACKEND/OCR TODO: When a real OCR engine is added
// (e.g. Tesseract.js for client-side, or a backend OCR API),
// replace the mock logic inside handleFileUpload() with an
// actual call to that engine/API, passing the uploaded file.
// ============================================

import { useState } from 'react';

export default function OCRUpload() {
  // The file the user selected (or null if none yet)
  const [selectedFile, setSelectedFile] = useState(null);

  // Preview URL for the uploaded image, so the user can see what they uploaded
  const [previewUrl, setPreviewUrl] = useState(null);

  // Tracks whether we're currently "processing" the OCR conversion
  const [isLoading, setIsLoading] = useState(false);

  // Holds the extracted text once conversion is done
  const [extractedText, setExtractedText] = useState('');

  // Holds an error message if something goes wrong (e.g. wrong file type)
  const [errorMessage, setErrorMessage] = useState('');

  // Runs whenever the user picks a file from the file input
  const handleFileSelect = (event) => {
    const file = event.target.files[0];

    // Reset previous results/errors every time a new file is chosen
    setExtractedText('');
    setErrorMessage('');

    if (!file) {
      return; // User cancelled the file picker
    }

    // Basic validation: only accept image files
    // (handwritten notes are expected to be photographed/scanned as images)
    if (!file.type.startsWith('image/')) {
      setErrorMessage('Please upload an image file (JPG, PNG, etc). Other file types are not supported yet.');
      setSelectedFile(null);
      setPreviewUrl(null);
      return;
    }

    setSelectedFile(file);
    // Create a temporary local URL so we can preview the image before "processing" it
    setPreviewUrl(URL.createObjectURL(file));
  };

  // Runs when the user clicks "Convert to Text"
  const handleConvert = () => {
    if (!selectedFile) {
      setErrorMessage('Please select an image first.');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');
    setExtractedText('');

    // MOCK OCR TODO: replace this setTimeout block with a real OCR call, e.g.:
    // const result = await Tesseract.recognize(selectedFile, 'eng');
    // setExtractedText(result.data.text);
    setTimeout(() => {
      // Simulate a possible failure sometimes, so the error state is testable too
      const simulatedFailure = false; // flip to true to test the error UI

      if (simulatedFailure) {
        setErrorMessage('Could not read text from this image. Try a clearer photo.');
        setIsLoading(false);
        return;
      }

      // Mock extracted text - stands in for what a real OCR engine would return
      setExtractedText(
        'Photosynthesis Notes:\n' +
        '- Plants convert light energy into chemical energy.\n' +
        '- Occurs mainly in the leaves, inside chloroplasts.\n' +
        '- Produces glucose and releases oxygen as a byproduct.'
      );
      setIsLoading(false);
    }, 1800); // fake processing delay so the loading state is visible
  };

  // Lets the user start over with a new image
  const handleReset = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setExtractedText('');
    setErrorMessage('');
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '24px',
        background: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ fontSize: '22px', marginBottom: '8px', color: '#1e293b' }}>
        📝 OCR Upload — Convert Handwritten Notes
      </h1>
      <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px' }}>
        Upload a photo of your handwritten notes and we'll convert it to readable text.
      </p>

      {/* ---------- File input ---------- */}
      <label
        htmlFor="ocr-file-input"
        style={{
          display: 'block',
          padding: '20px',
          border: '2px dashed #cbd5e1',
          borderRadius: '8px',
          textAlign: 'center',
          cursor: 'pointer',
          color: '#475569',
          marginBottom: '16px',
        }}
      >
        {selectedFile ? `Selected: ${selectedFile.name}` : 'Click to choose an image, or drag one here'}
        <input
          id="ocr-file-input"
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          style={{ display: 'none' }} // hidden - the styled label above acts as the visible button
        />
      </label>

      {/* ---------- Image preview ---------- */}
      {previewUrl && (
        <div style={{ marginBottom: '16px', textAlign: 'center' }}>
          <img
            src={previewUrl}
            alt="Preview of the uploaded handwritten notes"
            style={{ maxWidth: '100%', maxHeight: '260px', borderRadius: '8px', border: '1px solid #e2e8f0' }}
          />
        </div>
      )}

      {/* ---------- Error state ---------- */}
      {errorMessage && (
        <div
          role="alert"
          style={{
            padding: '12px',
            marginBottom: '16px',
            background: '#fee2e2',
            color: '#b91c1c',
            borderRadius: '6px',
            fontSize: '14px',
          }}
        >
          ⚠ {errorMessage}
        </div>
      )}

      {/* ---------- Action buttons ---------- */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button
          onClick={handleConvert}
          disabled={!selectedFile || isLoading} // Can't convert without a file, or while already loading
          style={{
            flex: 1,
            padding: '12px',
            background: !selectedFile || isLoading ? '#94a3b8' : '#2563eb',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: !selectedFile || isLoading ? 'not-allowed' : 'pointer',
          }}
        >
          {isLoading ? 'Converting...' : 'Convert to Text'}
        </button>

        {(selectedFile || extractedText) && (
          <button
            onClick={handleReset}
            style={{
              padding: '12px 16px',
              background: '#fff',
              color: '#1e293b',
              border: '1px solid #cbd5e1',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Reset
          </button>
        )}
      </div>

      {/* ---------- Loading state ---------- */}
      {isLoading && (
        <div style={{ textAlign: 'center', color: '#64748b', fontSize: '14px', marginBottom: '16px' }}>
          🔄 Reading your handwriting, please wait...
        </div>
      )}

      {/* ---------- Result: extracted text ---------- */}
      {extractedText && (
        <div>
          <h2 style={{ fontSize: '16px', marginBottom: '8px', color: '#1e293b' }}>Extracted Text</h2>
          <pre
            style={{
              whiteSpace: 'pre-wrap', // keeps line breaks from the extracted text, wraps long lines
              background: '#f8fafc',
              padding: '14px',
              borderRadius: '6px',
              border: '1px solid #e2e8f0',
              fontSize: '14px',
              color: '#1e293b',
              fontFamily: 'inherit',
            }}
          >
            {extractedText}
          </pre>
        </div>
      )}
    </div>
  );
}