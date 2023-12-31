const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }

  type Auth {
    token: ID!
    user: User
  }
type Book {
    authors: [String]
    image: String
    bookId: ID
    title: String
    link: String
    description: String
}
input BookInput {
    authors: [String]
    image: String
    bookId: String
    title: String
    link: String
    description: String
}
  type Query {
    
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: BookInput): User
    removeBook(bookId: ID): User
    
  }
`;

module.exports = typeDefs;