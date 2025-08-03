"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { cn } from "../../utils/cn";
import { Button } from "../ui/button";

export interface TabProps {
    label: string;
    key: string;
    children?: React.ReactNode;
    size?: number;
}

interface ITabProps {
    tabs: TabProps[];
    variant?: "default" | "button";
    className?: string;
    value?: string;
    onChange?: (key: string) => void;
    wrapperClassName?: string;
}

export default function Tabs({
    tabs,
    onChange,
    className,
    value,
    wrapperClassName,
}: ITabProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const tabParam = searchParams.get("tab");
    const defaultKey = value || tabParam || tabs[0].key;

    const [activeTabKey, setActiveTabKey] = useState(defaultKey);

    useEffect(() => {
        if (tabParam && tabParam !== activeTabKey) {
            setActiveTabKey(tabParam);
        }
    }, [tabParam, activeTabKey]);

    const handleChange = (key: string) => {
        setActiveTabKey(key);

        // Update URL with ?tab=key
        const newSearch = new URLSearchParams(
            Array.from(searchParams.entries())
        );
        newSearch.set("tab", key);
        router.push(`?${newSearch.toString()}`);

        if (onChange) {
            onChange(key);
        }
    };

    return (
        <div className="space-y-5 w-full">
            <div className="overflow-x-auto overflow-y-hidden px-2 rounded-lg scrollbar-hide w-full">
                <div
                    className={cn(
                        "flex gap-3 justify-between whitespace-nowrap pb-2 w-0 md:w-full",
                        wrapperClassName
                    )}
                >
                    {tabs.map(({ label, key, size }) => {
                        const isActiveTab = activeTabKey === key;

                        return (
                            <Button
                                key={key}
                                onClick={() => handleChange(key)}
                                style={{ minWidth: size }}
                                size="lg"
                                className={cn(
                                    "font-thin bg-primary flex-shrink-0",
                                    isActiveTab && "bg-yellow-100 font-medium",
                                    className
                                )}
                            >
                                {label}
                            </Button>
                        );
                    })}
                </div>
            </div>

            <div>{tabs.find((tab) => tab.key === activeTabKey)?.children}</div>
        </div>
    );
}
