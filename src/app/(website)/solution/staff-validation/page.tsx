"use client";

import Image from "next/image";

// const steps = [
//     {
//         title: "Choose Staff Type",
//         image: "/images/staff1.png",
//         description:
//             "Start by selecting the category each team member falls under—Permanent, Contract, Temporary, or Other. This helps tailor the validation process to the role and access level within your organization.",
//     },
//     {
//         title: "Share Validation Form link",
//         image: "/images/staff2.png",
//         description:
//             "Collect essential information from each staff member, including their national ID, a selfie for verification, and any required supporting documents. This step ensures you're onboarding real people with valid identities.",
//     },
// ];

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

const Page = () => {
  return (
    <div className="dark:bg-[#030302] bg-white pt-6 lg:pt-36">
      <section className="flex flex-col xl:flex-row xl:justify-between w-[80%] my-0 mx-auto">
        <div className="w-[100%] xl:w-[40%] flex flex-col justify-center">
          <h1 className="text-[28px] xl:text-[48px] dark:text-white text-black">
            Verify Staff. Protect Access. Build Trust.
          </h1>
          <p className="dark:text-[#F9FAFB] text-black text-[14px] xl:text-[22px] py-[15px] xl:py-[40px]">
            SISSL makes it easy for companies to validate new or existing
            staff—whether they’re permanent, contract, or temporary. Automate
            verification, reduce risk, and ensure only the right people gain
            access
          </p>
          <div className="flex xl:justify-between w-[100%] lg:w-[75%]">
            <a
              href="auth/account-type"
              className="flex justify-center items-center text-[14px] xl:text-[16px] w-[151px] h-[48px] xl:w-[181px] xl:h-[48px] mr-4 rounded-[8px] bg-primary text-black"
            >
              Validate Staff
            </a>
            <button className="text-[14px] xl:text-[16px] w-[151px] h-[48px] xl:w-[181px] xl:h-[48px] mr-4 rounded-[8px] bg-gray-800 text-white dark:text-black dark:bg-gray-200">
              Request a demo
            </button>
          </div>
        </div>
        <div className="my-8 xl:my-0">
          <Image
            src="/images/staffValid.png"
            alt="man with glasses"
            width={200}
            height={200}
          />
        </div>
      </section>

      {/* <section className="flex justify-between w-[80%] my-0 mx-auto py-4 lg:py-36">
        <div className="w-full lg:mt-[120px] flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="card w-[100%]">
            <YellowBtn text="Seamless ID Verifications" />
            <InfoCard
              Icon={Staff1}
              title="Verify Identities with Confidence"
              description="Run ID checks, match selfies, and perform background scans—all in one secure flow"
            />
          </div>
          <div className="card w-[100%]">
            <YellowBtn text="User automated reviews" />
            <InfoCard
              Icon={Staff2}
              title="Flexible Approval Workflows"
              description="Choose between manual reviews or automated approvals based on your needs."
            />
          </div>
          <div className="card w-[100%]">
            <YellowBtn text="Badge Generation" />
            <InfoCard
              Icon={Staff3}
              title="Grant Access, Your Way"
              description="Issue scannable QR codes or printed badges to control staff access with ease."
            />
          </div>
        </div>
      </section> */}

      <section className="flex flex-col justify-between w-[80%] my-0 mx-auto py-24">
        <div className="top text-[24px] lg:text-[40px] text-center mx-auto mb-[120px] px-1 dark:text-[#F9FAFB] text-black">
          Simple <span className="yText">Solution</span> to
          <br /> <span className="yText">Secure</span> Your Team
        </div>

        <div className="dynamic">{/* <Slides steps={steps} /> */}</div>
      </section>

      <div className="top text-[24px] lg:text-[40px] text-center mx-auto mt-[90px] mb-[10px] px-1 dark:text-white text-black">
        Built for Every <span className="yText">Team</span> That Needs <br /> to
        Trust Who They Work With
      </div>

      <section className="flex flex-col justify-between w-[100%] pl-[10%] my-0 mx-auto py-24 relative">
        {/* <HorizontalSlider items={items} /> */}
      </section>
    </div>
  );
};

export default Page;
