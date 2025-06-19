const express = require('express');
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const movieRoutes = require('./movieRoutes');
const theaterRoutes = require('./theaterRoutes');
const sessionRoutes = require('./sessionRoutes');
const reservationRoutes = require('./reservationRoutes');

const router = express.Router();

/**
 * Root API route - provides basic API information
 */
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Cinema App API v1',
    version: '1.0.0',
    endpoints: {
      auth: '/auth',
      users: '/users',
      movies: '/movies',
      theaters: '/theaters',
      sessions: '/sessions',
      reservations: '/reservations'
    },
    documentation: '/docs'
  });
});

/**
 * API Routes
 */
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.use('/theaters', theaterRoutes);
router.use('/sessions', sessionRoutes);
router.use('/reservations', reservationRoutes);

module.exports = router;
