const express = require('express');
const BookController = require('../controllers/bookController');

const router = express.Router();

router.get('/items', BookController.getAll);
router.get('/items/:id', BookController.getById);
router.post('/items', BookController.create);
router.put('/items/:id', BookController.update);
router.delete('/items/:id', BookController.delete);

router.get('/items/title/:title', BookController.findByTitle);
router.get('/items/author/:author', BookController.findByAuthor);
router.get('/items/year/:year', BookController.findByYear);
router.get('/items/genre/:genre', BookController.findByGenre);

module.exports = router;
