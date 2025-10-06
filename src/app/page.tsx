"use client";

import Image from "next/image";
import { homePageServices } from "@/utils/constants";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default function Homepage() {
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
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75 dark:opacity-20"
            />
          </div>
          <div className="py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24 relative">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4 dark:bg-white/2.5 dark:ring-white/10">
                  <div className="absolute md:top-6 md:left-6 z-10 pl-6 sm:pl-8 sm:w-1/2 h-full">
                    <div className="flex flex-col gap-2 w-1/2 sm:w-full h-2/3 items-center justify-center">
                      <h1 className="contents">
                        <span className="sr-only">Breeze Bookkeeping</span>
                        <Image
                          src="/breeze_bookkeeping_logo.svg"
                          alt=""
                          width={500}
                          height={256}
                          className="pl-6 mt-4 w-4/5 sm:w-3/4 sm:max-w-sm md:max-w-md drop-shadow-lg"
                          priority
                        />
                      </h1>
                      <p className="hidden lg:block mt-4 text-sm md:text-md font-medium text-pretty text-white sm:text-xl/8 drop-shadow-lg">
                        ~ Effortless accounting that feels like a breeze ~
                      </p>
                      <div className="w-full flex justify-center mt-2 sm:mt-6">
                        <a
                          href="https://calendly.com/breezebookkeeping/30min"
                          className="text-xs md:text-xl text-white hover:text-indigo-100 font-semibold"
                        >
                          <div className="rounded bg-indigo-600 py-1 px-2 md:py-2 md:px-4">
                            Schedule A Call
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <Image
                    alt="App screenshot"
                    src="/darren_1.jpg"
                    width={2432}
                    height={1442}
                    className="w-304 bg-gray-50 shadow-xl ring-1 ring-gray-900/10 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div className="px-4 mx-auto mt-16 max-w-7xl sm:mt-16 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
              Professional Bookkeeping Services
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
              Accurate, Affordable, and Stress-Free Accounting
            </p>

            <p className="mt-6 text-lg/8 text-gray-700 dark:text-gray-300">
              At Breeze Bookkeeping, my goal is to give business owners the
              financial clarity and confidence they need to grow profitably and
              keep more of what they earn. From bookkeeping and payroll to
              financial statement analysis, I take care of the details so you
              can make smart decisions without the stress of wondering if your
              numbers are right.
            </p>

            <p className="mt-6 text-lg/8 text-gray-700 dark:text-gray-300">
              Although I’m based in Herriman, UT—just outside Salt Lake City—I
              work with businesses all over the country thanks to secure,
              cloud-based technology. As a{" "}
              <strong>QuickBooks Online ProAdvisor</strong>, I help connect your
              bookkeeping with the best financial apps available, streamlining
              your systems so everything works smoothly together.
            </p>

            <p className="mt-6 text-lg/8 text-gray-700 dark:text-gray-300">
              What matters most to me is making bookkeeping fast, accurate, and
              affordable, so you can focus on running your business with peace
              of mind. I’ve had the privilege of supporting companies across
              many industries, and I’ve developed proven systems that save time,
              cut costs, and help businesses thrive. With Breeze Bookkeeping,
              you’re not just getting accurate books—you’re gaining a trusted
              partner who makes sure your finances feel as effortless as a
              breeze.
            </p>
          </div>
        </div>

        {/* Book a meeting */}
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24 bg-indigo-600 lg:rounded-2xl">
          <div className="mx-auto max-w-2xl p-12 lg:max-w-4xl text-white">
            <h2 className="text-base/7 font-semibold dark:text-indigo-00">
              Schedule a Meeting
            </h2>
            <p className="mt-4 text-4xl">
              SCHEDULE A <strong>FREE</strong> PHONE CONSULTATION
            </p>
            <p className="mt-4 text-lg/8 text-pretty">
              Let&apos;s talk about how affordable and profitable it can be to
              have a QuickBooks ProAdvisor manage your monthly bookkeeping.
              Simply click the button below to choose a day and time that works
              best for you, and you’ll be instantly booked in my calendar!
            </p>
            <div className="w-full flex justify-center mt-6">
              <a
                href="https://calendly.com/breezebookkeeping/30min"
                className="text-lg/8 text-indigo-600 hover:text-indigo-500 font-semibold"
              >
                <div className="rounded bg-white py-2 px-4">Schedule Now</div>
              </a>
            </div>
          </div>
        </div>

        {/* Featres */}
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-32 px-6">
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
              Services Offered
            </h2>
            <dl className="grid max-w-xl grid-cols-1 gap-x-16 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 mt-6">
              {homePageServices.map((service) => (
                <div key={service.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
                      <service.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {service.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-400">
                    {service.description}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="w-full flex justify-center mt-6">
              <a
                href="/services"
                className="text-md/8 text-indigo-600 hover:text-indigo-500 font-semibold dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                See all services
              </a>
            </div>
          </div>
        </div>

        {/* Testimonial section */}
        <div className="mx-auto mt-16 lg:mt-32 max-w-7xl sm:px-6 lg:px-8">
          <TestimonialsCarousel
            testimonials={[
              {
                name: "Cory C",
                title: "",
                testimonial:
                  "I can’t thank Darren at Breeze Bookkeeping enough. He helped me get my house cleaning business back on track after years of feeling overwhelmed with the books. He explains things in a way that actually makes sense, answers questions right away, and takes a lot of the stress off my shoulders. Super easy to work with and really dependable. I’d absolutely recommend him to other small business owners!",
              },
              {
                name: "Kyle C",
                title: "",
                testimonial:
                  "Darren does amazing and precise work! He is incredibly responsive and a great person to work with.",
              },
              {
                name: "Jared S",
                title: "",
                testimonial:
                  "Breeze Bookkeeping is a fabulous company, they are timely, accurate, and very responsive to clients. I highly recommend them.",
              },
              {
                name: "Pete H",
                title: "",
                testimonial:
                  "Darren is amazing with numbers! He was born to work among them! Very easy to work with and talk to as well. Very professional.",
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
