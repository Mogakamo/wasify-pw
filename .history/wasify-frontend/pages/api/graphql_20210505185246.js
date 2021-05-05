import { ApolloServer, gql } from 'apollo-server-micro'
import { makeExecutableSchema } from 'graphql-tools'
import { MongoClient } from 'mongodb'

require('dotenv').config()


const typeDefs = gql 
    `type User {
        id: ID!
        first_name: String!
        last_name: String!
        email: String!
        registered_at: Date
    }

    type Query {
        users: [User]!
    }
`
const resolvers = {
    Query: {
        users(_parent, _args, _context, _info) {
            return _context.db
                .collection('users')
                .findOne()
                .then((data) => {
                    return data.users
                })
        },
    },
}

const schema = 

export const config = {
    api: {
        bodyParser: false,
    },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })
export default apolloServer.createHandler({ path: 'api/graphql'})