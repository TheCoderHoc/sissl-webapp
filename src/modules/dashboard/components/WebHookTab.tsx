"use client";

import { useState } from "react";
import { DataTable } from "@/components/shared/DataTable";
import { Button } from "@/components/ui/button";
// import { apiKeyColumns, IAPIKey } from "../columns/api-key-columns";
// import WebHookItem from "./WebHookItem";
import { useRouter } from "next/navigation";
import { useModalStore } from "@/stores/useModalStore";
import GoLiveModal from "./ApiKeyGoLiveModal";
import DeleteApiKeyModal from "./ApiKeyDeleteModal";
// import useGetApiKeysController from "../controllers/useGetApiKeysController";
// import useGetServicesController from "../controllers/useGetServicesController";
import { webhookColumns } from "../columns/webhookColumns";
import RegenerateWebhookModal from "./RegenerateWebhookModal";
import ChangeWebhookModal from "./ChangeWebHookModal";
// import useGetWebHookController from "../controllers/useGetWebHookController";

export interface IWebhook {
    name: string;
    description: string;
    key: string;
    environment: "LIVE" | "TEST";
    created_at: string;
}

export const dummyWebhooks: IWebhook[] = [
    {
        name: "Payment Hook",
        description: "Handles payment callbacks",
        key: "wh_live_0a9f8a7b2c3d4e5f6g7h8i9j",
        environment: "LIVE",
        created_at: "2025-07-15T09:23:00Z",
    },
    {
        name: "Signup Hook",
        description: "Triggers after user registration",
        key: "wh_test_1234abcd5678efgh9101ijkl",
        environment: "TEST",
        created_at: "2025-06-10T12:00:00Z",
    },
    {
        name: "Subscription Renew",
        description: "Called when subscription is renewed",
        key: "wh_live_abc123def456ghi789jkl0m",
        environment: "LIVE",
        created_at: "2025-07-01T17:45:00Z",
    },
    {
        name: "Fraud Alert Hook",
        description: "Detects fraudulent activity",
        key: "wh_test_qwer1234asdf5678zxcv",
        environment: "TEST",
        created_at: "2025-05-28T08:15:00Z",
    },
];

export type APIKeyType = "LIVE" | "TEST";

export default function WebHookTab() {
    const [filterType, setFilterType] = useState<APIKeyType>("TEST");
    const router = useRouter();
    // const { data } = useGetWebHookController()
    const { modalType, apiKey, closeModal } = useModalStore();
    // const { data: apiKeyData } = useGetApiKeysController();
    // const { data: servicesData } = useGetServicesController();

    // Create ID-to-name map for services
    // const serviceMap = useMemo(() => {
    //     const map: Record<string, string> = {};
    //     if (servicesData?.data?.results) {
    //         servicesData.data.results.forEach((service) => {
    //             map[service.id] = service.name;
    //         });
    //     }
    //     return map;
    // }, [servicesData]);

    const handleFilterToggle = () => {
        setFilterType((prev) => (prev === "LIVE" ? "TEST" : "LIVE"));
    };

    const goToKeyForm = () => {
        localStorage.setItem("lastTab", "3"); // Persist tab
        router.push("/dashboard/profile/create-apikey-form");
    };

    // Map API key response into table data
    // const apiKeys: IAPIKey[] = useMemo(() => {
    //     if (!apiKeyData?.data?.results) return [];

    //     return apiKeyData.data.results
    //         .filter((item) =>
    //             filterType === "LIVE"
    //                 ? item.environment === "Live"
    //                 : item.environment === "SandBox"
    //         )
    //         .map((item) => ({
    //             name: item.name,
    //             description: item.description,
    //             environment:
    //                 item.environment === "Live" ? "production" : "staging",
    //             key: item.key,
    //             services: item.service_count
    //                 ? serviceMap[item.id] ?? `Service (${item.service_count})`
    //                 : "—",
    //             created_at: item.created_datetime,
    //         }));
    // }, [apiKeyData, filterType, serviceMap]);

    return (
        <div className="space-y-10">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">API Keys</h2>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-gray-500 text-gray-500"
                        onClick={handleFilterToggle}
                    >
                        Showing {filterType.toLowerCase()} keys
                    </Button>
                    <Button size="lg" onClick={goToKeyForm}>
                        Create API Keys
                    </Button>
                </div>
            </div>

            {/* <DataTable columns={apiKeyColumns} data={apiKeys} /> */}

            {apiKey && (
                <>
                    {modalType === "goLive" && (
                        <GoLiveModal
                            open
                            onClose={closeModal}
                            apiKey={apiKey}
                            onConfirm={() => {
                                console.log("Activating live for", apiKey.key);
                                closeModal();
                            }}
                        />
                    )}
                    {modalType === "delete" && (
                        <DeleteApiKeyModal
                            open
                            onClose={closeModal}
                            apiKey={apiKey}
                            onConfirm={() => {
                                console.log("Deleting", apiKey.key);
                                closeModal();
                            }}
                        />
                    )}
                </>
            )}

            <h2>Webhooks</h2>
            <div className="space-y-10">
                <p className="text-gray-500">No web hooks found</p>
                <DataTable columns={webhookColumns} data={dummyWebhooks} />
                <RegenerateWebhookModal />
                <ChangeWebhookModal />

                {/* <WebHookItem />
        <WebHookItem /> */}
            </div>
        </div>
    );
}
