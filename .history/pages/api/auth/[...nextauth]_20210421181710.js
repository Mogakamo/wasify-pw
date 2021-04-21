import NextAuth from 'next-auth'
import Providers from 
const options = {
    site: process.env.NEXTAUTH_URL
}

export default (req, res) => NextAuth(req, res, options)