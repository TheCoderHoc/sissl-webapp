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

import Image from "next/image";

// const steps = [
//     {
//         title: "Add the essential",
//         image: "/images/event1.png",
//         description:
//             "Set up your event with just the basics.Name, date, time, and format — that's all you need to get started. Keep it simple or expand later.",
//     },
//     {
//         title: "Decide If Tickets Are Needed",
//         image: "/images/event2.png",
//         description:
//             "Monetize or manage attendance — your call. Choose whether to add tickets. Set limits, pricing, and availability when it matters.",
//     },
//     {
//         title: "Secure the Right Access",
//         image: "/images/event3.png",
//         description:
//             "Control who sees and joins your event.Make your event public, private, or invite-only. Add password protection, email whitelists, or access codes.",
//     },
//     {
//         title: "Share and Go Live",
//         image: "/images/event4.png",
//         description:
//             "Launch with confidence.Once everything’s set, share your event page and host with tools built to engage.",
//     },
// ];

const Page = () => {
    return (
        <div className="bg-white text-black dark:bg-[#030302] dark:text-white pt-6 lg:pt-36">
            <section className="flex flex-col xl:flex-row xl:justify-between w-[80%] my-0 mx-auto">
                <div className="w-full xl:w-[40%] flex flex-col justify-center">
                    <h1 className="text-[28px] xl:text-[48px]">
                        Host Events That Connect, Engage, and Deliver Value
                    </h1>
                    <p className="text-[14px] xl:text-[22px] py-[15px] xl:py-[40px]">
                        Invite, verify, and manage attendees from one smart
                        dashboard. Whether it’s a closed-door board meeting or a
                        public seminar, SISSL ensures secure and organized
                        access.
                    </p>
                    <div className="flex xl:justify-between w-full lg:w-[75%]">
                        <a
                            href="/auth/account-type"
                            className="flex items-center justify-center text-[14px] xl:text-[16px] w-[151px] h-[48px] xl:w-[181px] xl:h-[48px] mr-4 rounded-[8px] bg-si_yellow text-black"
                        >
                            Get Started
                        </a>
                        <button className="text-[14px] xl:text-[16px] w-[151px] h-[48px] xl:w-[181px] xl:h-[48px] rounded-[8px] bg-gray-800 text-white">
                            Request a demo
                        </button>
                    </div>
                </div>
                <div className="my-8 xl:my-0">
                    <Image
                        src="/images/eventMain.png"
                        alt="man with glasses"
                        width={200}
                        height={200}
                    />
                </div>
            </section>

            <section className="flex justify-between w-[80%] my-0 mx-auto py-4 lg:py-36">
                <div className="w-full lg:mt-[120px] flex flex-col md:flex-row items-center lg:justify-between">
                    <div className="card w-full">
                        {/* <YellowBtn text="Shareable Invitation link" /> */}
                    </div>
                    <div className="card w-full">
                        {/* <YellowBtn text="User identity verification" /> */}
                    </div>
                    <div className="card w-full">
                        {/* <YellowBtn text="Ticketing mode" /> */}
                    </div>
                </div>
            </section>

            <section className="flex flex-col justify-between w-[80%] my-8 xl:my-0 mx-auto py-26">
                <div className="imGroup">
                    <div className="order-2 xl:order-1 w-full xl:w-[35%] flex flex-col justify-center">
                        <h3 className="text-[24px] xl:text-[32px] mb-[14px] xl:mb-[32px] pt-3">
                            Give every event its own identity.
                        </h3>
                        <p className="text-[14px]">
                            Create an event in minutes by filling out only the
                            essentials. Whether it’s a team sync or a major
                            launch, you&apos;re up and running fast
                        </p>
                    </div>
                    <Image
                        className="order-1 xl:order-2"
                        src="/images/event5.png"
                        alt="event details"
                        width={200}
                        height={200}
                    />
                </div>

                <div className="imGroup">
                    <div className="w-full xl:w-[35%] flex flex-col justify-center order-2">
                        <h3 className="text-[24px] xl:text-[32px] mb-[14px] xl:mb-[32px] pt-3">
                            Optional Ticketing for Full Flexibility
                        </h3>
                        <p className="text-[14px]">
                            Choose to offer free or paid tickets, set quantity
                            limits, and customize pricing tiers — all only if
                            the event calls for it.
                        </p>
                    </div>
                    <Image
                        className="order-1"
                        src="/images/event6.png"
                        alt="event details"
                        width={200}
                        height={200}
                    />
                </div>

                <div className="imGroup">
                    <div className="order-2 xl:order-1 w-full xl:w-[35%] flex flex-col justify-center">
                        <h3 className="text-[24px] xl:text-[32px] mb-[14px] xl:mb-[32px] pt-3">
                            Access & Security Settings
                        </h3>
                        <p className="text-[14px]">
                            Make your event private, public, or invite-only. Add
                            password protection, unique entry links, or ID
                            verification to secure access
                        </p>
                    </div>
                    <Image
                        className="order-1 xl:order-2"
                        src="/images/event7.png"
                        alt="event details"
                        width={200}
                        height={200}
                    />
                </div>
            </section>

            <section className="flex flex-col justify-between w-[80%] mx-auto py-[46px]">
                <div className="top text-[24px] lg:text-[40px] text-center mx-auto mb-[120px] px-1">
                    Simple <span className="yText">Solution</span> to
                    <br /> <span className="yText">Secure</span> Your Team
                </div>
                <div className="dynamic">{/* <Slides steps={steps} /> */}</div>
            </section>

            <div className="top text-[24px] lg:text-[40px] text-center mx-auto mt-2 xl:mt-[90px] mb-[10px] px-1">
                Built for Every <span className="yText">Team</span> That Needs{" "}
                <br /> to Trust Who They Work With
            </div>

            <section className="flex flex-col justify-between w-full pl-[10%] mx-auto py-24 relative">
                {/* <HorizontalSlider items={items} /> */}
            </section>
        </div>
    );
};

export default Page;
