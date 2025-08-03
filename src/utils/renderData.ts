import React from "react";

export const renderData = (data: unknown): React.ReactNode => {
    if (typeof data === "string" || typeof data === "number") {
        return data;
    }
    if (React.isValidElement(data)) {
        return data as React.ReactNode;
    }
    return null;
};
