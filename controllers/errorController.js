module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.statusCode || 'ERROR';

  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};
