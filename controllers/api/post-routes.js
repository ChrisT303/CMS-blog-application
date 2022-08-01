const router = require("express").Router();
const { Post, User } = require("../../models");
const withAuth = require("../../utils/auth");


router.get('/', async (req, res) => {
    const findPosts = await Post.findAll({
        attributes: [
            'id',
            'title',
            'created_at',
            'post_content',
        ],
        order: [['created_at', 'DESC']],
        
        include: [{
            model: User,
            attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username'],
          }
        }
    ]
    })
})

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

// router.put('/:id', withAuth, async (req, res) => {
//     try{
//         const [affected]
//     }
// })
