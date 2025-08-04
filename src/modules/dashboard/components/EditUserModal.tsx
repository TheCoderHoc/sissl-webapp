"use client";

import { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IUser } from "@/modules/company/dashboard/columns/user-columns";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDownIcon } from "lucide-react";

interface EditUserModalProps {
    open: boolean;
    onClose: () => void;
    user: IUser | null;
}

const roles = ["Admin", "Owner", "Developer"];
const crudPermissions = ["Create", "Edit", "Delete"];

export default function EditUserModal({
    open,
    onClose,
    user,
}: EditUserModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone_number: "",
        role: "",
        permissionRole: "",
        crudAction: "",
    });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
                phone_number: user.phone_number,
                role: user.role,
                permissionRole: user.role, // Default permission role same as user role
                crudAction: "", // Set to existing permission if available
            });
        }
    }, [user]);

    const handleChange = (key: string, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Updated user:", formData);
        onClose();
    };

    if (!user) return null;

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="bg-black text-white max-w-md rounded-xl px-6 py-8">
                <DialogHeader>
                    <DialogTitle className="text-lg mb-2">
                        Edit user
                    </DialogTitle>
                    <p className="text-sm text-muted-foreground mb-4">
                        Edit Team member details
                    </p>
                </DialogHeader>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Full name */}
                    <div>
                        <Label>
                            Full name
                            <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                            value={formData.name}
                            onChange={(e) =>
                                handleChange("name", e.target.value)
                            }
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <Label>
                            Email address
                            <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                            value={formData.email}
                            onChange={(e) =>
                                handleChange("email", e.target.value)
                            }
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <Label>Phone number</Label>
                        <Input
                            value={formData.phone_number}
                            onChange={(e) =>
                                handleChange("phone_number", e.target.value)
                            }
                        />
                    </div>

                    {/* Role Dropdown */}
                    <div>
                        <Label>
                            Role<span className="text-red-500 ml-1">*</span>
                        </Label>
                        <SelectPrimitive.Root
                            value={formData.role}
                            onValueChange={(val) => handleChange("role", val)}
                        >
                            <SelectPrimitive.Trigger
                                className="flex items-center justify-between w-full bg-[#111] text-white border border-gray-700 px-4 py-2 rounded-md mt-1"
                                aria-label="Role"
                            >
                                <SelectPrimitive.Value placeholder="Assign role" />
                                <SelectPrimitive.Icon>
                                    <ChevronDownIcon className="text-white" />
                                </SelectPrimitive.Icon>
                            </SelectPrimitive.Trigger>

                            <SelectPrimitive.Portal>
                                <SelectPrimitive.Content className="bg-[#111] border border-gray-700 rounded-md text-white mt-1 shadow-lg z-50">
                                    <SelectPrimitive.Viewport className="p-2">
                                        {roles.map((role) => (
                                            <SelectPrimitive.Item
                                                key={role}
                                                value={role}
                                                className="px-4 py-2 rounded hover:bg-gray-800 focus:bg-gray-800 cursor-pointer"
                                            >
                                                <SelectPrimitive.ItemText>
                                                    {role}
                                                </SelectPrimitive.ItemText>
                                            </SelectPrimitive.Item>
                                        ))}
                                    </SelectPrimitive.Viewport>
                                </SelectPrimitive.Content>
                            </SelectPrimitive.Portal>
                        </SelectPrimitive.Root>
                    </div>

                    {/* CRUD Buttons - Above Permission Dropdown */}
                    <div>
                        <Label>
                            Allowed Action
                            <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {crudPermissions.map((action) => (
                                <button
                                    key={action}
                                    type="button"
                                    className={`px-4 py-1 rounded-full border text-sm transition-colors ${
                                        formData.crudAction === action
                                            ? "bg-white text-black"
                                            : "bg-[#111] border-gray-600 text-white hover:bg-gray-800"
                                    }`}
                                    onClick={() =>
                                        handleChange("crudAction", action)
                                    }
                                >
                                    {action}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Permission Role Dropdown (Below buttons) */}
                    <div>
                        <Label>
                            Permission Role
                            <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <SelectPrimitive.Root
                            value={formData.permissionRole}
                            onValueChange={(val) =>
                                handleChange("permissionRole", val)
                            }
                        >
                            <SelectPrimitive.Trigger
                                className="flex items-center justify-between w-full bg-[#111] text-white border border-gray-700 px-4 py-2 rounded-md mt-1"
                                aria-label="Permission Role"
                            >
                                <SelectPrimitive.Value placeholder="Select permission role" />
                                <SelectPrimitive.Icon>
                                    <ChevronDownIcon className="text-white" />
                                </SelectPrimitive.Icon>
                            </SelectPrimitive.Trigger>

                            <SelectPrimitive.Portal>
                                <SelectPrimitive.Content className="bg-[#111] border border-gray-700 rounded-md text-white mt-1 shadow-lg z-50">
                                    <SelectPrimitive.Viewport className="p-2">
                                        {roles.map((permRole) => (
                                            <SelectPrimitive.Item
                                                key={permRole}
                                                value={permRole}
                                                className="px-4 py-2 rounded hover:bg-gray-800 focus:bg-gray-800 cursor-pointer"
                                            >
                                                <SelectPrimitive.ItemText>
                                                    {permRole}
                                                </SelectPrimitive.ItemText>
                                            </SelectPrimitive.Item>
                                        ))}
                                    </SelectPrimitive.Viewport>
                                </SelectPrimitive.Content>
                            </SelectPrimitive.Portal>
                        </SelectPrimitive.Root>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-end gap-4 pt-6">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onClose}
                            className="border border-gray-500 text-white"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="bg-yellow-400 hover:bg-yellow-300 text-black"
                        >
                            Save
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
