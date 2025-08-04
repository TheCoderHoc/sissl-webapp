import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Card } from "../ui/card";
import Logo from "../shared/Logo";
import useSidebarStore from "@/stores/sideBarStore";
import useUserStore from "@/stores/userStore";
import { cn } from "@/utils/cn";
import BuildingIcon from "../../../public/icons/Building";
import { getSidebarNavLinks } from "@/modules/dashboard/constants/sidebar-links";

interface User {
    is_company?: boolean;
    company_name?: string;
    is_onboarding_completed?: boolean;
}

interface SubHref {
    label: string;
    href: string;
    Icon: React.ComponentType<{ stroke?: string }>;
    usePathHref?: boolean;
}

interface NavigationLinkData {
    label: string;
    href: string;
    Icon: React.ComponentType<{ stroke?: string }>;
    disabled?: boolean;
    subHrefs?: SubHref[];
}

type UserType =
    | "company"
    | "individual"
    | "subAdmin"
    | "accountant"
    | "superAdmin";

const getUserType = (user: User | null): UserType => {
    if (!user) return "individual";
    return "accountant";
};

const isSubHrefActive = (
    searchParams: URLSearchParams,
    href: string
): boolean => {
    const cleanHref = href.replace("/", "");
    const tabValue = searchParams.get("tab");
    return tabValue === cleanHref;
};

const isMainLinkActive = (
    pathname: string,
    href: string,
    subHrefs?: SubHref[],
    searchParams?: URLSearchParams
): boolean => {
    const isPathActive =
        pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

    const isSubLinkActiveCheck =
        subHrefs && searchParams
            ? subHrefs.some((subHref) => {
                  const cleanHref = subHref.href.replace("/", "");
                  return searchParams.get("tab") === cleanHref;
              })
            : false;

    return isPathActive || isSubLinkActiveCheck;
};

interface SubNavigationProps {
    subHrefs: SubHref[];
    searchParams: URLSearchParams;
    isOpen: boolean;
}

const SubNavigation: React.FC<SubNavigationProps> = ({
    subHrefs,
    searchParams,
    isOpen,
}) => {
    const pathname = usePathname();

    if (!subHrefs || !isOpen) return null;

    return (
        <ul className="space-y-4 pl-5 mt-2">
            {subHrefs.map(({ label, Icon, href, usePathHref }) => {
                const isActive = usePathHref
                    ? pathname === href
                    : isSubHrefActive(searchParams, href);

                const linkHref = usePathHref
                    ? href
                    : `?tab=${href.replace("/", "")}`;

                return (
                    <li key={label} className="flex items-center gap-2">
                        <Link
                            href={linkHref}
                            className={cn(
                                "px-2.5 py-2 block rounded-lg transition-colors text-sm font-medium",
                                isActive
                                    ? "text-primary bg-black"
                                    : "text-white hover:bg-gray-800"
                            )}
                        >
                            <span className="flex items-center gap-3">
                                <Icon
                                    stroke={
                                        isActive ? "var(--primary)" : "#fff"
                                    }
                                />
                                <span>{label}</span>
                            </span>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

interface NavigationLinkProps extends NavigationLinkData {
    isActive: boolean;
    isOpen: boolean;
    searchParams: URLSearchParams;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
    label,
    href,
    Icon,
    disabled = false,
    subHrefs,
    isActive,
    isOpen,
    searchParams,
}) => {
    const isDisabled = disabled || !!subHrefs;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isDisabled) {
            e.preventDefault();
        }
    };

    const LinkContent = (
        <span
            className={cn(
                "flex items-center gap-3",
                !isOpen && "justify-center"
            )}
        >
            <Icon stroke={isActive ? "#000" : "#fff"} />
            {isOpen && <span className="text-sm font-medium">{label}</span>}
        </span>
    );

    return (
        <div>
            {isDisabled ? (
                <div
                    className={cn(
                        "px-2.5 py-2 block rounded-lg transition-colors cursor-default",
                        isActive ? "bg-primary text-black" : "text-white",
                        subHrefs
                            ? "hover:bg-gray-800"
                            : "bg-[#D1D5DB26] opacity-70"
                    )}
                >
                    {LinkContent}
                </div>
            ) : (
                <Link
                    href={href}
                    className={cn(
                        "px-2.5 py-2 block rounded-lg transition-colors",
                        isActive
                            ? "bg-primary text-black"
                            : "text-white hover:bg-gray-800"
                    )}
                >
                    {LinkContent}
                </Link>
            )}

            {subHrefs && (
                <SubNavigation
                    subHrefs={subHrefs}
                    searchParams={searchParams}
                    isOpen={isOpen}
                />
            )}
        </div>
    );
};

interface CompanyInfoCardProps {
    isOpen: boolean;
    companyName: string;
    isOnboardingCompleted: boolean;
}

const CompanyInfoCard: React.FC<CompanyInfoCardProps> = ({
    isOpen,
    companyName,
    isOnboardingCompleted,
}) => {
    if (!isOpen) return null;

    return (
        <Card className="bg-gray-700 px-3 py-4 flex items-start gap-4">
            <BuildingIcon />
            <div>
                <h3 className="text-lg font-semibold text-white">
                    {companyName}
                </h3>
                {!isOnboardingCompleted && (
                    <p className="text-gray-400 text-sm">
                        Unverified,&nbsp;
                        <Link
                            href="/verify"
                            className="text-primary text-sm hover:underline"
                        >
                            click to verify
                        </Link>
                    </p>
                )}
            </div>
        </Card>
    );
};

interface SidebarOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const SidebarOverlay: React.FC<SidebarOverlayProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-10 bg-black/40 backdrop-blur-sm md:hidden"
        />
    );
};

export function DashboardSidebar(): React.ReactElement {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const user = useUserStore((state) => state.user) as User | null;
    const { isOpen, setIsOpen } = useSidebarStore();

    const {
        is_company = false,
        company_name = "",
        is_onboarding_completed = false,
    } = user || {};

    const userType = getUserType(user);
    const sidebarLinks = getSidebarNavLinks(is_onboarding_completed);
    const links = (sidebarLinks[userType] as NavigationLinkData[]) || [];

    const handleCloseSidebar = (): void => setIsOpen(false);

    return (
        <aside className="h-full bg-black">
            <SidebarOverlay isOpen={isOpen} onClose={handleCloseSidebar} />

            <div className="h-full bg-black space-y-3 p-3">
                <Logo />

                {is_company && (
                    <CompanyInfoCard
                        isOpen={isOpen}
                        companyName={company_name}
                        isOnboardingCompleted={is_onboarding_completed}
                    />
                )}

                <nav className="space-y-2">
                    {isOpen && (
                        <h3 className="text-gray-500 text-sm font-medium">
                            Main Menu
                        </h3>
                    )}

                    <ul className="space-y-5 mt-2">
                        {links.map((linkProps) => {
                            const {
                                label,
                                href,
                                disabled = false,
                                subHrefs,
                            } = linkProps;
                            const isActive = isMainLinkActive(
                                pathname,
                                href,
                                subHrefs,
                                searchParams
                            );

                            return (
                                <li key={`${label}-${href}`}>
                                    <NavigationLink
                                        {...linkProps}
                                        isActive={isActive}
                                        isOpen={isOpen}
                                        searchParams={searchParams}
                                        disabled={disabled}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </aside>
    );
}
