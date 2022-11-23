const express = require('express');

const apiRoutes = require('./routes/apiRoutes');
const globalErrorHandler = require('./controllers/errorController');

const application = express();

application.use(express.json());

//handle invalid routes (404) (all) GET,POST,PUT/PATCH,DELETE
// application.all('*',(req, res, next) => {
//     next(new AppError('This route does not exist', 404));
// })


application.use('/api/v1/book', apiRoutes);
application.use(globalErrorHandler);

module.exports = application;