// Se importa la librería mongoose para trabajar con MongoDB
const mongoose = require('mongoose');

// Se crea un esquema (estructura) para los usuarios
const userSchema = new mongoose.Schema({

  // Campo "nombre": tipo texto (String) y es obligatorio
  nombre: { type: String, required: true },

  // Campo "correo": tipo texto (String), obligatorio y único (no se repite)
  correo: { type: String, required: true, unique: true }

}, { 
  // timestamps: agrega automáticamente dos campos:
  // createdAt (fecha de creación) y updatedAt (fecha de actualización)
  timestamps: true 
});

// Se crea y exporta el modelo "User"
// Esto permite interactuar con la colección "users" en la base de datos
module.exports = mongoose.model('User', userSchema);