
import { Fb, Linkedin, LogoSmall, Wave, Wave2, X } from "@/public/icons";
import { footerbookguy } from "@/public/images";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white px-4 md:px-12 py-20 space-y-20">
      {/* CTA BANNER */}
      <div className="bg-white dark:bg-black px-4 py-12 flex justify-center">
        <div className="relative w-full max-w-[1200px] min-h-[350px] rounded-[28px] bg-[#f2f2f2] dark:bg-[#181818] ">

          {/* Waves behind (no clicks) */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute top-4 left-2 opacity-70">
              <Wave />
            </div>
            <div className="absolute bottom-8 right-0 opacity-70">
              <Wave2 />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 px-6 md:px-14 py-10 md:py-14">

            {/* Text block */}
            <div className="max-w-[660px] text-center md:text-left">
              <h2 className="text-black dark:text-white text-3xl sm:text-4xl md:text-[44px] lg:text-[56px]  leading-tight md:leading-[58px]">
                Ready to Host Smarter, <br className="hidden sm:block" />
                Safer, and with <br className="hidden sm:block" />
                Confidence
              </h2>

              <a
                href="/auth/account-type"
                className="inline-block mt-6 md:mt-8 rounded-[8px] bg-primary px-6 py-3 text-black font-medium hover:bg-yellow-300 transition"
              >
                Get Started
              </a>
            </div>

            {/* Image block */}
            {/* On mobile it's in the flow; on md+ it pins to bottom-right */}
            <div className="hidden md:block w-[240px] sm:w-[280px] md:w-[360px] lg:w-[420px] md:absolute md:bottom-0 md:right-6 z-20">
              <div className="hidden md:block relative w-[240px] sm:w-[280px] md:w-[360px] lg:w-[420px] aspect-[1/1] md:absolute md:bottom-0 md:right-6 z-20">
                <Image
                  src={footerbookguy.src}
                  alt="Host confidently"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* LINKS SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5
      gap-10 sm:gap-12
      place-items-center md:place-items-start
      text-center md:text-left
    "
        >
          {/* Column 1: Solutions */}
          <div className="w-full max-w-sm">
            <h4 className="font-medium mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/solution/staff-validation">Staff Validation</a></li>
              <li><a href="/solution/guest-access">Guest Access</a></li>
              <li><a href="/solution/event-hosting">Event Hosting</a></li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="w-full max-w-sm">
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/company/about">About us</a></li>
              <li><a href="/contact-us">Contact us</a></li>
              <li><a href="/company/pricing">Pricing</a></li>
            </ul>
          </div>

          {/* Column 3–4: Newsletter */}
          <div className="w-full lg:col-span-2 max-w-md">
            <h4 className="font-medium mb-4">Subscribe to our newsletter</h4>
            <p className="text-sm text-gray-400 mb-6">
              Subscribe to SISSL for latest update
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-start items-stretch sm:items-center">
              <input
                type="email"
                placeholder="Submit email"
                className="bg-transparent border border-gray-600 px-4 py-3 rounded text-sm w-full text-white placeholder-gray-400"
              />
              <button className="bg-[#FFE500] text-black font-medium text-sm px-6 py-3 rounded hover:bg-yellow-400 transition w-full sm:w-auto">
                Submit
              </button>
            </div>
          </div>

          {/* Column 5: Logo, Socials, Sales CTA */}
          <div className="w-full max-w-sm flex flex-col justify-between items-center md:items-start gap-8">
            <LogoSmall className="w-[59px] h-[51px]" />
            <div>
              <p className="text-sm mb-2">Follow us</p>
              <div className="flex gap-4 text-yellow-400 justify-center md:justify-start">
                <a href="#"><Fb className="w-4 h-4" /></a>
                <a href="#"><Linkedin className="w-4 h-4" /></a>
                <a href="#"><X className="w-4 h-4" /></a>
              </div>
            </div>
            <button className="bg-[#FFE500] text-black font-medium text-sm px-6 py-3 rounded hover:bg-yellow-400 transition w-full sm:w-auto">
              Contact sales
            </button>
          </div>
        </div>
      </div>


      {/* COPYRIGHT */}
      <div className="text-center text-sm text-gray-400 pt-10">
        &copy; Copyright SISSL {currentYear}
      </div>
    </footer>
  );
}
