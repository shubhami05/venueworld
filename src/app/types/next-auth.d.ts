import 'next-auth'
import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
    interface User {
        _id?: string;
        isOwner?: boolean;
        isAdmin?: boolean;
        firstname?: string;
        lastname?: string;
        email?:string;
        mobile?:string;
    }
    interface Session {
        user: {
            _id?: string;
            isOwner?: boolean;
            isAdmin?: boolean;
            firstname?: string;
            lastname?: string;
            email?:string;
            mobile?:string;
        } & DefaultSession['user']
    }
}

declare module "next-auth/jwt"{
    interface JWT{
        _id?: string;
        isOwner?: boolean;
        isAdmin?: boolean;
        firstname?: string;
        lastname?: string;
        email?:string;
        mobile?:string;
    }
}