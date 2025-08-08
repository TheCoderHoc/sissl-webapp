"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

interface SlideItem {
  title: string;
  description: string;
  image: string;
}

interface HorizontalSliderProps {
  heading: string;
  highlight: string;
  items: SlideItem[];
}

export default function HorizontalSlider({
  heading,
  highlight,
  items,
}: HorizontalSliderProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  // Auto slide effect
  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
      }, 5000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, current, items.length]);

  const [before, after] = heading.split(highlight);

  return (
    <section className="w-full px-4 md:px-8 py-20 bg-black text-white">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-24">
        <h2 className="text-3xl md:text-4xl  leading-snug">
          {before}
          <span className="text-[#FFE500]">{highlight}</span>
          {after}
        </h2>
      </div>

      {/* Carousel */}
      <div
        className="relative max-w-6xl mx-auto overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full min-w-full flex flex-col md:flex-row bg-[#0F0F0F] rounded-xl overflow-hidden transition-opacity duration-700 ease-in-out"
              style={{
                opacity: index === current ? 1 : 0.5,
              }}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-700"
                />
              </div>
              <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
                <h3 className="text-white font-medium text-lg underline mb-3">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition"
            aria-label="Previous Slide"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition"
            aria-label="Next Slide"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
