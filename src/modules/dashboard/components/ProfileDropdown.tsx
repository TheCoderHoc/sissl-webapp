"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { profileDropdownLinks } from "../constants/profile-dropdown";
import useUserStore from "@/stores/userStore";

export default function ProfileDropdown() {
    const {
        user: { first_name },
        clearUser,
    } = useUserStore();

    const router = useRouter();

    const handleLogout = () => {
        clearUser();
        router.push("/auth/login");
    };

    return (
        <div className="p-2 space-y-6">
            <h3 className="text-md font-medium">
                <span className="font-normal">Hello,</span> {first_name}
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
