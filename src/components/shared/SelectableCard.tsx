import { AiOutlineCheckCircle } from "react-icons/ai";
import { Card, CardHeader, CardTitle } from "../ui/card";

interface IProps {
    title: string;
    icon: React.ReactNode;
    href: string;
    isSelected: boolean;
    onChange: (href: string) => void;
}

export default function SelectableCard({
    title,
    icon,
    isSelected,
    href,
    onChange,
}: IProps) {
    return (
        <Card
            className="cursor-pointer duration-75 p-2 transition-all bg-gray-700 relative"
            onClick={() => onChange(href)}
        >
            {isSelected && (
                <span className="absolute right-6 top-4">
                    <AiOutlineCheckCircle
                        size={20}
                        className="fill-yellow-200"
                    />
                </span>
            )}

            <CardHeader className="space-y-5">
                {icon}
                <CardTitle className="font-thin">{title}</CardTitle>
            </CardHeader>
        </Card>
    );
}
