import { UserItem } from "@/modules/auth/models/auth";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { queryClient } from "@/app/providers";

interface IUserSessionStore {
    user: Partial<UserItem>;
    setUser: (data: Partial<UserItem>) => void;
    clearUser: () => void;
}

const useUserStore = create<IUserSessionStore>()(
    persist(
        (set, get) => ({
            user: {},
            setUser: (data) =>
                set({
                    user: {
                        ...get().user,
                        ...data,
                    },
                }),
            clearUser: () => {
                localStorage.removeItem("access_token");
                queryClient.clear();
                set({ user: {} });
            },
        }),
        {
            name: "user-storage",
        }
    )
);

export default useUserStore;
