const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");


router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const updatePost = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updatePost) {
      res.status(404).json({ message: "No post matches this id" });
    }
    res.status(200).json(updatePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/id", async (req, res) => {
  try {
    const deletePost = await Post.destroy({ where: { id: req.params.id } });
    res.status(200).json(deletePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
