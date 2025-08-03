import { JSX } from "react";
interface CardProps {
  image: JSX.Element | string;
  title: string;
  content: string;
}
const ActionCard = ({ image, title, content }: CardProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
  {/* Image container */}
  <div className="w-44 h-44 rounded-md flex items-center justify-center">
    {image}
  </div>

  {/* Text content */}
  <div>
    <h3 className="text-black dark:text-white text-lg font-semibold mb-1">
      {title}
    </h3>
    <p className="text-black text-sm dark:text-gray-400 max-w-md">
      {content}
    </p>
  </div>
</div>

  );
};

export default ActionCard;
