const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getProfile, updateProfile } = require('../controllers/profileController');

// @route   GET /api/profile
// @desc    Get user profile
// @access  Private
router.get('/', authMiddleware, getProfile);

// @route   PUT /api/profile
// @desc    Update user profile
// @access  Private
router.put('/', authMiddleware, updateProfile);

module.exports = router;
