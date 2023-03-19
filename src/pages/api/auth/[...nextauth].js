import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "../../../../backend/config/dbConnect";
import User from "../../../../backend/models/user";
import dotenv from "dotenv";
dotenv.config();

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "credentials",

      async authorize(credentials, req) {
        dbConnect();
        const { email, password } = credentials;

        const existUser = await User.findOne({ email });

        if (!existUser) {
          throw new Error("Invalid email or password");
        }
        const isPasswordMatch = await bcrypt.compare(
          password,
          existUser.password
        );
        if (!isPasswordMatch) {
          throw new Error("Invalid email or password");
        }

        return existUser;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;
      delete session?.user?.password;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET
};

export default NextAuth(authOptions);
