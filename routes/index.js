const express = require('express');
const router = express.Router();

// Import the character controller
const characterController = require('../controllers/characterController');

// Define routes
router.get('/', (req, res) => {
    res.render('home');
});

module.exports = router;