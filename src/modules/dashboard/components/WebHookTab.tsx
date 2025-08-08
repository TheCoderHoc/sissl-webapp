"use client";

import { useCallback, useMemo, useState } from "react";
import { DataTable } from "@/components/shared/DataTable";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useModalStore } from "@/stores/useModalStore";
import GoLiveModal from "./ApiKeyGoLiveModal";
import DeleteApiKeyModal from "./ApiKeyDeleteModal";
import { webhookColumns } from "../columns/webhookColumns";
import RegenerateWebhookModal from "./RegenerateWebhookModal";
import ChangeWebhookModal from "./ChangeWebHookModal";
import { apiKeyColumns } from "../columns/api-key-columns";
import useGetApiKeysListController from "../controllers/api-webhooks/getApiKeysListController";
import { Data } from "../models/apiKeys";
import { useDeleteAPIKeyController } from "../controllers/api-webhooks/deleteApiKeyByIdController";
import { useQueryClient } from "@tanstack/react-query";
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
  const { modalType, apiKey, closeModal } = useModalStore();
  const { data: apiKeyData, isLoading: listLoading } = useGetApiKeysListController();
  const queryClient = useQueryClient();

  const { deleteAPIKey } =
    useDeleteAPIKeyController(apiKey?.id || "");

  const handleDelete = useCallback(async () => {
    if (!apiKey?.id) return;
    try {
      await deleteAPIKey();
      // Refresh the list
      await queryClient.invalidateQueries({ queryKey: ["api-keys"] });
      closeModal();
    } catch (e) {
      // Optional: show your own toast or rely on useApiManager's toast
      console.error("Delete failed", e);
    }
  }, [apiKey?.id, deleteAPIKey, queryClient, closeModal]);

  const handleFilterToggle = () => {
    setFilterType((prev) => (prev === "LIVE" ? "TEST" : "LIVE"));
  };

  const goToKeyForm = () => {
    localStorage.setItem("lastTab", "3"); // Persist tab
    router.push("/dashboard/profile/create-apikey-form");
  };

  const apiKeys = useMemo(() => {
    const results: Data[] = apiKeyData?.data?.results || [];

    return results
      .filter((item) =>
        filterType === "LIVE" ? item.environment === "LIVE" : item.environment === "TEST"
      )
      .map((item) => {
        const serviceCount = item.scopes_display?.length || 0;
        const createdAt = new Date(item.date_created).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });

        return {
          id: item.id, // ✅ needed for edit/delete actions
          name: item.name,
          description: item.description,
          environment: item.environment === "LIVE" ? "Livemode" : "Sandbox",
          key: item.plaintext,
          services: `${serviceCount} service${serviceCount !== 1 ? "s" : ""}`,
          created_at: createdAt,
        };
      });
  }, [apiKeyData, filterType]);

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

      {listLoading ? (
        <p className="text-gray-400">Loading API keys…</p>
      ) : (
        <DataTable columns={apiKeyColumns} data={apiKeys} />
      )}
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
              apiKey={apiKey}
              onClose={closeModal}
              onConfirm={handleDelete}
            />
          )}
        </>
      )}

      <h2>Webhooks</h2>
      <div className="space-y-10">
        <DataTable columns={webhookColumns} data={dummyWebhooks} />
        <RegenerateWebhookModal />
        <ChangeWebhookModal />
      </div>
    </div>
  );
}
