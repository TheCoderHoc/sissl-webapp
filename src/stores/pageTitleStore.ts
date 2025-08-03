import { create } from "zustand";

interface PageTitleState {
  title: string;
  setTitle: (newTitle: string) => void;
}

export const usePageTitleStore = create<PageTitleState>((set) => ({
  title: "",
  setTitle: (newTitle) => set({ title: newTitle }),
}));
