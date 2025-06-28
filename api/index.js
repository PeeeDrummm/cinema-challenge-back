const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(express.json());

// Definições básicas do Swagger
const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Cinema Challenge API',
      version: '1.0.0',
      description: 'Documentação da API do Cinema Challenge',
    },
  },
  apis: [], // você pode adicionar aqui os arquivos com comentários @swagger se quiser
});

// Rota base da API
app.get('/', (req, res) => {
  res.send('🎬 API do Cinema Challenge está no ar!');
});

// Exemplo de rota viva
app.get('/api/v1', (req, res) => {
  res.json({ status: 'ok', version: 1 });
});

// Rota do Swagger
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Exportação serverless para Vercel
module.exports = app;