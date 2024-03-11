const express = require("express");
const routes = require("./routes");
const User = require("./models/UsuarioModel");

const app = express();
routes(app);

User.createDefaultUser();

module.exports = app;