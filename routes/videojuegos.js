const express = require('express');
const router = express.Router();
const Videojuego = require('../models/Videojuegoo');  // Asegúrate que este nombre coincida

// 1. Obtener videojuegos por consola
router.get('/consola/:consola', async (req, res) => {
  try {
    const videojuegos = await Videojuego.find({ consola: req.params.consola });
    res.json(videojuegos);
  } catch (error) {
    console.error('Error al obtener videojuegos por consola:', error);
    res.status(500).json({ message: 'Error al obtener videojuegos por consola' });
  }
});

// 2. Obtener videojuegos con precio menor a un valor
router.get('/precio/lt/:precio', async (req, res) => {
  try {
    const videojuegos = await Videojuego.find({ precio: { $lt: req.params.precio } });
    res.json(videojuegos);
  } catch (error) {
    console.error('Error al obtener videojuegos por precio:', error);
    res.status(500).json({ message: 'Error al obtener videojuegos por precio' });
  }
});

// 3. Obtener videojuegos con multijugador y stock mayor a 0
router.get('/multijugador/stock/gt/:stock', async (req, res) => {
  try {
    const videojuegos = await Videojuego.find({ multijugador: true, stock: { $gt: req.params.stock } });
    res.json(videojuegos);
  } catch (error) {
    console.error('Error al obtener videojuegos multijugador:', error);
    res.status(500).json({ message: 'Error al obtener videojuegos multijugador' });
  }
});

// 4. Contar videojuegos por consola
router.get('/count/consola/:consola', async (req, res) => {
  try {
    const count = await Videojuego.countDocuments({ consola: req.params.consola });
    res.json({ total: count });
  } catch (error) {
    console.error('Error al contar videojuegos por consola:', error);
    res.status(500).json({ message: 'Error al contar videojuegos por consola' });
  }
});

// 5. Obtener videojuegos con precio mayor a un valor, solo nombre y precio
router.get('/precio/gt/:precio/nombre-precio', async (req, res) => {
  try {
    const videojuegos = await Videojuego.find(
      { precio: { $gt: req.params.precio } },
      { nombre: 1, precio: 1, _id: 0 }
    );
    res.json(videojuegos);
  } catch (error) {
    console.error('Error al obtener videojuegos por precio:', error);
    res.status(500).json({ message: 'Error al obtener videojuegos por precio' });
  }
});

module.exports = router;
