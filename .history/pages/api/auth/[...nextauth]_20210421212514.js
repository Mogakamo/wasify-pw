import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
const options = {
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, //30 days
  },
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        secure: true,
        auth: {
          user: process.env.EMAIL_,
          pass: process.EMAIL_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options)