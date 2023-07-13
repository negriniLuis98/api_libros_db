const express = require('express');
const app = express();

const librosRouter = require('./routes/libros.js');
const errorHandler = require('./middleware/errorHandler.js');

app.use(express.json());
app.use('/v1/libros', librosRouter);
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Enlace de prueba: http://localhost:3000/v1/libros');
});