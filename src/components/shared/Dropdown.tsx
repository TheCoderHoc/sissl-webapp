import { ReactNode } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface IProps {
    label?: string;
    children: ReactNode;
    menuItems: IDropdownMenu[];
}

export interface IDropdownMenu {
    key: string | number;
    label?: ReactNode;
    icon?: ReactNode;
    onClick?: () => void;
}

export default function Dropdown({ label, children, menuItems }: IProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 space-y-3" align="start">
                {label && (
                    <>
                        <DropdownMenuLabel>{label}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                    </>
                )}

                {menuItems.map(({ key, label, icon, onClick }) => (
                    <DropdownMenuItem
                        key={key}
                        className="flex items-center gap-2"
                        onClick={onClick}
                    >
                        {icon && icon}
                        {label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
