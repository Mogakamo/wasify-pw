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

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

let db

const apolloServer = new ApolloServer({ 
    schema,
    context: async () => {
        if (!db) {
            try {
              const dbClient = new MongoClient(process.env.MONGODB_URI, {
                  useNewUrlParser: true,
                  useUnifiedTopology: true,
              })
              if (!dbClient.isConnected()) await dbClient.connect() 
                
            } catch (e) {
                console.log('--->error while connexting with graphql context (db)', e)
            }
        }
    }
 });



export const config = {
    api: {
        bodyParser: false,
    },
}

export default apolloServer.createHandler({ path: 'api/graphql'})