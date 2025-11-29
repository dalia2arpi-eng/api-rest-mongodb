const express = require("express");
const router = express.Router();
const usuario = require("../controllers/usuarioController");

// CRUD
router.post("/", usuario.crear);
router.get("/", usuario.listar);
router.get("/:id", usuario.buscar);
router.put("/:id", usuario.actualizar);
router.delete("/:id", usuario.eliminar);

module.exports = router;
