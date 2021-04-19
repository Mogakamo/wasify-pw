import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
    Providers.Google({
        clientId: process.env.GOOGLE_CLIENT
    })
}