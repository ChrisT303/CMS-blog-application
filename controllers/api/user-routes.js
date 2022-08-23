const router = require("express").Router();
const { User } = require("../../models");

router.post("/", (req, res) => {
  User.create(req.body).then((userData) => {
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  });
});

router.post("/login", (req, res) => {
    User.findOne({where: { username: req.body.username }}).then(async userData=> {

      if (!userData) return res.status(400).json({ message: "User account not found" });
      const validPassword = await userData.checkPassword(req.body.password);
      if (!validPassword) return res.status(400).json({ message: "Incorrect password or account" });

      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        // req.session.password = userData.password;
        req.session.logged_in = true;

        res.json({ user: userData, message: "You are now logged in!" });
      });
    });
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
