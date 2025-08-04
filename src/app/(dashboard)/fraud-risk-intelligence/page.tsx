const page = () => {
  return <div>page</div>;
};
export default page;

// "use client";

// import { TrendingUp } from "lucide-react";
// import { Pie, PieChart, Sector } from "recharts";
// import { PieSectorDataItem } from "recharts/types/polar/Pie";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";

// const chartData = [
//   { browser: "Chrome", visitors: 275, fill: "#00D26A" },
//   { browser: "Safari", visitors: 200, fill: "#FBBF24" },
//   { browser: "Firefox", visitors: 187, fill: "#FB7185" },
//   { browser: "Edge", visitors: 173, fill: "#38BDF8" },
//   { browser: "Other", visitors: 90, fill: "#A78BFA" },
// ];

// export function ChartPieDonutActive() {
//   return (
//     <Card className="p-6">
//       <CardHeader className="pb-2">
//         <CardTitle className="text-left">Browser Visitors Overview</CardTitle>
//         <CardDescription className="text-left text-sm">
//           Data from January to June 2024
//         </CardDescription>
//       </CardHeader>

//       <CardContent className="flex flex-col md:flex-row items-center gap-6">
//         {/* Donut Chart */}
//         <ChartContainer className="mx-auto md:mx-0 aspect-square max-h-[240px]">
//           <PieChart width={240} height={240}>
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent hideLabel />}
//             />
//             <Pie
//               data={chartData}
//               dataKey="visitors"
//               nameKey="browser"
//               innerRadius={60}
//               outerRadius={80}
//               strokeWidth={5}
//               activeIndex={0}
//               activeShape={({
//                 outerRadius = 0,
//                 ...props
//               }: PieSectorDataItem) => (
//                 <Sector {...props} outerRadius={outerRadius + 8} />
//               )}
//             />
//           </PieChart>
//         </ChartContainer>

//         {/* Summary List */}
//         <div className="w-full md:w-1/2 space-y-4">
//           {chartData.map((item) => (
//             <div
//               key={item.browser}
//               className="flex items-center justify-between"
//             >
//               <div className="flex items-center gap-2">
//                 <div
//                   className="h-3 w-3 rounded-full"
//                   style={{ backgroundColor: item.fill }}
//                 />
//                 <span className="text-sm font-medium">{item.browser}</span>
//               </div>
//               <span className="text-muted-foreground text-sm">
//                 {item.visitors} users
//               </span>
//             </div>
//           ))}
//         </div>
//       </CardContent>

//       <CardFooter className="flex-col items-start gap-1 text-sm pt-4">
//         <div className="flex items-center gap-2 font-medium">
//           Trending up by 5.2% this month{" "}
//           <TrendingUp className="h-4 w-4 text-green-500" />
//         </div>
//         <p className="text-muted-foreground">
//           Based on total visitor count over the last 6 months
//         </p>
//       </CardFooter>
//     </Card>
//   );
// }

// // "use client";

// // import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// // const data = [
// //   { name: "Low Risk", value: 410, color: "#00D26A" },
// //   { name: "Moderate Risk", value: 142, color: "#F59E0B" },
// //   { name: "High Risk", value: 340, color: "#FACC15" },
// //   { name: "Critical Risk", value: 590, color: "#EF4444" }, // Always active
// // ];

// // const totalProfiles = data.reduce((sum, item) => sum + item.value, 0);

// // export default function RiskCategoryStatistics() {
// //   return (
// //     <div className="bg-black rounded-xl p-6 w-full max-w-md">
// //       <div className="flex justify-between items-center mb-4">
// //         <h3 className="text-white font-semibold text-sm">Statistics</h3>
// //         <div className="border border-gray-700 rounded-lg px-3 py-1 text-sm text-white/70">
// //           Last 7 days
// //         </div>
// //       </div>

// //       <h4 className="text-white text-sm font-semibold mb-2">Risk Category</h4>

// //       <div className="w-full h-64">
// //         <ResponsiveContainer>
// //           <PieChart>
// //             <Pie
// //               data={data}
// //               innerRadius={60}
// //               outerRadius={90}
// //               paddingAngle={2}
// //               dataKey="value"
// //               labelLine={false}
// //               isAnimationActive={false}
// //             >
// //               {data.map((entry, index) => (
// //                 <Cell
// //                   key={`cell-${index}`}
// //                   fill={entry.color}
// //                   stroke={
// //                     entry.name === "Critical Risk" ? "#ffffff" : "#000000"
// //                   }
// //                   strokeWidth={entry.name === "Critical Risk" ? 3 : 0}
// //                 />
// //               ))}
// //             </Pie>
// //             <Tooltip />
// //           </PieChart>
// //         </ResponsiveContainer>
// //         <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
// //           <span className="text-white text-sm">Total</span>
// //           <span className="text-white font-semibold text-xl">
// //             {totalProfiles} Profile
// //           </span>
// //         </div>
// //       </div>

// //       <div className="mt-6 space-y-3">
// //         {data.map((item, idx) => (
// //           <div key={idx} className="flex justify-between items-center">
// //             <div className="flex items-center gap-2">
// //               <div
// //                 className="w-2.5 h-2.5 rounded-full"
// //                 style={{ backgroundColor: item.color }}
// //               />
// //               <span className="text-sm text-white">{item.name}</span>
// //             </div>
// //             <span className="text-sm text-white/80">{item.value}</span>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
