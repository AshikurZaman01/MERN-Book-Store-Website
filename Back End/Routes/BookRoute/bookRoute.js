const express = require('express');
const CreateBook = require('../../controllers/BookControllers/CreateBook');
const getAllBooks = require('../../controllers/BookControllers/getAllBooks');
const getSingleBook = require('../../controllers/BookControllers/getSingleBook');
const editBooks = require('../../controllers/BookControllers/editBooks');
const deleteBook = require('../../controllers/BookControllers/deleteBook');
const router = express.Router();

router.post('/create-book', CreateBook);

router.get('/getAll-books', getAllBooks);

router.get('/get-single-book/:id', getSingleBook);

router.put('/edit-book/:id', editBooks);

router.delete('/delete-book/:id', deleteBook);


module.exports = router;