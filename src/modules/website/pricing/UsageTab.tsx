"use client";
import { useState } from "react";

const UsageTab = () => {
  const Tabs = [
    {
      tabName: "Monthly Plan",
      subHeading: "Flexible monthly billing with no long-term commitment",
    },
    {
      tabName: "Yearly Plan",
      subHeading: "Save 20% with annual billing (2 months free)",
    },
  ];
  const [activeTab, setActiveTab] = useState(Tabs[0].tabName);

  const Plans = [
    {
      tabCategory: "monthly plan",
      title: "Basic Plan",
      price: "NGN20,000",
      description: "Basic plan for our user",
      features: [
        "Staff validation",
        "Guest invites (up to 100 attendees)",
        "1 active event",
        "Basic ID verification tools",
      ],
      ctaBtn: "Get started",
      secondaryBtn: "Contact us",
    },
    {
      tabCategory: "monthly plan",
      title: "Business plan",
      price: "NGN60,000",
      description: "Basic plan for our user",
      features: [
        "All Starter features",
        "Up to 10 active events",
        "Selfie match & ID check",
        "QR code access",
        "Basic background check",
      ],
      ctaBtn: "Get started",
      secondaryBtn: "Contact us",
    },
    {
      tabCategory: "monthly plan",
      title: "Enterprise Plan",
      price: "NGN80,000",
      description: "Basic plan for our user",
      features: [
        "All Pro features",
        "Unlimited guest & staff entries",
        "Dedicated account manager",
        "Hardware integrations (CCTV, IP phones)",
        "Custom workflows & API access",
      ],
      ctaBtn: "Get started",
      secondaryBtn: "Contact us",
    },
    {
      tabCategory: "yearly plan",
      title: "Basic Plan",
      price: "NGN192,000",
      description: "Basic plan for our user",
      features: [
        "Staff validation",
        "Guest invites (up to 100 attendees)",
        "1 active event",
        "Basic ID verification tools",
      ],  
      ctaBtn: "Get started",
      secondaryBtn: "Contact us",
    },
    {
      tabCategory: "yearly plan",
      title: "Business plan",
      price: "NGN576,000",
      description: "Basic plan for our user",
      features: [
        "All Starter features",
        "Up to 10 active events",
        "Selfie match & ID check",
        "QR code access",
        "Basic background check",
      ],
      ctaBtn: "Get started",
      secondaryBtn: "Contact us",
    },
    {
      tabCategory: "yearly plan",
      title: "Enterprise Plan",
      price: "NGN768,000",
      description: "Basic plan for our user",
      features: [
        "All Pro features",
        "Unlimited guest & staff entries",
        "Dedicated account manager",
        "Hardware integrations (CCTV, IP phones)",
        "Custom workflows & API access",
      ],
      ctaBtn: "Get started",
      secondaryBtn: "Contact us",
    },
  ];

  const cardsFilter = Plans.filter(
    (plan) => plan.tabCategory.toLowerCase() === activeTab.toLowerCase()
  );

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white pt-20 pb-20 md:pt-36 md:pb-[120px] transition-colors duration-300">
      <div className="container mx-auto px-5 md:px-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-medium">
            Choose a Plan
            <br />
            That Fits Your Team
          </h2>
        </div>

        <div className="flex justify-start mb-10 pt-10 md:pt-28">
          <div className="bg-gray-100 dark:bg-[#1a1a1a] rounded-full py-1 px-2 md:py-3 md:px-10 flex flex-wrap md:flex-nowrap">
            {Tabs.map((tab, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 md:px-10 md:py-5 rounded-full transition-all text-sm md:text-base ${
                  activeTab === tab.tabName
                    ? "bg-black dark:bg-white text-white dark:text-black"
                    : "text-gray-600 dark:text-gray-400"
                }`}
                onClick={() => setActiveTab(Tabs[idx].tabName)}
              >
                {tab.tabName}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
          {cardsFilter.map((plan, idx) => (
            <div
              key={idx}
              className="bg-[#f3f4f6] dark:bg-[#1a1a1a] rounded-[20px] p-8 transition-colors duration-300"
            >
              <div className="top bg-gray-200 dark:bg-[#222] p-6 rounded-md">
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {plan.description}
                </p>

                <a href="/auth/login" className="flex justify-center items center w-full bg-si_yellow text-black py-3 rounded-lg mb-4 font-medium">
                  {plan.ctaBtn}
                </a>
                <button className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white py-3 rounded-lg mb-8 font-medium">
                  {plan.secondaryBtn}
                </button>
              </div>

              <div className="pt-6">
                <h4 className="text-lg font-medium mb-4">Featuring</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-si_yellow mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsageTab;
