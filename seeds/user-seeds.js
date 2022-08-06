const { User } = require("../models");

const userData = [
  {
    username: "Chris",
    password: "password",
  },
  {
    username: "Briscoe",
    password: "password",
  },
  {
    username: "Anne",
    password: "password",
  },
  {
    username: "Victor",
    password: "password",
  },
  {
    username: "Mohammad",
    password: "password",
  },
];

const userSeeds = () => User.bulkCreate(userData);

module.exports = userSeeds;
