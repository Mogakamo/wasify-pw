import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
    providers: [Providers.Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  database: process.env.NEXT_PUBLIC_DATABASE_URL
}