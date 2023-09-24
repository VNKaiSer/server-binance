const express = require('express');
const router = express.Router();
const authRoutes = require('../controllers/authController');

router.post('/login', authRoutes.login);

module.exports = router;