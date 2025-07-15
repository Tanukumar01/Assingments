const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Helper to extract title and favicon from HTML
function extractMetadata(html, url) {
  let title = '';
  let favicon = '';
  // Extract title
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  if (titleMatch) title = titleMatch[1];
  // Try OpenGraph icon first
  const ogIconMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i);
  if (ogIconMatch) {
    favicon = ogIconMatch[1];
  } else {
    // Try <link rel="icon">
    const iconMatch = html.match(/<link[^>]*rel=["'](?:shortcut )?icon["'][^>]*href=["']([^"']+)["'][^>]*>/i);
    if (iconMatch) {
      favicon = iconMatch[1];
      // Handle relative URLs
      if (!favicon.startsWith('http')) {
        try {
          const u = new URL(favicon, url);
          favicon = u.href;
        } catch {}
      }
    } else {
      // Fallback to /favicon.ico
      try {
        const u = new URL(url);
        favicon = u.origin + '/favicon.ico';
      } catch {}
    }
  }
  return { title, favicon };
}

app.post('/api/fetch-metadata', async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL is required' });
  try {
    const response = await fetch(url);
    const html = await response.text();
    const metadata = extractMetadata(html, url);
    res.json(metadata);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch metadata' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 