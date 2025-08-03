// import HeroSection from "./UseCasePage/HeroSection";

import Cards from "@/modules/website/contact-us/Cards";
import ContactUsForm from "@/modules/website/contact-us/Form";

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

const features = [
    {
        title: "Event management",
        description:
            "Plan, host, and control access to events with complete visibility.",
        icon: "/images/cpg1.svg",
    },
    {
        title: "Staff Validation",
        description:
            "Seamlessly verify employee identities with automated or manual approval flows.",
        icon: "/images/cpg2.svg",
    },
    {
        title: "Smart Security & Verification Tools",
        description:
            "Build trust using our hardware and software solutions—from CCTV to ID verification tools.",
        icon: "/images/cpg3.svg",
    },
];
export default function Home() {
    return (
        <>
            <ContactUsForm />
            <Cards data={features} />
            <div className="top text-[40px] dark:bg-black bg-white dark:text-white text-black text-center mx-auto  pb-[108px]">
                Opening Roles
                <br />
                <p className="text-sm px-16">
                    Find where you fit in. We’re hiring across departments:
                </p>
            </div>
            <section className="dark:bg-black bg-white flex flex-col justify-between w-[100%] pl-[10%]  my-0 mx-auto py-24 relative">
                {/* <HorizontalSlider items={items} /> */}
            </section>
        </>
    );
}
