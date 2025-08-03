"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";
import { SessionProvider } from "@/components/providers/session-provider";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 3000 * 60 * 5,
        },
    },
});

interface ProvidersProps {
    children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    // const publicRoutes = [
    //     "/",
    //     "/admin",
    //     "/auth/login",
    //     "/auth/register",
    //     "/auth/forgot-password",
    //     "/auth/reset-password",
    //     "/auth/account-type",
    //     "/auth/verify-otp",
    //     "/about",
    //     "/contact-us",
    //     "/solution/*",
    //     "/company/*",
    //     "/product/*",
    //     "/use-case",
    //     "/developer",
    //     "/contact-us",
    // ];

    return (
        <QueryClientProvider client={queryClient}>
            <SessionProvider>
                <NextThemesProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem={false}
                    storageKey="theme"
                    themes={["dark"]}
                >
                    {children}
                    <ReactQueryDevtools initialIsOpen={false} />
                </NextThemesProvider>
            </SessionProvider>
        </QueryClientProvider>
    );
}
