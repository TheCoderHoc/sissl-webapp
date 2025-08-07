"use client";

import { ChangeEvent } from "react";
import { UploadIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface UploadAreaProps {
  label: string;
  id: string;
  value?: File | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function UploadArea({
  label,
  id,
  value,
  onChange,
  className,
}: UploadAreaProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <h3 className="text-sm font-medium text-white">{label}</h3>

      <div className="relative bg-gray-900 rounded-lg min-h-[250px] flex items-center text-center text-sm text-gray-400">
        <label
          htmlFor={id}
          className="flex flex-col items-center justify-center gap-2 w-full h-full cursor-pointer px-4 py-6"
        >
          <UploadIcon size={20} className="text-yellow-400" />
          <p className="text-sm">
            <span className="text-yellow-400 font-semibold">
              Click to upload
            </span>{" "}
            <span className="text-gray-400">or Drag & Drop</span>
          </p>
          <p className="text-xs text-gray-400">jpg, png less than 5MB.</p>
          <p className="text-xs text-gray-400">
            Please ensure your document contain important info
          </p>
        </label>

        {value && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white text-xs font-medium">
            {value.name}
          </div>
        )}

        <input id={id} type="file" onChange={onChange} className="hidden" />
      </div>
    </div>
  );
}
