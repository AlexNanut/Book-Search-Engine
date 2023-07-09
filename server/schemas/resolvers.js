const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async(parent,args,context) => {

        }
    }, 
    Mutation:{
        addUser:async (parent, {username, email, password}) => {

        }, 
        login:  async(parent, {email, password}) => {

        },
         saveBook: async(parent, args, context) => {

         },
        removeBook: async(parent,args, conntext) => {

          }
    }
}

module.exports = resolvers;