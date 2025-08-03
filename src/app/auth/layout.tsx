import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "../../../public/icons";
import { Banner } from "../../../public/images";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="bg-[#000] grid lg:grid-cols-2 gap-8 px-4 lg:px-2 xl:px-32 w-full min-h-screen">
            <div className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-16 py-4 overflow-y-auto max-h-screen">
                <div className="w-32 sm:w-40 md:w-40 mt-4 mb-2">
                    <Link href="/">
                        <Logo className="w-full h-auto" />
                    </Link>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                    {children}
                </div>
            </div>
            <div className="hidden lg:flex h-full items-center justify-center">
                <Image src={Banner.src} alt="Banner" width={678} height={820} />
            </div>
        </main>
    );
}
