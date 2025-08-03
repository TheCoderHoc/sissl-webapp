import Image from "next/image";

interface featuresArray {
    title: string;
    description: string;
    icon: string;
}

interface features {
    data: featuresArray[];
}

const Cards = ({ data }: features) => {
    return (
        <section className="bg-white dark:bg-black font-[family-name:var(--font-geist-sans)] transition-colors duration-300 flex flex-col xl:flex-row xl:justify-between w-[80%] my-0 mx-auto ">
            <section className="container mx-auto px-4 xl:px-16">
                <div className="pt-[5.188rem]">
                    <div className="w-full flex justify-center flex-col items-center">
                        <h3 className="text-[40px] font-medium text-black dark:text-white">
                            What we do
                        </h3>
                        <p className="text-center  mt-[14px] font-medium text-gray-800 dark:text-gray-300">
                            Find where you fit in. We’re hiring across
                            departments:
                        </p>
                    </div>
                </div>

                <section className="w-full mt-[5.188rem] pb-[6.875rem]">
                    <div className="container mx-auto flex flex-col md:flex-row gap-6">
                        {data.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col justify-between pt-[2.75rem] pl-[2.75rem] pr-3 cursor-pointer rounded-xl transition-all duration-300 w-full md:w-1/3 bg-[#f3f4f6] dark:bg-[#060606] hover:bg-si_yellow dark:hover:bg-si_yellow hover:md:w-[70%] h-[38.75rem]"
                            >
                                <div>
                                    <h3 className="text-black dark:text-white group-hover:text-black text-[1.5rem] font-medium mb-2 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-black dark:text-white group-hover:text-black text-[0.875rem] font-medium transition-colors">
                                        {feature.description}
                                    </p>
                                </div>

                                <div className="absolute bottom-[3.313rem] right-[3.563rem] rounded-full bg-white dark:bg-black group-hover:bg-white flex items-center justify-center transition-colors">
                                    <Image
                                        src={feature.icon}
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
