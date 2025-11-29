const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/mi_api");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error MongoDB:"));
db.once("open", () => console.log("MongoDB conectado correctamente"));

module.exports = db;
