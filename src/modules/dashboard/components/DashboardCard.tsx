import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import ConfettiIcon from "../../../../public/icons/Confetti";

interface IProps {
    title: string;
    value: string | number;
    className?: string;
}

export default function DashboardCard({ title, value, className }: IProps) {
    return (
        <Card className={cn("py-4 px-5 space-y-10 bg-[#121212]", className)}>
            <CardHeader className="font-medium p-0">
                <CardTitle className="font-thin">{title}</CardTitle>
            </CardHeader>
            <CardContent className="bg-black rounded-lg px-4 py-8 flex items-center justify-between">
                <CardDescription className="text-white text-xl font-bold">
                    {value}
                </CardDescription>

                <ConfettiIcon />
            </CardContent>
        </Card>
    );
}
