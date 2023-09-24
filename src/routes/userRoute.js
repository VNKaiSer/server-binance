const express = require('express');
const router = express.Router();
const authRoutes = require('../controllers/userController');

router.post('/addUsers', authRoutes.addUsers);

module.exports = router;