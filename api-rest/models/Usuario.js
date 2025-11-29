const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  correo: {
    type: String,
    required: true,
    unique: true
  },
  edad: Number,
  creado: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
