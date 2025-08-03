import React from "react";

import HeroSection from "../../../../modules/website/smart-security-product/HeroSection";
import GallerySection from "../../../../modules/website/smart-security-product/GallerySection";

// Carousel items
// const items = [
//     {
//         image: slide1.src,
//         title: "Corporates & Enterprises",
//         text: "Keep permanent and contract staff verified and secure—across departments, branches, or regions.",
//     },
//     {
//         image: slide1.src,
//         title: "Government",
//         text: "Maintain trusted identity verification for volunteers, staff, and citizens—digitally and consistently.",
//     },
//     {
//         image: slide1.src,
//         title: "Education",
//         text: "Secure onboarding and identity verification for students, educators, and alumni across institutions.",
//     },
//     {
//         image: slide1.src,
//         title: "Healthcare",
//         text: "Authenticate professionals and patients to improve service delivery and data access security.",
//     },
// ];

const page = () => {
    return (
        <div className="dark:bg-[#030302] bg-white">
            <HeroSection />
            <GallerySection />
            <div className="top text-[40px] bg-white dark:bg-black text-black dark:text-white text-center mx-auto  pb-[177px]">
                Industries That Use <span className="yText">SISSL</span>
            </div>
            <section className="bg-white dark:bg-black flex flex-col justify-between w-[100%] pl-[10%]  my-0 mx-auto py-24 relative">
                {/* <HorizontalSlider items={items} /> */}
            </section>
        </div>
    );
};

export default page;
