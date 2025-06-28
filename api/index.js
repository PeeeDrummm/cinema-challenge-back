const express = require('express');
const app = express();

// Exemplo de rota
app.get('/ping', (req, res) => {
  res.send('pong');
});

// Exporta como Serverless function para Vercel
module.exports = app;