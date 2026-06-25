"use client";

import { useState } from "react";
import Script from "next/script";
import {
  CheckBadgeIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    grecaptcha?: {
      getResponse: () => string;
      reset: () => void;
    };
  }
}

type FormState = {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  message: string;
};

const benefits = [
  {
    title: "Save Time & Money",
    description:
      "Stop spending nights and weekends on your books. Breeze Bookkeeping's proven systems cut costs, save hours, and help you keep more of what you earn.",
    icon: CurrencyDollarIcon,
  },
  {
    title: "Accurate Books, Every Month",
    description:
      "Get clean, reliable books delivered every month — so your reports are trustworthy, your decisions are backed by real numbers, and there are fewer surprises at tax time.",
    icon: CheckBadgeIcon,
  },
  {
    title: "Work Directly with Darren",
    description:
      "No hand-offs, no call centers. You get personal support from Darren Cardwell — a bookkeeper with 30+ years of experience who's responsive, practical, and invested in your success.",
    icon: UserGroupIcon,
  },
];

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  businessName: "",
  message: "",
};

export default function BookkeepingServicesLandingPage() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!recaptchaSiteKey) {
      setError("reCAPTCHA is not configured. Please try again later.");
      return;
    }

    const recaptchaToken = window.grecaptcha?.getResponse();

    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.error || "Failed to send message. Please try again.",
        );
      }

      setIsSubmitted(true);

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "generate_lead", {
          event_category: "form",
          event_label: "bookkeeping_services_landing",
        });
      }
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Failed to send message. Please try again.",
      );
      window.grecaptcha?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-900">
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />
      <main className="isolate">
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

          <div className="mx-auto max-w-7xl px-6 pb-12 pt-20 lg:px-8 lg:pt-24">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                Professional Bookkeeping Services
              </h1>
              <p className="mt-4 text-2xl font-medium text-indigo-400 sm:text-3xl">
                Accurate, Affordable, and Stress-Free Accounting
              </p>
              <p className="mx-auto mt-8 max-w-3xl text-lg/8 text-gray-300">
                I&apos;m Darren Cardwell, and I started Breeze Bookkeeping to help
                small business owners stay organized, profitable, and confident
                in their financial decisions. I handle the details every month
                so you can focus on growing your business.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-inset ring-white/10"
              >
                <benefit.icon
                  className="size-8 text-indigo-400"
                  aria-hidden="true"
                />
                <h2 className="mt-4 text-xl font-semibold text-white">
                  {benefit.title}
                </h2>
                <p className="mt-3 text-base/7 text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-6 pb-20 pt-8 lg:px-8 lg:pb-24">
          <div className="rounded-2xl bg-gray-800/70 p-8 ring-1 ring-inset ring-white/10 sm:p-10">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Get Your Free Consultation
            </h2>

            {isSubmitted ? (
              <div className="mt-10 text-center">
                <CheckCircleIcon className="mx-auto size-16 text-indigo-400" />
                <h3 className="mt-6 text-3xl font-semibold text-white">
                  Thank You!
                </h3>
                <p className="mt-4 text-lg text-gray-300">
                  Your message has been received. Someone from Breeze
                  Bookkeeping will be in contact with you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {error ? (
                  <p className="rounded-md border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    {error}
                  </p>
                ) : null}

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-md border border-white/15 bg-gray-900 px-4 py-3 text-white placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-white/15 bg-gray-900 px-4 py-3 text-white placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-md border border-white/15 bg-gray-900 px-4 py-3 text-white placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="businessName"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Business Name
                  </label>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full rounded-md border border-white/15 bg-gray-900 px-4 py-3 text-white placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    What services are you interested in?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-md border border-white/15 bg-gray-900 px-4 py-3 text-white placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <div
                    className="g-recaptcha"
                    data-sitekey={recaptchaSiteKey}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded bg-indigo-600 px-8 py-3 text-lg font-semibold text-white hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Get Your Free Consultation"}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
