// store/useModalStore.ts
import { create } from "zustand";

type ModalType = "goLive" | "delete" | null;

interface ModalStore {
    modalType: ModalType;
    apiKey: any | null;
    openModal: (type: ModalType, key: any) => void;
    closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
    modalType: null,
    apiKey: null,
    openModal: (type, key) => set({ modalType: type, apiKey: key }),
    closeModal: () => set({ modalType: null, apiKey: null }),
}));
