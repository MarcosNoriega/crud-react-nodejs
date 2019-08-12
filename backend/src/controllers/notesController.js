const Note = require('../models/Note');
const notesController = {};

notesController.index = async (req, res) => {
    let notas = await Note.find();

    res.json(notas);
};

module.exports = notesController;