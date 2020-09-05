const express = require('express');
const morgan = require('morgan');

const app = express();

/*// Development logging
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// Body parser, reading data from body into req.body
app.use(express.json());

//returns api request time
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});*/

// Routes
//app.use('api/todolist');

module.exports = app;
