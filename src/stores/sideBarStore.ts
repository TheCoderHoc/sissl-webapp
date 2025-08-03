import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SidebarState {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  toggleSidebar: () => void;
}

const useSidebarStore = create<SidebarState>()(
  persist(
    (set) => ({
      isOpen: true,
      setIsOpen: (value) => set({ isOpen: value }),
      toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
    {
      name: "sidebar-storage",
    }
  )
);

export default useSidebarStore;
