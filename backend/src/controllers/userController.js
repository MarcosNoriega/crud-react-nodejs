const userController = {}
const User = require('../models/User');

userController.index = async (req, res) => {
    let users = await User.find();

    res.json(users);
}

userController.create = async (req, res) => {
    let user = await new User(req.body);
    user.save();

    res.json({mensaje: 'ok'});

}

userController.update = async (req, res) => {
    let {id} = req.params;
    await User.findByIdAndUpdate(id, req.body);

    res.json({mensaje: 'ok'});
}

userController.delete = async (req, res) => {
    let {id} = req.params;
    let user = await Note.findByIdAndDelete(id);

    res.json({mensaje: 'nota eliminada correctamente', user});
}

module.exports = userController;