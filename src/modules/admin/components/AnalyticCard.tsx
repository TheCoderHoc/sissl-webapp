import { Card } from "@/components/ui/card";
import Image from "next/image";

interface IProps {
    label: string;
    value: string | number;
    icon: string;
}

export default function AnalyticCard({ label, value, icon }: IProps) {
    return (
        <Card className="px-4 py-2 border-gray-700">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-sm">{label}</h3>
                    <p className="text-2xl font-medium">{value}</p>
                </div>

                <Image src={icon} alt={label} width={32} height={32} />
            </div>

            <hr className="border-gray-700" />

            <p className="text-[#00CB58] text-sm">
                +3.65% <span className="text-gray-400">from 600</span>
            </p>
        </Card>
    );
}
