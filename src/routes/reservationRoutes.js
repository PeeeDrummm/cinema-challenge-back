const express = require('express');
const { 
  getReservations, 
  getMyReservations,
  getReservationById, 
  createReservation, 
  updateReservationStatus, 
  deleteReservation 
} = require('../controllers/reservationController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Reservations
 *   description: API for managing reservations
 */

// All routes below are protected
router.use(protect);

/**
 * @swagger
 * /reservations/me:
 *   get:
 *     summary: Get all reservations for the current user
 *     tags: [Reservations]
 *     security:
 *       - bearerAuth: []
 */
router.get('/me', getMyReservations);

/**
 * @swagger
 * /reservations:
 *   post:
 *     summary: Create a new reservation
 *     tags: [Reservations]
 *     security:
 *       - bearerAuth: []
 */
router.post('/', createReservation);

/**
 * @swagger
 * /reservations:
 *   get:
 *     summary: Get all reservations (admin only)
 *     tags: [Reservations]
 *     security:
 *       - bearerAuth: []
 */
router.get('/', authorize('admin'), getReservations);

/**
 * @swagger
 * /reservations/{id}:
 *   get:
 *     summary: Get a reservation by ID
 *     tags: [Reservations]
 *     security:
 *       - bearerAuth: []
 *   put:
 *     summary: Update reservation status (admin only)
 *     tags: [Reservations]
 *     security:
 *       - bearerAuth: []
 *   delete:
 *     summary: Delete a reservation (admin only)
 *     tags: [Reservations]
 *     security:
 *       - bearerAuth: []
 */
router.route('/:id')
  .get(getReservationById)
  .put(authorize('admin'), updateReservationStatus)
  .delete(authorize('admin'), deleteReservation);

module.exports = router;
