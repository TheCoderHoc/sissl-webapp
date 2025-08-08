// "use client";
// import { useState } from "react";
// import UsageTabCard from "./UsageTabCard/UsageTabCard";
// import { AccessControl, BoardMeeting, LadyOnTab } from "../../../../public/icons";

// const UsageTab = () => {
//   const Tabs = [
//     {
//       tabName: "Event Management",
//       subHeading: "Host, invite, and control access — your way.",
//     },
//     {
//       tabName: "Staff Validation",
//       subHeading: "Build a Verified workforce with trust at the center",
//     },
//   ];
//   const [activeTab, setActiveTab] = useState(Tabs[0].tabName);
//   const currentTab = Tabs.find((tab) => tab.tabName === activeTab);
//   const Cards = [
//     {
//       tabCategory: "event management",
//       image: <LadyOnTab />,
//       title: "Onboarding New Employees",
//       content:
//         "Run background checks, collect ID documents, and issue staff badges digitally",
//       ctaBtn: "Validate staff",
//       ctaLink: "###",
//     },
//     {
//       tabCategory: "event management",
//       image: <BoardMeeting />,
//       title: "Onboarding New Employees",
//       content:
//         "Run background checks, collect ID documents, and issue staff badges digitally",
//       ctaBtn: "Validate staff",
//       ctaLink: "###",
//     },
//     {
//       tabCategory: "event management",
//       image: <AccessControl />,
//       title: "Onboarding New Employees",
//       content:
//         "Run background checks, collect ID documents, and issue staff badges digitally",
//       ctaBtn: "Validate staff",
//       ctaLink: "###",
//     },

//         {
//       tabCategory: "staff validation",
//       image: <BoardMeeting />,
//       title: "Onboarding New Employees",
//       content:
//         "Run background checks, collect ID documents, and issue staff badges digitally",
//       ctaBtn: "Validate staff",
//       ctaLink: "###",
//     },
//     {
//       tabCategory: "staff validation",
//       image: <AccessControl />,
//       title: "Onboarding New Employees",
//       content:
//         "Run background checks, collect ID documents, and issue staff badges digitally",
//       ctaBtn: "Validate staff",
//       ctaLink: "###",
//     },
//     {
//       tabCategory: "staff validation",
//       image: <LadyOnTab />,
//       title: "Onboarding New Employees",
//       content:
//         "Run background checks, collect ID documents, and issue staff badges digitally",
//       ctaBtn: "Validate staff",
//       ctaLink: "###",
//     },
//   ];
//   const cardsFilter = Cards.filter(
//     (card) => card.tabCategory.toLowerCase() === activeTab.toLowerCase()
//   );

//   return (
//     <section className="bg-white text-black dark:bg-black dark:text-white pt-36 pb-[223px]">
//   <div className="container mx-auto px-5 md:px-20">
//     <div className="text-center mb-10">
//       <h2 className="text-3xl md:text-4xl font-medium">
//         Two Powerful Ways
//         <br />
//         Organizations <span className="text-si_yellow">Use SISSL</span>
//       </h2>
//     </div>

//     {/* Tab Buttons */}
//   <div className="flex justify-start mb-10 pt-10 md:pt-28">
//           <div className="bg-gray-100 dark:bg-[#1a1a1a] rounded-full py-1 px-2 md:py-3 md:px-10 flex flex-wrap md:flex-nowrap">
//             {Tabs.map((tab, idx) => (
//               <button
//                 key={idx}
//                 className={`px-4 py-2 md:px-10 md:py-5 rounded-full transition-all text-sm md:text-base ${
//                   activeTab === tab.tabName
//                     ? "bg-black dark:bg-white text-white dark:text-black"
//                     : "text-gray-600 dark:text-gray-400"
//                 }`}
//                 onClick={() => setActiveTab(Tabs[idx].tabName)}
//               >
//                 {tab.tabName}
//               </button>
//             ))}
//           </div>
//         </div>
//     {/* Subtitle */}
//     <p className="text-start text-3xl text-black dark:text-white mb-10 pt-12 py-10 pb-16">
//       {currentTab?.subHeading}
//     </p>

