const mongoose = require("mongoose");

module.exports = {
  createUser: async function ({ postInput }, req) {
    try {
    } catch (err) {
      console.log("Error is ", err);
    }
    const title = postInput.title;
    const desc = postInput.desc;
    return { text: "Hello World", views: 1 };
  },
};
