"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
      <div className="relative pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] sm:left-[calc(50%-30rem)] sm:w-288.75 opacity-20"
          />
        </div>
      </div>
      <div className="mx-auto max-w-2xl p-6 sm:p-12 lg:max-w-4xl text-white">
        <h1 className="mt-4 text-4xl text-indigo-400">SCHEDULE A PHONE CALL</h1>
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
            className="text-lg/8 text-indigo-600 hover:text-indigo-300 font-semibold"
          >
            <div className="mt-8 rounded py-2 px-8 bg-white text-indigo-600 hover:bg-indigo-500">
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
            <h1 className="text-4xl text-indigo-400">OR SEND US A MESSAGE</h1>
            <ChevronDownIcon
              className={`h-8 w-8 text-indigo-400 transition-transform duration-300 ${
                isFormOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Accordion Content */}
          <div
            className={`transition-all duration-300 ease-in-out ${
              isFormOpen
                ? "max-h-[2000px] opacity-100 mt-6"
                : "max-h-0 opacity-0 overflow-hidden"
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
