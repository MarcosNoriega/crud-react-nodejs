const Note = require('../models/Note');
const notesController = {};

notesController.index = async (req, res) => {
    let notas = await Note.find();

    res.json(notas);
};

notesController.create = async (req, res) => {
    let note = await new Note(req.body);
    note.save();

    res.json({mensaje: 'ok'});

}

notesController.update = async (req, res) => {
    let {id} = req.params;
    await Note.findByIdAndUpdate(id, req.body);

    res.json({mensaje: 'ok'});
}

notesController.delete = async (req, res) => {
    let {id} = req.params;
    let articulo = await Note.findByIdAndDelete(id);

    res.json({mensaje: 'nota eliminada corresctamente', articulo});
}

module.exports = notesController;