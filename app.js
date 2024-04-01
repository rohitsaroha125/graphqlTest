const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then((result) => {
    app.listen(5000, () => {
      console.log("Server Running");
    });
  })
  .catch((err) => {
    console.log("Error is ", err);
  });
