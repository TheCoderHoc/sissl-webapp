import React from "react";
import HeroSection from "../../../modules/website/use-case/HeroSection";
import UsageTab from "../../../modules/website/use-case/UsageTab";
import HorizontalSlider from "@/components/shared/HorizontalSlider";
import { slide1 } from "@/public/images";

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
const UseCasePage = () => {
    return (
        <>
            <div className="dark:bg-[#030302] bg-white">
                <HeroSection />
                <UsageTab />
                 <HorizontalSlider heading="Industries That Use SISSL"
                                   highlight="SISSL"
                                   items={items} />            </div>
        </>
    );
};

export default UseCasePage;
