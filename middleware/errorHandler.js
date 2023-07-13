const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        error: {
            message: err.message || 'Error interno del servidor',
            code: err.code || 'internal_error'
        }
    });
}

module.exports = errorHandler;