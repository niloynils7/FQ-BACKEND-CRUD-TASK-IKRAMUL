const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const app = express();

// Development logging
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// Body parser, reading data from body into req.body
app.use(express.json());

//returns api request time
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes
//app.use('api/todolist');

// for all unhandled error
app.use('*', (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
