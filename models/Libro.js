const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/biblioteca', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('Se ha conectado a la base de datos.');
}).catch(err => {
    console.log(err);
});


const LibroSchema = new mongoose.Schema({
    titulo: String,
    autor: String
}, { collation: 'libros' });

const Libro = mongoose.model('Libro', LibroSchema);

module.exports = Libro;