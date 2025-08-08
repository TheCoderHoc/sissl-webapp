// // app/fraud-risk-intelligence/fraud-report/[id]/page.tsx
// import UploadArea from "@/components/shared/UploadArea";
// import React from "react";
// import { notFound } from "next/navigation";

// interface ReportPageProps {
//   params: { id: string };
// }

// // Temporary dummy data
// const dummyReports: Record<string, any> = {
//   "#FR-10284": {
//     status: "Valid",
//     faceMatch: false,
//     faceNote: "Face mismatch with ID",
//     ninRisk: "NIN linked to 3 other faces",
//     deviceHistory: "4 Previous Submissions (2 Flagged)",
//     ipRisk: "IP from known fraud hotspot (Lagos)",
//     totalScore: "85 - High risk",
//   },
//   "#FR-39210": {
//     status: "Flagged",
//     faceMatch: false,
//     faceNote: "Face mismatch with ID",
//     ninRisk: "NIN not verified",
//     deviceHistory: "4 Previous Submissions (2 Flagged)",
//     ipRisk: "IP from known fraud hotspot (Lagos)",
//     totalScore: "85 - High risk",
//   },
//   "#FR-31210": {
//     status: "Pass",
//     faceMatch: true,
//     faceNote: "Face matches verified NIN",
//     ninRisk: "NIN is linked to user",
//     deviceHistory: "1 clean submission",
//     ipRisk: "Normal IP activity",
//     totalScore: "25 - Low risk",
//   },
//   "#FR-31310": {
//     status: "Manual review",
//     faceMatch: false,
//     faceNote: "Selfie does not match records",
//     ninRisk: "NIN not submitted with this session",
//     deviceHistory: "2 Previous Submissions (1 Flagged)",
//     ipRisk: "Clean IP origin (Kano)",
//     totalScore: "85 - High risk",
//   },
//   "Political submit": {
//     status: "Pass",
//     faceMatch: true,
//     faceNote: "Face matches government-issued ID",
//     ninRisk: "NIN linked successfully",
//     deviceHistory: "3 clean submissions",
//     ipRisk: "Unusual IP behavior (Political IP hotspot)",
//     totalScore: "25 - Low risk",
//   },
// };

// export default function ReportPage({ params }: ReportPageProps) {
//   const { id } = params;
//   console.log(id)
//   const reportId = `#${decodeURIComponent(id)}`;
//   const report = dummyReports[reportId];


//   if (!report) return notFound();

//   return (
//     <div className="p-6 text-white bg-black min-h-screen">
//       <div className="mb-8">
        
//         <p className="text-sm text-white/60">Screening ID</p>
//         <p className="text-2xl font-bold">#{id}</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Submitted Info */}
//         <div className="bg-[#000000] p-6 rounded-2xl">
//           <p className="text-base font-semibold mb-4">Submitted info</p>
//           <UploadArea className="rounded-xl" label="" />
//         </div>

//         {/* Result Displayed */}
//         <div className="bg-[#000000] p-6 rounded-2xl">
//           <p className="text-green-500 font-semibold mb-4">Result displayed</p>

//           <div className="divide-y divide-white/10 text-[15px]">
//             <div className="flex justify-between items-center py-3">
//               <span className="text-white/70">Status</span>
//               <div className="flex gap-2">
//                 <span className="bg-green-700 text-white text-xs px-4 py-1 rounded-full">{report.status}</span>
//                 <button className="bg-[#121829] text-white text-xs px-4 py-1 rounded">Upload ID</button>
//               </div>
//             </div>

//             <div className="flex justify-between items-center py-3">
//               <span className="text-white/70">Face Match</span>
//               <span className="text-red-500 text-xs font-medium flex items-center gap-1">
//                 ❌ {report.faceNote}
//               </span>
//             </div>

//             <div className="flex justify-between items-center py-3">
//               <span className="text-white/70">NIN Risk</span>
//               <span className="text-white/90 text-right">{report.ninRisk}</span>
//             </div>

//             <div className="flex justify-between items-center py-3">
//               <span className="text-white/70">Device History</span>
//               <span className="text-white/90 text-right">{report.deviceHistory}</span>
//             </div>

//             <div className="flex justify-between items-center py-3">
//               <span className="text-white/70">Device/IP Risk</span>
//               <span className="text-white/90 text-right">{report.ipRisk}</span>
//             </div>

//             <div className="flex justify-between items-center py-3">
//               <span className="text-white/70">Total Risk Score</span>
//               <span className="font-semibold text-right">{report.totalScore}</span>
//             </div>
//           </div>

