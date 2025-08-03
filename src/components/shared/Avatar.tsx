import {
    Avatar as BaseAvatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { cn } from "@/utils/cn";
import { User } from "lucide-react";

const avatarSizes = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
    "2xl": "w-20 h-20",
    "3xl": "w-24 h-24 text-3xl",
};

interface IProps extends React.ComponentProps<"img"> {
    fallbackText: string;
    size?: keyof typeof avatarSizes;
}

export default function Avatar({
    src,
    alt,
    fallbackText,
    size = "md",
    className,
}: IProps) {
    const fallback = fallbackText
        .split(" ")
        .map((word) => word[0])
        .join()
        .replace(",", "");

    return (
        <BaseAvatar className={cn(avatarSizes[size], className)}>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback className="font-bold">
                {fallback || <User />}
            </AvatarFallback>
        </BaseAvatar>
    );
}
