"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useWindowScroll } from "react-use";

import { cn } from "@/utils/cn";
import { ChevronDown, Menu, X } from "lucide-react";

// import { Chart, SubMenuIcon, Logo } from "@/";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/shared/ThemeToggle";
import { Chart, Logo, SubMenuIcon } from "../../../public/icons";

// NAV_LINKS constant
export const NAV_LINKS = [
    {
        title: "Solution",
        header: "SISSL Solution",
        description: "All the tools to verify, manage, and host—securely",
        subLinks: [
            {
                title: "Staff Validation",
                description: "Automate employee onboarding",
                href: "/solution/staff-validation",
                icon: Chart,
            },
            {
                title: "Guest Access",
                description:
                    "Invite and manage attendees to secured company events",
                href: "/solution/guest-access",
                icon: Chart,
            },
            {
                title: "Event Hosting",
                description:
                    "Create events with customizable ticketing and access rules",
                href: "/solution/event-hosting",
                icon: Chart,
            },
        ],
    },
    {
        title: "Product",
        header: "Product",
        description: "All the tools to verify, manage, and host—securely",
        subLinks: [
            {
                title: "Smart Security Products",
                description: "Modern hardware for modern security",
                href: "/product/smart-security-product",
                icon: Chart,
            },
            {
                title: "Verification Tools",
                description:
                    "Fast, reliable digital verification to screen, validate, and grant access",
                href: "/product/verification-tools",
                icon: Chart,
            },
        ],
    },
    {
        title: "Use Case",
        href: "/use-case",
    },
    {
        title: "Developer",
        href: "/developer",
    },
    {
        title: "Company",
        header: "Company",
        description: "All the tools to verify, manage, and host—securely",
        subLinks: [
            {
                title: "Career",
                description: "Automate employee onboarding",
                href: "/company/career",
            },
            {
                title: "About Us",
                description:
                    "Invite and manage attendees to secured company events",
                href: "/company/about",
            },
            {
                title: "Pricing",
                description:
                    "Create events with customizable ticketing and access rules",
                href: "/company/pricing",
            },
        ],
    },
    {
        title: "Contact Us",
        href: "/contact-us",
    },
];

interface NavItem {
    title: string;
    href?: string;
    header?: string;
    description?: string;
    subLinks?: {
        title: string;
        href: string;
        description: string;
        icon?: React.ElementType;
    }[];
}

interface SubLink {
    title: string;
    description: string;
    href: string;
    icon?: React.ElementType;
}

