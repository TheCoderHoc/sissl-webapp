// // components/fraud-intelligence/ScreeningSummary.tsx
// import React from "react";
// import { SummaryCard } from "./SummaryCard";
// import { useRouter } from "next/navigation";


// export const ScreeningSummary: React.FC = () => {
//       const router = useRouter();
//     return (
//         <div className="bg-[#000000] p-6 rounded-xl w-full max-w-5xl mx-auto">
//             <h2 className="text-white font-semibold text-lg mb-4">Screening Outcome Summary</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 <SummaryCard
//                     count={630}
//                     label="Cleared"
//                     subLabel="No risk found"
//                     subLabelColor="text-green-500"

//                 />
//                 <SummaryCard
//                     count={200}
//                     label="Flagged"
//                     subLabel="Needs attention"
//                     subLabelColor="text-yellow-500"
//                 />
//                 <SummaryCard
//                     count={100}
//                     label="Rejected"
//                     subLabel="Rejected by fraud logic"
//                     subLabelColor="text-red-500"
//                 />
//             </div>
//             <div className="flex flex-wrap gap-4 mt-16">
//                 {/* <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-4 rounded-lg">
//                     Screen user
//                 </button> */}
//                 <button
//                     onClick={() => router.push("/dashboard/fraud-risk-intelligence/run-new-check")}
//                     className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-2 rounded-lg"
//                 >
//                     Screen User
//                 </button>
//                 <button className="bg-[#1A1A1A] hover:bg-[#2A2A2A] text-yellow-300 font-medium py-2 px-4 rounded-lg">
//                     Download report
//                 </button>
//             </div>
//         </div>
//     );
// };

"use client";

import React from "react";
import { SummaryCard } from "./SummaryCard";
import { useRouter } from "next/navigation";

export const ScreeningSummary: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bg-[#000000] p-4 sm:p-6 rounded-xl w-full max-w-6xl mx-auto">
      <h2 className="text-white font-semibold text-lg mb-4">
        Screening Outcome Summary
      </h2>

      {/* Responsive cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <SummaryCard
          count={630}
          label="Cleared"
          subLabel="No risk found"
          subLabelColor="text-green-500"
        />
        <SummaryCard
          count={200}
          label="Flagged"
          subLabel="Needs attention"
          subLabelColor="text-yellow-500"
        />
        <SummaryCard
          count={100}
          label="Rejected"
          subLabel="Rejected by fraud logic"
          subLabelColor="text-red-500"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-12">
        <button
          onClick={() =>
            router.push("/fraud-risk-intelligence/run-new-check")
          }
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-2 rounded-lg w-full sm:w-auto"
        >
          Screen User
        </button>

        <button className="bg-[#1A1A1A] hover:bg-[#2A2A2A] text-yellow-300 font-medium px-6 py-2 rounded-lg w-full sm:w-auto">
          Download report
        </button>
      </div>
    </div>
  );
};
