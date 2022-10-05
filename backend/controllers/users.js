const db = require("../../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = db.User;

const usersController = {
  handleRegister: (req, res) => {
    const {
      creatNickname,
      creatUsername,
      creatPassword,
      creatPhone,
      creatMail,
    } = req.body;
    bcrypt.hash(creatPassword, saltRounds, function (err, hash) {
      User.create({
        nickName: creatNickname,
        userName: creatUsername,
        password: hash,
        phone: creatPhone,
        email: creatMail,
        colorMode: "light",
      }).then(() => {
        res.json({
          message: "成功訊息",
          status: "1",
        });
      });
    });
  },
  handleLogin: (req, res) => {
    const { username, password } = req.body;
    User.findOne({
      attributes: ["id","nickName","password","phone","email","img","colorMode"],
      where: {
        userName:username
      }
    })
      .then((user) => {
        bcrypt.compare(password, user.password, function (err, passResult) {
          if (err || !passResult) {
            return res.json({
                message:"0"
            })
          }
          return res.json({
            user,
            message:"1"
          })
        });
      })
  },
};

module.exports = usersController;
