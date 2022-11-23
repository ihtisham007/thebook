const route = require('express').Router();

const bookController = require('../controllers/bookController');

/**
 * @swagger
 * tags:
 * name: Book
 * description: routes for book management
 *              Importent: All Methods get(getBooks), post(saveBook), patch(updateBook), delete(deleteBook)
 *              from bookController.js are used in this route
 * 
 * **/

//without any parameter it will call
route
    .route('/')
    .get(bookController.getBooks)
    .post(bookController.saveBook);

//with id parameter it will call
route
    .route('/:id')
    .patch(bookController.updateBook)
    .delete(bookController.deleteBook);

module.exports = route;