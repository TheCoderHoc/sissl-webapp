'use client'
import React, { useEffect, useState } from "react";
import { RiskChart, RiskData } from "./RiskChart";
import { ChartLegend } from "./ChartLegend";
import { Filter } from "lucide-react";




const dummyApiResponse: Record<string, RiskData> = {
    "Last 7 days": [
        { name: "Low", value: 410, color: "#22C55E" },
        { name: "Moderate", value: 142, color: "#FACC15" },
        { name: "High", value: 340, color: "#F97316" },
        { name: "Critical", value: 590, color: "#EF4444" },
    ],
    "Last 30 days": [
        { name: "Low", value: 520, color: "#22C55E" },
        { name: "Moderate", value: 130, color: "#FACC15" },
        { name: "High", value: 280, color: "#F97316" },
        { name: "Critical", value: 420, color: "#EF4444" },
    ],
    "Last 90 days": [
        { name: "Low", value: 900, color: "#22C55E" },
        { name: "Moderate", value: 300, color: "#FACC15" },
        { name: "High", value: 600, color: "#F97316" },
        { name: "Critical", value: 720, color: "#EF4444" },
    ],
    "Low Risk Exposure": [
        { name: "Low", value: 950, color: "#22C55E" },
        { name: "Moderate", value: 150, color: "#FACC15" },
        { name: "High", value: 40, color: "#F97316" },
        { name: "Critical", value: 10, color: "#EF4444" },
    ],
    "Heightened Risk Alerts": [
        { name: "Low", value: 300, color: "#22C55E" },
        { name: "Moderate", value: 240, color: "#FACC15" },
        { name: "High", value: 600, color: "#F97316" },
        { name: "Critical", value: 460, color: "#EF4444" },
    ],
    "Compliance Breach Spike": [
        { name: "Low", value: 100, color: "#22C55E" },
        { name: "Moderate", value: 180, color: "#FACC15" },
        { name: "High", value: 500, color: "#F97316" },
        { name: "Critical", value: 920, color: "#EF4444" },
    ],
    "Stable Risk Levels": [
        { name: "Low", value: 400, color: "#22C55E" },
        { name: "Moderate", value: 400, color: "#FACC15" },
        { name: "High", value: 400, color: "#F97316" },
        { name: "Critical", value: 400, color: "#EF4444" },
    ],
    "Volatile Risk Shift": [
        { name: "Low", value: 100, color: "#22C55E" },
        { name: "Moderate", value: 500, color: "#FACC15" },
        { name: "High", value: 300, color: "#F97316" },
        { name: "Critical", value: 700, color: "#EF4444" },
    ],
};

export const RiskCategorySection: React.FC = () => {
    const [filter, setFilter] = useState("Last 7 days");
    const [data, setData] = useState<RiskData>([]);

    useEffect(() => {
        // Simulate API call based on filter
        const timer = setTimeout(() => {
            setData(dummyApiResponse[filter]);
        }, 500);
        return () => clearTimeout(timer);
    }, [filter]);

    return (
        <div className="bg-[#000000] p-6 rounded-xl w-full max-w-md mx-auto">

            <div className="flex items-center justify-between mb-4">
                {/* Left: Titles */}
                <div className="flex flex-col leading-tight">
                    <span className="text-white/60 text-xs">Statistics</span>
                    <h2 className="text-white font-semibold text-sm">Risk Category</h2>
                </div>

                {/* Right: Filter dropdown with Lucide icon */}
                <div className="relative">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="appearance-none bg-black text-white text-xs font-medium pl-3 pr-8 py-1.5 rounded-lg border border-white/20 focus:outline-none"
                    >
                        {dummyApiResponse && Object.keys(dummyApiResponse).map((key) => (
                            <option key={key} value={key}>{key}</option>
                        ))}
                    </select>

                    {/* Lucide icon overlay */}
                    <Filter
                        size={14}
                        className="absolute right-2 top-2 text-white/50 pointer-events-none"
                    />
                </div>
            </div>


            <div className="flex flex-col items-center gap-6">
                <RiskChart data={data} />
                <div className="flex flex-col gap-2">
                    <ChartLegend data={data} />
                </div>
            </div>
        </div>
    );
};
