
// components/fraud-intelligence/ChartLegend.tsx
import React from "react";
import { RiskData } from "./RiskChart";

export const ChartLegend: React.FC<{ data: RiskData }> = ({ data }) => {
    return (
        <div className="flex flex-col gap-2 text-sm text-white">
            {data.map((item, index) => (
                <div key={index} className="flex items-center justify-between gap-16">
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }}></span>
                        <span>{item.name} Risk</span>
                    </div>
                    <span className="text-white/60"> {item.value}</span>
                </div>
            ))}
        </div>
    );
};