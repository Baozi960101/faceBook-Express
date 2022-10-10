const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;
const multer = require("multer");
const upload = multer();

const usersController = require("./controllers/users");
const commentController = require("./controllers/comments");
app.use(express.static('build'))

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(bodyParser.json({ limit: "50mb" }));

app.get("/all", usersController.getAll);

app.post("/register", usersController.handleRegister);

app.post("/login", usersController.handleLogin);

app.get("/checkMe", usersController.checkLogin);

app.post("/article", upload.array(), commentController.postArticle);

app.post("/colorMode", usersController.changeColorMode);

app.post("/upDateMyselfData", usersController.upDateMyselfData);

app.post("/upDateMyselfPass", usersController.upDateMyselfPass);

app.get("/update/:id", commentController.get);
app.post("/update/:id", commentController.updateArticle);

app.post("/delete/:id", commentController.deleteArticle);

app.listen(port);
