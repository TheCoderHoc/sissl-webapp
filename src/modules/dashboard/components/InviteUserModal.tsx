"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import CustomLoader from "@/components/ui/customLoader";
import { Success } from "@/public/icons";
import QRImage from "@/public/images/qr-sample.png";
import useCreateTeamController from "@/modules/company/dashboard/controllers/useCreateTeamController";

interface InviteUserModalProps {
    open: boolean;
    onClose: () => void;
}

const ROLE_OPTIONS = ["Admin", "Owner", "Developer"];
const PERMISSION_OPTIONS = ["Edit", "Create", "View", "Delete"];

export default function InviteUserModal({
    open,
    onClose,
}: InviteUserModalProps) {
    const [tab, setTab] = useState<"email" | "barcode">("email");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");
    const [isPermissionOpen, setIsPermissionOpen] = useState(false);
    const [selectedPermissions, setSelectedPermissions] = useState<string[]>(
        []
    );
    const [isRoleOpen, setIsRoleOpen] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);
    const [showBarcodeLoader, setShowBarcodeLoader] = useState(false);
    const [showBarcode, setShowBarcode] = useState(false);
    const { createTeam, isLoading } = useCreateTeamController();

    useEffect(() => {
        if (open) {
            setTab("email");
            setFullName("");
            setEmail("");
            setPhone("");
            setRole("");
            setSelectedPermissions([]);
            setIsRoleOpen(false);
            setIsPermissionOpen(false);
            setShowFeedback(false);
            setShowBarcodeLoader(false);
            setShowBarcode(false);
        }
    }, [open]);

    const isEmail = tab === "email";

    const handleInvite = async () => {
        const nameParts = fullName.trim().split(" ");
        const first_name = nameParts[0] ?? "";
        const last_name = nameParts.slice(1).join(" ") || "";

        try {
            await createTeam({
                first_name,
                last_name,
                email,
                phone_number: phone,
                role,
                invite_type: isEmail ? "Email" : "Barcode",
            });

            if (isEmail) {
                setShowFeedback(true);
                setTimeout(() => {
                    setShowFeedback(false);
                    onClose();
                }, 2000);
            } else {
                setShowBarcodeLoader(true);
                setTimeout(() => {
                    setShowBarcodeLoader(false);
                    setShowBarcode(true);
                }, 2000);
            }
        } catch (err) {
            console.error("Invite failed:", err);
        }
    };

    const handleBarcodeClose = () => {
        setShowBarcode(false);
        onClose();
    };

    return (
        <>
            <Dialog.Root open={open} onOpenChange={onClose}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/70 z-50" />
                    <Dialog.Content
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[95vw] max-w-md bg-black text-white rounded-2xl z-50 border border-white/10
              p-6 space-y-6"
                    >
                        <div className="flex items-center justify-between">
                            <Dialog.Title className="text-lg font-semibold">
                                Invite member
                            </Dialog.Title>
                            <Dialog.Close asChild>
                                <button className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black">
                                    <X className="w-4 h-4" />
                                </button>
                            </Dialog.Close>
                        </div>

                        <div>
                            {/* Description for accessibility */}
                            <Dialog.Description className="text-sm text-white mb-3">
                                Invite a team member to join your account
                            </Dialog.Description>

                            <div className="flex gap-2">
                                <Button
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                                        isEmail
                                            ? "bg-yellow-300 text-black"
                                            : "bg-white text-black/60"
                                    }`}
                                    onClick={() => setTab("email")}
                                >
                                    Email Invitation
                                </Button>
                                <Button
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                                        !isEmail
                                            ? "bg-yellow-300 text-black"
                                            : "bg-white text-black/60"
                                    }`}
                                    onClick={() => setTab("barcode")}
                                >
                                    Barcode Invitation
                                </Button>
                            </div>
                        </div>

                        <form className="space-y-5">
                            <div>
                                <label className="text-sm block mb-1">
                                    Full name{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    value={fullName}
                                    onChange={(e) =>
                                        setFullName(e.target.value)
                                    }
                                    placeholder="API name"
                                    className="w-full bg-black border border-gray-700 rounded-md px-3 py-2 outline-none focus:border-yellow-400"
                                />
                            </div>

                            <div>
                                <label className="text-sm block mb-1">
                                    Email address{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="e.g. johndoe@email.com"
                                    className="w-full bg-black border border-gray-700 rounded-md px-3 py-2 outline-none focus:border-yellow-400"
                                />
                            </div>

                            <div>
                                <label className="text-sm block mb-1">
                                    Phone number
                                </label>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="0706797565"
                                    className="w-full bg-black border border-gray-700 rounded-md px-3 py-2 outline-none focus:border-yellow-400"
                                />
                            </div>

                            <div className="relative">
                                <label className="text-sm block mb-1">
                                    Role <span className="text-red-500">*</span>
                                </label>
                                <button
                                    type="button"
                                    onClick={() =>
                                        setIsRoleOpen((prev) => !prev)
                                    }
                                    className="w-full flex justify-between items-center bg-black border border-gray-700 rounded-md px-3 py-2 outline-none focus:border-yellow-400 text-white"
                                >
                                    <span>{role || "Assign role"}</span>
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-200 ${
                                            isRoleOpen
                                                ? "rotate-180"
                                                : "rotate-0"
                                        }`}
                                    />
                                </button>
                                {isRoleOpen && (
                                    <div className="absolute mt-1 w-full bg-black border border-gray-700 rounded-md z-50">
                                        {ROLE_OPTIONS.map((r) => (
                                            <div
                                                key={r}
                                                onClick={() => {
                                                    setRole(r);
                                                    setIsRoleOpen(false);
                                                }}
                                                className="px-3 py-2 text-white text-sm hover:bg-white/10 cursor-pointer"
                                            >
                                                {r}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="text-sm block mb-1">
                                    Permission{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <div className="relative w-full">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setIsPermissionOpen((prev) => !prev)
                                        }
                                        className="w-full flex justify-between items-center bg-black border border-gray-700 rounded-md px-3 py-2 outline-none focus:border-yellow-400 text-white"
                                    >
                                        <span>
                                            {selectedPermissions.length > 0
                                                ? selectedPermissions.join(", ")
                                                : "Assign permission"}
                                        </span>
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform duration-200 ${
                                                isPermissionOpen
                                                    ? "rotate-180"
                                                    : "rotate-0"
                                            }`}
                                        />
                                    </button>
                                    {isPermissionOpen && (
                                        <div className="absolute mt-1 bg-black border border-gray-700 rounded-md w-full z-50">
                                            {PERMISSION_OPTIONS.map((perm) => {
                                                const isChecked =
                                                    selectedPermissions.includes(
                                                        perm
                                                    );
                                                return (
                                                    <label
                                                        key={perm}
                                                        className="flex items-center px-3 py-2 text-white text-sm hover:bg-white/10 cursor-pointer"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            checked={isChecked}
                                                            onChange={() => {
                                                                setSelectedPermissions(
                                                                    (prev) =>
                                                                        isChecked
                                                                            ? prev.filter(
                                                                                  (
                                                                                      p
                                                                                  ) =>
                                                                                      p !==
                                                                                      perm
                                                                              )
                                                                            : [
                                                                                  ...prev,
                                                                                  perm,
                                                                              ]
                                                                );
                                                            }}
                                                            className="mr-2 w-4 h-4 rounded border border-gray-500 bg-black text-yellow-400 focus:ring-yellow-400"
                                                        />
                                                        {perm}
                                                    </label>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </form>

                        <div className="flex justify-between pt-2">
                            <button
                                type="button"
                                onClick={onClose}
                                className="w-[48%] h-10 rounded-[12px] border border-white text-white hover:bg-white/10 transition"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={handleInvite}
                                className="w-[48%] h-10 rounded-[12px] bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
                                disabled={isLoading}
                            >
                                {isLoading
                                    ? isEmail
                                        ? "Inviting..."
                                        : "Generating..."
                                    : isEmail
                                    ? "Invite"
                                    : "Generate"}
                            </button>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

            {showFeedback && (
                <Dialog.Root open>
                    <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 bg-black/70 z-[60]" />
                        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] border border-gray-700 rounded-lg z-[61] w-[348px] h-[287px] p-6 flex flex-col items-center justify-center">
                            <Dialog.Title className="sr-only">
                                Success
                            </Dialog.Title>
                            <img src={Success.src} alt="success" />
                            <p className="text-white text-center text-lg mt-3">
                                User successfully invited
                            </p>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            )}

            {showBarcodeLoader && (
                <Dialog.Root open>
                    <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 bg-black/70 z-[60]" />
                        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] border border-gray-700 rounded-lg z-[61] w-[348px] h-[287px] p-6 flex flex-col items-center justify-center">
                            <Dialog.Title className="sr-only">
                                Generating QR
                            </Dialog.Title>
                            <CustomLoader />
                            <p className="mt-3 text-white text-lg">
                                Generating QR Code...
                            </p>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            )}

            {showBarcode && (
                <Dialog.Root open onOpenChange={handleBarcodeClose}>
                    <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 bg-black/70 z-[70]" />
                        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#000000] border border-gray-700 rounded-lg z-[71] w-[348px] h-[380px] p-6 flex flex-col items-center justify-center">
                            <Dialog.Title className="sr-only">
                                QR Code Modal
                            </Dialog.Title>
                            <p className="text-sm text-white mb-4">
                                QR Code for “{fullName}”
                            </p>
                            <div className="w-full flex justify-center mb-6">
                                <img
                                    src={QRImage.src}
                                    alt="QR Code"
                                    className="w-[200px] h-[200px] mb-4"
                                />
                            </div>
                            <div className="flex gap-8 justify-between">
                                <a
                                    href={QRImage.src}
                                    download="invite-qr.png"
                                    className="px-4 py-2 border rounded-xl border-white text-white"
                                >
                                    Download Barcode
                                </a>
                                <button className="px-4 py-2 bg-yellow-400 text-black font-medium rounded-xl">
                                    Copy link
                                </button>
                            </div>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            )}
        </>
    );
}
