"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fade1, fade2, fade3 } from "@/public/images";

const EventGuide = () => {
  const content = [
    {
      step: "1",
      title: "Create Your Event",
      desc: "Start with your goal—whether it’s hosting a secure event, setting up ticket types, or customizing access for your guests.",
      image: fade1.src,
    },
    {
      step: "2",
      title: "Set Rules for Access and Identity",
      desc: "Decide how you'd like us to verify identities—using a national ID, a face match, or a QR code.",
      image: fade2.src,
    },
    {
      step: "3",
      title: "Share Links with Guests",
      desc: "Easily share a secure link with your guests to confirm their attendance and access details.",
      image: fade3.src,
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
    <section className="w-full bg-black text-white py-24 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Title */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium leading-snug mb-16">
          Built for <span className="text-[#FFE500]">Teams</span> Who <br />
          <span className="text-[#FFE500]">Host</span> with Intent
        </h2>

        {/* ✅ Fixed-height container to prevent flickering */}
        <div className="w-full min-h-[620px] md:min-h-[540px] lg:min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 w-full"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
              exit={{ opacity: 0, y: -30, transition: { duration: 0.4 } }}
            >
              {/* LEFT: Step-by-step guide */}
              <motion.div className="space-y-12 w-full max-w-2xl mx-auto lg:mx-0">
                {content.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-4 pb-3">
                      <div className="w-9 h-9 flex items-center justify-center rounded-md bg-[#1E1E1E] text-white text-sm">
                        {item.step}
                      </div>
                      <h3 className="text-white text-lg font-medium">
                        {item.title}
                      </h3>
                    </div>

                    {activeIndex === index && (
                      <motion.p
                        key={`desc-${index}`}
                        className="ml-10 sm:ml-12 text-sm text-white/70 pb-2 max-w-[90%] sm:max-w-md"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        {item.desc}
                      </motion.p>
                    )}

                    {/* Progress bar */}
                    <div className="ml-10 sm:ml-12 mt-3 w-[90%] sm:w-full max-w-md h-[3px] bg-white/20 rounded overflow-hidden">
                      <motion.div
                        className="h-full bg-[#FFE500] transition-all duration-500"
                        style={{
                          width: activeIndex === index ? "100%" : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* RIGHT: Image */}
              <motion.div className="w-full flex justify-center lg:justify-end">
                <motion.img
                  key={content[activeIndex].image}
                  src={content[activeIndex].image}
                  alt={`Step ${content[activeIndex].step}`}
                  className="rounded-xl w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg shadow-lg"
                  initial={{ opacity: 0.3, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default EventGuide;
