const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');

router.get('/', notesController.index);
router.post('/create', notesController.create);
router.put('/update/:id', notesController.update);
router.delete('/delete/:id', notesController.delete);
router.get('/show/:id', notesController.show);

module.exports = router;