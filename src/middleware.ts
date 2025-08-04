import { withAuth } from "next-auth/middleware";
import { AUTH_ROUTES } from "./constants/routes/auth";

export default withAuth({
    pages: {
        signIn: AUTH_ROUTES.LOGIN,
    },
});

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/document-verification/:path*",
        "/event-management/:path*",
        "/fraud-risk-intelligence/:path*",
        "/identity-verification/:path*",
        "/kyb-kyc/:path*",
        "/referee-guarantor/:path*",
        "/registration-review/:path*",
        "/staff-verification/:path*",
        "/team/:path*",
        "/user-billing/:path*",
        "/user-management/:path*",
        "/verification/:path*",
        "/profile/:path*",
    ],
};
