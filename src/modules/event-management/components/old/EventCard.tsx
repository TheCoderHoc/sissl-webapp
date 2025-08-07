import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PartyIcon from "../../../../public/icons/Party";

interface IProps {
    title: string;
    description: string;
}

export default function EventCard({ title, description }: IProps) {
    return (
        <Card className="py-4 px-5 space-y-5 gap-0">
            <CardHeader className="p-0 space-y-5">
                <PartyIcon fill="#ffffff" />
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-sm">{description}</CardContent>
        </Card>
    );
}
