"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps {
    children: React.ReactNode;
    attribute?: "class" | "style";
    defaultTheme?: string;
    enableSystem?: boolean;
}

export default function ThemeProvider({
    children,
    defaultTheme = "dark",
    enableSystem = true,
}: ThemeProviderProps) {
    console.log("ThemeProvider rendering with:", {
        defaultTheme,
        enableSystem,
    });

    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme={defaultTheme}
            enableSystem={enableSystem}
            storageKey="theme"
            themes={["light", "dark", "system"]}
        >
            {children}
        </NextThemesProvider>
    );
}
