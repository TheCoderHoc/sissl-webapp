// DashboardItem.tsx
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { isValidElement, ReactNode } from "react";

export interface DashboardItemProps {
    title: string;
    description?: ReactNode;
    middleContent?: ReactNode;
    actionType?: "button" | "switch";
    actionText?: string;
    /** for switch controls */
    checked?: boolean;
    /** for both buttons and switches */
    onChange?: () => void;
}

export default function DashboardItem({
    title,
    description,
    middleContent,
    actionType = "button",
    actionText = "Change",
    checked = false,
    onChange,
}: DashboardItemProps) {
    return (
        <div className="grid grid-cols-3 items-center gap-4">
            <div className="space-y-2">
                <h3 className="text-white">{title}</h3>
                {description && isValidElement(description) ? (
                    description
                ) : (
                    <p className="text-gray-500">
                        {description ?? "Not Provided"}
                    </p>
                )}
            </div>

            <div className="text-gray-500">{middleContent}</div>

            <div>
                {actionType === "button" ? (
                    <Button size="lg" onClick={onChange}>
                        {actionText}
                    </Button>
                ) : (
                    actionType === "switch" && (
                        <Switch checked={checked} onCheckedChange={onChange} />
                    )
                )}
            </div>
        </div>
    );
}
