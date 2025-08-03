import Image from "next/image";
import React from "react";

const GallerySection: React.FC = () => {
    return (
        <>
            <div className="flex flex-col items-center w-full relative px-4 sm:px-10 md:px-20 py-16 sm:py-20 md:py-28 bg-white dark:bg-black">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl mb-4 pb-10 sm:pb-16 px-4 text-black dark:text-white">
                    Built For Modern <div>Security Needs</div>
                </h2>
                <div className="relative w-[50%] max-w-[853px]">
                    <Image
                        src="/images/products_image.png"
                        alt="Product"
                        className="w-full h-auto"
                        width={200}
                        height={200}
                    />
                    <a
                        href="auth/account-type"
                        className="absolute top-4 left-1/2 transform -translate-x-1/2 text-sm sm:text-base bg-si_yellow text-black px-4 py-2 rounded shadow-md"
                    >
                        Shop product
                    </a>
                </div>
            </div>
        </>
    );
};

export default GallerySection;
