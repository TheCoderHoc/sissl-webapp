/**
 *
 * About Page
 */

import Image from "next/image";
import Cards from "@/modules/website/about-us/Cards";
import HeroSection from "@/modules/website/about-us/HeroSection";
import {
    event_icon,
    security_icon,
    slide1,
    staff_icon,
} from "../../../../../public/images";
import HorizontalSlider from "@/components/shared/HorizontalSlider";

// Team array data
const team = [
    {
        name: "Engr. Ben",
        role: "CTO",
        image: "/images/team1.png",
        description:
            "Run background checks, collect ID documents, and issue staff badges digitally",
    },
    {
        name: "Kachi",
        role: "SW",
        image: "/images/team2.png",
        description:
            "Run background checks, collect ID documents, and issue staff badges digitally",
    },
    {
        name: "Engr. Ben",
        role: "CTO",
        image: "/images/team3.png",
        description:
            "Run background checks, collect ID documents, and issue staff badges digitally",
    },
];

// Carousel items
const items = [
    {
        image: slide1.src,
        title: "Corporates & Enterprises",
        description: "Keep permanent and contract staff verified and secure—across departments, branches, or regions.",
    },
    {
        image: slide1.src,
        title: "Government",
        description: "Maintain trusted identity verification for volunteers, staff, and citizens—digitally and consistently.",
    },
    {
        image: slide1.src,
        title: "Education",
        description: "Secure onboarding and identity verification for students, educators, and alumni across institutions.",
    },
    {
        image: slide1.src,
        title: "Healthcare",
        description: "Authenticate professionals and patients to improve service delivery and data access security.",
    },
];

const features = [
    {
        title: "Event management",
        description:
            "Plan, host, and control access to events with complete visibility.",
        icon: event_icon.src,
    },
    {
        title: "Staff Validation",
        description:
            "Seamlessly verify employee identities with automated or manual approval flows.",
        icon: staff_icon.src,
    },
    {
        title: "Smart Security & Verification Tools",
        description:
            "Build trust using our hardware and software solutions—from CCTV to ID verification tools.",
        icon: security_icon.src,
    },
];

export default function Company() {
    return (
        <div className="dark:bg-black bg-white">
            <HeroSection />
            <section className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 flex flex-col xl:flex-row xl:justify-between w-[80%] my-0 mx-auto ">
                <section className="container pt-[6.875rem] mx-auto px-4 xl:px-16">
                    <div className="flex justify-center flex-col items-start">
                        <h3 className="text-[40px] font-medium text-black dark:text-white">
                            Our mission
                        </h3>
                        <p className="text-14 text-start mt-[14px] font-medium text-gray-800 dark:text-gray-300">
                            We believe that events, workplaces, and digital
                            spaces should be secure without being complicated.
                            Our platform and smart tools are designed to make
                            validation, guest access, and identity verification
                            effortless for modern teams.
                        </p>
                    </div>
                </section>
            </section>

            {/* Features Section */}

            <Cards data={features} />

            {/* Team Section */}
            <section className="bg-white dark:bg-black transition-colors duration-300 flex flex-col xl:flex-row xl:justify-between w-[80%] my-0 mx-auto ">
                <section className="container pt-[6.875rem] mx-auto px-4 xl:px-16">
                    <section className="pt-12 pb-[6.188rem]">
                        <div className="flex justify-center flex-col items-center">
                            <h3 className="text-[2rem] font-medium text-black dark:text-white">
                                Leadership
                            </h3>
                            <p className="text-[0.875rem] text-center w-[27.75rem] mt-3 font-medium text-gray-800 dark:text-gray-300">
                                We’re a diverse team of engineers, designers,
                                and operations leaders obsessed with helping
                                companies build trust with every interaction.
                            </p>
                        </div>

                        <div className="mx-auto mt-[6.375rem] grid md:grid-cols-3 gap-6">
                            {team.map((member, index) => (
                                <div
                                    key={index}
                                    className="bg-[#f3f4f6] dark:bg-[#000] h-[40rem] rounded-[1rem] p-[0.625rem] shadow-lg transition-colors"
                                >
                                    <div className="bg-white dark:bg-[#0a0a0a] h-full rounded-[1rem] p-[1.063rem] transition-colors">
                                        <div className="relative aspect-[360/327] rounded-[8px] overflow-hidden">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex mt-[1.875rem] items-center justify-between mb-2">
                                            <h3 className="text-black dark:text-white text-[1.5rem] font-medium">
                                                {member.name}
                                            </h3>
                                            <div className="bg-gray-200 dark:bg-[#121212] rounded-full w-[5.563rem] p-1 transition-colors">
                                                <span className="bg-white dark:bg-[#0a0a0a] text-black dark:text-white text-[1rem] font-medium flex justify-center items-center p-[3px] rounded-full transition-colors">
                                                    {member.role}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 dark:text-[#F9FAFB] text-[0.875rem] font-medium transition-colors">
                                            {member.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </section>
            </section>

            {/* Opening roles */}

            <HorizontalSlider heading="Industries That Use SISSL"
                highlight="SISSL"
                items={items} />
        </div>

        // </section>
    );
}
