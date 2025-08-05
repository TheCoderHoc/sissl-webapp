// import { fraud } from "@/public/icons";
import React from "react";
import Image from "next/image";
import { fraud } from "../../../../public/icons";
interface SummaryCardProps {
  count: number;
  label: string;
  subLabel: string;
  subLabelColor: string;
  image?: React.ReactNode;
  
}

export const SummaryCard: React.FC<SummaryCardProps> = ({
  count,
  label,
  subLabel,
  subLabelColor,
}) => {
  return (
    <div className="bg-black rounded-xl px-6 pt-6 pb-4 border border-[#1A1A1A] flex flex-col text-left w-full h-full">
      <div className="text-white font-bold text-[20px] leading-tight">{count} Users</div>
      <div className="text-sm text-white/70 mb-4">{label}</div>
      <div className="flex-grow flex items-center justify-center">
        {<Image src={fraud.src} alt="Cleared icon" width={145}
                        height={123}
                         />}
      </div>
      <div className={`mt-4 text-sm font-medium ${subLabelColor} text-center`}>
        “{subLabel}”
      </div>
    </div>
  );
};
