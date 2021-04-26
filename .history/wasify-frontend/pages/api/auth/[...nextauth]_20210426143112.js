import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    //Providers.Twitter({
    //    clientId: process.env.TWITTER_ID,
    //    clientSecret: process.env.TWITTER_SECRET
    //}),
    Providers.Email({
      server: {
        host: process.env,
        port: "",
        auth: {
          user: "",
          pass: "",
        },
      },
      from: "",
    }),
  ],
};

export default (req, res) => NextAuth(req,res, options)