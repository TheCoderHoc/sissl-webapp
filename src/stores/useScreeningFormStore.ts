// store/useScreeningFormStore.ts
import { create } from "zustand";

interface ScreeningFormData {
  idUpload?: FileList | null;
  selfieUpload?: FileList | null;
  ninUpload?: FileList | null;
  idNumber?: string;
  // Add any other common fields here
}

interface ScreeningFormStore {
  data: ScreeningFormData;
  updateField: (field: keyof ScreeningFormData, value: any) => void;
  reset: () => void;
}

export const useScreeningFormStore = create<ScreeningFormStore>((set) => ({
  data: {
    idUpload: null,
    selfieUpload: null,
    ninUpload: null,
    idNumber: "",
  },
  updateField: (field, value) =>
    set((state) => ({
      data: {
        ...state.data,
        [field]: value,
      },
    })),
  reset: () =>
    set({
      data: {
        idUpload: null,
        selfieUpload: null,
        ninUpload: null,
        idNumber: "",
      },
    }),
}));
