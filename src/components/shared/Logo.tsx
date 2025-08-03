import Link from "next/link";
import useSidebarStore from "@/stores/sideBarStore";
import { LogoSmall } from "../../../public/icons";

export default function Logo() {
    const { isOpen } = useSidebarStore();

    return (
        <div className="p-3">
            <Link
                href="/"
                className={`flex items-center transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "gap-4 pb-5 justify-start"
                        : " border-none justify-center"
                }`}
            >
                <div className="flex-shrink-0">
                    <LogoSmall className="h-6 w-6" />
                </div>

                <span
                    className={`font-bold text-2xl bg-gradient-to-r from-black to-si_yellow dark:from-white dark:to-yellow-300 bg-clip-text text-transparent dark:drop-shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen
                            ? "opacity-100 ml-2 max-w-[200px]"
                            : "opacity-0 ml-0 max-w-0"
                    }`}
                >
                    SISSL
                </span>
            </Link>
        </div>
    );
}
