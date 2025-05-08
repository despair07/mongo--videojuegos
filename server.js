const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const videojuegosRoutes = require('./routes/videojuegos');

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a la base de datos "juegos"
mongoose.connect('mongodb+srv://duvan:1234567f@cluster0.otqxm.mongodb.net/juegos')
  .then(() => {
    console.log('Conectado a la base de datos juegos');
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB', err);
  });

app.use('/videojuegos', videojuegosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
