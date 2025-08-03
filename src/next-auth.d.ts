import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            accessToken: string;
            isEmailVerified: boolean;
            accountType: boolean;
            firstName: string;
            lastName: string;
        };
    }

    interface User {
        accessToken: string;
        isEmailVerified: boolean;
        accountType: boolean;
        firstName: string;
        lastName: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken: string;
        isEmailVerified: boolean;
        accountType: boolean;
        firstName: string;
        lastName: string;
    }
}
