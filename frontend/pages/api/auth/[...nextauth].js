import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    site: process.env.NEXTAUTH_URL,
    providers: [

    ],
    database: {
        type: "mongo",
        useNewUrlParser: true,
        url: process.env.MONGODB_URI,
    },
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60 //30 days
    }
}

export default (req, res) => NextAuth(req, res, options)
