import { create } from "zustand";

interface WebhookModalState {
    modalType: "regenerateWebhook" | "changeWebhook" | null;
    data: any;
    isOpen: boolean;
    openModal: (type: "regenerateWebhook" | "changeWebhook", data: any) => void;
    closeModal: () => void;
}

export const useModalStore = create<WebhookModalState>((set) => ({
    modalType: null,
    data: null,
    isOpen: false,
    openModal: (type, data) =>
        set({
            modalType: type,
            data,
            isOpen: true,
        }),
    closeModal: () =>
        set({
            modalType: null,
            data: null,
            isOpen: false,
        }),
}));
