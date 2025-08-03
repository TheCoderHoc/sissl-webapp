import Image from "next/image";
import React from "react";

const GallerySection: React.FC = () => {
    return (
        <section className="bg-white dark:bg-black text-black dark:text-white py-16 px-4 flex flex-col items-center relative">
            <div className="w-full md:w-[50%] lg:w-[30%] mb-10 flex flex-col  justify-center">
                <h2 className=" text-[24px] lg:text-4xl text-center font-medium leading-tight mb-4">
                    Everything You Need
                    <br />
                    to Validate in Real-Time
                </h2>
                <p className="text-[13px] lg:text-[18px] text-center mt-3">
                    From ID matching and biometric checks to background
                    screenings, our tools help you validate staff, guests, and
                    attendees securely
                </p>
            </div>
            <div className="container w-full flex mb-[50px]  xl:mb-[150px]  justify-center">
                <Image
                    className="w-[45%] "
                    src="/images/verificationMid.png"
                    alt=""
                    width={200}
                    height={200}
                />
            </div>
        </section>
    );
};

export default GallerySection;
