const express = require("express");
const app = express()
const bodyParser = require("body-parser");
const port = 5001

const usersController = require("./controllers/users")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post("/register",usersController.handleRegister)

app.post("/login",usersController.handleLogin)

app.listen(port)