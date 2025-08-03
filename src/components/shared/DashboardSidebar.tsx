import React from "react";
import useSidebarStore from "@/stores/sideBarStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card } from "../ui/card";
import Logo from "../shared/Logo";
import useUserStore from "@/stores/userStore";
import { DASHBOARD_ROUTES } from "@/constants/routes";
import { cn } from "@/utils/cn";
import { getSidebarNavLinks } from "@/constants/sidebar-links";
import BuildingIcon from "../../../public/icons/Building";

export function DashboardSidebar() {
    const pathname = usePathname();
    const user = useUserStore((state) => state.user);
    const { is_company, company_name, is_onboarding_completed } = user || {};
    const { isOpen, setIsOpen } = useSidebarStore();

    const sidebarLinks = getSidebarNavLinks(is_onboarding_completed);
    const rawLinks = sidebarLinks["company"] ?? [];
    const links = Array.isArray(rawLinks[0]) ? rawLinks[0] : rawLinks;

    return (
        <aside className="h-full bg-black dark:bg-black">
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 z-10 bg-black/40 backdrop-blur-sm md:hidden"
                />
            )}

            <div className="h-full  bg-black space-y-3 p-3">
                <Logo />

                {isOpen && is_company && (
                    <Card className="bg-gray-700 px-3 py-4 flex items-start gap-4">
                        <BuildingIcon />
                        <div>
                            <h3 className="text-lg">{company_name}</h3>
                            {!is_onboarding_completed && (
                                <p className="text-gray-400 text-sm">
                                    Unverified,&nbsp;
                                    <Link
                                        href={
                                            DASHBOARD_ROUTES.COMPANY_COMPLIANCE_INFORMATION
                                        }
                                        className="text-main text-sm"
                                    >
                                        click to verify
                                    </Link>
                                </p>
                            )}
                        </div>
                    </Card>
                )}

                <div className="space-y-2">
                    {isOpen && (
                        <h3 className="text-gray-500 text-sm">Main Menu</h3>
                    )}

                    <div className="space-y-5 mt-2">
                        {links.map(({ label, href, Icon, disabled }, i) => {
                            const isActive = pathname.includes(href);

                            return (
                                <Link
                                    key={i}
                                    href={
                                        disabled
                                            ? DASHBOARD_ROUTES.COMPANY_COMPLIANCE_INFORMATION
                                            : href
                                    }
                                    className={cn(
                                        `px-2.5 py-2 block rounded-lg ${
                                            isActive
                                                ? "bg-main text-black"
                                                : "text-white"
                                        }`,
                                        disabled &&
                                            "bg-gray-700 cursor-not-allowed opacity-70"
                                    )}
                                >
                                    <span
                                        className={`flex items-center gap-3 ${
                                            !isOpen && "justify-center"
                                        }`}
                                    >
                                        <Icon
                                            stroke={isActive ? "#000" : "#fff"}
                                        />
                                        {isOpen && (
                                            <span className="text-sm">
                                                {label}
                                            </span>
                                        )}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </aside>
    );
}

/*  useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [setIsOpen]);
 */
