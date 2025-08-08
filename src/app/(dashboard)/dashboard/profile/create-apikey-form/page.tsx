"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";

import { dashboardKey } from "@/public/images";
import { Success } from "@/public/icons";
import useCreateAPIKeyController from "@/modules/dashboard/controllers/api-webhooks/createApiKeyController";
import { useUpdateAPIKeyController } from "@/modules/dashboard/controllers/api-webhooks/updateApiKeyController";
import useGetApiKeyByIdController from "@/modules/dashboard/controllers/api-webhooks/getApiKeyByIdController"; // ✅ fixed import
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface Errors {
    apiName?: string;
    description?: string;
}

type ScopeOption = { id: string; label: string };
type ScopeGroup = { id: string; label: string; options: ScopeOption[] };

// Hardcoded scope groups (IDs are the actual API `scopes` values)
const scopeGroups: ScopeGroup[] = [
    {
        id: "identity_biometrics",
        label: "Identity & Biometric APIs",
        options: [
            { id: "view.identity_logs", label: "View/filter Identity Log" },
            { id: "verification.compare_facial_image", label: "Compare facial Image (Biometric)" },
        ],
    },
    {
        id: "identity_apis",
        label: "Identity APIs",
        options: [
            { id: "verification.verify_bvn", label: "Verify BVN" },
            { id: "verification.verify_drivers_license", label: "Verify Driver License" },
            { id: "verification.verify_nin", label: "Verify NIN" },
            { id: "verification.verify_pvc", label: "Verify PVC" },
            { id: "verification.verify_phone_number", label: "Verify Phone number" },
            { id: "verification.verify_nuban", label: "Verify Bank account" },
        ],
    },
    {
        id: "event_management",
        label: "Event Management",
        options: [
            { id: "high_profile_event", label: "High Profile event" },
            { id: "celebration_event", label: "Celebration event" },
            { id: "event_invitation", label: "Event Invitation" },
        ],
    },
    {
        id: "referee_guarantors",
        label: "Referee and Guarantors",
        options: [{ id: "referee_and_guarantors", label: "Referee and Guarantors" }],
    },
];

// Build a lookup to translate scopes_display labels back to scope ids (fallback)
const labelToScopeId: Record<string, string> = {
    "View/filter identity logs": "view.identity_logs",
    "Compare Facial Image": "verification.compare_facial_image",
    "Verify BVN": "verification.verify_bvn",
    "Verify Drivers License": "verification.verify_drivers_license",
    "Verify NIN": "verification.verify_nin",
    "Verify PVC": "verification.verify_pvc",
    "Verify Phone Number": "verification.verify_phone_number",
    "Verify Bank Account Number": "verification.verify_nuban",
    "High Profile Event": "high_profile_event",
    "Celebration Event": "celebration_event",
    "Event Invitation": "event_invitation",
    "Referee and Guarantors": "referee_and_guarantors",
};

