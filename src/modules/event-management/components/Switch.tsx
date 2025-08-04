"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CustomSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

const Switch = ({
  checked,
  onChange,
  disabled = false,
  className,
}: CustomSwitchProps) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={cn(
        "relative inline-flex h-5 w-9 items-center rounded-full transition-colors",
        "focus-visible:ring-2 focus-visible:ring-[#00CB58] focus-visible:ring-offset-0 focus-visible:outline-none",
        checked ? "bg-[#00CB58]" : "bg-input",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <span
        className={cn(
          "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
          checked ? "translate-x-4" : "translate-x-0"
        )}
      />
    </button>
  );
};

export default Switch;
