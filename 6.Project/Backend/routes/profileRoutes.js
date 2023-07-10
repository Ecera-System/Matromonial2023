const express = require('express');
const { updateProfile, getProfile, getSingleProfile } = require('../controllers/profileController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Update user profile route
router.get('/', getProfile);
router.get('/single', authMiddleware, getSingleProfile);
router.put('/profile', authMiddleware, updateProfile);

module.exports = router;