const CreateApiKeyPage: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const isEditMode = !!id;

    const { createAPIKey } = useCreateAPIKeyController();
    const { updateAPIKey } = useUpdateAPIKeyController(id ?? "");

    // ✅ Correct hook usage
    const {
        data: apiKeyDetail,
        isLoading: isDetailLoading,
        isError: isDetailError,
    } = useGetApiKeyByIdController(id ?? "", { enabled: isEditMode });

    const [apiName, setApiName] = useState("");
    const [description, setDescription] = useState("");
    const [selectedScopes, setSelectedScopes] = useState<Set<string>>(new Set());
    const [errors, setErrors] = useState<Errors>({});
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [success, setSuccess] = useState(false);

    // ✅ Preselect from detail
    useEffect(() => {
        if (!isEditMode || !apiKeyDetail) return;
        const d = apiKeyDetail;
        setApiName(d.name ?? "");
        setDescription(d.description ?? "");

        let scopesFromApi: string[] = [];

        if (Array.isArray(apiKeyDetail.scopes) && apiKeyDetail.scopes.length) {
            scopesFromApi = apiKeyDetail.scopes;
        } else if (Array.isArray(apiKeyDetail.scopes_display) && apiKeyDetail.scopes_display.length) {
            scopesFromApi = apiKeyDetail.scopes_display
                .map((label: string) => labelToScopeId[label] || "")
                .filter((scope): scope is string => Boolean(scope)); // type guard removes null/empty
        }
        setSelectedScopes(new Set(scopesFromApi));
    }, [isEditMode, apiKeyDetail]);

    const toggleScope = (scope: string) => {
        setSelectedScopes((prev) => {
            const next = new Set(prev);
            if (next.has(scope)) next.delete(scope);
            else next.add(scope);
            return next;
        });
    };

    const isScopeSelected = (scope: string) => selectedScopes.has(scope);

    const validate = () => {
        const newErrors: Errors = {};
        if (!apiName.trim()) newErrors.apiName = "API name is required";
        if (!description.trim()) newErrors.description = "Description is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        const payload = {
            name: apiName.trim(),
            description: description.trim(),
            scopes: Array.from(selectedScopes),
        };

        setShowModal(true);
        setLoading(true);

        try {
            if (isEditMode) {
                await updateAPIKey(payload); // ✅ no id here
            } else {
                await createAPIKey(payload);
            }
            setSuccess(true);
            setTimeout(() => {
                setShowModal(false);
                router.push("/dashboard/profile?tab=3");
            }, 1500);
        } catch (err) {
            console.error(err);
            setShowModal(false);
        } finally {
            setLoading(false);
        }
    };

    const handleBack = () => {
        const lastTab = localStorage.getItem("lastTab");
        router.push(`/dashboard/profile?tab=${lastTab || "1"}`);
    };

    const showFormBody = !(isEditMode && isDetailLoading);

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col lg:flex-row">
            <section className="flex-1 p-5 flex flex-col">
                <div className="max-w-3xl w-full mx-auto flex flex-col flex-1">
                    <h1 className="text-3xl font-bold mb-8">
                        {isEditMode ? "Edit API Key" : "Create API Key"}
                    </h1>

                    {isEditMode && isDetailError && (
                        <p className="text-red-500 mb-4">Failed to load API key details.</p>
                    )}

                    {showFormBody ? (
                        <form onSubmit={handleSubmit} className="flex flex-col flex-1 justify-between">
                            <div className="space-y-8 overflow-auto pr-1">
                                <div>
                                    <label className="block text-sm mb-1">
                                        API name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        className="w-full bg-black border border-gray-700 rounded p-3 outline-none focus:border-l-4 focus:border-l-yellow-400"
                                        placeholder="API name"
                                        value={apiName}
                                        onChange={(e) => setApiName(e.target.value)}
                                    />
                                    {errors.apiName && <p className="text-red-500 text-xs mt-1">{errors.apiName}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm mb-1">
                                        API description <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        className="w-full bg-black border border-gray-700 rounded p-3 h-32 resize-none outline-none focus:border-l-4 focus:border-l-yellow-400"
                                        placeholder="Enter API description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                    {errors.description && (
                                        <p className="text-red-500 text-xs mt-1">{errors.description}</p>
                                    )}
                                </div>

                                <div className="space-y-6">
                                    {scopeGroups.map((group) => (
                                        <div key={group.id}>
                                            <label className="flex items-center font-medium mb-2 cursor-pointer select-none">
                                                {group.label}
                                            </label>
                                            <div className="pl-6 space-y-2">
                                                {group.options.map((option) => (
                                                    <label key={option.id} className="flex items-center cursor-pointer select-none">
                                                        <input
                                                            type="checkbox"
                                                            className="mr-2 h-5 w-5 border-2 border-white rounded-md text-black checked:bg-yellow-400"
                                                            checked={isScopeSelected(option.id)}
                                                            onChange={() => toggleScope(option.id)}
                                                        />
                                                        {option.label}
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center pt-10 gap-4">
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    className="w-[415px] h-[45px] rounded-[12px] border border-gray-700 hover:bg-gray-800 transition"
                                >
                                    Back
                                </button>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-[415px] h-[45px] rounded-[12px] bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition disabled:opacity-50"
                                >
                                    {loading
                                        ? isEditMode
                                            ? "Updating..."
                                            : "Creating..."
                                        : isEditMode
                                            ? "Update API Key"
                                            : "Create API keys"}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <p className="text-gray-400">Loading key details…</p>
                    )}
                </div>
            </section>

            <aside className="hidden sm:flex lg:w-1/3 p-4 md:p-6 items-center justify-center">
                <Image
                    src={dashboardKey.src}
                    alt="Key illustration"
                    className="w-64 h-64 object-contain"
                    width={64}
                    height={64}
                />
            </aside>

            {/* <Dialog.Root open={showModal}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/70 z-50" />
                    <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] border border-gray-700 rounded-lg z-50 w-[348px] h-[287px] p-6 flex flex-col items-center justify-center">
                        {success ? (
                            <>
                                <Image src={Success.src} alt="success" width={1000} height={1000} />
                                <p className="text-white text-center text-lg mt-3">
                                    API successfully {isEditMode ? "updated" : "created"}
                                </p>
                            </>
                        ) : (
                            <p className="mt-3 text-white text-lg">
                                {isEditMode ? "Updating API key..." : "Creating API key..."}
                            </p>
                        )}
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root> */}

            <Dialog.Root open={showModal}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/70 z-50" />
                    <Dialog.Content
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          bg-[#0a0a0a] border border-gray-700 rounded-lg z-50 
          w-[348px] h-[287px] p-6 flex flex-col items-center justify-center"
                    >
                        {/* Hidden title for accessibility */}
                        <VisuallyHidden>
                            <Dialog.Title>API Key Creation Status</Dialog.Title>
                        </VisuallyHidden>

                        {/* Hidden description for accessibility */}
                        <VisuallyHidden>
                            <Dialog.Description>
                                This modal shows whether the API key was successfully created or updated.
                            </Dialog.Description>
                        </VisuallyHidden>

                        {success ? (
                            <>
                                <Image
                                    src={Success.src}
                                    alt="Success"
                                    width={64} // smaller size matching UI
                                    height={64}
                                    priority
                                />
                                <p className="text-white text-center text-lg mt-3">
                                    API successfully {isEditMode ? "updated" : "created"}
                                </p>
                            </>
                        ) : (
                            <p className="mt-3 text-white text-lg">
                                {isEditMode ? "Updating API key..." : "Creating API key..."}
                            </p>
                        )}
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </main>
    );
};

export default CreateApiKeyPage;