//           <div className="flex justify-end gap-4 mt-10">
//             <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-2 rounded-xl">Flag</button>
//             <button className="bg-red-500 hover:bg-red-400 text-white font-semibold px-6 py-2 rounded-xl">Deny</button>
//             <button className="bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-2 rounded-xl">Approve</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import UploadArea from "@/components/shared/UploadArea";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useParams } from "next/navigation";
import { useRef } from "react";
import { notFound } from "next/navigation";

const dummyReports: Record<string, any> = {
  "#FR-10284": {
    status: "Valid",
    faceMatch: false,
    faceNote: "Face mismatch with ID",
    ninRisk: "NIN linked to 3 other faces",
    deviceHistory: "4 Previous Submissions (2 Flagged)",
    ipRisk: "IP from known fraud hotspot (Lagos)",
    totalScore: "85 - High risk",
  },
  "#FR-39210": {
    status: "Flagged",
    faceMatch: false,
    faceNote: "Face mismatch with ID",
    ninRisk: "NIN not verified",
    deviceHistory: "4 Previous Submissions (2 Flagged)",
    ipRisk: "IP from known fraud hotspot (Lagos)",
    totalScore: "85 - High risk",
  },
  "#FR-31210": {
    status: "Pass",
    faceMatch: true,
    faceNote: "Face matches verified NIN",
    ninRisk: "NIN is linked to user",
    deviceHistory: "1 clean submission",
    ipRisk: "Normal IP activity",
    totalScore: "25 - Low risk",
  },
  "#FR-31310": {
    status: "Manual review",
    faceMatch: false,
    faceNote: "Selfie does not match records",
    ninRisk: "NIN not submitted with this session",
    deviceHistory: "2 Previous Submissions (1 Flagged)",
    ipRisk: "Clean IP origin (Kano)",
    totalScore: "85 - High risk",
  },
  "Political submit": {
    status: "Pass",
    faceMatch: true,
    faceNote: "Face matches government-issued ID",
    ninRisk: "NIN linked successfully",
    deviceHistory: "3 clean submissions",
    ipRisk: "Unusual IP behavior (Political IP hotspot)",
    totalScore: "25 - Low risk",
  },
};

export default function ReportPage() {
  const { id } = useParams();
  const reportId = `#${decodeURIComponent(id as string)}`;
  const report = dummyReports[reportId];
  const reportRef = useRef<HTMLDivElement | null>(null);

  if (!report) return notFound();

  const downloadPDF = async () => {
    if (!reportRef.current) return;

    const canvas = await html2canvas(reportRef.current);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`fraud-report-${id}.pdf`);
  };

  return (
    <div className="p-6 text-white bg-black min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-sm text-white/60">Screening ID</p>
          <p className="text-2xl font-bold">#{id}</p>
        </div>
        <button
          onClick={downloadPDF}
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-5 py-2 rounded-lg"
        >
          Download Report
        </button>
      </div>

      <div
        ref={reportRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Submitted Info */}
        <div className="bg-[#000000] p-6 rounded-2xl">
          <p className="text-base font-semibold mb-4">Submitted info</p>
          <UploadArea className="rounded-xl" label="" />
        </div>

        {/* Result Displayed */}
        <div className="bg-[#000000] p-6 rounded-2xl">
          <p className="text-green-500 font-semibold mb-4">Result displayed</p>

          <div className="divide-y divide-white/10 text-[15px]">
            <div className="flex justify-between items-center py-3">
              <span className="text-white/70">Status</span>
              <div className="flex gap-2">
                <span className="bg-green-700 text-white text-xs px-4 py-1 rounded-full">{report.status}</span>
                <button className="bg-[#121829] text-white text-xs px-4 py-1 rounded">Upload ID</button>
              </div>
            </div>

            <div className="flex justify-between items-center py-3">
              <span className="text-white/70">Face Match</span>
              <span className="text-red-500 text-xs font-medium flex items-center gap-1">
                ❌ {report.faceNote}
              </span>
            </div>

            <div className="flex justify-between items-center py-3">
              <span className="text-white/70">NIN Risk</span>
              <span className="text-white/90 text-right">{report.ninRisk}</span>
            </div>

            <div className="flex justify-between items-center py-3">
              <span className="text-white/70">Device History</span>
              <span className="text-white/90 text-right">{report.deviceHistory}</span>
            </div>

            <div className="flex justify-between items-center py-3">
              <span className="text-white/70">Device/IP Risk</span>
              <span className="text-white/90 text-right">{report.ipRisk}</span>
            </div>

            <div className="flex justify-between items-center py-3">
              <span className="text-white/70">Total Risk Score</span>
              <span className="font-semibold text-right">{report.totalScore}</span>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-10">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-2 rounded-xl">Flag</button>
            <button className="bg-red-500 hover:bg-red-400 text-white font-semibold px-6 py-2 rounded-xl">Deny</button>
            <button className="bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-2 rounded-xl">Approve</button>
          </div>
        </div>
      </div>
    </div>
  );
}
