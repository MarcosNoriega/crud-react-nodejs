const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Note = new schema({
    title: String,
    content: { type: String, required: true},
    author: { type: String },
    date: {type: Date, default: Date.now()}
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', Note);