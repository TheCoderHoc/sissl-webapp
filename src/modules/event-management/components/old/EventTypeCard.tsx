import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";

interface IProps {
    title: string;
    photo: string;
    url: string;
    isSelected: boolean;
    onChangeEventType: (value: string) => void;
}

export default function EventTypeCard({
    title,
    photo,
    url,
    isSelected,
    onChangeEventType,
}: IProps) {
    return (
        <Card
            className="cursor-pointer hover:scale-150 duration-75 transition-all relative"
            onClick={() => onChangeEventType(url)}
        >
            {isSelected && (
                <span className="absolute right-4 top-2">
                    <AiOutlineCheckCircle
                        size={20}
                        className="fill-green-500"
                    />
                </span>
            )}

            <CardHeader className="flex items-center justify-center py-10">
                <Image src={photo} alt={title} className="w-24" width={500} height={500} />
            </CardHeader>

            <CardFooter className="bg-gray-100 py-2 text-gray-500 justify-center">
                <h3 className="text-center">{title}</h3>
            </CardFooter>
        </Card>
    );
}
