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
                    user: process.env.EMAIL_USERNAME,
                    pass: process.EMAIL_PASSWOR
                }
            }
        })
    ]
}

export default (req, res) => NextAuth(req, res, options)