"use client";

import Image from "next/image";
import { Logo } from "../../../../public/icons";
import CompanyCard from "@/modules/website/career/CompanyCard/CompanyCard";

const cardData = [
    {
        id: 1,
        image: "/images/api-image.png",
        title: "Automate staff onboarding with verification flows",
        buttonText: "Validate staff",
    },
    {
        id: 2,
        image: "/images/api-image.png",
        title: "Sync event registration with internal systems",
        buttonText: "Create now",
    },
    {
        id: 3,
        image: "/images/api-image.png",
        title: "Trigger badge printing from your dashboard",
        buttonText: "Create now",
    },
];

export default function Developer() {
    const companies = Array(6)
        .fill(null)
        .map(() => ({
            image: <Logo />,
            name: "SISSL",
        }));

    return (
        <section className="font-[family-name:var(--font-geist-sans)] bg-white text-black dark:bg-black dark:text-white ">
            <main className=" pt-14 flex flex-col xl:flex-row xl:justify-between w-[80%] my-0 mx-auto   items-center gap-8 container px-4 xl:px-16">
                <div className="w-full md:w-1/2">
                    <div className="w-full max-w-md">
                        <h2 className="text-3xl md:text-5xl font-medium mb-4 dark:text-gray-100">
                            Build Powerful Access & Validation Experiences
                        </h2>
                        <p className="text-sm md:text-base dark:text-gray-300">
                            Use SISSL’s robust APIs and SDKs to integrate staff
                            validation, event guest management, and secure
                            access controls into your products or workflows—with
                            full flexibility and control.
                        </p>
                        <a
                            href="/auth/account-type"
                            className="flex justify-center items-center bg-si_yellow w-44 h-12 rounded-lg text-black text-base font-medium mt-8"
                        >
                            Get API Key
                        </a>
                    </div>
                </div>

                <div className="w-full md:w-1/2 relative aspect-[702/459] rounded-xl overflow-hidden">
                    <Image
                        src="/images/developer-hero-img.png"
                        alt="hero image"
                        fill
                        className="object-cover rounded-xl"
                        priority
                    />
                </div>
            </main>

            <section className="text-gray-600 dark:text-white body-font">
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

            <section className="container mx-auto mt-20 px-4 xl:px-16">
                <div className="flex flex-col items-center text-center max-w-md mx-auto">
                    <h3 className="text-4xl font-medium dark:text-white">
                        <span className="text-si_yellow">Developer</span>
                        -First Tools to Move Fast
                    </h3>
                    <p className="mt-6 text-base text-gray-800 dark:text-gray-300">
                        Stay informed about events hosted through SISSL—explore
                        what’s coming up or revisit past highlights.
                    </p>
                </div>

                <div className="mt-20 flex flex-col lg:flex-row justify-center items-center gap-12">
                    <div className="px-6 py-16 w-full lg:w-[28rem] bg-gray-100 dark:bg-[#060606] rounded-xl">
                        <h3 className="text-2xl font-medium mb-6 dark:text-white text-black">
                            Key Developer Features
                        </h3>
                        <a
                            href="/auth/account-type"
                            className="flex justify-center items-center bg-[#F5E900] w-44 h-12 rounded-lg text-black text-base font-medium"
                        >
                            Get API Key
                        </a>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        {[
                            {
                                title: "Well-Documented APIs",
                                desc: "Clear, RESTful endpoints to create events, validate staff, and manage access rules",
                            },
                            {
                                title: "Webhooks & Real-Time Updates",
                                desc: "Stay informed of status changes in real-time—perfect for custom workflows",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-between px-6 py-10 bg-gray-100 dark:bg-black dark:text-white text-black w-full max-w-xs rounded-xl"
                            >
                                <div className="text-center">
                                    <h3 className="text-xl font-medium">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm mt-2">{item.desc}</p>
                                </div>
                                <div className="mt-10 pt-8 border-t border-white/10 flex justify-center">
                                    <Image
                                        src="/api-icon.svg"
                                        alt="api icon"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <section className="mt-20 mb-36 flex flex-col md:flex-row items-center justify-between bg-gray-100 dark:bg-black rounded-xl px-4">
                    <div className="px-6 py-10 w-full max-w-xs dark:text-white text-black">
                        <h3 className="text-xl font-medium">
                            Secure Authentication
                        </h3>
                        <p className="text-sm mt-2">
                            Token-based access, OAuth, and granular permission
                            control
                        </p>
                        <div className="mt-10 pt-8 border-t border-white/10 flex justify-center">
                            <Image
                                src="/api-icon.svg"
                                alt="api icon"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-auto">
                        <Image
                            src="/images/dev-ball.png"
                            alt="dev ball"
                            className="w-full md:w-auto max-w-sm mx-auto"
                            width={200}
                            height={200}
                        />
                    </div>
                </section>
            </section>

            <section className="pt-12 pb-24 container mx-auto mt-20 px-4">
                <div className="text-center">
                    <h3 className="text-3xl font-medium">
                        What Can You Build with SISSL
                    </h3>
                </div>

                <div className="mx-auto mt-24 mb-48 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 dark:bg-black min-h-[40rem] rounded-[1rem] p-2.5 shadow-lg"
                        >
                            <div className="bg-[#f9f9f9] dark:bg-[#0a0a0a] h-full rounded-[1rem] p-4">
                                <div className="relative aspect-[360/327] rounded-[8px] overflow-hidden">
                                    <Image
                                        src={card.image}
                                        alt="card image"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex mt-8 items-center justify-between mb-2">
                                    <h3 className="text-black dark:text-white text-xl font-medium">
                                        {card.title}
                                    </h3>
                                </div>

                                <p className="mt-24 mb-16 text-yellow-500 text-base underline cursor-pointer">
                                    {card.buttonText}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
}
