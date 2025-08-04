"use client";

import { initialFormData } from "@/modules/identity-verification/constants/constants";
import { IdentityVerificationFormContext } from "@/modules/identity-verification/context/identityVerificationContext";
import { FormContext } from "@/modules/identity-verification/models/types";
import React, { useState } from "react";


export default function IdentityVerificationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [formData, setFormData] = useState<FormContext>(initialFormData);

    return (
        <IdentityVerificationFormContext.Provider
            value={{ formData, setFormData }}
        >
            {children}
        </IdentityVerificationFormContext.Provider>
    );
}
