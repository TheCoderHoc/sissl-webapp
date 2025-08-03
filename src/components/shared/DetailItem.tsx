import { isValidElement, ReactNode } from "react";

interface IProps {
    title: string;
    value: ReactNode;
    bordered?: boolean;
}

export default function DetailItem({ title, value, bordered = false }: IProps) {
    return (
        <div
            className={`flex items-center justify-between text-gray-400 font-light ${
                bordered &&
                "border-b-[1px] border-solid border-[#F1F1F11A] pb-5"
            }`}
        >
            <h3 className="text-sm">{title}</h3>
            {isValidElement(value) ? (
                value
            ) : typeof value === "string" ? (
                <p>{value}</p>
            ) : null}
        </div>
    );
}
