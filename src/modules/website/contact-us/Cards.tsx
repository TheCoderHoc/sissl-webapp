
import Image from "next/image";
import React from "react";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          


interface featuresArray {
  title: string;
  description: string;
  icon: string | Blob | undefined;
}

interface features {
  data: featuresArray[];
}
// Features array data


const Cards = ({ data }: features) => {
  return (
    <section className="bg-white dark:bg-black font-[family-name:var(--font-geist-sans)] border border-gray-200 dark:border-black">
      <section className="container mx-auto px-4 xl:px-16">
        <div className="mt-[5.188rem]">
          {/* <div className="flex justify-center flex-col items-start">
            <h3 className="text-[40px] font-medium text-black dark:text-white">What we do</h3>
            <p className="text-14 text-start w-[549px] mt-[14px] font-medium text-gray-800 dark:text-[#F3F4F6]">
              We value innovation, trust, and purpose. Whether you&apos;re designing systems
              or supporting customers, you&apos;ll play a role in redefining secure experiences.
            </p>
          </div> */}
          <div className="flex flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black dark:text-white">
              What we do
            </h3>
            <p className="text-sm sm:text-base md:text-[14px] mt-4 font-medium text-gray-800 dark:text-[#F3F4F6]  sm:max-w-md md:max-w-lg lg:max-w-xl">
              We value innovation, trust, and purpose. Whether you&apos;re designing systems
              or supporting customers, you&apos;ll play a role in redefining secure experiences.
            </p>
          </div>

        </div>

        {/* Features Section */}
        <section className="w-full mt-[5.188rem] mb-[6.875rem]">
          <div className="container mx-auto flex flex-col md:flex-row gap-6">
            {data.map((feature, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between pt-[2.75rem] pl-[2.75rem] pr-3 cursor-pointer rounded-xl transition-all duration-300 w-full md:w-1/3 bg-gray-100 dark:bg-[#060606] hover:bg-yellow-400 dark:hover:bg-yellow-400 hover:md:w-[70%] h-[38.75rem]"
              >
                <div>
                  <h3 className="text-gray-900 dark:text-[#F3F4F6] group-hover:text-[#060606] text-[1.5rem] font-medium mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 dark:text-[#F3F4F6] group-hover:text-[#060606] text-[0.875rem] font-medium">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute bottom-[3.313rem] right-[3.563rem] rounded-full bg-white dark:bg-black group-hover:bg-white flex items-center justify-center">
                  <Image
                    src={feature.icon as string}
                    alt="card icon"
                    width={64}
                    height={64}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </section>

  );
};

export default Cards;
