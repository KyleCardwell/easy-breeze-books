import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Darren Cardwell",
  description:
    "Meet Darren Cardwell, Member of the QuickBooks ProAdvisor Program and founder of Breeze Bookkeeping in Herriman, UT. Providing professional bookkeeping services to businesses across the United States.",
  alternates: {
    canonical: "https://www.easybreezebooks.com/about",
  },
  openGraph: {
    title: "About Darren Cardwell | Breeze Bookkeeping",
    description:
      "Meet Darren Cardwell, Member of the QuickBooks ProAdvisor Program and founder of Breeze Bookkeeping in Herriman, UT.",
    url: "https://www.easybreezebooks.com/about",
    images: [
      {
        url: "/DC photo.avif",
        width: 800,
        height: 600,
        alt: "Darren Cardwell, Member of the QuickBooks ProAdvisor Program",
      },
    ],
  },
};

export default function About() {
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
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-2 md:mt-8 lg:mt-16">
              <article className=" prose-lg prose-invert max-w-none">
                <h1 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl lg:text-balance text-white mb-8">
                  About Breeze Bookkeeping
                </h1>

                <div className="float-left mr-6 mb-6 w-full sm:w-[300px]">
                  <div className="rounded-xl p-2 ring-1 ring-inset lg:rounded-2xl lg:p-4 bg-white/2.5 ring-white/10">
                    <div className="h-[300px] sm:h-[400px] overflow-hidden relative">
                      <Image
                        alt="Darren Cardwell"
                        src="/DC photo at UA conf 24Jan v2.avif"
                        fill={true}
                        className="bg-gray-50 shadow-xl ring-1 ring-gray-900/10 rounded-lg"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                      />
                    </div>
                  </div>
                </div>

                <p className="text-lg/8 text-gray-300">
                  Hello! I&apos;m Darren Cardwell, Member of the QuickBooks ProAdvisor Program, the face behind Breeze
                  Bookkeeping. I&apos;m based in Herriman, UT, near Salt Lake City. Thanks to
                  cloud technology, however, I work with business owners all
                  over the country. From account reconciliation and categorizing
                  transactions to payroll, invoicing, and payables, to
                  full-service accounting, I handle it all!
                </p>

                <p className="text-lg/8 text-gray-300 mt-6">
                  I&apos;ve always loved numbers — there&apos;s something so
                  satisfying about seeing everything click into place. For me,
                  accounting feels almost like a science, and I get a lot of joy
                  out of making sense of it all. But what I love even more is
                  using that skill to help business owners succeed. When we work
                  together, my goal is to make bookkeeping feel simple and
                  stress-free, so business owners can focus on what{" "}
                  <strong>lights them up</strong> in their business while I take
                  care of the numbers behind the scenes.
                </p>

                <p className="text-lg/8 text-gray-300 mt-6">
                  I grew up in California, and moved to Utah in 2001 with my
                  wife and 4 sons. I currently live in Herriman, Utah and love
                  spending time with my sons and their growing families.
                </p>
              </article>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
