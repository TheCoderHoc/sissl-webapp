// import React, { JSX } from "react";
// // So this is a feature card and it needs props such the
// //  Image, Title, Content, CTA LINK for learn more

// interface CardProps {
//   image: JSX.Element | string;
//   title: string;
//   content: string;
//   ctaLink: string;
// }

// const FeatureCard = ({ image, title, content, ctaLink }: CardProps) => {
//   return (
//     <div className="relative bg-white dark:bg-card-hover rounded-xl w-full h-[328px] flex flex-col items-center justify-center text-center shadow-md overflow-hidden px-2 py-6">
//       {/* 🔹 Background image or SVG positioned absolutely */}
//       {image}

//       {/* 🔹 Content above background */}
//       <div className="relative z-10">
//         <h2 className="text-black dark:text-white text-3xl font-medium mb-4">
//           {title}
//         </h2>
//         <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 px-14 pt-4">
//           {content}
//         </p>
//         <a
//           href={ctaLink}
//           className="text-si_yellow mt-20 font-medium hover:underline"
//         >
//           Learn more
//         </a>
//       </div>
//     </div>
//   );
// };

// export default FeatureCard;


// import React, { JSX } from "react";

// interface CardProps {
//   image: JSX.Element | string;
//   title: string;
//   content: string;
//   ctaLink: string;
// }

// const FeatureCard = ({ image, title, content, ctaLink }: CardProps) => {
//   return (
//     <div className="relative bg-[#0F0F0F] rounded-xl h-[328px] flex flex-col items-center justify-center text-center overflow-hidden px-6 py-6">
//       {/* Background Icon */}
//       {image}

//       {/* Foreground Content */}
//       <div className="relative z-10 flex flex-col items-center">
//         <h3 className="text-white text-lg font-medium mb-3">{title}</h3>
//         <p className="text-sm text-white/70 max-w-[260px] mb-6">
//           {content}
//         </p>
//         <a
//           href={ctaLink}
//           className="text-[#FFE500] text-sm font-medium hover:underline"
//         >
//           Learn more
//         </a>
//       </div>
//     </div>
//   );
// };

// export default FeatureCard;


import React, { JSX } from "react";

interface CardProps {
  image: JSX.Element | string;
  title: string;
  content: string;
  ctaLink: string;
}

const FeatureCard = ({ image, title, content, ctaLink }: CardProps) => {
  return (
    <div
      className="relative  bg-[#000000] hover:bg-[#0F0F0F] rounded-xl h-[328px] flex flex-col items-center justify-center text-center 
      overflow-hidden px-6 py-6 
      transition-all duration-300 ease-in-out transform hover:scale-[1.025] hover:shadow-lg"
    >
      {/* Background Icon */}
      {image}

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h3 className="text-white text-lg font-medium mb-3">{title}</h3>
        <p className="text-sm text-white/70 max-w-[260px] mb-6">
          {content}
        </p>
        <a
          href={ctaLink}
          className="text-[#FFE500] text-sm font-medium hover:underline"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default FeatureCard;
