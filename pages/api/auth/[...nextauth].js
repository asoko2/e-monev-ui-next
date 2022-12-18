import NextAuth from "next-auth/next";
import Providers from 'next-auth/providers'

require('dotenv').config()

const options = {
    site: process.env.SITE || 'http://localhost:3000',

    //Configure one or more authenticatino providers
    providers: [
        Providers.GitHub({})
    ]
}