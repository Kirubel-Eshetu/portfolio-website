const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const PORT = 3001;

// Serve static files
app.use(express.static('.'));

// CORS proxy for GitHub API
app.use('/api/github', createProxyMiddleware({
  target: 'https://api.github.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api/github': '',
  },
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.setHeader('User-Agent', 'GitHub-Profile-Preview');
  }
}));

// Serve the preview page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'github-profile-preview.html'));
});

app.listen(PORT, () => {
  console.log(`GitHub Profile Preview Server running at http://localhost:${PORT}`);
  console.log('Open your browser and navigate to the URL above');
});
