const Character = require('../models/Character');

const characterController = {};

characterController.getCharacterSheet = async (req, res) => {
    try {
        const characterId = req.params.id;
        // Fetch character data from the database
        const character = await Character.findById(characterId);
        if (!character) {
            return res.status(404).send('Character not found');
        }
        // Render the characterSheet.pug template with the character data
        res.render('characterSheet', { character });
    } catch (error) {
        console.error('Error fetching character:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = characterController;
