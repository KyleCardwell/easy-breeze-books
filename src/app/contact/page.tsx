"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
      <div className="mx-auto max-w-2xl p-12 lg:max-w-4xl text-gray-900 dark:text-white">
        <h1 className="mt-4 text-4xl text-indigo-600 dark:text-indigo-400">
          SCHEDULE A PHONE CALL
        </h1>
        <p className="mt-4 text-lg/8">
          Let&apos;s talk about your monthly bookkeeping needs and how we can
          potentially save you thousands of dollars.
        </p>
        <p className="mt-4 text-lg/8">
          Click on the button below to select a day and time that works for you
          and you will be immediately scheduled in my calendar!
        </p>
        <div className="w-full flex justify-center mt-8">
          <a
            href="https://calendly.com/breezebookkeeping/30min"
            className="text-lg/8 text-white dark:text-indigo-600 hover:text-indigo-500 dark:hover:text-indigo-300 font-semibold"
          >
            <div className="mt-8 rounded bg-indigo-600 text-white py-2 px-4 dark:bg-white dark:text-indigo-600 hover:bg-indigo-500 dark:hover:bg-indigo-500">
              Schedule Call
            </div>
          </a>
        </div>

        {/* Accordion for Contact Form */}
        <div className="mt-20">
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="w-full flex items-center justify-between text-left"
          >
            <h1 className="text-4xl text-indigo-600 dark:text-indigo-400">
              OR SEND US A MESSAGE
            </h1>
            <ChevronDownIcon
              className={`h-8 w-8 text-indigo-600 dark:text-indigo-400 transition-transform duration-300 ${
                isFormOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Accordion Content */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              isFormOpen
                ? "max-h-[1200px] opacity-100 mt-6"
                : "max-h-0 opacity-0"
            }`}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
