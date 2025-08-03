"use client";
import React from "react";
import { HeroImg4, Logo } from "../../../../public/icons";
import CompanyCard from "./CompanyCard/CompanyCard";

const HeroSection = () => {
    const companies = Array(6)
        .fill(null)
        .map(() => ({
            image: <Logo />,
            name: "SISSL",
        }));

    return (
        <>
            <section className="bg-white text-black dark:bg-black dark:text-white pt-9 lg:pt-28 transition-colors duration-300 flex flex-col xl:flex-row xl:justify-between w-[80%] my-0 mx-auto ">
                <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font lg:text-4xl xl:text-5xl text-3xl mb-4 font-medium lg:w-[90%]">
                            Shape the Future of Secure Events and Validation
                        </h1>
                        <p className="mb-8 text-sm leading-relaxed text-gray-700 dark:text-white">
                            Join a passionate team building trusted tools for
                            access,
                            <br className="hidden text-sm lg:inline-block" />{" "}
                            identity, and safety. At SISSL, your work directly
                            impacts
                            <br className="hidden text-sm lg:inline-block" />{" "}
                            how organizations host, verify, and protect.
                        </p>
                        <div className="flex justify-center">
                            <a
                                href="/auth/account-type"
                                className="inline-flex text-base text-black bg-si_yellow border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
                            >
                                View jobs
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-[700px] md:w-[600px] w-full overflow-hidden">
                        <div className="rounded overflow-hidden">
                            <HeroImg4 className="w-full h-auto object-cover object-center" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 flex flex-col xl:flex-row xl:justify-between w-[80%] my-0 mx-auto ">
                <div className="container px-5 mx-auto">
                    <div className="relative overflow-hidden w-full py-6">
                        <div className="animate-slide flex gap-16 w-max">
                            {[...companies, ...companies].map(
                                (company, idx) => (
                                    <CompanyCard
                                        key={idx}
                                        name={company.name}
                                        image={company.image}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
