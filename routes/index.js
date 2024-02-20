const express = require('express');
const router = express.Router();

// Import the character controller
const characterController = require('../controllers/characterController');
console.log("Create");
// Define routes
router.get('/', (req, res) => {
    res.render('home');
});
console.log("Create post");
module.exports = router;