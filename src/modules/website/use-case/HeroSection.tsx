"use client";
import React from "react";
import CompanyCard from "./CompanyCard/CompanyCard";
import { HeroImg2, Logo } from "../../../../public/icons";
// Hero Section
const HeroSection = () => {
  const companies = Array(6)
    .fill(null)
    .map(() => ({
      image: <Logo />,
      name: "SISSL",
    }));

  return (
    <>
      <section className=" flex flex-col xl:flex-row xl:justify-between w-[80%] my-0 mx-auto  body-font bg-white dark:bg-black pt-28">
        <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-black dark:text-white">
              Real-World Ways
              <br className="hidden lg:inline-block" />
              Organizations Use
              <br className="hidden lg:inline-block" />
              SISSL
            </h1>
            <p className="mb-8 text-sm leading-relaxed text-black dark:text-white">
              From hosting high-security events to verifying new hires,
              <br className="hidden text-sm lg:inline-block" /> see how teams
              across industries rely on SISSL to manage
              <br className="hidden text-sm lg:inline-block" /> people and
              protect spaces.
            </p>
            <div className="flex justify-center">
              <a
                href="/auth/account-type"
                className="inline-flex text-base text-black bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded "
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="lg:w-[700px] md:w-[600px] w-full overflow-hidden">
            <div className="rounded overflow-hidden">
              <HeroImg2 className="w-full h-auto object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners and Sponsors */}
      <section className="text-gray-600 body-font bg-white dark:bg-black flex flex-col xl:flex-row xl:justify-between w-[80%] my-0 mx-auto ">
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
