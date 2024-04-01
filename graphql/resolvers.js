const mongoose = require("mongoose");
const Post = require("../models/post");

module.exports = {
  createUser: async function ({ postInput }, req) {
    try {
      const title = postInput.title;
      const desc = postInput.desc;

      const post = new Post({
        title,
        desc,
      });
      const savedPost = await post.save();
      return { ...savedPost._doc, _id: savedPost._id.toString() };
    } catch (err) {
      console.log("Error is ", err);
    }
  },
  hello() {
    return "Hello World";
  },
};
