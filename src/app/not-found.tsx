"use client";
// app/404.tsx or pages/404.tsx in Next.js
import React from "react";
import "./404.css"; // We'll define custom animations here

import { useRouter } from "next/navigation";
import Link from "next/link";
const NotFound = () => {
  const router = useRouter();
  return (
    <main className="flex items-center justify-center min-h-screen bg-black text-white p-3 font-sans">
      {/* Left text block */}
      <div className="relative flex items-center text-right z-10 overflow-hidden">
        <div>
          <span className="block opacity-0 translate-x-full animate-slideInLeftDelay1 px-3 leading-snug">
            404&nbsp;error
          </span>
          <span className="block opacity-0 translate-x-full animate-slideInLeftDelay2 px-3 leading-snug">
            page&nbsp;not&nbsp;found
          </span>
        </div>
        <svg viewBox="0 0 200 600" className="relative z-10 w-[50px] h-auto">
          <polygon
            points="118.302698 8 59.5369448 66.7657528 186.487016 193.715824 14 366.202839 153.491505 505.694344 68.1413353 591.044514 200 591.044514 200 8"
            className="fill-black animate-removeFill"
          />
        </svg>
      </div>

      {/* Crack SVG */}
      <svg
        viewBox="0 0 200 600"
        className="relative z-20 -ml-[50px] w-[50px] h-auto"
      >
        <polyline
          points="118.302698 8 59.5369448 66.7657528 186.487016 193.715824 14 366.202839 153.491505 505.694344 68.1413353 591.044514"
          className="fill-none stroke-[#F04F54] stroke-[10px] strokeLinecap-round strokeLinejoin-round animate-drawStroke"
        />
      </svg>

      {/* Right text block */}
      <div className="relative flex items-center z-0 -ml-[50px] overflow-hidden">
        <svg viewBox="0 0 200 600" className="relative z-0 w-[50px] h-auto">
          <polygon
            points="118.302698 8 59.5369448 66.7657528 186.487016 193.715824 14 366.202839 153.491505 505.694344 68.1413353 591.044514 0 591.044514 0 8"
            className="fill-black"
          />
        </svg>
        <div>
          <span className="block opacity-0 -translate-x-full animate-slideInRightDelay1 px-3 leading-snug">
            sorry&nbsp;about&nbsp;that!
          </span>
          <span className="block opacity-0 -translate-x-full animate-slideInRightDelay2 px-3 leading-snug">
            <button
              onClick={() => router.back()}
              className="font-medium hover:text-[#F04F54] active:text-[#43CB9D] animate-pulseColor delay-300"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <b>return&nbsp;to previous page?</b>
            </button>
            <b className="block">or</b>
            <Link
              href="/"
              className="block font-medium hover:text-[#F04F54] active:text-[#43CB9D] animate-pulseColor delay-300"
            >
              <b>return&nbsp;home?</b>
            </Link>
          </span>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
