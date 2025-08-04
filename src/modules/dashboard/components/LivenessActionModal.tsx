"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import useGetLivenessAction from "../controllers/useGetLivenessActionController";
import { Result } from "../models/livenessAction";

interface LivenessActionsModalProps {
    open: boolean;
    onClose: () => void;
    value: string[];
    onSave: (selected: string[]) => void;
}

export default function LivenessActionsModal({
    open,
    onClose,
    value,
    onSave,
}: LivenessActionsModalProps) {
    const [selected, setSelected] = useState<string[]>([]);
    const [showDefaultNotice, setShowDefaultNotice] = useState(false);

    const { data, isLoading, isError } = useGetLivenessAction();

    const actionList: Result[] = Array.isArray(data)
        ? data.filter(
              (action): action is Result =>
                  typeof action.id === "string" &&
                  typeof action.name === "string"
          )
        : [];

    useEffect(() => {
        if (open && Array.isArray(data)) {
            const nameToId = new Map(actionList.map((a) => [a.name, a.id]));
            setSelected(
                value
                    .map((name) => nameToId.get(name))
                    .filter(Boolean) as string[]
            );
        }
    }, [open, value, data]);

    const toggle = (actionId: string) => {
        setSelected((prev) =>
            prev.includes(actionId)
                ? prev.filter((id) => id !== actionId)
                : [...prev, actionId]
        );
    };

    const handleSave = () => {
        if (selected.length === 0) {
            setShowDefaultNotice(true);
        } else {
            onSave(selected);
        }
    };

    const handleDefaultConfirm = () => {
        setShowDefaultNotice(false);
        const fallback = actionList.find((a) => a.name === "Face Rotation");
        if (fallback) {
            onSave([fallback.id]);
        }
    };

    return (
        <>
            {/* Main Modal */}
            <Dialog.Root open={open} onOpenChange={onClose}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/70 z-50" />
                    <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[348px] bg-[#0a0a0a] border border-gray-700 rounded-lg p-6 z-50 max-h-[90vh] overflow-y-auto">
                        <Dialog.Close asChild>
                            <button
                                aria-label="Close"
                                className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200"
                            >
                                <X className="w-4 h-4 text-black" />
                            </button>
                        </Dialog.Close>

                        <Dialog.Title asChild>
                            <h2 className="text-white text-xl font-bold mb-2">
                                Liveness Actions
                            </h2>
                        </Dialog.Title>
                        <Dialog.Description asChild>
                            <p className="text-white text-sm leading-relaxed mb-4">
                                Users are required to use at least one action.
                                If none is selected,{" "}
                                <strong>“Face Rotation”</strong> will be used by
                                default.
                            </p>
                        </Dialog.Description>

                        <div className="space-y-3 mb-6">
                            {isLoading ? (
                                <p className="text-white">Loading actions...</p>
                            ) : isError ? (
                                <p className="text-red-400">
                                    Failed to load actions.
                                </p>
                            ) : actionList.length > 0 ? (
                                actionList.map((action) => (
                                    <label
                                        key={action.id}
                                        className="flex items-center space-x-2 cursor-pointer"
                                    >
                                        <Checkbox
                                            checked={selected.includes(
                                                action.id
                                            )}
                                            onCheckedChange={() =>
                                                toggle(action.id)
                                            }
                                        />
                                        <span className="text-white">
                                            {action.name}
                                        </span>
                                    </label>
                                ))
                            ) : (
                                <p className="text-white">
                                    No actions available.
                                </p>
                            )}
                        </div>

                        <div className="flex justify-between">
                            <Button
                                variant="outline"
                                className="text-white"
                                onClick={onClose}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="bg-yellow-400 hover:bg-yellow-300 text-black"
                                onClick={handleSave}
                            >
                                Save
                            </Button>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

            {/* Default fallback notice modal */}
            <Dialog.Root
                open={showDefaultNotice}
                onOpenChange={setShowDefaultNotice}
            >
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/70 z-[60]" />
                    <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[348px] bg-[#0a0a0a] border border-gray-700 rounded-lg p-6 z-[70] text-center max-h-[90vh] overflow-y-auto">
                        <Dialog.Close asChild>
                            <button
                                aria-label="Close default notice"
                                className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200"
                            >
                                <X className="w-4 h-4 text-black" />
                            </button>
                        </Dialog.Close>

                        <Dialog.Title asChild>
                            <h2 className="text-white text-xl font-bold mb-4">
                                Liveness Actions
                            </h2>
                        </Dialog.Title>
                        <Dialog.Description asChild>
                            <p className="text-white text-sm leading-relaxed mb-6">
                                No actions were selected. The default action{" "}
                                <strong>“Face Rotation”</strong> will be used.
                            </p>
                        </Dialog.Description>

                        <Button
                            className="bg-white text-black w-full rounded-md hover:bg-gray-200"
                            onClick={handleDefaultConfirm}
                        >
                            Okay
                        </Button>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
}
