const Usuario = require("../models/Usuario");

// CREAR
exports.crear = async (req, res) => {
  try {
    const nuevo = new Usuario(req.body);
    await nuevo.save();
    res.json({ mensaje: "Usuario creado", data: nuevo });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// LISTAR
exports.listar = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
};

// BUSCAR POR ID
exports.buscar = async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  res.json(usuario);
};

// ACTUALIZAR
exports.actualizar = async (req, res) => {
  const actualizado = await Usuario.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(actualizado);
};

// ELIMINAR
exports.eliminar = async (req, res) => {
  await Usuario.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Usuario eliminado" });
};
