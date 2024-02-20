const characterController = {};
let nextCharacterId = 1;
const characters = {}; // This can be replaced with a database

characterController.createCharacterForm = (req, res) => {
    res.render('characterCreation');
};

characterController.createCharacter = (req, res) => {
    const characterName = req.body.characterName;
    const character = { id: nextCharacterId++, name: characterName };
    characters[character.id] = character; // Save character to "database" (in-memory object for now)
    res.redirect(`/characters/${character.id}`);
};

characterController.getCharacterSheet = (req, res) => {
    const characterId = req.params.id;
    const character = characters[characterId];
    if (!character) {
        res.status(404).send('Character not found');
    } else {
        res.render('characterSheet', { character });
    }
};

module.exports = characterController;