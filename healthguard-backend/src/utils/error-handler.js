const logger = require('./logger');

const errorHandler = (err, req, res, next) => {
  // Log the error
  logger.error(err.stack);

  // Set the status code
  let statusCode = err.status || 500;

  // Customize the error response
  let errorResponse = {
    message: err.message || 'Internal Server Error',
    code: statusCode
  };

  // Add additional error details if available
  if (err.errors) {
    errorResponse.errors = err.errors;
  }

  // Send the error response
  res.status(statusCode).json(errorResponse);
};

module.exports = errorHandler;