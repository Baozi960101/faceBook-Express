const db = require("../../models");
const Comment = db.Comment;

const commentController = {
  postArticle: (req) => {
    const { UserId, content } = req.body;
    Comment.create({
      UserId,
      content,
      img: "",
      awesomel: 0,
    });
  },
  get: (req, res) => {
    const id = req.params.id;
    Comment.findOne({
      where: {
        id,
      },
    }).then((result) => {
      return res.json({ result });
    });
  },
  updateArticle: (req, res) => {
    const { UserId, id, content } = req.body;
    Comment.update(
      {
        content: content,
      },
      {
        where: {
          UserId,
          id,
        },
      }
    );
  },
  deleteArticle: (req, res) => {
    const { UserId, id } = req.body;
    Comment.findOne({
      where: {
        UserId,
        id,
      },
    }).then((res) => {
      return res.destroy();
    });
  },
};

module.exports = commentController;
