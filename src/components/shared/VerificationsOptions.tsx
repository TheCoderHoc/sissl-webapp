"use client";

import React from "react";
import { companyDashBlack } from "../../../public/images";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  primaryButtonText: string;
  onPrimaryClick: () => void;
  onSecondaryClick?: () => void;
  image?: string;
  largeImage?: boolean;
};

const IdentityCenterIntro = ({
  title,
  description,
  primaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  image,
  largeImage = false,
}: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pl-8 bg-black my-16 rounded-lg">
      <div className="w-[70%]">
        <h2 className="text-lg font-semibold text-white mb-6">{title}</h2>
        <p className="text-white mt-2 text-sm whitespace-pre-line">
          {description}
        </p>

        <div className="mt-14 flex gap-8">
          <button
            onClick={onPrimaryClick}
            className="bg-primary w-[188px] h-[48px] text-black px-5 py-2 rounded-md text-sm"
          >
            {primaryButtonText}
          </button>

          {onSecondaryClick && (
            <button
              onClick={onSecondaryClick}
              className="bg-white text-black w-[188px] h-[48px] px-5 py-2 rounded-md text-sm hover:bg-gray-100"
            >
              Bulk Upload
            </button>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <Image
          src={image || companyDashBlack.src}
          alt="illustration"
          className={largeImage ? "w-[90%]" : "w-[60%]"}
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default IdentityCenterIntro;
