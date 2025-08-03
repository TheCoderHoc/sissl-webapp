"use client";
import React from "react";
import { Menu } from "lucide-react";
import { usePageTitleStore } from "@/stores/pageTitleStore";
import useSidebarStore from "@/stores/sideBarStore";
import PopOver from "../shared/PopOver";
import Avatar from "../shared/Avatar";
import { Button } from "../ui/button";
import useUserStore from "@/stores/userStore";
import { Switch } from "../ui/switch";
import ProfileDropdown from "./ProfileDropdown";
import useToggle from "@/hooks/useToggle";
import { useTheme } from "next-themes";

const DashboardHeader = () => {
    const [isOn, setToggle] = useToggle(false);

    const theme = useTheme();
    console.log({ theme });

    const pageTitle = usePageTitleStore((state) => state.title);
    const { toggleSidebar, isOpen } = useSidebarStore();

    const {
        user: { first_name, last_name, email },
    } = useUserStore();

    return (
        <header
            className={`
        sticky top-0 z-40 flex items-center justify-between px-4 sm:px-6 py-4 bg-black border-b border-gray-800 backdrop-blur-md
        transition-all duration-300
        ${isOpen ? "hidden md:flex" : "flex"}
      `}
        >
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                    <Menu className="w-5 h-5 text-gray-700" />
                </button>
                <h1 className="text-lg font-semibold text-white">
                    {pageTitle || "Dashboard"}
                </h1>
            </div>

            <div className="flex items-center gap-20">
                <div className="flex items-center gap-2">
                    <Switch checked={isOn} onCheckedChange={setToggle} />
                    <span>{isOn ? "Live" : "Test"}</span>
                </div>

                <PopOver content={<ProfileDropdown />}>
                    <Button
                        variant="ghost"
                        className="flex items-center gap-2 no-underline py-6"
                    >
                        <Avatar size="lg" fallbackText="Dave Wilson" />
                        <div>
                            <h3>
                                {first_name} {last_name}
                            </h3>
                            <span className="font-thin text-sm">{email}</span>
                        </div>
                    </Button>
                </PopOver>
            </div>
        </header>
    );
};

export default DashboardHeader;
