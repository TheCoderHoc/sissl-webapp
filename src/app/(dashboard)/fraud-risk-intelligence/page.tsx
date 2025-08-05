'use client'
import { DataTable } from "@/components/shared/DataTable";
import { fraudColumns, IFraudUser } from "@/modules/dashboard/columns/fraudColumns";
import { RiskCategorySection } from "@/modules/fraud-risk-intelligence/components/RiskCategorySection";
import { ScreeningSummary } from "@/modules/fraud-risk-intelligence/components/ScreeningSummary";
import { Search } from "lucide-react";
// import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export const dummyFraudUsers: IFraudUser[] = [
  {
    id: "#FR-39210",
    name: "Janet Okoro",
    submitted: "ID Number",
    score: "85 (High)",
    match: false,
    location: "Lagos (Hotspot)",
    status: "Flagged",
  },
  {
    id: "#FR-31210",
    name: "Janet Okoro",
    submitted: "NIN",
    score: "25 (Low)",
    match: true,
    location: "Normal",
    status: "Pass",
  },
  {
    id: "#FR-31310",
    name: "David Adebayo",
    submitted: "Selfie",
    score: "85 (High)",
    match: false,
    location: "Kano",
    status: "Manual review",
  },
  {
    id: "#FR-31430",
    name: "Jays Alimi",
    submitted: "ID Number",
    score: "25 (Low)",
    match: true,
    location: "IP Hotspot",
    status: "Pass",
  },
];
export default function FraudAndRiskIntelligence() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterIdOnly, setFilterIdOnly] = useState(false);

  const filteredData = useMemo(() => {
    return dummyFraudUsers.filter((user) => {
      const matchesName = user.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesId = user.id.toLowerCase().includes(searchQuery.toLowerCase());
      return filterIdOnly ? matchesId : matchesName;
    });
  }, [searchQuery, filterIdOnly]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-6 items-start w-full">
        <ScreeningSummary />
        <RiskCategorySection />
      </div>

      {/* Your table will go here */}
      <div className="bg-[#000000] p-6 rounded-xl w-full mt-8 text-white">
        <div className="flex flex-wrap items-center justify-between mb-6">
          <h2 className="text-white font-semibold text-lg">Recent Fraud Analysis Table</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-black border border-white/20 rounded-lg px-4 py-2 text-sm text-white/70">
              <Search className="w-4 h-4 mr-2 text-white/60" />
              <input
                type="text"
                placeholder={filterIdOnly ? "Search for ID" : "Search for name"}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none placeholder:text-white/60 w-full"
              />
            </div>
            <button
              onClick={() => setFilterIdOnly((prev) => !prev)}
              className="bg-transparent text-white border border-white/20 rounded-md px-4 py-2 text-sm"
            >
              {filterIdOnly ? "Filter Name" : "Filter ID"}
            </button>
          </div>
        </div>
        <DataTable
          columns={fraudColumns()}
          data={filteredData}
          pagination
          tableHeaderClassName="text-white/70 text-sm"
          className="bg-[#000] py-40 text-white"
        />
      </div>
    </div>
  )
};
