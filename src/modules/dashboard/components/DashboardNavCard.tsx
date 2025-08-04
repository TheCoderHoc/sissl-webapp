import { Card } from "@/components/ui/card";
import Link from "next/link";

interface IProps {
    title: string;
    description: string;
    href: string;
    mobileTitle: string;
    icon: any;
}

export default function DashboardNavCard({
    title,
    description,
    href,
    mobileTitle,
    icon: Icon,
}: IProps) {
    return (
        <Link href={href}>
            <Card
                className={`flex flex-col items-center justify-center gap-4 text-center md:px-6 md:py-12 cursor-pointer md:hover:bg-gray-700 transition-colors duration-100 border-none bg-transparent`}
            >
                <Icon />
                <h3 className="font-medium text-sm hidden md:block">{title}</h3>
                <h3 className="font-medium text-sm md:hidden">{mobileTitle}</h3>
                <p className="text-sm text-gray-500 hidden md:block">
                    {description}
                </p>
            </Card>
        </Link>
    );
}
