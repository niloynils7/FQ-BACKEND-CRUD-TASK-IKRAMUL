const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const listRouter = require('./routes/listRoutes');
const app = express();

// Development logging
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// Body parser, reading data from body into req.body
app.use(express.json());

// Routes
app.use('/api/todolist', listRouter);

// for all unhandled error
app.all('*', (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
