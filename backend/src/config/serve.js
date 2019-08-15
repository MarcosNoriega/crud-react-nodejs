const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.set('port', process.env.PORT || 4000);

//connection to database
require('../db');

//middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use('/notes' ,require('../routes/notesRoutes'));
app.use('/users', require('../routes/usersRoutes'));


module.exports = app;