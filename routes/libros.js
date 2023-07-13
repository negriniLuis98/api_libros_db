const express = require('express');
const librosRouter = express.Router();

const Libro = require('../models/Libro.js');

librosRouter.get('/', async (req, res) => {
    try {
        const libros = await Libro.find().collation({ locale: 'en_US', caseLevel: true });
        res.json(libros);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Error al obtener libros.' });
    }
});

librosRouter.get('/:id', async (req, res) => {
    try {
        const libro = await Libro.findById({ _id: req.params.id }).collation({ locale: 'en_US', caseLevel: true });
        res.json(libro);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Error al encontrar libro.' });
    }
});

librosRouter.post('/', async (req, res) => {
    try {
        const nuevoLibro = new Libro(req.body);
        await nuevoLibro.save();
        res.json({ ...nuevoLibro });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Error al subir libro a la base de datos.' });
    }
});

librosRouter.put('/:id', async (req, res) => {
    try {
        const libro = await Libro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ ...libro }); 
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Error al actualizar el libro en la base de datos.' });
    }
});

librosRouter.delete('/:id', async (req, res) => {
    try {
        await Libro.findByIdAndDelete(req.params.id);
        res.json({ message: 'Libro eliminado correctamente.' });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Error al eliminar el libro de la base de datos.' });
    }
});

module.exports = librosRouter;