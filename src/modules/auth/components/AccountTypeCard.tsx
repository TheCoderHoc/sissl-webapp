"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ReactNode } from "react";

interface IProps {
    icon: ReactNode;
    label: string;
    href: string;
}

export default function AccountTypeCard({ icon, label, href }: IProps) {
    return (
        <Card className="my-12 w-[90%] min-h-[157px] p-8 rounded-lg cursor-pointer bg-gray-700 text-gray-50 border-none">
            <Link href={href}>
                <div className="flex flex-col">
                    {icon}
                    <div className="flex items-center text-[20px] font-medium mt-6">
                        {label}
                    </div>
                </div>
            </Link>
        </Card>
    );
}