// MobileNav Component
const MobileNav = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

    const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
    const toggleDropdown = (index: number) =>
        setActiveDropdown((prev) => (prev === index ? null : index));

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
    };

    const renderSubLinks = (subLinks: SubLink[]) =>
        subLinks.map((subLink, subIndex) => (
            <Link
                key={`mobile-sublink-${subIndex}`}
                href={subLink.href}
                className="flex items-start space-x-4 hover:bg-muted p-2 rounded-md"
                onClick={handleLinkClick}
            >
                <div className="min-w-[60px] h-[60px] bg-primary-light flex justify-center items-center" />
                <div className="flex flex-col">
                    <p className="text-black dark:text-si_white mb-1 font-semibold">
                        {subLink.title}
                    </p>
                    <p className="text-xs text-black/70 dark:text-si_white">
                        {subLink.description}
                    </p>
                </div>
            </Link>
        ));

    return (
        <>
            <ThemeToggle className="lg:hidden text-black dark:text-white" />
            <button
                className="lg:hidden p-2 px-0 ml-4 focus:outline-none"
                onClick={toggleMenu}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
                <Menu className="text-black dark:text-white" />
            </button>

            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-[99999999] bg-neutral-100 dark:bg-background text-black dark:text-white">
                    <div className="flex flex-col w-full h-full px-4 sm:px-6 xl:px-8 overflow-y-auto">
                        {/* Header */}
                        <div className="h-[103px] flex justify-between items-center z-50 bg-neutral-100 dark:bg-background">
                            <Logo className="w-[59px] h-[51px]" />

                            <button
                                className="p-2 ml-4 focus:outline-none "
                                onClick={toggleMenu}
                            >
                                <X />
                            </button>
                        </div>

                        {/* Nav Links */}
                        <div className="flex-1 p-4 space-y-4">
                            {NAV_LINKS.map((item, index) => (
                                <div
                                    key={`mobile-nav-${index}`}
                                    className="border-b border-gray-300 dark:border-gray-100 last:border-b-0 pb-4"
                                >
                                    {item.subLinks ? (
                                        <>
                                            <button
                                                className="flex items-center justify-between w-full py-2 font-medium text-black dark:text-white"
                                                onClick={() =>
                                                    toggleDropdown(index)
                                                }
                                            >
                                                <span>{item.title}</span>
                                                <ChevronDown
                                                    className={`transition-transform duration-300 size-5 stroke-black dark:stroke-white ${
                                                        activeDropdown === index
                                                            ? "rotate-180"
                                                            : ""
                                                    }`}
                                                />
                                            </button>
                                            {activeDropdown === index && (
                                                <div className="grid gap-1 w-full">
                                                    {renderSubLinks(
                                                        item.subLinks
                                                    )}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="block py-2 font-medium text-black dark:text-white"
                                            onClick={handleLinkClick}
                                        >
                                            {item.title}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="p-4 space-y-4 flex flex-col mt-auto bg-neutral-100 dark:bg-background">
                            <Link
                                href="/auth/login"
                                className="bg-si_yellow text-black p-4 px-5 rounded-full text-center font-semibold text-sm transition-all"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

// New3
const DropdownNavItem = ({
    item,
    pathname,
}: {
    item: NavItem;
    pathname: string;
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative h-full bg-white dark:bg-black"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Title + Chevron */}
            <div className="flex items-center gap-2 h-full cursor-pointer">
                <span className="text-black dark:text-white">{item.title}</span>
                <ChevronDown
                    className={`transition-transform duration-300 text-black dark:text-white ${
                        isHovered ? "rotate-180" : ""
                    }`}
                />
            </div>

            {/* DROPDOWN */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute mt-1 group-hover:flex top-full left-[-150px] transform -translate-x-1/2 w-[500px] p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-900 rounded-lg shadow-lg z-50 gap-6"
                    >
                        <div className="flex flex-row gap-5 p-4">
                            {/* Left Panel */}
                            <div className="w-2/4 pt-4">
                                <p className="mb-1 font-semibold text-black dark:text-white">
                                    {item.header}
                                </p>
                                <p className="text-xs text-black dark:text-white">
                                    {item.description}
                                </p>
                                <div className="py-8">
                                    <SubMenuIcon />
                                </div>
                            </div>

                            {/* Right Panel */}
                            <div className="w-2/4 grid">
                                {item.subLinks?.map((subLink, subIndex) => (
                                    <Link
                                        key={`sublink-${subIndex}`}
                                        href={subLink.href}
                                        className={cn(
                                            "flex items-center space-x-4 p-2 rounded-md transition-all hover:bg-gray-100 dark:hover:bg-bg_card-hover",
                                            pathname === subLink.href &&
                                                "dark:bg-bg_card-hover bg-gray-100"
                                        )}
                                    >
                                        <div className="flex flex-col">
                                            <p className="mb-1 font-semibold text-black dark:text-white">
                                                {subLink.title}
                                            </p>
                                            <p className="text-xs text-black dark:text-white">
                                                {subLink.description}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Main Navbar Component
const Navbar = () => {
    const { y } = useWindowScroll();
    const pathname = usePathname();
    const isScrolled = y > 10;

    return (
        <header
            className={cn(
                "bg-white dark:bg-black h-[103px] sticky top-0 z-50 inset-0 w-full",
                isScrolled && "mb-1"
            )}
        >
            <nav className="container mx-auto px-4 xl:px-16 relative">
                <div className="flex items-center justify-between h-[103px]">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="border-r pr-2 border-secondary dark:border-gray-700">
                            <Logo className="" />
                        </div>
                    </Link>

                    <div className="hidden lg:flex items-center space-x-10 text-sm h-full">
                        {NAV_LINKS.map((item: NavItem, index: number) =>
                            item.subLinks ? (
                                <DropdownNavItem
                                    key={`nav-${index}`}
                                    item={item}
                                    pathname={pathname}
                                />
                            ) : (
                                <Link
                                    key={`nav-${index}`}
                                    href={item.href || "#"}
                                    className={cn(
                                        "hover:text-primary transition-colors duration-200 text-black dark:text-white",
                                        item.href === pathname &&
                                            "text-si_yellow dark:text-si_yellow"
                                    )}
                                >
                                    {item.title}
                                </Link>
                            )
                        )}
                    </div>

                    <div className="flex items-center">
                        <div className="hidden lg:flex items-center space-x-4 text-sm font-semibold">
                            <Link
                                href="/auth/login"
                                className="hover:bg-si_yellow dark:hover:text-black transition-all px-5 py-4 rounded-xl text-black dark:text-white"
                            >
                                Login
                            </Link>
                            <ThemeToggle />
                        </div>
                        <MobileNav />
                    </div>
                </div>
                {isScrolled && (
                    <div className="absolute bottom-2 inset-x-0 bg-gray-200 dark:bg-gray-800 h-[1px] mx-4" />
                )}
            </nav>
        </header>
    );
};

export default Navbar;

// DropdownNavItem Component
// const DropdownNavItem = ({
//   item,
//   pathname,
// }: {
//   item: NavItem;
//   pathname: string;
// }) => (
//   <div className="relative group h-full bg-white dark:bg-black">
//     <div className="flex items-center gap-2 h-full cursor-pointer group-hover:text-black dark:group-hover:text-white">
//       <span className="text-black dark:text-white">{item.title}</span>
//       <ChevronDown className="transition-transform duration-300 group-hover:rotate-180 text-black dark:text-white" />
//     </div>
//     <div className="absolute hidden group-hover:flex top-10/12 left-1/2 transform -translate-x-1/2 w-[500px] p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-900 rounded-lg shadow-lg z-50 gap-6">
//       <div className="flex flex-row gap-5 p-4">
//         <div className="w-2/4 pt-4">
//           <p className="mb-1 font-semibold text-black dark:text-white">
//             {item.header}
//           </p>
//           <p className="text-xs text-black dark:text-white">
//             {item.description}
//           </p>
//           <div className="py-8">
//             <SubMenuIcon />
//           </div>
//         </div>
//         <div className="w-2/4 grid">
//           {item.subLinks?.map((subLink, subIndex) => (
//             <Link
//               key={`sublink-${subIndex}`}
//               href={subLink.href}
//               className={cn(
//                 "flex items-center space-x-4 p-2 rounded-md transition-all hover:bg-gray-100 dark:hover:bg-bg_card-hover",
//                 pathname === subLink.href && "dark:bg-bg_card-hover bg-gray-100"
//               )}
//             >
//               <div className="flex flex-col">
//                 <p className="mb-1 font-semibold text-black dark:text-white">
//                   {subLink.title}
//                 </p>
//                 <p className="text-xs text-black dark:text-white">
//                   {subLink.description}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
// );

// New1
// const DropdownNavItem = ({
//   item,
//   pathname,
// }: {
//   item: NavItem;
//   pathname: string;
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="relative h-full bg-white dark:bg-black"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="flex items-center gap-2 h-full cursor-pointer group group-hover:text-black dark:group-hover:text-white">
//         <span className="text-black dark:text-white">{item.title}</span>
//         <ChevronDown className="transition-transform duration-300 group-hover:rotate-180 text-black dark:text-white" />
//       </div>

//       <AnimatePresence>
//         {isHovered && (
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -20 }}
//             transition={{ duration: 0.25, ease: "easeOut" }}
//             className="absolute top-full left-0 w-[500px] p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-900 rounded-lg shadow-lg z-50 gap-6"
//           >
//             <div className="flex flex-row gap-5 p-4">
//               <div className="w-2/4 pt-4">
//                 <p className="mb-1 font-semibold text-black dark:text-white">
//                   {item.header}
//                 </p>
//                 <p className="text-xs text-black dark:text-white">
//                   {item.description}
//                 </p>
//                 <div className="py-8">
//                   <SubMenuIcon />
//                 </div>
//               </div>
//               <div className="w-2/4 grid">
//                 {item.subLinks?.map((subLink, subIndex) => (
//                   <Link
//                     key={`sublink-${subIndex}`}
//                     href={subLink.href}
//                     className={cn(
//                       "flex items-center space-x-4 p-2 rounded-md transition-all hover:bg-gray-100 dark:hover:bg-bg_card-hover",
//                       pathname === subLink.href &&
//                         "dark:bg-bg_card-hover bg-gray-100"
//                     )}
//                   >
//                     <div className="flex flex-col">
//                       <p className="mb-1 font-semibold text-black dark:text-white">
//                         {subLink.title}
//                       </p>
//                       <p className="text-xs text-black dark:text-white">
//                         {subLink.description}
//                       </p>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// New2
// const DropdownNavItem = ({
//   item,
//   pathname,
// }: {
//   item: NavItem;
//   pathname: string;
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="relative h-full bg-white dark:bg-black"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="flex items-center gap-2 h-full cursor-pointer group group-hover:text-black dark:group-hover:text-white">
//         <span className="text-black dark:text-white">{item.title}</span>
//         <ChevronDown className="transition-transform duration-300 group-hover:rotate-180 text-black dark:text-white" />
//       </div>

//       <AnimatePresence>
//         {isHovered && (
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -20 }}
//             transition={{ duration: 0.25, ease: "easeOut" }}
//             className="absolute top-full left-0 w-[500px] p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-900 rounded-lg shadow-lg z-50 gap-6"
//           >
//             <div className="flex flex-row gap-5 p-4">
//               <div className="w-2/4 pt-4">
//                 <p className="mb-1 font-semibold text-black dark:text-white">
//                   {item.header}
//                 </p>
//                 <p className="text-xs text-black dark:text-white">
//                   {item.description}
//                 </p>
//                 <div className="py-8">
//                   <SubMenuIcon />
//                 </div>
//               </div>
//               <div className="w-2/4 grid">
//                 {item.subLinks?.map((subLink, subIndex) => (
//                   <Link
//                     key={`sublink-${subIndex}`}
//                     href={subLink.href}
//                     className={cn(
//                       "flex items-center space-x-4 p-2 rounded-md transition-all hover:bg-gray-100 dark:hover:bg-bg_card-hover",
//                       pathname === subLink.href &&
//                         "dark:bg-bg_card-hover bg-gray-100"
//                     )}
//                   >
//                     <div className="flex flex-col">
//                       <p className="mb-1 font-semibold text-black dark:text-white">
//                         {subLink.title}
//                       </p>
//                       <p className="text-xs text-black dark:text-white">
//                         {subLink.description}
//                       </p>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };
