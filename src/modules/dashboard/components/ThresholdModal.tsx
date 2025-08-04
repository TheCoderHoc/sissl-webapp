import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type ThresholdLevel = "low" | "medium" | "high";

interface ThresholdModalProps {
  open: boolean;
  onClose: () => void;
  value: ThresholdLevel;
  onSave: (value: ThresholdLevel) => void;
}

export default function ThresholdModal({
  open,
  onClose,
  value,
  onSave,
}: ThresholdModalProps) {
  const options: { label: string; color: string; value: ThresholdLevel }[] = [
    { label: "Low", color: "bg-green-500", value: "low" },
    { label: "Medium", color: "bg-red-500", value: "medium" },
    { label: "High", color: "bg-blue-500", value: "high" },
  ];

  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 z-50" />
        <Dialog.Content
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     bg-[#0a0a0a] border border-gray-700 p-6 rounded-lg z-50
                     w-[348px] h-[287px]"
        >
          {/* Close Button */}
          <Dialog.Close asChild>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
              aria-label="Close"
            >
              <X className="w-5 h-5 bg-white text-black rounded-full" />
            </button>
          </Dialog.Close>

          {/* Accessible Title */}
          <Dialog.Title asChild>
            <div className="text-white font-semibold mb-2 text-lg">
              Liveness Threshold
            </div>
          </Dialog.Title>

          {/* Accessible Description */}
          <Dialog.Description asChild>
            <p className="text-white text-sm mb-4">
              Select the level of strictness for the liveness check. Higher levels are more secure
              but may be harder to pass.
            </p>
          </Dialog.Description>

          <div className="flex w-full mb-6 rounded overflow-hidden">
            {options.map((opt) => (
              <button
                key={opt.value}
                className={`flex-1 h-10 ${opt.color} ${
                  value === opt.value ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => onSave(opt.value)}
              />
            ))}
          </div>

          <div className="flex justify-between pt-4">
            <Button variant="outline" className="text-white" onClick={onClose}>
              Cancel
            </Button>
            <Button
              className="bg-yellow-400 hover:bg-yellow-300 text-black"
              onClick={() => onSave(value)}
            >
              Save
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
