const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5001;

const usersController = require("./controllers/users");
const commentController = require("./controllers/comments");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/all",usersController.getAll);

app.post("/register", usersController.handleRegister);

app.post("/login", usersController.handleLogin);

app.get("/checkMe", usersController.checkLogin);

app.post("/article", commentController.postArticle);

app.post("/colorMode", usersController.changeColorMode);

app.post("/upDateMyselfData", usersController.upDateMyselfData);

app.post("/upDateMyselfPass", usersController.upDateMyselfPass);

app.get("/update/:id", commentController.get);
app.post("/update/:id", commentController.updateArticle);

app.post("/delete/:id", commentController.deleteArticle);

app.listen(port);
