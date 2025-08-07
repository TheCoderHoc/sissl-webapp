import { HeroImg } from "@/public/icons";
import React from "react";

const HeroSection = () => {
    return (
        <section className="relative w-full bg-black text-white pb-20 px-4 md:px-10 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
                {/* LEFT CONTENT */}
                <div className="flex-1 w-full flex flex-col items-center text-center lg:items-start lg:text-left mt-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 ">
                        Control Access. Verify <br />
                        People. Host with <br />
                        Confidence
                    </h1>

                    <p className="text-sm md:text-base text-white/80 mb-8 max-w-md leading-relaxed">
                        From staff checks to guest invites to secure entry—SISSL helps you
                        run things smoothly and professionally.
                    </p>

                    <a
                        href="/auth/account-type"
                        aria-label="Create an account"
                        className="inline-block bg-[#FFE500] text-black font-medium text-sm px-6 py-3 rounded hover:opacity-90 transition"
                    >
                        Create account
                    </a>
                </div>

                <div className="flex-1 w-full relative flex justify-center items-center">
                    <div className="relative w-full max-w-[600px] md:max-w-[700px] rounded-lg overflow-hidden shadow-xl">
                        <HeroImg className="w-full h-auto object-cover" />
                        {/* Optional light strip */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400 blur-lg opacity-20" />
                    </div>

                    {/* PLATFORM LABELS */}
                    <div className="absolute -bottom-10 flex gap-12 text-xs md:text-sm text-yellow-400 font-medium">
                        <span className="-rotate-12">Staff Validation</span>
                        <span className="rotate-12">Event Management</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
