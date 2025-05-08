const mongoose = require('mongoose');

const videojuegoSchema = new mongoose.Schema({
  nombre: String,
  consola: String,
  precio: Number,
  stock: Number,
  multijugador: Boolean
});

// Este modelo está asociado con la colección "videojuegos" en la base de datos "juegos"
module.exports = mongoose.model('Videojuego', videojuegoSchema, 'videojuegos');

