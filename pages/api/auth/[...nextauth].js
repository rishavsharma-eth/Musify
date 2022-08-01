import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL, //This is the url at which we will send the request for the user authorization for certain features 
    }),
    // ...add more providers here
  ],
})