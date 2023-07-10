const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

const { register, login, } = require('../controllers/authController');
const { getUserById, updateUserById, searchUsers } = require('../controllers/userController');
 
// User registration route
router.post('/register', register);

// User login route
router.post('/login', login);

router.get('/users/:id',authMiddleware, getUserById);
router.put('/users/:id', authMiddleware, updateUserById);

router.get('/search', searchUsers)

module.exports = router;
