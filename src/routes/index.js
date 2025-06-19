const express = require('express');
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const movieRoutes = require('./movieRoutes');
const theaterRoutes = require('./theaterRoutes');
const sessionRoutes = require('./sessionRoutes');
const reservationRoutes = require('./reservationRoutes');

const router = express.Router();

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
