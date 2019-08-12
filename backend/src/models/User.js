const mongoose = require('mongoose');
const schema = mongoose.Schema;

const User = new schema( {
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', User);