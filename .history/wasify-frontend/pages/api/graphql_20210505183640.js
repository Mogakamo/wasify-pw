import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql 
    type Query {
        sayHello: String
    }

const resolvers = {
    Query: {
        sayHello(parents,args, context) {
            return 'Hello'
        }
    }
}