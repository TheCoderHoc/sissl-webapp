"use client";

import { DataTable } from "@/components/shared/DataTable";
import GreetUser from "@/components/shared/GreetUser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { KYB_KYC_ROUTES } from "@/constants/routes";
import { IVerificationHistory, verificationHistoryColumns } from "@/modules/kyb-kyc/columns/verification-history";
import Image from "next/image";
import Link from "next/link";

const verificationHistory: IVerificationHistory[] = [
    {
        type: "ID Verification",
        created_by: "Adaobi Johnson",
        created_at: "2025-07-05T12:00:00Z",
        status: "approved",
        score: "87",
    },
    {
        type: "Address Verification",
        created_by: "System",
        created_at: "2025-07-04T09:30:00Z",
        status: "approved",
        score: "N/A",
    },
    {
        type: "Document Upload",
        created_by: "Zainab Bello",
        created_at: "2025-07-03T16:45:00Z",
        status: "rejected",
        score: "42",
    },
];

export default function KybKyc() {
    return (
        <section className="space-y-10 px-10">
            <GreetUser />

            <p>
                Welcome to SISSL Identity Verification Service. We provide tools
                to help you know your business and customers.
            </p>

            <div className="grid grid-cols-2">
                <div className="space-y-8">
                    <h2 className="text-lg">KYB/KYC</h2>
                    <p className="text-gray-400 font-thin">
                        Easily validate both customers and business
                    </p>

                    <div className="space-x-10 mt-10">
                        <Link href={KYB_KYC_ROUTES.COMPANY_CHECK}>
                            <Button size="lg">Check Company</Button>
                        </Link>
                        <Link href={KYB_KYC_ROUTES.INDIVIDUAL_CHECK}>
                            <Button size="lg" className="bg-yellow-100">
                                Check Individual
                            </Button>
                        </Link>
                    </div>
                </div>
                <div>
                    <Image
                        src="/images/dashboard-intro-image.svg"
                        alt="Dashboard Intro Image"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">Verification History </h2>

                <div className="flex items-center gap-5">
                    <Input
                        placeholder="Search"
                        className="bg-[#FFFFFF1A] h-10 w-[165px]"
                    />
                    <Button
                        size="lg"
                        variant="outline"
                        className="bg-transparent w-[165px]"
                    >
                        Filter
                    </Button>
                </div>
            </div>
            <DataTable
                columns={verificationHistoryColumns}
                data={verificationHistory}
            />
        </section>
    );
}
