const { Post } = require("../models");

const postdata = [
  {
    post_title: "Whats the difference between a chicken and a duck-way?",
    post_content: "About 3 pounds",
    user_id: 1,
  },
  {
    post_title: "What is the best programming language?",
    post_content: "Too many to choose from!",
    user_id: 2,
  },
  {
    post_title: "What is the meaning of life?",
    post_content: "To sit at a computer a program!",
    user_id: 3,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
