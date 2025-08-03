import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

interface IProps {
    children: React.ReactNode;
    content: React.ReactNode;
}

export default function PopOver({ children, content }: IProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>{children}</PopoverTrigger>
            <PopoverContent>{content}</PopoverContent>
        </Popover>
    );
}
