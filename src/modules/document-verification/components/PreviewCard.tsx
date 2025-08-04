"use client";

import { cn } from "@/lib/utils";

type DocumentPreviewCardProps = {
  src?: string;
  fallbackText?: string;
  className?: string;
  preview?: boolean;
};

export default function PreviewCard({
  src,
  fallbackText = "ID card uploaded",
  className,
  preview,
}: DocumentPreviewCardProps) {
  return (
    <div className="mt-4 mb-8 px-8">
      {preview && (
        <p className="text-sm text-gray-400 mb-6 opacity-60">
          Document preview
        </p>
      )}

      <div
        className={cn(
          "bg-[#111928] max-w-[375px] h-[187px] flex items-center justify-center text-gray-300 rounded-md text-sm overflow-hidden",
          className
        )}
      >
        {src ? (
          <img
            src={src}
            alt="Document preview"
            className="object-contain max-h-full max-w-full"
          />
        ) : (
          fallbackText
        )}
      </div>
    </div>
  );
}
