import React from "react";
import { HeroImg } from "../../../../public/icons";

// Hero Section
const HeroSection = () => {
    return (
        <section className="flex flex-col xl:flex-row xl:justify-between w-[80%] my-0 mx-auto  text-gray-600 body-font bg-white dark:bg-black pt-0">
            <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-black dark:text-white">
                        Control Access. Verify
                        <br className="hidden lg:inline-block" /> People. Host
                        with
                        <br className="hidden lg:inline-block" /> Confidence
                    </h1>
                    <p className="mb-8 text-sm leading-relaxed text-black dark:text-white">
                        From staff checks to guest invites to secure entry—SISSL
                        <br className="hidden text-sm lg:inline-block" /> helps
                        you run things smoothly and professionally.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="/auth/account-type"
                            className="inline-flex text-base text-black bg-si_yellow border-0 py-2 px-6 focus:outline-none rounded "
                        >
                            Create Account
                        </a>
                    </div>
                </div>
                <div className="lg:w-[700px] md:w-[600px] w-full overflow-hidden">
                    <div className="rounded overflow-hidden">
                        <HeroImg className="w-full h-auto object-cover object-center" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
