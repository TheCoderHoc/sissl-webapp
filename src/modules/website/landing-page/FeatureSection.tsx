import React from "react";
import FeatureCard from "./FeatureCard";
import { FeatureOne, FeatureThree, FeatureTwo } from "../../../../public/icons";
const FeatureSection = () => {
    const imageStyle =
        "absolute left-1/2 top-1/2 w-50 h-50 -translate-x-1/2 -translate-y-1/2 z-0 opacity-5 ";
    const CardsContent = [
        // card1
        {
            image: <FeatureOne className={imageStyle} />,
            title: "Event Management",
            content:
                "Plan and manage events with ease—free or paid tickets, guest invites, and more.",
            ctaLink: "######",
        },

        // card2
        {
            image: <FeatureTwo className={imageStyle} />,
            title: "Staff Validation",
            content:
                "Onboard and verify staff with flexible form options, identity checks, and approvals",
            ctaLink: "######",
        },

        // card3
        {
            image: <FeatureThree className={imageStyle} />,
            title: "Access and Security",
            content:
                "Set access levels, generate QR codes or badges, and track who gets in.",
            ctaLink: "######",
        },
    ];

    return (
        <section className="text-gray-800 dark:text-gray-600 body-font bg-white dark:bg-black flex flex-col xl:flex-row xl:justify-between w-[80%] my-0 mx-auto">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-black dark:text-white">
                        Everything You Need to{" "}
                        <span className="text-si_yellow">Host</span>,
                        <span className="text-si_yellow">Validate</span>, and{" "}
                        <span className="text-si_yellow">Secure</span>
                    </h1>
                </div>

                {/* Display of cards below */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-3">
                    {CardsContent.map((card, idx) => (
                        <FeatureCard
                            key={idx}
                            image={card.image}
                            title={card.title}
                            content={card.content}
                            ctaLink={card.ctaLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
