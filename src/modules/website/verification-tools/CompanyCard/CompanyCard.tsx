import { JSX } from "react";
interface CardProps {
  image: JSX.Element | string;
  name: string;
}
const CompanyCard = ({ image, name }: CardProps) => {
  return (
    <div className="min-w-[280px] flex-shrink-0 snap-start">
      <div className="h-full flex flex-col items-center justify-center p-4 rounded-lg text-center bg-[rgba(20,20,20,0.03)]">
        {image}
        <p className="text-gray-300 text-sm pt-1">{name}</p>
      </div>
    </div>
  );
};

export default CompanyCard;
