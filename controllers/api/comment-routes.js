const router = require("express").Router();
const { Comment } = require("../../models/Index");
const withAuth = require('../../utils/auth');

// router.get("/", async (req, res) => {
//   try {
//     const locationData = await Location.findAll();
//     res.status(200).json(locationData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
