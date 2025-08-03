import React, { JSX } from "react";

export default function AuthCard({
  children,
  title,
  label,
}: {
  children: JSX.Element;
  title: string;
  label: string;
}) {
  return (
    <div className="relative">
      <div className="absolute top-32 left-16 right-16">
        <div className="flex justify-center w-[415px] h-[480px]">
          <div className="">
            <h2 className="text-center text-[24px] font-[500]">{title}</h2>
            <h4>{label}</h4>
          </div>
          <div className="my-32">{children}</div>
        </div>
      </div>
    </div>
  );
}
