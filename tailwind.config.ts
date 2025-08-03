import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                main: "#F5E800",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                si_white: "#F3F4f6",
                si_yellow: "#F5E900",
                si_grey: "#1E2432",
                dash_blue: "#1C64F2",
                dash_black: "#030302",
                bg_card: {
                    DEFAULT: "#020201",
                    hover: "#060606",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
                sidebar: {
                    DEFAULT: "hsl(var(--sidebar-background))",
                    foreground: "hsl(var(--sidebar-foreground))",
                    primary: "hsl(var(--sidebar-primary))",
                    "primary-foreground":
                        "hsl(var(--sidebar-primary-foreground))",
                    accent: "hsl(var(--sidebar-accent))",
                    "accent-foreground":
                        "hsl(var(--sidebar-accent-foreground))",
                    border: "hsl(var(--sidebar-border))",
                    ring: "hsl(var(--sidebar-ring))",
                },
            },
            fontFamily: {
                primary: ["Overused Grotesk", "sans-serif"],
                almarai: ["var(--font-poppins)", "sans-serif"],
            },
            keyframes: {
                shake: {
                    "0%, 100%": {
                        transform: "translateX(0)",
                    },
                    "20%": {
                        transform: "translateX(-10px)",
                    },
                    "40%": {
                        transform: "translateX(10px)",
                    },
                    "60%": {
                        transform: "translateX(-10px)",
                    },
                    "80%": {
                        transform: "translateX(10px)",
                    },
                },
                "slide-in-left": {
                    "90%": {
                        transform: "translateX(-100%)",
                        opacity: "0",
                    },
                    "100%": {
                        transform: "translateX(0)",
                        opacity: "1",
                    },
                },
                "slide-in-right": {
                    "0%": {
                        transform: "translateX(100%)",
                        opacity: "0",
                    },
                    "100%": {
                        transform: "translateX(0)",
                        opacity: "1",
                    },
                },
                "slide-in-top": {
                    "0%": {
                        transform: "translateY(-100%)",
                        opacity: "0",
                    },
                    "100%": {
                        transform: "translateY(0)",
                        opacity: "1",
                    },
                },
                "slide-in-bottom": {
                    "0%": {
                        transform: "translateY(100%)",
                        opacity: "0",
                    },
                    "100%": {
                        transform: "translateY(0)",
                        opacity: "1",
                    },
                },
            },
            animation: {
                shake: "shake 0.5s ease-in-out",
                "slide-in-left": "slide-in-left 0.5s ease-out forwards",
                "slide-in-right": "slide-in-right 0.5s ease-out forwards",
                "slide-in-top": "slide-in-top 0.5s ease-out forwards",
                "slide-in-bottom": "slide-in-bottom 0.5s ease-out forwards",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require("tailwind-scrollbar")({ nocompatible: true }), //Installed tailwind scrollbar
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require("tailwind-scrollbar-hide"), //Installed tailwind scrollbar hide
        require("tailwindcss-animate"),
    ],
} satisfies Config;
