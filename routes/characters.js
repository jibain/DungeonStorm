const express = require('express');
const router = express.Router();

// Import the character controller
const characterController = require('../controllers/characterController');

// Define routes
router.get('/create', characterController.createCharacterForm);
router.post('/create', characterController.createCharacter);
router.get('/:id', characterController.getCharacterSheet);


module.exports = router;