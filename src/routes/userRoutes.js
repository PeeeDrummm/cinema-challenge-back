const express = require('express');
const { 
  getUsers, 
  getUserById, 
  updateUser, 
  deleteUser 
} = require('../controllers/userController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// All routes below are protected and require admin access
router.use(protect, authorize('admin'));

router.route('/')
  .get(getUsers);

router.route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
