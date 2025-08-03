"use client";

import { LoaderCircle } from "lucide-react";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <LoaderCircle className="animate-spin w-10 h-10 text-si_yellow" />
    </div>
  );
}
