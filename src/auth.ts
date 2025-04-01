
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github"; // GitHub OAuth provider
import { AUTHOR_BY_GITHUB_ID_QUERY } from "./sanity/lib/queries"; // Sanity query to fetch user by GitHub ID
import { client } from "./sanity/lib/client"; // Sanity client for reading data
import { writeClient } from "./sanity/lib/write-client"; // Sanity client for writing data

// Set up NextAuth with GitHub as the authentication provider
export const { handlers, signIn, signOut, auth } = NextAuth({
  // Define the authentication providers (GitHub in this case)
  providers: [GitHub],
  
  // Callbacks for handling specific authentication flow events
  callbacks: {
    
    // Callback for when a user signs in
    async signIn({ user, account, profile }:any) {
      try {
        const existingUser = await client.withConfig({useCdn: false}).fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id: profile?.id });
    
        if (!existingUser) {
          await writeClient.create({
            _type: 'author',
            id: profile?.Id,
            name: user?.name,
            username: profile?.login,
            email: user?.email,
            image: user?.image,
            bio: profile?.bio || "",
          });
        }
    
        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },
    

    // Callback to handle JWT creation when a user signs in
    async jwt({ token, account, profile }: any) {
      // If account and profile data are available (i.e., the user is signing in)
      if (account && profile) {
        try {
          // Fetch the user from Sanity based on GitHub ID
          const user = await client.withConfig({ useCdn: false }).fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id: profile?.id });
    
          if (user) {
            // Assign the Sanity user _id to the token
            token.id = user._id;  // Here we make sure that the Sanity ID is attached to the token
          } else {
            // If the user doesn't exist, create the user in Sanity
            const newUser = await writeClient.create({
              _type: 'author',
              id: profile?.id,
              name: user?.name,
              username: profile?.login,
              email: user?.email,
              image: user?.image,
              bio: profile?.bio || "",
            });
    
            // Assign the Sanity ID of the newly created user to the token
            token.id = newUser._id;
          }
        } catch (error) {
          console.error("Error in JWT callback:", error);
        }
      }
    
      return token;
    },
    

    // Callback for session handling, used to add additional session properties
    async session({ token, session }:any) {
      // console.log("Token: ",token)
      // Add the user's Sanity ID (from the token) to the session object
      if (token?.id) {
        Object.assign(session, { id: token.id });
      }

      // Return the session object with the added ID
      return session;
    }
  }
});
