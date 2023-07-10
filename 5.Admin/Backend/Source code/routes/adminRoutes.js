const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const adminAuthMiddleware = require('../middlewares/adminAuthMiddleware');


// router.route('/').get(adminAuthMiddleware, getAdmin)


module.exports = router;
