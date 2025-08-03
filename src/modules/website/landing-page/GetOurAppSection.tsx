import React from "react";
import {
    GetOnAppStore,
    GetOnGooglePlay,
    HandHeldPhone,
} from "../../../../public/icons";

const GetOurAppSection = () => {
    return (
        <div>
            <section className="text-black dark:text-gray-300 body-font bg-white dark:bg-black">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font px-10 sm:text-4xl text-3xl mb-4 font-medium text-black dark:text-white">
                            Get our app
                        </h1>
                        <p className="mb-8 px-10 leading-relaxed text-gray-800 dark:text-gray-300">
                            Get the SISSL app and manage events, validate staff,
                            and
                            <br className="hidden lg:inline-block" /> control
                            access on the go. Available on Google Play and the
                            <br className="hidden lg:inline-block" /> App Store
                        </p>
                        <div className="lg:flex lg:flex-row md:flex-col gap-2">
                            <button className="inline-flex items-center text-gray-900 dark:text-white px-6 rounded text-lg ">
                                <GetOnGooglePlay />
                            </button>
                            <button className="inline-flex items-center text-gray-900 dark:text-white px-6 rounded text-lg ">
                                <GetOnAppStore />
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 overflow-hidden">
                        <div className="rounded overflow-hidden">
                            <HandHeldPhone className="w-full h-auto object-cover object-center" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetOurAppSection;
