const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('🎬 API do Cinema Challenge está no ar!');
});

app.get('/api/v1', (req, res) => {
  res.json({ status: 'ok', version: 1 });
});

// ⚠️ NÃO use app.listen()
module.exports = app;