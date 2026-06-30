import type { NextAuthOptions } from "next-auth";
import type { Role } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";

type AppUser = {
  id: string;
  email: string;
  name?: string;
  role: Role;
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email?.trim().toLowerCase();
        const password = credentials?.password;
        if (!email || !password) return null;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !user.password) return null;

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return null;

        const appUser: AppUser = {
          id: user.id,
          email: user.email,
          name: user.name ?? undefined,
          role: user.role,
        };

        return appUser;
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/auth/login" },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const appUser = user as AppUser;
        token.id = appUser.id;
        token.role = appUser.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        if (token.id) session.user.id = token.id;
        if (token.role) session.user.role = token.role;
      }
      return session;
    },
  },
};