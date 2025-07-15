import { useState } from 'react'
import './App.css'

function App() {
  const [url, setUrl] = useState('');
  const [metadata, setMetadata] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [saved, setSaved] = useState(false);

  const handleFetchMetadata = async () => {
    setLoading(true);
    setError('');
    setSaved(false);
    setMetadata(null);
    try {
      const response = await fetch('http://localhost:5000/api/fetch-metadata', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      if (!response.ok) throw new Error('Failed to fetch metadata');
      const data = await response.json();
      setMetadata(data);
    } catch (err) {
      setError('Failed to fetch metadata.');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveBookmark = () => {
    // Placeholder: will call backend API to save bookmark
    setSaved(true);
  };

  return (
    <div className="bookmark-container">
      <h1>Save as Bookmark</h1>
      <input
        type="text"
        placeholder="Paste any URL..."
        value={url}
        onChange={e => setUrl(e.target.value)}
        style={{ width: '300px', padding: '8px' }}
      />
      <button onClick={handleFetchMetadata} disabled={!url || loading} style={{ marginLeft: '8px' }}>
        {loading ? 'Fetching...' : 'Fetch Metadata'}
      </button>
      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
      {metadata && (
        <div style={{ marginTop: '20px', border: '1px solid #eee', padding: '16px', borderRadius: '8px', width: '350px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={metadata.favicon} alt="Favicon" style={{ width: 24, height: 24, marginRight: 12 }} />
            <strong>{metadata.title}</strong>
          </div>
          <div style={{ fontSize: '0.9em', color: '#555', marginTop: 4 }}>{url}</div>
          <button onClick={handleSaveBookmark} style={{ marginTop: '12px' }}>Save Bookmark</button>
          {saved && <span style={{ color: 'green', marginLeft: '10px' }}>Saved!</span>}
      </div>
      )}
      </div>
  );
}

export default App
