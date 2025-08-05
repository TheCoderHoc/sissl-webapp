import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import CustomTooltip from "./CustomTooltip";


export type RiskData = {
    name: string;
    value: number;
    color: string;
}[];

interface RiskChartProps {
    data: RiskData;
}


export const RiskChart: React.FC<RiskChartProps> = ({ data }) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    const renderLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
    }: any) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) / 2;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="#fff"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={14}
                fontWeight="bold"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        // <div className="relative w-[240px] h-[240px]">
        //     <ResponsiveContainer width="100%" height="100%">
        //         <PieChart>
        //             <Pie
        //                 data={data}
        //                 dataKey="value"
        //                 nameKey="name"
        //                 innerRadius={70}
        //                 outerRadius={120}
        //                 stroke="none"
        //                 labelLine={false}
        //                 label={renderLabel}
        //                 paddingAngle={0}
        //                 cornerRadius={6}
        //                 activeIndex={activeIndex ?? undefined}
        //                 activeOuterRadius={130} // 👈 pop-out size
        //                 onMouseEnter={(_, index) => setActiveIndex(index)}
        //                 onMouseLeave={() => setActiveIndex(null)}
        //             >
        //                 {data.map((entry, index) => (
        //                     <Cell key={`cell-${index}`} fill={entry.color} />
        //                 ))}
        //             </Pie>
        //         </PieChart>
        //     </ResponsiveContainer>

        //     {/* Centered content */}
        //     <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        //         <div className="text-white text-center font-semibold text-lg">Total</div>
        //         <div className="text-white text-center font-bold text-xl">1000 Profile</div>
        //     </div>
        // </div>

        <div className="relative w-[240px] h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Tooltip content={<CustomTooltip />} />

                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={70}
                        outerRadius={120}
                        stroke="none"
                        labelLine={false}
                        label={renderLabel}
                        paddingAngle={0}
                        cornerRadius={6}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

            {/* Centered content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div className="text-white text-center font-semibold text-lg">Total</div>
                <div className="text-white text-center font-bold text-xl">{total} Profile</div>
            </div>
        </div>

    );
};
