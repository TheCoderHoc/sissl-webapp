"use client";
import React from "react";
import CompanyCard from "./CompanyCard/CompanyCard";
import { Logo } from "../../../../public/icons";
import Image from "next/image";

const HeroSection = () => {
  const companies = Array(10)
    .fill(null)
    .map(() => ({
      image: <Logo />,
      name: "SISSL",
    }));

  return (
    <>
      <section className="bg-white dark:bg-black text-black dark:text-white pt-28 transition-colors duration-300 flex flex-col xl:flex-row xl:justify-between w-[80%] my-0 mx-auto ">
        <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium">
              Verify with
              <br className="hidden lg:inline-block" />
              Confidence—
              <br className="hidden lg:inline-block" />
              Anywhere, Anytime
            </h1>
            <p className="mb-8 text-sm leading-relaxed">
              SISSL’s verification tools help you confirm identities, screen
              <br className="hidden text-sm lg:inline-block" />
              participants, and control access—all without the hassle
            </p>
            <div className="flex justify-center">
              <a
                href="/auth/account-type"
                className="inline-flex text-base text-black bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
              >
                Explore tools
              </a>
            </div>
          </div>
          <div className="lg:w-[700px] md:w-[600px] w-full overflow-hidden">
            <div className="rounded overflow-hidden">
              <Image
                className="w-full h-auto object-cover object-center"
                src="/images/verificationMain.png"
                alt=""
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 flex flex-col xl:flex-row xl:justify-between w-[80%] my-0 mx-auto ">
        <div className="container px-5 mx-auto">
          <div className="relative overflow-hidden w-full py-6">
            <div className="animate-slide flex gap-16 w-max">
              {[...companies, ...companies].map((company, idx) => (
                <CompanyCard
                  key={idx}
                  name={company.name}
                  image={company.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
