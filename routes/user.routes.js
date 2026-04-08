const express = require('express');
const router = express.Router();

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/user.controllers');

// GET
router.get('/', getUsers);

// POST
router.post('/', createUser);

// ✅ PUT → actualizar por ID
router.put('/:id', updateUser);

// ✅ DELETE → eliminar por ID
router.delete('/:id', deleteUser);

module.exports = router;