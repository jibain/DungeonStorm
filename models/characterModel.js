const mongoose = require('mongoose');

// Define the schema for the Character model
const characterSchema = new mongoose.Schema({
    characterName: { type: String, required: true },
    race: { type: String, required: true },
    class: { type: String, required: true },
    level: { type: Number, required: true, min: 1, max: 20 } // Assuming level range is 1-20
});

// Create the Character model based on the schema
const Character = mongoose.model('Character', characterSchema);

module.exports = Character;