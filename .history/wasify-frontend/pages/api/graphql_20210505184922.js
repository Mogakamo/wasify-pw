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

    type Qu
`
const resolvers = {
    Query: {
        sayHello(parents,args, context) {
            return 'Hello World'
        },
    },
}

export const config = {
    api: {
        bodyParser: false,
    },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })
export default apolloServer.createHandler({ path: 'api/graphql'})