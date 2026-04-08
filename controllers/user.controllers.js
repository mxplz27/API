const User = require('../Models/user.model');

// Obtener todos los usuarios
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// Crear usuario
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

// ✅ ACTUALIZAR POR ID
const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body, // 👈 actualiza lo que envíes
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

// ✅ ELIMINAR POR ID
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
};