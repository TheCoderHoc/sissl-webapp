import { JSX } from "react";

interface CardProps {
  image: JSX.Element;
  title: string;
  content: string;
  ctaBtn: string;
  ctaLink: string;
}

const UsageTabCard = ({
  image,
  title,
  content,
  ctaBtn,
  ctaLink,
}: CardProps) => {
  return (
    <div className="h-[640px] bg-[#080808] border border-[#1F1F1F] rounded-2xl overflow-hidden p-4 flex flex-col hover:shadow-lg transition-all">
      {/* Image */}
      <div className="bg-black rounded-xl overflow-hidden mb-6 h-[260px] flex items-center justify-center">
        <div className="w-full h-full object-center">{image}</div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-white text-lg font-medium mb-3">{title}</h3>
          <p className="text-sm text-white/70 leading-snug">{content}</p>
        </div>

        <div className="pt-6">
          <a
            href={ctaLink}
            className="text-[#FFE500] text-sm font-medium hover:underline"
          >
            {ctaBtn}
          </a>
        </div>
      </div>
    </div>
  );
};

export default UsageTabCard;
