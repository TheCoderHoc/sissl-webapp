// import { Fb, Linkedin, LogoSmall, Wave, Wave2, X } from "@/public/icons";
// import Image from "next/image";

// export default function Footer() {
//   const currentYear: number = new Date().getFullYear();
//   return (
//     <footer className="bg-white dark:bg-black text-black dark:text-white px-6 py-12">
//       {/* CTA */}
//       <div className="bg-white dark:bg-black py-16 px-4 flex justify-center">
//         <div className="bg-[#f2f2f2] dark:bg-[#181818] w-full max-w-[1200px] min-h-[350px] relative rounded-3xl">
//           <div className="wave1 absolute top-4 left-2">
//             <Wave />
//           </div>
//           <div className="wave2 absolute bottom-8 right-0">
//             <Wave2 />
//           </div>
//           <div className="absolute top-10 md:top-20 left-4 md:left-16">
//             <h2 className="text-black dark:text-white text-3xl md:text-[56px] font-medium leading-snug md:leading-[58px] max-w-[90%] md:max-w-[650px]">
//               Make Guest Management a Breeze
//             </h2>
//             <a
//               href="/auth/account-type"
//               className="inline-block  mt-6 md:mt-8 rounded-[8px] bg-primary px-6 py-3 text-black font-medium hover:bg-yellow-300 transition"
//             >
//               Get Started
//             </a>
//           </div>
//           <div className="hidden md:block absolute right-4 md:right-4 bottom-0">
//             <Image
//               src="/images/footerbookguy.png"
//               alt="call to action"
//               width={200}
//               height={200}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Links and Newsletter */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
//         <div>
//           <h3 className="font-medium mb-4">Solutions</h3>
//           <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
//             <li>
//               <a href="solution/staff-validation">Staff Validation</a>
//             </li>
//             <li>
//               <a href="solution/guest-access">Guest Access</a>
//             </li>
//             <li>
//               <a href="solution/event-hosting">Event Hosting</a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="font-medium mb-4">Company</h3>
//           <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
//             <li>
//               <a href="/company/about">About us</a>
//             </li>
//             <li>
//               <a href="/contact-us">Contact us</a>
//             </li>
//             <li>
//               <a href="/company/pricing">Pricing</a>
//             </li>
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div className="lg:col-span-2">
//           <h3 className="font-medium mb-2">Subscribe to our newsletter</h3>
//           <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 mt-5">
//             Subscribe to SISSL for latest update
//           </p>
//           <div className="flex flex-col sm:flex-col gap-4 mt-14">
//             <input
//               type="email"
//               placeholder="Submit email"
//               className="bg-transparent border border-gray-400 dark:border-gray-600 px-4 py-2 rounded-md text-sm w-full sm:w-2/3 text-black dark:text-white"
//             />
//             <a className="bg-primary text-black px-6 py-2 rounded-md font-medium text-sm hover:bg-yellow-300 transition w-36">
//               Submit
//             </a>
//           </div>
//         </div>

//         {/* Logo and Socials */}
//         <div className="flex flex-col items-start lg:items-center">
//           <LogoSmall className="w-[59px] h-[51px]" />
//           <div className="flex items-center mt-5 gap-4">
//             <span className="text-sm text-black dark:text-white">
//               Follow us
//             </span>
//             <div className="flex gap-3 text-yellow-400 text-xl">
//               <a href="#">
//                 <Fb className="w-4 h-4 text-yellow-400" />
//               </a>
//               <a href="#">
//                 <Linkedin className="w-4 h-4 text-yellow-400" />
//               </a>
//               <a href="#">
//                 <X className="w-4 h-4 text-yellow-400" />
//               </a>
//             </div>
//           </div>
//           <button className="bg-primary text-black px-6 py-2 rounded-md font-medium text-sm hover:bg-yellow-300 transition w-36 mt-20">
//             Contact sales
//           </button>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
//         © Copyright SISSL {currentYear}
//       </div>
//     </footer>
//   );
// }


import { Fb, Linkedin, LogoSmall, Wave, Wave2, X } from "@/public/icons";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white px-4 md:px-12 py-20 space-y-20">
      {/* CTA BANNER */}
        <div className="bg-white dark:bg-black py-16 px-4 flex justify-center">
         <div className="bg-[#f2f2f2] dark:bg-[#181818] w-full max-w-[1200px] min-h-[350px] relative rounded-3xl">
           <div className="wave1 absolute top-4 left-2">
             <Wave />
           </div>
           <div className="wave2 absolute bottom-8 right-0">
             <Wave2 />
           </div>
           <div className="absolute top-10 md:top-20 left-4 md:left-16">
             <h2 className="text-black dark:text-white text-3xl md:text-[56px] font-medium leading-snug md:leading-[58px] max-w-[90%] md:max-w-[650px]">
               Make Guest Management a Breeze
             </h2>
             <a
               href="/auth/account-type"
               className="inline-block  mt-6 md:mt-8 rounded-[8px] bg-primary px-6 py-3 text-black font-medium hover:bg-yellow-300 transition"
             >
               Get Started
             </a>
           </div>
           <div className="hidden md:block absolute right-4 md:right-4 bottom-0">
             <Image
               src="/images/footerbookguy.png"
               alt="call to action"
               width={200}
               height={200}
             />
           </div>
         </div>
       </div>

      {/* LINKS SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Column 1: Solutions */}
        <div>
          <h4 className="font-medium mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/solution/staff-validation">Staff Validation</a></li>
            <li><a href="/solution/guest-access">Guest Access</a></li>
            <li><a href="/solution/event-hosting">Event Hosting</a></li>
          </ul>
        </div>

        {/* Column 2: Company */}
        <div>
          <h4 className="font-medium mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/company/about">About us</a></li>
            <li><a href="/contact-us">Contact us</a></li>
            <li><a href="/company/pricing">Pricing</a></li>
          </ul>
        </div>

        {/* Column 3–4: Newsletter */}
        <div className="lg:col-span-2">
          <h4 className="font-medium mb-4">Subscribe to our newsletter</h4>
          <p className="text-sm text-gray-400 mb-6">Subscribe to SISSL for latest update</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Submit email"
              className="bg-transparent border border-gray-600 px-4 py-3 rounded text-sm w-full sm:w-auto text-white placeholder-gray-400"
            />
            <button className="bg-[#FFE500] text-black font-medium text-sm px-6 py-3 rounded hover:bg-yellow-400 transition w-full sm:w-auto">
              Submit
            </button>
          </div>
        </div>

        {/* Column 5: Logo, Socials, Sales CTA */}
        <div className="flex flex-col justify-between gap-8">
          <LogoSmall className="w-[59px] h-[51px]" />
          <div>
            <p className="text-sm mb-2">Follow us</p>
            <div className="flex gap-4 text-yellow-400">
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

      {/* COPYRIGHT */}
      <div className="text-center text-sm text-gray-400 pt-10">
        &copy; Copyright SISSL {currentYear}
      </div>
    </footer>
  );
}
