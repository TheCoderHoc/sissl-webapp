"use client";

import AccountTypeCard from "@/modules/auth/components/AccountTypeCard";
import Image from "next/image";
import { Company, Individual } from "../../../../public/icons";
import { Banner } from "../../../../public/images";
import { AUTH_ROUTES } from "@/constants/routes/auth";

const cardsData = [
    {
        icon: <Company />,
        label: "As a Company",
        href: `${AUTH_ROUTES.REGISTER}?account_type=company`,
    },
    {
        icon: <Individual />,
        label: "As an Individual",
        href: `${AUTH_ROUTES.REGISTER}?account_type=individual`,
    },
];

export default function AccountType() {
    return (
        <div className="h-full">
            <div className="block sm:hidden pt-6">
                <Image src={Banner.src} alt="Banner" width={678} height={820} />
            </div>

            <div className="text-[24px] font-[600] mb-10 text-gray-50">
                How do you want <br /> Signup?
            </div>

            {cardsData.map((card, index) => (
                <AccountTypeCard key={index} {...card} />
            ))}
        </div>
    );
}
