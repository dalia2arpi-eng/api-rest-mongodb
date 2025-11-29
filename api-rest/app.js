const express = require("express");
const cors = require("cors");
require("./config/db");

const app = express();
app.use(express.json());
app.use(cors());

// RUTA PRINCIPAL
app.get("/", (req, res) => {
  res.send("API funcionando");
});

// RUTA USUARIOS (CRUD)
const usuarioRoutes = require("./routes/usuarioRoutes");
app.use("/usuarios", usuarioRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Servidor activo en puerto " + PORT);
});
