const express = require('express');
const { 
  getSessions, 
  getSessionById, 
  createSession, 
  updateSession, 
  deleteSession,
  resetSessionSeats
} = require('../controllers/sessionController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Sessions
 *   description: API for managing movie sessions
 */

/**
 * @swagger
 * /sessions:
 *   get:
 *     summary: Get all movie sessions
 *     tags: [Sessions]
 */
router.get('/', getSessions);

/**
 * @swagger
 * /sessions/{id}:
 *   get:
 *     summary: Get a session by ID
 *     tags: [Sessions]
 */
router.get('/:id', getSessionById);

/**
 * @swagger
 * /sessions:
 *   post:
 *     summary: Create a new session
 *     tags: [Sessions]
 *     security:
 *       - bearerAuth: []
 */
router.post('/', protect, authorize('admin'), createSession);

/**
 * @swagger
 * /sessions/{id}:
 *   put:
 *     summary: Update a session
 *     tags: [Sessions]
 *     security:
 *       - bearerAuth: []
 */
router.put('/:id', protect, authorize('admin'), updateSession);

/**
 * @swagger
 * /sessions/{id}:
 *   delete:
 *     summary: Delete a session
 *     tags: [Sessions]
 *     security:
 *       - bearerAuth: []
 */
router.delete('/:id', protect, authorize('admin'), deleteSession);

/**
 * @swagger
 * /sessions/{id}/reset-seats:
 *   put:
 *     summary: Reset all seats in a session to available status
 *     tags: [Sessions]
 *     security:
 *       - bearerAuth: []
 */
router.put('/:id/reset-seats', protect, authorize('admin'), resetSessionSeats);

module.exports = router;
