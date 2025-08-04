import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            accessToken: string;
            isEmailVerified: boolean;
            accountType: string;
            firstName: string;
            lastName: string;
            email: string;
            companyName: string;
        };
    }

    interface User {
        accessToken: string;
        isEmailVerified: boolean;
        accountType: string;
        firstName: string;
        lastName: string;
        email: string;
        companyName: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken: string;
        isEmailVerified: boolean;
        accountType: string;
        firstName: string;
        lastName: string;
        email: string;
        companyName: string;
    }
}