//     {/* Tab Content */}
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
//       {cardsFilter.map((categorizedCard, idx) => (
//         <UsageTabCard
//           key={idx}
//           image={categorizedCard.image}
//           title={categorizedCard.title}
//           content={categorizedCard.content}
//           ctaBtn={categorizedCard.ctaBtn}
//           ctaLink={categorizedCard.ctaLink}
//         />
//       ))}
//     </div>
//   </div>
// </section>

//   );
// };

// export default UsageTab;


"use client";

import { useState } from "react";
import UsageTabCard from "./UsageTabCard/UsageTabCard";
import { AccessControl, BoardMeeting, LadyOnTab } from "../../../../public/icons";

const UsageTab = () => {
  const Tabs = [
    {
      tabName: "Event Management",
      subHeading: "Build a verified workforce with trust at the center.",
    },
    {
      tabName: "Staff validation",
      subHeading: "Host, invite, and control access — your way.",
    },
  ];

  const [activeTab, setActiveTab] = useState(Tabs[0].tabName);
  const currentTab = Tabs.find((tab) => tab.tabName === activeTab);

  const Cards = [
    {
      tabCategory: "event management",
      image: <LadyOnTab />,
      title: "Onboarding New Employees:",
      content:
        "Run background checks, collect ID documents, and issue staff badges digitally",
      ctaBtn: "Validate staff",
      ctaLink: "#",
    },
    {
      tabCategory: "event management",
      image: <BoardMeeting />,
      title: "Board or Executive Meetings",
      content:
        "Set strict guest limits, require ID verification, and log who was present",
      ctaBtn: "Create now",
      ctaLink: "#",
    },
    {
      tabCategory: "event management",
      image: <AccessControl />,
      title: "Facility Access Control",
      content:
        "Only allow validated personnel into secure zones using SISSL-issued credentials",
      ctaBtn: "Create now",
      ctaLink: "#",
    },
    {
      tabCategory: "staff validation",
      image: <BoardMeeting />,
      title: "Board or Executive Meetings",
      content:
        "Set strict guest limits, require ID verification, and log who was present",
      ctaBtn: "Create now",
      ctaLink: "#",
    },
    {
      tabCategory: "staff validation",
      image: <AccessControl />,
      title: "Facility Access Control",
      content:
        "Only allow validated personnel into secure zones using SISSL-issued credentials",
      ctaBtn: "Create now",
      ctaLink: "#",
    },
    {
      tabCategory: "staff validation",
      image: <LadyOnTab />,
      title: "Onboarding New Employees:",
      content:
        "Run background checks, collect ID documents, and issue staff badges digitally",
      ctaBtn: "Validate staff",
      ctaLink: "#",
    },
  ];

  const filteredCards = Cards.filter(
    (card) =>
      card.tabCategory.toLowerCase() === activeTab.toLowerCase()
  );

  return (
    <section className="bg-black text-white pt-[120px] pb-[180px]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-[26px] md:text-[32px]  leading-snug">
            Two Powerful Ways <br />
            Organizations <span className="text-[#FFE500]">Use SISSL</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-start mb-8">
          <div className="bg-[#1A1A1A] rounded-full px-2 py-1 flex gap-1">
            {Tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab.tabName)}
                className={`px-10 py-4 text-sm md:px-16 md:py-6 rounded-full transition-all duration-300 ${
                  activeTab === tab.tabName
                    ? "bg-black text-white"
                    : "text-white/70 hover:bg-white/10"
                }`}
              >
                {tab.tabName}
              </button>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-light text-white text-start mb-14">
          {currentTab?.subHeading}
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCards.map((card, idx) => (
            <UsageTabCard
              key={idx}
              image={card.image}
              title={card.title}
              content={card.content}
              ctaBtn={card.ctaBtn}
              ctaLink={card.ctaLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsageTab;
