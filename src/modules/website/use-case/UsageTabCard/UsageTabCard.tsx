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
  <div className="max-w-sm bg-white dark:bg-[rgba(175,175,175,0.04)] p-2 text-black dark:text-white rounded-2xl border border-gray-200 dark:border-none overflow-hidden">
  <div className="bg-gray-100 dark:bg-black p-4 flex flex-col items-start space-y-4 rounded-2xl">
    <div className="w-full flex justify-start overflow-hidden rounded-lg">
      <div className="max-w-full h-auto">{image}</div>
    </div>
    <h3 className="text-2xl font-medium leading-tight pt-7">{title}</h3>
    <p className="text-sm text-gray-700 dark:text-gray-400 leading-snug">{content}</p>
    <a
      href={ctaLink}
      className="text-yellow-600 dark:text-yellow-400 text-base font-medium hover:underline pt-24"
    >
      {ctaBtn}
    </a>
  </div>
</div>

  );
};

export default UsageTabCard;
