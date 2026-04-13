// Se importa el framework Express para crear el servidor
const express = require('express');

// Se importa dotenv para manejar variables de entorno (.env)
const dotenv = require('dotenv');

// Se importa cors para permitir peticiones desde otros dominios
const cors = require('cors');

// Se importa la función para conectar a la base de datos
const connectDB = require('./Config/db');

// Se importan las rutas relacionadas con usuarios
const userRoutes = require('./routes/user.routes');

// Se configuran las variables de entorno
dotenv.config();

// Se establece la conexión con la base de datos
connectDB();

// Se crea la aplicación de Express
const app = express();

// Se habilita CORS (permite que el backend reciba peticiones de otros orígenes)
app.use(cors());

// Middleware para que el servidor entienda datos en formato JSON
app.use(express.json());

// Se define la ruta base para las rutas de usuarios
// Todas las rutas dentro de userRoutes empezarán con /api/users
app.use('/api/users', userRoutes);

// Se define el puerto del servidor (desde .env o por defecto 3000)
const PORT = process.env.PORT || 3000;

// Se inicia el servidor y se muestra un mensaje en consola
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));