import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { companyComplianceStatusInfo } from "@/modules/dashboard/constants/compliance-status-details";
import Image from "next/image";
import Link from "next/link";

export default function ComplianceStatus() {
    const status = "Pending";

    const { message, btnClassName, imageSrc, btnLabel, btnHref } =
        companyComplianceStatusInfo[status];

    return (
        <section className="space-y-10">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-thin whitespace-pre-line">
                    {message}
                </h2>
                <Button size="lg" className={cn(btnClassName, "text-white")}>
                    {status}
                </Button>
            </div>

            {imageSrc && (
                <div className="flex flex-col items-center justify-center gap-3">
                    <Image
                        src={imageSrc}
                        alt={`${status} Compliance Status`}
                        width={100}
                        height={100}
                    />

                    <Link href={btnHref}>
                        <Button size="lg" className="w-96">
                            {btnLabel}
                        </Button>
                    </Link>
                </div>
            )}
        </section>
    );
}
