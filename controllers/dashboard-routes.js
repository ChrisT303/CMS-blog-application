const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [User],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("all-posts", {
      layout: "dashboard",
      posts,
    });
  } catch (err) {
    res.redirect("login");
  }
});

router.get("/edit/:id", withAuth, async (req, res) => {
  const editPost = await Post.findByPk(req.params.id);
  // const editData = editPost.map((post) => post.get({plain: true}));
  console.log("editPost: ", editPost);
  res.render("edit-post", { layout: "dashboard" });
});

router.get("/create", withAuth, (req, res) => {
  res.render("create-post", {
    layout: "dashboard",
    // logged_in: true,
  });
});

module.exports = router;
