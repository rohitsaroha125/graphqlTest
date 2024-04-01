const { buildSchema } = require("graphql");

module.exports = buildSchema(`

type Post{
    _id: ID!
    title: String!
    desc: String!
}

input PostInput{
    title: String!
    desc: String!
}

type RootMutation{
    createUser(postInput: PostInput): Post!
}

type RootQuery{
    hello: String!
}

schema{
    query: RootQuery
    mutation: RootMutation
}
`);
