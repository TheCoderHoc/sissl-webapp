"use client";

import Link from "next/link";
import { profileDropdownLinks } from "@/constants/profile-dropdown";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AUTH_ROUTES } from "@/constants/routes/auth";

export default function ProfileDropdown() {
    const { data: session } = useSession();

    const router = useRouter();

    if (!session) return null;

    const {
        user: { firstName },
    } = session;

    const handleLogout = async () => {
        await signOut();
        router.push(AUTH_ROUTES.LOGIN);
    };

    return (
        <div className="p-2 space-y-6">
            <h3 className="text-md font-medium">
                <span className="font-normal">Hello,</span> {firstName}
            </h3>

            <div className="space-y-5">
                {profileDropdownLinks.map(
                    ({ key, label, href, icon: Icon }) => {
                        const isLogOut = label === "Log Out";

                        return isLogOut ? (
                            <button
                                key={key}
                                onClick={handleLogout}
                                className="flex items-center gap-4 text-red-500 w-full"
                            >
                                <Icon />
                                <span>{label}</span>
                            </button>
                        ) : (
                            <Link
                                key={key}
                                href={href}
                                className="flex items-center gap-4"
                            >
                                <Icon />
                                <span>{label}</span>
                            </Link>
                        );
                    }
                )}
            </div>
        </div>
    );
}
