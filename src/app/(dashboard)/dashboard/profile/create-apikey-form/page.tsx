"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
// import useGetServices from "@/modules/dashboard/controllers/useGetServicesController";
import { dashboardKey } from "../../../../../../public/images";
import { Success } from "../../../../../../public/icons";
import Image from "next/image";

interface Errors {
    apiName?: string;
    description?: string;
}

// interface GroupedService {
//     id: string;
//     name: string;
//     services: {
//         id: string;
//         name: string;
//     }[];
// }

const CreateApiKeyPage: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const keyFromParams = searchParams.get("key");
    const isEditMode = !!keyFromParams;

    const [apiName, setApiName] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState<Errors>({});
    const [showModal, setShowModal] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    // const [groupedServices, setGroupedServices] = useState<GroupedService[]>(
    //     []
    // );
    // const [selectedServiceIds, setSelectedServiceIds] = useState<Set<string>>(
    //     new Set()
    // );

    // const { data: serviceData, isLoading } = useGetServices();

    // Fetch and transform service data
    // useEffect(() => {
    //     if (serviceData?.data?.results) {
    //         const transformed = serviceData.data.results.map((group) => ({
    //             id: group.id,
    //             name: group.name,
    //             services: (group.services || []).map((s) => ({
    //                 id: s.id,
    //                 name: s.name,
    //             })),
    //         }));
    //         setGroupedServices(transformed);
    //     }
    // }, [serviceData]);

    // Toggle individual service
    // const toggleService = (serviceId: string) => {
    //     setSelectedServiceIds((prev) => {
    //         const newSet = new Set(prev);
    //         if (newSet.has(serviceId)) {
    //             newSet.delete(serviceId);
    //         } else {
    //             newSet.add(serviceId);
    //         }
    //         return newSet;
    //     });
    // };

    // Toggle all services in a group
    // const toggleGroup = (group: GroupedService) => {
    //     const allSelected = group.services.every((service) =>
    //         selectedServiceIds.has(service.id)
    //     );
    //     setSelectedServiceIds((prev) => {
    //         const newSet = new Set(prev);
    //         group.services.forEach((service) => {
    //             if (allSelected) {
    //                 newSet.delete(service.id);
    //             } else {
    //                 newSet.add(service.id);
    //             }
    //         });
    //         return newSet;
    //     });
    // };

    // Check group checkbox
    // const isGroupChecked = (group: GroupedService) =>
    //     group.services.some((service) => selectedServiceIds.has(service.id));

    // Submit
    // const handleSubmit = (e: React.FormEvent) => {
    //   e.preventDefault();

    //   const newErrors: Errors = {};
    //   if (!apiName.trim()) newErrors.apiName = 'API name is required';
    //   if (!description.trim()) newErrors.description = 'Description is required';
    //   setErrors(newErrors);

    //   if (Object.keys(newErrors).length === 0) {
    //     setShowModal(true);

    //     const payload = {
    //       name: apiName,
    //       description,
    //       services: Array.from(selectedServiceIds),
    //     };

    //     const method = isEditMode ? 'PATCH' : 'POST';
    //     const url = isEditMode
    //       ? `/api/apikeys/${keyFromParams}`
    //       : '/api/apikeys';

    //     console.log(payload)
    //     fetch(url, {
    //       method,
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify(payload),
    //     }).then(() => {
    //       setSuccess(true);
    //       setTimeout(() => {
    //         setShowModal(false);
    //         router.push('/dashboard/profile?tab=3');
    //       }, 2000);
    //     });
    //   }
    // };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: Errors = {};
        if (!apiName.trim()) newErrors.apiName = "API name is required";
        if (!description.trim())
            newErrors.description = "Description is required";
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setShowModal(true);
            setLoading(true); // 🔒 Disable button

            const payload = {
                name: apiName,
                description,
                // services: Array.from(selectedServiceIds),
            };

            console.log("Submitting payload:", payload); // optional

            const method = isEditMode ? "PATCH" : "POST";
            const url = isEditMode
                ? `/api/apikeys/${keyFromParams}`
                : "/api/apikeys";

            fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            })
                .then(() => {
                    setSuccess(true);
                    setTimeout(() => {
                        setShowModal(false);
                        router.push("/dashboard/profile?tab=3");
                    }, 2000);
                })
                .finally(() => {
                    setLoading(false); // ✅ Re-enable button
                });
        }
    };

    const handleBack = () => {
        const lastTab = localStorage.getItem("lastTab");
        router.push(`/dashboard/profile?tab=${lastTab || "1"}`);
    };

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col lg:flex-row">
            <section className="flex-1 p-5 flex flex-col">
                <div className="max-w-3xl w-full mx-auto flex flex-col flex-1">
                    <h1 className="text-3xl font-bold mb-8">
                        {isEditMode ? "Edit API Key" : "Create API Key"}
                    </h1>

                    {loading ? (
                        <div className="flex justify-center pt-10">
                            {/* <CustomLoader /> */}
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="flex-1 flex flex-col justify-between"
                        >
                            <div className="space-y-8 overflow-auto pr-1">
                                <div>
                                    <label className="block text-sm mb-1">
                                        API name{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        value={apiName}
                                        onChange={(e) =>
                                            setApiName(e.target.value)
                                        }
                                        className="w-full bg-black border border-gray-700 rounded p-3 outline-none focus:border-l-4 focus:border-l-yellow-400"
                                        placeholder="API name"
                                    />
                                    {errors.apiName && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.apiName}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm mb-1">
                                        API description{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        value={description}
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                        className="w-full bg-black border border-gray-700 rounded p-3 h-32 resize-none outline-none focus:border-l-4 focus:border-l-yellow-400"
                                        placeholder="Enter API description"
                                    />
                                    {errors.description && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.description}
                                        </p>
                                    )}
                                </div>

                                {/* Dynamic Service Checkboxes */}
                                <div className="space-y-6">
                                    {/* {groupedServices.map((group) => (
                                        <div key={group.id}>
                                            <label className="flex items-center font-medium mb-2 cursor-pointer select-none">
                                                <input
                                                    type="checkbox"
                                                    className="mr-2 h-5 w-5 border-2 border-white rounded-md text-black checked:bg-yellow-400"
                                                    checked={isGroupChecked(
                                                        group
                                                    )}
                                                    onChange={() =>
                                                        toggleGroup(group)
                                                    }
                                                />
                                                {group.name}
                                            </label>
                                            <div className="pl-6 space-y-2">
                                                {group.services.map(
                                                    (service) => (
                                                        <label
                                                            key={service.id}
                                                            className="flex items-center cursor-pointer select-none"
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                className="mr-2 h-5 w-5 border-2 border-white rounded-md text-black checked:bg-yellow-400"
                                                                checked={selectedServiceIds.has(
                                                                    service.id
                                                                )}
                                                                onChange={() =>
                                                                    toggleService(
                                                                        service.id
                                                                    )
                                                                }
                                                            />
                                                            {service.name}
                                                        </label>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    ))} */}
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
                                    disabled={loading} // ⛔ disabled while submitting
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
                    )}
                </div>
            </section>

            <aside className="hidden sm:flex lg:w-1/3 p-4 md:p-6 items-center justify-center">
                <Image
                    src={dashboardKey.src}
                    alt="Key illustration"
                    className="w-64 h-64 object-contain"
                />
            </aside>

            <Dialog.Root open={showModal}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/70 z-50" />
                    <Dialog.Content
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-[#0a0a0a] border border-gray-700 rounded-lg z-50 w-[348px] h-[287px] p-6 flex flex-col items-center justify-center"
                    >
                        {success ? (
                            <>
                                <Image
                                    src={Success.src}
                                    alt="success"
                                    width={1000}
                                    height={1000}
                                />
                                <p className="text-white text-center text-lg mt-3">
                                    API successfully{" "}
                                    {isEditMode ? "updated" : "created"}
                                </p>
                            </>
                        ) : (
                            <>
                                {/* <CustomLoader /> */}
                                <p className="mt-3 text-white text-lg">
                                    {isEditMode ? "Updating" : "Creating"} API
                                    key...
                                </p>
                            </>
                        )}
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </main>
    );
};

export default CreateApiKeyPage;
