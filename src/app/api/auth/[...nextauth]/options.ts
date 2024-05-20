import dbConnect from "@/lib/dbConnect";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth"
import bcrypt from 'bcryptjs'
import UserModel from "@/model/User";

export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any, req: any): Promise<any> {
                await dbConnect()
                try {
                    const user = await UserModel.findOne({
                        $or: [
                            { email: credentials.identifier },
                            { mobile: credentials.identifier }
                        ]
                    });
                    if (!user) {
                        throw new Error('User not found!');
                    }
                    const isAuth = await bcrypt.compare(credentials.password, user.password);
                    if (isAuth) {
                        return user;
                    }
                    else {
                        throw new Error('Invalid credentials!');
                    }
                }
                catch (error: any) {
                    throw new Error(error);
                }
            }

        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token._id = user._id?.toString();
                token.isOwner = user.isOwner;
                token.isAdmin = user.isAdmin;
                token.firstname = user.firstname;
                token.lastname = user.lastname;
                token.email = user.email;
                token.mobile = user.mobile;
            }
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user._id = token._id;
                session.user.isOwner = token.isOwner;
                session.user.isAdmin = token.isAdmin;
                session.user.firstname = token.firstname;
                session.user.lastname = token.lastname;
                session.user.email = token.email;
                session.user.mobile = token.mobile;
            }
            return session
        },

    },
    pages: {
        signIn: '/login'
    },
    secret: process.env.NEXTAUTH_SECRET,

}

