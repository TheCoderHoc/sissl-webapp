import { Card, CardHeader } from "@/components/ui/card";

interface IProps {
    label: string;
    value: string | number;
    trend: "upwards" | "downward";
}

export default function AnalyticCardAlt({ label, value }: IProps) {
    return (
        <Card className="p-0 rounded-none border-none">
            <CardHeader className="bg-gray-700 p-3 rounded-t-lg">
                {label}
            </CardHeader>
            <div className="flex items-center justify-between">
                <p>Chart</p>
                <div className="space-y-1">
                    <h3 className="text-2xl font-semibold">{value}</h3>
                    <p className="text-[#FFFFFF80] text-[12px]">Past 30 days</p>
                </div>
            </div>
        </Card>
    );
}
