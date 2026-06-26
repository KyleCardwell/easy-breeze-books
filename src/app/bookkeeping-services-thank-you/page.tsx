import type { Metadata } from "next";
import {
  CalendarDaysIcon,
  CheckCircleIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Thank You | Breeze Bookkeeping",
  description:
    "Your consultation request has been received. I'll personally review your information and reach out soon.",
};

export default function BookkeepingServicesThankYouPage() {
  return (
    <div className="bg-gray-900">
      <main className="isolate min-h-screen">
        <div className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
            />
          </div>

          <div className="mx-auto max-w-5xl px-6 pb-20 pt-24 lg:px-8 lg:pt-28">
            <div className="rounded-3xl border border-white/10 bg-gray-800/70 p-8 shadow-2xl ring-1 ring-white/10 sm:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <CheckCircleIcon className="mx-auto size-14 text-indigo-400" />
                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Thanks for reaching out!
                </h1>
                <p className="mt-5 text-lg leading-8 text-gray-300">
                  Your consultation request has been received.
                </p>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                  I&apos;m looking forward to learning more about your business
                  and seeing how Breeze Bookkeeping can help simplify your
                  bookkeeping and financial processes.
                </p>
              </div>

              <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-indigo-400/30 bg-indigo-500/10 p-6">
                  <CalendarDaysIcon className="size-8 text-indigo-300" />
                  <h2 className="mt-4 text-xl font-semibold text-white">
                    What Happens Next?
                  </h2>
                  <p className="mt-3 text-gray-300">
                    I&apos;ll personally review your information and reach out to
                    schedule a quick conversation.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <ClockIcon className="size-8 text-indigo-300" />
                  <h2 className="mt-4 text-xl font-semibold text-white">
                    Timing
                  </h2>
                  <p className="mt-3 text-gray-300">
                    If you submitted during business hours, I&apos;ll do my best
                    to contact you the same day.
                  </p>
                  <p className="mt-3 text-gray-300">
                    If you submitted in the evening or over the weekend,
                    I&apos;ll reach out on the next business day.
                  </p>
                </div>
              </div>

              <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-gray-900/70 p-6 text-center">
                <h3 className="text-xl font-semibold text-white">
                  Need Immediate Assistance?
                </h3>
                <p className="text-gray-300">
                  Feel free to call or text me directly at{" "}
                  <a
                    href="tel:3853083478"
                    className="font-semibold text-indigo-300 hover:text-indigo-200"
                  >
                    (385) 308-3478
                  </a>
                  .
                </p>
                <p className="mt-6 text-white">
                  Thank you for considering Breeze Bookkeeping. I appreciate the
                  opportunity to earn your business and look forward to speaking
                  with you soon.
                </p>
                <p className="mt-6 text-white">
                  — Darren Cardwell
                  <br />
                  Owner, Breeze Bookkeeping
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
