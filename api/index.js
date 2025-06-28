const express = require('express');
const app = express();

app.use(express.json());
app.get('/ping', (req, res) => res.send('pong'));

// Exporta como função para o Vercel
module.exports = app;