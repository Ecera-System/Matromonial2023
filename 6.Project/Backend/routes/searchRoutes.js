const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { searchMatches } = require('../controllers/matchController');

router.get('/query', searchMatches);
// router.post('/api/connections', matchauthMiddleware.verifyUser, matchController.sendConnectionRequest);

// router.get('/match', authMiddleware,);



module.exports = router;
