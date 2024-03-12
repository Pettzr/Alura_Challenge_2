const express = require("express");
const routes = require("./routes");
const User = require("./models/UserModel");
const cookieParser = require('cookie-parser');

User.createDefaultUser();

const app = express();
app.use(cookieParser());

routes(app);

module.exports = app;