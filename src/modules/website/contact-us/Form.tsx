"use client";
import React, { FormEvent } from "react";

const ContactUsForm = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <section className="bg-white dark:bg-black flex items-center justify-center">
        <div className="w-full max-w-2xl px-6 py-24">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-medium text-black dark:text-white mb-4">
              We’re happy to help
            </h1>
            <p className="text-sm text-gray-700 dark:text-gray-300 font-normal">
              Whether you have a question, need support, or want to explore how
              SISSL can help your organization, we’re here to help.
            </p>
          </div>

          <div className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-black dark:text-white mb-1"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 bg-white dark:bg-black text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-si_yellow"
              />
            </div>

            {/* Description Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-black dark:text-white mb-1"
              >
                Description
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your description"
                rows={5}
                className="w-full px-4 py-3 bg-white dark:bg-black text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-md resize-none focus:outline-none focus:border-si_yellow"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="bg-primary text-black font-medium px-6 py-3 rounded-md hover:bg-yellow-300 transition"
              >
                Submit request
              </button>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default ContactUsForm;
