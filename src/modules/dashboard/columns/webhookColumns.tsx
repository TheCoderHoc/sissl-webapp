import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { useModalStore } from "@/stores/useWebhookModalStore";
import { Button } from "@/components/ui/button";
import CopyAltIcon from "../../../../public/icons/CopyAlt";
import EyeIcon from "../../../../public/icons/Eye";

export interface IWebhookKey {
  name: string;
  environment: string;
  key: string;
  created_at: string;
}

// New React component for the cell
const WebhookKeyCell: React.FC<{ webhook: IWebhookKey }> = ({ webhook }) => {
  const [showKey, setShowKey] = useState(false);
  const { openModal } = useModalStore();
  const maskedKey = webhook.key.replace(/.(?=.{5})/g, "*");

  const handleCopy = async () => {
    await navigator.clipboard.writeText(webhook.key);
  };

  return (
    <div className="flex items-center justify-between w-full px-2 py-4 bg-black rounded">
      <div className="flex-1">
        <p className="text-sm font-semibold text-white">
          Public Merchant Key
        </p>
        <p className="text-xs text-gray-400 mt-1">
          This key is used to initiate your SDK
        </p>
      </div>

      <div className="flex items-center gap-4">
        <span className="font-mono text-sm text-blue-400 min-w-[160px] text-center">
          {showKey ? webhook.key : maskedKey}
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500"
          >
            <CopyAltIcon
            //  className="w-4 h-4 text-white"
              />
          </button>
          <button
            onClick={() => setShowKey((prev) => !prev)}
            className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500"
          >
            <EyeIcon
            //  className="w-4 h-4 text-white"
              />
          </button>
        </div>

        <div className="flex gap-2">
          <Button
            className="bg-yellow-200 text-black rounded-md px-4 py-2 text-sm hover:bg-yellow-300"
            onClick={() => openModal("regenerateWebhook", webhook)}
          >
            Regenerate
          </Button>
          <Button
            className="bg-yellow-200 text-black rounded-md px-4 py-2 text-sm hover:bg-yellow-300"
            onClick={() => openModal("changeWebhook", webhook)}
          >
            Change
          </Button>
        </div>
      </div>
    </div>
  );
};

// Updated webhookColumns configuration
export const webhookColumns: ColumnDef<IWebhookKey>[] = [
  {
    header: "Key",
    id: "webhook-key",
    cell: ({ row }) => <WebhookKeyCell webhook={row.original} />, // Use the WebhookKeyCell component here
  },
];
