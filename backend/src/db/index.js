const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notesApp')
.then(db => console.log('db connected'))
.catch(err => console.error(err));



