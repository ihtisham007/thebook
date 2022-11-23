const book = require('./../models/book');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

/**
 * @swagger
 * tags:
 * name: BookController
 * description: Book management and retrieval
 *              All Methods get(getBooks), post(saveBook), patch(updateBook), delete(deleteBook)
 *
 * */ 

const getBooks = catchAsync(async (req, res, next) => {

    const features = new APIFeatures(book.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
    const books = await features.query;
    res
        .status(200)
        .json({
            status: 'success',
            data: books
        });
});

const saveBook = catchAsync(async (req, res, next) => {

    const newbook = req.body;
    console.log(newbook);
    const savedBook = await book.create(newbook);
    res
        .status(201)
        .json({
            status: 'success',
            data: savedBook
        });

});

const updateBook = catchAsync(async (req, res, next) => {
    console.log(req.body);
    const foundbook = await book.findByIdAndUpdate(req.params.id, req.body, { new: true,runValidators: true});
    if(!foundbook) return next(new AppError('No book found with that ID', 404));
    res
        .status(200)
        .json({
            status: 'success',
            data: foundbook
        });
});

const deleteBook = catchAsync(async (req, res, next) => {
    const Foundbook = await book.findByIdAndDelete(req.params.id);
    if(!Foundbook) return next(new AppError('No book found with that ID', 404));
    res
        .status(200)
        .json({
            status: 'success',
            data: Foundbook
        });

});


module.exports = {
    getBooks,
    saveBook,
    updateBook,
    deleteBook
};