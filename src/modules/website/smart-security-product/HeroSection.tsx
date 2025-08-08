"use client";
import React from "react";
import CompanyCard from "./CompanyCard/CompanyCard";
import { HeroImg3, Logo } from "@/public/icons";
// Hero Section
const HeroSection = () => {
  // const companies = [
  //   {
  //     image: <Logo />,
  //     name: "SISSL"
  //   }]

  const companies = Array(10)
    .fill(null)
    .map(() => ({
      image: <Logo />,
      name: "SISSL",
    }));

  return (
     <>
      {/* HERO SECTION */}
      <section className="bg-white dark:bg-black pt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* TEXT CONTENT */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black dark:text-white leading-tight">
              Secure Your Space
              <br className="hidden lg:block" />
              with Smart
              <br className="hidden lg:block" />
              Hardware
            </h1>
            <p className="mt-6 text-sm text-black dark:text-white leading-relaxed">
              From CCTV surveillance to IP phones and smart switches,
              <br className="hidden md:inline-block" />
              SISSL helps you build safer, smarter environments with
              <br className="hidden md:inline-block" />
              trusted security products.
            </p>
            <div className="mt-8">
              <a
                href="/auth/account-type"
                className="inline-block bg-primary text-black font-medium py-2 px-6 rounded hover:bg-yellow-600 transition"
              >
                Explore Products
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex-1 w-full max-w-xl mx-auto lg:mx-0">
            <HeroImg3 className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* SPONSORS CAROUSEL */}
      <section className="bg-white dark:bg-black py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-hidden relative">
            <div className="animate-slide flex gap-10 w-max">
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
