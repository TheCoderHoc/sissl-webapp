"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EventGuide = () => {
  const content = [
    {
      title: "Create Your Event",
      desc: "Start with your goal—whether it’s hosting a secure event, setting up ticket types, or customizing access for your guests.",
      step: "1",
      image: "/images/fade1.png",
    },
    {
      title: "Set Rules for Access and Identity",
      desc: "Decide how you'd like us to verify identities—using a national ID, a face match, or a QR code.",
      step: "2",
      image: "/images/fade2.png",
    },
    {
      title: "Share Links with Guests",
      desc: "Easily share a secure link with your guests to confirm their attendance and access details.",
      step: "3",
      image: "/images/fade3.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % content.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [content.length]);

  return (
    <div className="flex flex-col items-center justify-center bg-white text-black dark:bg-black dark:text-white p-6 pb-[200px]">
      <h2 className="text-3xl md:text-4xl font-medium pb-32 leading-snug text-center">
        Built for <span className="text-si_yellow">Teams</span> Who <br />
        <span className="text-si_yellow">Host</span> with Intent
      </h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="grid grid-cols-1 md:grid-cols-2 gap-[249px] items-center max-w-6xl w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
          }}
          exit={{ opacity: 0, y: -30, transition: { duration: 0.4 } }}
        >
          {/* Left Text Block */}
          <motion.div layoutId="text-block" className="space-y-14">
            {content.map((item, index) => (
              <div key={index}>
                <div className="flex items-center pb-5 space-x-4">
                  <div className="bg-zinc-800 text-white dark:bg-zinc-700 px-[14.5px] h-9 flex items-center justify-center rounded-md text-sm">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    {item.title}
                  </h3>
                </div>
                {activeIndex === index && (
                  <motion.p
                    layoutId="description"
                    className="ml-12 text-sm pb-4 text-gray-700 dark:text-zinc-400 max-w-md pt-1"
                  >
                    {item.desc}
                  </motion.p>
                )}
                <div className="w-full h-1 border bg-black dark:bg-white mt-2 overflow-hidden">
                  <motion.div
                    layout
                    className={`h-1 ${
                      activeIndex === index ? "bg-primary" : ""
                    }`}
                    style={{
                      width: `${((index + 1) / content.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Image Block */}
          <motion.div layoutId="image-block" className="flex justify-center">
            <motion.img
              key={content[activeIndex].image}
              layoutId="guide-image"
              src={content[activeIndex].image}
              alt={`Visual for ${content[activeIndex].title}`}
              className="rounded-xl shadow-lg w-full max-w-md"
              initial={{ opacity: 0.3, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6 },
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                transition: { duration: 0.4 },
              }}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default EventGuide;
