// Se define un middleware de autenticación (función que se ejecuta antes de llegar a la ruta)
const authMiddleware = (req, res, next) => {

  // Se obtiene el token que viene en los headers de la petición (authorization)
  const token = req.headers.authorization;

  // Se verifica si el token es diferente al esperado
  if (token !== 'mi_token_secreto') {

    // Si no coincide, se responde con estado 401 (no autorizado)
    // y se envía un mensaje en formato JSON
    return res.status(401).json({ message: 'No autorizado' });
  }

  // Si el token es correcto, se llama a next()
  // para continuar con la siguiente función o ruta
  next();
};

// Se exporta el middleware para poder usarlo en otros archivos
module.exports = authMiddleware;