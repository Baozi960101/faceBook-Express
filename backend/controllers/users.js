const db = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const User = db.User;
const Comment = db.Comment;

const secretKey = "thisismynewproject";

const usersController = {
  getAll:(req,res)=>{
    Comment.findAll({
      include:{
        model:User,
        attributes:['nickName',"img"]
      },
      order: [['createdAt', 'DESC']]
    }).then((result)=>{
      return res.json({result})
    })
  },
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
      attributes: [
        "id",
        "nickName",
        "password",
        "phone",
        "email",
        "img",
        "colorMode",
      ],
      where: {
        userName: username,
      },
    }).then((user) => {
      bcrypt.compare(password, user.password, function (err, passResult) {
        if (err || !passResult) {
          return res.json({
            message: "0",
          });
        }
        const dete = user.dataValues;
        const payload = {
          id: dete.id,
          nickName: dete.nickName,
          phone: dete.phone,
          email: dete.email,
          img: dete.img,
          colorMode: dete.colorMode,
        };
        const token = jwt.sign(payload, secretKey);
        return res.json({
          user: {
            id: dete.id,
            nickName: dete.nickName,
            phone: dete.phone,
            email: dete.email,
            img: dete.img,
            colorMode: dete.colorMode,
          },
          token,
          message: "1",
        });
      });
    });
  },
  checkLogin: (req, res) => {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, secretKey);
    const { id } = decoded;
    User.findOne({
      attributes: [
        "id",
        "nickName",
        "password",
        "phone",
        "email",
        "img",
        "colorMode",
      ],
      where: {
        id: id,
      },
    }).then((user) => {
      const dete = user.dataValues;
      return res.json({
        user: {
          id: dete.id,
          nickName: dete.nickName,
          phone: dete.phone,
          email: dete.email,
          img: dete.img,
          colorMode: dete.colorMode,
        },
        token,
        message: "1",
      });
    });
  },
  changeColorMode: (req) => {
    const { id, colorMode } = req.body;
    User.update(
      {
        colorMode: colorMode,
      },
      {
        where: {
          id,
        },
      }
    );
  },
  upDateMyselfData: (req) => {
    const { id, nickname, phone, email,img } = req.body;
    User.update(
      {
        nickname,
        phone,
        email,
        img
      },
      {
        where: {
          id,
        },
      }
    );
  },
  upDateMyselfPass: (req) => {
    const { id, password } = req.body;
    bcrypt.hash(password, saltRounds, function (err, hash) {
      User.update(
        {
          password: hash,
        },
        {
          where: {
            id,
          },
        }
      );
    });
  },
};

module.exports = usersController;
