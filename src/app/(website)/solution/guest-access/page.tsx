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

const Page = () => {
    return (
        <div className="bg-white dark:bg-black pt-6 lg:pt-36 text-black dark:text-white transition-colors duration-300">
            <section className="flex flex-col xl:flex-row xl:justify-between w-[80%] mx-auto">
                <div className="w-full xl:w-[40%] flex flex-col justify-center">
                    <h1 className="text-[28px] xl:text-[48px]">
                        Effortless Guest Access for Every Company Event
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
                            className="flex justify-center items-center text-[14px] xl:text-[16px] w-[151px] h-[48px] xl:w-[181px] rounded-[8px] bg-si_yellow text-black mr-4"
                        >
                            Get Started
                        </a>
                        <button className="text-[14px] xl:text-[16px] w-[151px] h-[48px] xl:w-[181px] rounded-[8px] bg-gray-800 text-white mr-4">
                            Request a demo
                        </button>
                    </div>
                </div>
                <div className="my-8 xl:my-0">
                    <Image
                        src="/images/guestMain.png"
                        alt="man with glasses"
                        width={200}
                        height={200}
                    />
                </div>
            </section>

            <section className="flex justify-between w-[80%] mx-auto py-4 lg:py-36">
                <div className="w-full lg:mt-[120px] flex flex-col lg:flex-row items-center lg:justify-between">
                    <div className="card w-full">
                        {/* <YellowBtn text="Shareable Invitation link" /> */}
                        {/* <InfoCard
                            Icon={Guest1}
                            title="Custom Invitations Made Easy"
                            description="Send branded invites and track RSVPs in real-time."
                        /> */}
                    </div>
                    <div className="card w-full">
                        {/* <YellowBtn text="User identity verification" /> */}
                        {/* <InfoCard
                            Icon={Guest2}
                            title="Secure Identity Verification"
                            description="Collect ID, run optional checks, and issue QR access for guests."
                        /> */}
                    </div>
                    <div className="card w-full">
                        {/* <YellowBtn text="Ticketing mode" /> */}
                        {/* <InfoCard
                            Icon={Guest3}
                            title="Free & Paid Ticketing"
                            description="Support free or paid events, manage guest tiers, and view payments."
                        /> */}
                    </div>
                </div>
            </section>

            <section className="flex flex-col justify-between w-[80%] my-8 xl:my-0 mx-auto py-26">
                <div className="top text-[28px] lg:text-[40px] text-center mx-auto mb-[120px]">
                    Smart Access from <br />{" "}
                    <span className="yText">Start</span> to{" "}
                    <span className="yText">Finish</span>
                </div>

                <div className="imGroup">
                    <div className="order-2 xl:order-1 w-full xl:w-[35%] flex flex-col">
                        <h3 className="text-[24px] xl:text-[32px] mb-[14px] xl:mb-[32px] pt-3">
                            Create event
                        </h3>
                        <p className="text-[14px]">
                            Kick off by setting up your event details—name,
                            date, location, and event type. Whether it’s a
                            private internal meeting or a large public
                            gathering, you’re in control.
                        </p>
                    </div>
                    <Image
                        className="order-1 xl:order-2"
                        src="/images/guest1.png"
                        alt="event details"
                        width={200}
                        height={200}
                    />
                </div>

                <div className="imGroup">
                    <div className="w-full xl:w-[35%] flex flex-col order-2">
                        <h3 className="text-[24px] xl:text-[32px] mb-[14px] xl:mb-[32px] pt-3">
                            Define guest access
                        </h3>
                        <p className="text-[14px]">
                            Decide who gets in and how. Set access levels for
                            different guest types—VIPs, staff, or general
                            attendees. Choose whether guests can enter with a QR
                            code, physical badge, or face match.
                        </p>
                    </div>
                    <Image
                        className="order-1"
                        src="/images/guest2.png"
                        alt="event details"
                        width={200}
                        height={200}
                    />
                </div>

                <div className="imGroup">
                    <div className="order-2 xl:order-1 w-full xl:w-[35%] flex flex-col">
                        <h3 className="text-[24px] xl:text-[32px] mb-[14px] xl:mb-[32px] pt-3">
                            Share Invitations
                        </h3>
                        <p className="text-[14px]">
                            Send out personalized invites in just a few
                            clicks—via email, SMS, or a secure link. Include
                            event details, access credentials, and everything
                            your guests need to show up prepared. Whether it’s
                            one guest or a thousand, SISSL makes distribution
                            simple and professional.
                        </p>
                    </div>
                    <Image
                        className="order-1 xl:order-2"
                        src="/images/guest3.png"
                        alt="event details"
                        width={200}
                        height={200}
                    />
                </div>
            </section>

            <div className="top text-[24px] lg:text-[40px] text-center mx-auto mt-[90px] mb-[10px] px-1">
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
