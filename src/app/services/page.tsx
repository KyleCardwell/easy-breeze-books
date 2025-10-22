import { CheckIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { services } from "@/utils/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookkeeping Services",
  description: "Professional bookkeeping services including QuickBooks consulting, payroll, account reconciliation, financial statements, and more. Serving Herriman, UT, Salt Lake City, and businesses nationwide.",
  keywords: ["bookkeeping services", "QuickBooks consulting", "payroll services", "account reconciliation", "financial statements", "invoicing", "bill pay", "Herriman UT", "Salt Lake City"],
  alternates: {
    canonical: "https://www.easybreezebooks.com/services"
  },
  openGraph: {
    title: "Bookkeeping Services | Breeze Bookkeeping",
    description: "Professional bookkeeping services including QuickBooks consulting, payroll, account reconciliation, and financial statements.",
    url: "https://www.easybreezebooks.com/services",
    images: [
      {
        url: "/quickbooks_at_office.avif",
        width: 1200,
        height: 630,
        alt: "QuickBooks Bookkeeping Services"
      }
    ]
  }
};

export default function Services() {
  return (
    <div className="">
      <main className="isolate">
        {/* Hero section */}
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
          <div className="py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl p-2 ring-1 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4 bg-white/2.5 ring-white/10">
                  <div className="h-[450px] overflow-hidden relative">
                    <Image
                      alt="Professional bookkeeping services with QuickBooks Online"
                      src="/quickbooks_at_office.avif"
                      fill={true}
                      className="w-304 bg-gray-50 shadow-xl ring-1 ring-gray-900/10 rounded-lg"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div className="px-4 mx-auto mt-16 max-w-7xl sm:mt-16 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h1 className="text-base/7 font-semibold text-indigo-400">
              Professional Bookkeeping Services
            </h1>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl lg:text-balance text-white">
              Bookkeeping Services
            </p>
            <p className="mt-6 text-lg/8 text-gray-300">
              At Breeze Bookkeeping, we take the entire accounting function off
              your plate so you can focus on running your business. That begins
              with a solid foundation of accurate, timely bookkeeping. Clean
              books drive actionable financial insights and serve as the
              backbone for tax filings. When errors occur, the cost can be high
              — from poor decisions made on bad data to overpaying in taxes.
              That’s why having a certified Quickbooks ProAdvisor manage your
              bookkeeping and taxes is such a valuable safeguard.
            </p>
            <p className="mt-6 text-lg/8 text-gray-300">
              QuickBooks Online is our platform of choice because it’s the
              industry leader and can meet the full accounting needs of nearly
              all small businesses. Its ability to integrate with tools like
              time tracking, expense reporting, and online bill pay creates a
              more efficient system, boosting accuracy while saving time and
              money. As Advanced Certified QuickBooks ProAdvisors, we’re
              equipped to provide the right solution for your unique needs.
            </p>
          </div>
        </div>

        {/* Featres */}
        <div className="mx-auto mt-16 max-w-7xl sm:mt-8 lg:mt-32 px-6">
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <h2 className="text-base/7 font-semibold text-indigo-400">
              Services Offered
            </h2>
            <dl className="grid max-w-xl grid-cols-1 gap-x-16 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 mt-6">
              {services.map((service, index) => (
                <div key={index} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-white">
                    <div className="absolute top-0 left-0 flex size-8 items-center justify-center rounded-lg bg-indigo-500">
                      <CheckIcon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {service}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Testimonial section */}
      </main>
    </div>
  );
}
