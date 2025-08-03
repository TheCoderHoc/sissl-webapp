import React, { JSX } from "react";
// So this is a feature card and it needs props such the
//  Image, Title, Content, CTA LINK for learn more

interface CardProps {
  image: JSX.Element | string;
  title: string;
  content: string;
  ctaLink: string;
}

const FeatureCard = ({ image, title, content, ctaLink }: CardProps) => {
  return (
   <div className="relative bg-white dark:bg-bg_card-hover rounded-xl w-full h-[328px] flex flex-col items-center justify-center text-center shadow-md overflow-hidden px-2 py-6">
  {/* 🔹 Background image or SVG positioned absolutely */}
  {image}

  {/* 🔹 Content above background */}
  <div className="relative z-10">
    <h2 className="text-black dark:text-white text-3xl font-medium mb-4">
      {title}
    </h2>
    <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 px-14 pt-4">
      {content}
    </p>
    <a
      href={ctaLink}
      className="text-si_yellow mt-20 font-medium hover:underline"
    >
      Learn more
    </a>
  </div>
</div>

  );
};

export default FeatureCard;
