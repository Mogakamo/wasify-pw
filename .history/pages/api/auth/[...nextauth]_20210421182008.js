import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
const options = {
    site: process.env.NEXTAUTH_URL,
    providers: [
        Providers.Email({
            server: {
                port: 465,
                host: 'smtp.gmail.com',
                secure: true,
                auth: {
                    us
                }
            }
        })
    ]
}

export default (req, res) => NextAuth(req, res, options)