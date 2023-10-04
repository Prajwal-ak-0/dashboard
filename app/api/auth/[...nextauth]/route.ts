// import NextAuth, { AuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GithubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { db } from "@/lib/db";
// import bcrypt from "bcrypt";
// import axios from "axios";

// export const authOptions: AuthOptions = {
//   adapter: PrismaAdapter(db),
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
// credentials: {
//   username: { label: "username", type: "text" },
//   passone: { label: "passone", type: "password" },
//   passtwo: { label: "passtwo", type: "password" },
// },
//       async authorize(credentials, req) {
//         const res = await axios.post('/api/login', credentials);
//         const user = res.data;

//         // If no error and we have user data, return it
//         if (user) {
//           console.log(res)
//           return user;
//         }
//         // Return null if user data could not be retrieved
//         return null;
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/",
//   },
//   debug: process.env.NODE_ENV === "development",
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/lib/db";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text" },
        passone: { label: "passOne", type: "password" },
        passtwo: { label: "passTwo", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);

        if (!credentials) throw new Error("No credentials provided");

        if (
          !credentials.username ||
          !credentials.passone ||
          !credentials.passtwo
        )
          throw new Error("Missing credentials");

        const userFound = await db.user.findUnique({
          where: {
            username: credentials.username,
          },
        });

        if (!userFound) {
          console.log("User not found");
          throw new Error("User not found");
        }

        if (!userFound.passOne || !userFound.passTwo) {
          console.log("Password not found");
          throw new Error("Password not found");
        }

        if(userFound.passOne===credentials.passone && userFound.passTwo===credentials.passtwo){
          console.log("Password match",userFound);
          return userFound;
        }

        console.log("Password does not match");
        throw new Error("Password does not match");
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
