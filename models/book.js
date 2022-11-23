const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *  schemas:
 *     Book:
 *      type: object
 *     required:
 *     - title
 *     - author
 * 
 */




const bookSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: [true, 'A book must have an id'],
        unique: true
    },
    title: {
        type: String,
        required: [true, 'A book must have a title']
    },
    author:{
        type: String,
        required: [true, 'A book must have an author']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    __v: {
        type: Number,
        select: false
    }
});

const Book = mongoose.model('bookAuthor', bookSchema);

module.exports = Book;