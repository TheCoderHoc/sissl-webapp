import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Card } from "../ui/card";
import useSidebarStore from "@/stores/sideBarStore";
import { cn } from "@/utils/cn";
import BuildingIcon from "../../../public/icons/Building";
import { getSidebarNavLinks } from "@/modules/dashboard/constants/sidebar-links";
import { useSession } from "next-auth/react";
import { DASHBOARD_ROUTES } from "@/constants/routes";
import { Logo } from "../../../public/icons";

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

    // const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    //     if (isDisabled) {
    //         e.preventDefault();
    //     }
    // };

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
                            href={
                                DASHBOARD_ROUTES.COMPANY_COMPLIANCE_INFORMATION
                            }
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

export function DashboardSidebar() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { isOpen, setIsOpen } = useSidebarStore();

    const { data: session, status } = useSession();

    const accountType = session?.user?.accountType.toLowerCase() as
        | string
        | undefined;

    const companyName = session?.user?.companyName;

    const validAccountTypes = [
        "company",
        "individual",
        "subAdmin",
        "accountant",
        "superAdmin",
    ] as const;

    const userType: (typeof validAccountTypes)[number] =
        validAccountTypes.includes(accountType as any)
            ? (accountType as (typeof validAccountTypes)[number])
            : "individual";

    const sidebarLinks = getSidebarNavLinks(false);

    const links = (sidebarLinks[userType] as NavigationLinkData[]) || [];

    return (
        <aside className="h-full overflow-y-scroll bg-black flex-[0.2] space-y-3">
            <SidebarOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />

            <div className="h-full bg-black space-y-3 p-3">
                <Logo />

                {userType === "company" && companyName && (
                    <CompanyInfoCard
                        isOpen={isOpen}
                        companyName={companyName}
                        isOnboardingCompleted={false}
                    />
                )}

                {status === "loading" ? (
                    <div className="mt-4 space-y-3">
                        <div className="h-8 bg-gray-800 rounded animate-pulse"></div>
                        <div className="h-8 bg-gray-800 rounded animate-pulse"></div>
                        <div className="h-8 bg-gray-800 rounded animate-pulse"></div>
                    </div>
                ) : (
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
                )}
            </div>
        </aside>
    );
}
