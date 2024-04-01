const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolvers");

require("dotenv").config();

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
  })
);

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
