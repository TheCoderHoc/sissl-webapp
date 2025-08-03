import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Axios from "@/constants/api_management/MyHttpHelper";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    const loginResponse = await Axios.post("auth/login", {
                        email: credentials?.email,
                        password: credentials?.password,
                    });

                    const login = loginResponse?.data?.data;

                    console.log(login);

                    const profileResponse = await Axios.get(
                        "/accounts/profile",
                        {
                            headers: {
                                Authorization: `Bearer ${login.access}`,
                            },
                        }
                    );

                    const profile = profileResponse?.data?.data;

                    if (login && profile) {
                        return {
                            id: "",
                            accessToken: login.access,
                            isEmailVerified: login.is_email_verified,
                            accountType: login.account_type,
                            firstName: profile?.first_name,
                            lastName: profile?.last_name,
                        };
                    }
                } catch (error: any) {
                    if (error?.response?.data) {
                        throw new Error(JSON.stringify(error.response.data));
                    }
                }

                return null;
            },
        }),
    ],

    session: {
        strategy: "jwt",
    },

    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.accessToken;
                token.isEmailVerified = user.isEmailVerified;
                token.accountType = user.accountType;
                token.firstName = user.firstName;
                token.lastName = user.lastName;
            }
            return token;
        },

        async session({ session, token }) {
            session.user = {
                accessToken: token.accessToken,
                isEmailVerified: token.isEmailVerified,
                accountType: token.accountType,
                firstName: token.firstName,
                lastName: token.lastName,
            };
            return session;
        },
    },
});

export { handler as GET, handler as POST };
