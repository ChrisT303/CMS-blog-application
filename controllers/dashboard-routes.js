const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [User],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("dashboard", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.redirect("login");
  }
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try{
        const editPost = await Post.findByPk(req.params.id);
        const editData = editPost.map((post) => post.get({plain: true}));
        console.log(editData)
        res.render("edit-post", {
          editData,
          logged_in: req.session.logged_in,
        });
    }catch(err){
        res.status(500).json(err)
    }
  router.get('/new', (req, res) => {
    res.render('new-post');
  })
})

router.get('/new-post', withAuth, (req, res) => {
    res.render('create-post', {
      posts,
      logged_in: true,
    })
})

module.exports = router;