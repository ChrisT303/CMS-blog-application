const router = require("express").Router();
const { Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const dbCommentData = await Comment.findAll({
      include: [User],
    });
    const comments = dbCommentData.map((comment) =>
      comment.get({ plain: true })
    );

    res.render("single-post", { comments, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      comment_text: req.body.comment_text,
      user_id: req.session.user_id,
      post_id: req.session.post_id,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deleteComment = await Comment.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(deleteComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
