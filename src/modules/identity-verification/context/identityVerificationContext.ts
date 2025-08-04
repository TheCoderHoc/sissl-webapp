import { createContext, useContext } from "react";
import { FormContext } from "../models/types";

type FormContextType = {
  formData: FormContext;
  setFormData: React.Dispatch<React.SetStateAction<FormContext>>;
};

export const IdentityVerificationFormContext = createContext<
    FormContextType | undefined
>(undefined);
export const useIdentityFormContext = () => {
    const context = useContext(IdentityVerificationFormContext);
    if (!context) {
        throw new Error(
            "useProductsContext must be used within a ProductsProvider"
        );
    }
    return context;
};
