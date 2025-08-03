import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Badge as BaseBadge } from "../ui/badge";

const pillVariants = cva("font-light rounded-full", {
    variants: {
        variant: {
            success: "bg-[#00CB581A] text-green-500",
            pending: "#FFA5001A text-[#FFA500]",
            inactive: "bg-[#EF3C2333] text-red-500",
        },
        size: {
            sm: "text-xs px-2 py-0.5",
            md: "text-sm px-3 py-1",
            lg: "text-base px-8 py-1.5",
        },
    },
    defaultVariants: {
        size: "md",
    },
});

interface PillProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof pillVariants> {
    children: React.ReactNode;
    className?: string;
}

export default function Pill({
    children,
    className,
    variant,
    size,
}: PillProps) {
    return (
        <BaseBadge
            className={cn(
                "bg-[#FFFFFF1A] text-white",
                pillVariants({ variant, size }),
                className
            )}
        >
            {children}
        </BaseBadge>
    );
}
