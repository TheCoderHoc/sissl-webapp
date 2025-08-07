import React from "react";
import { cn } from "@/utils/cn";

interface LabeledRowProps {
  label: string;
  value?: string;
  children?: React.ReactNode;
  className?: string;
  bordered?: boolean;
}

export default function LabeledRow({
  label,
  value = "N/A",
  children,
  className,
  bordered = true,
}: LabeledRowProps) {
  return (
    <div
      className={cn(
        "w-full px-8 py-6 flex items-center gap-8",
        bordered && "border-y border-gray-500/30",
        className
      )}
    >
      <p className="text-sm text-gray-400 min-w-[120px] mb-1">{label}</p>

      {children ? (
        <div className="flex items-center gap-4">{children}</div>
      ) : (
        <p className="text-sm text-white">{value}</p>
      )}
    </div>
  );
}
