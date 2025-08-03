"use client";

import { Laptop, Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeToggle = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const cycleTheme = () => {
        if (theme === "system") {
            setTheme("light");
        } else if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("system");
        }
    };

    const icon =
        resolvedTheme === "light" ? (
            <Sun className="h-5 w-5 text-si_yellow" />
        ) : resolvedTheme === "dark" ? (
            <Moon className="h-5 w-5 text-muted-foreground" />
        ) : (
            <Laptop className="h-5 w-5 text-muted-foreground" />
        );

    if (!mounted) return null;

    return (
        <button
            onClick={cycleTheme}
            className="p-2 rounded-full text-xl transition duration-300 text-black dark:text-white"
            aria-label="Toggle Theme"
            {...props}
        >
            {icon}
        </button>
    );
};

export default ThemeToggle;
