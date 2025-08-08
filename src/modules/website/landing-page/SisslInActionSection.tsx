// import React from "react";
// import ActionCard from "./ActionCard";
// import { ManageEvent, SimplifyGuest, ValidateStaff } from "@/public/icons";

// const SisslAction = () => {
//     const CardsContent = [
//         {
//             image: <ValidateStaff />,
//             title: "Validate Staff with Confidence",
//             content:
//                 "Collect identity details, verify credentials, and issue access passes—automatically",
//         },

//         {
//             image: <ManageEvent />,
//             title: "Manage Events from Start to Finish",
//             content:
//                 "Create events, define ticket types (free or paid), manage guest lists, and track check-ins with ease",
//         },

//         // card3
//         {
//             image: <SimplifyGuest />,
//             title: "Simplify Guest Invitations",
//             content:
//                 "Send personalized invites, confirm attendance, and collect necessary info—no login require",
//         },
//     ];

//     return (
//         <div className="bg-white text-black dark:bg-black dark:text-white px-8 md:px-16 py-16">
//             <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
//                 {/* Left: Heading */}
//                 <div className="md:w-1/3">
//                     <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
//                         <span className="text-si_yellow">SISSL</span> in action{" "}
//                         <br />
//                         what you can{" "}
//                         <span className="text-black dark:text-white font-semibold">
//                             Do
//                         </span>
//                     </h2>
//                 </div>

//                 {/* Right: Features */}
//                 <div className="md:w-2/3 space-y-10">
//                     {CardsContent.map((card, idx) => (
//                         <ActionCard
//                             key={idx}
//                             image={card.image}
//                             title={card.title}
//                             content={card.content}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default SisslAction;


import React from "react";
import ActionCard from "./ActionCard";
import { ManageEvent, SimplifyGuest, ValidateStaff } from "@/public/icons";

const SisslAction = () => {
  const CardsContent = [
    {
      image: <ValidateStaff />,
      title: "Validate Staff with Confidence",
      content:
        "Collect identity details, verify credentials, and issue access passes—automatically",
    },
    {
      image: <ManageEvent />,
      title: "Manage Events from Start to Finish",
      content:
        "Create events, define ticket types (free or paid), manage guest lists, and track check-ins with ease",
    },
    {
      image: <SimplifyGuest />,
      title: "Simplify Guest Invitations",
      content:
        "Send personalized invites, confirm attendance, and collect necessary info—no login require",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 sm:px-10 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* LEFT: Heading */}
        <div className="lg:w-1/2 flex items-start">
          <h2 className="text-3xl sm:text-4xl font-medium leading-snug">
            <span className="text-[#FFE500]">SISSL</span> in action <br />
            what you can <span className="text-white">Do</span>
          </h2>
        </div>

        {/* RIGHT: Feature Cards */}
        <div className="lg:w-1/2 space-y-12">
          {CardsContent.map((card, idx) => (
            <ActionCard
              key={idx}
              image={card.image}
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SisslAction;

