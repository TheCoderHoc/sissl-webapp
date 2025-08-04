'use client';

import { useModalStore } from "@/stores/useWebhookModalStore";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";

export default function RegenerateWebhookModal() {
  const { modalType, modalData, closeModal } = useModalStore();

  if (modalType !== "regenerateWebhook") return null;

  const handleConfirm = () => {
    // TODO: Make API call to regenerate webhook key
    console.log("Regenerating webhook key for:", modalData);
    closeModal();
  };

  return (
    <Dialog.Root open onOpenChange={closeModal}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-[#0a0a0a] text-white border border-gray-700 rounded-lg z-50 w-[400px] p-6 space-y-5">
          <h2 className="text-lg font-semibold">Regenerate Webhook Key?</h2>
          <p className="text-sm text-gray-400">
            This will permanently replace the current key. You may need to update your SDK integrations.
          </p>

          <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={closeModal}>
              Cancel
            </Button>
            <Button className="bg-yellow-300 text-black hover:bg-yellow-400" onClick={handleConfirm}>
              Regenerate
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
