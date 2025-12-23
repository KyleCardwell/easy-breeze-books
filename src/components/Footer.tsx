"use client";

import { navigation } from "@/utils/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="relative mx-auto pt-16 max-w-7xl px-6 lg:px-8">
      <div className="border-t py-8 sm:py-14 lg:py-20 border-white/10">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          <div className="flex flex-col mt-16 md:grid md:grid-cols-2 md:gap-8 xl:col-span-2 md:mt-0">
            {/* Badges */}
            <div className="mx-auto grid grid-cols-2 items-center gap-x-8 gap-y-12 sm:gap-x-10 sm:gap-y-14">
              {/* <Link href=""}>Check out my QuickBooks ProAdvisor Profile</Link> */}
              <Image
                alt="QuickBooks ProAdvisor Level 2 Certification Badge"
                src="/QuickBooks-Level-2-Badge.png"
                width={70}
                height={70}
                className="max-h-48 w-full object-contain"
              />
              <Image
                alt="QuickBooks Payroll Certification Badge"
                src="/QuickBooks-Payroll-Badge.png"
                width={70}
                height={70}
                className="max-h-48 w-full object-contain"
              />
            </div>
            <div className="flex flex-col md:flex-row md:gap-8 md:justify-around">
              {/* Business Info */}
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-white">
                  Breeze Bookkeeping
                </h3>
                <div role="list" className="mt-6 space-y-4">
                  <p>5536 Emmeline Dr</p>
                  <p>Herriman, UT 84096</p>
                  <p>
                    <Link href="mailto:darren@easybreezbooks.com">
                      darren@easybreezbooks.com
                    </Link>
                  </p>
                  <p>
                    <Link href="tel:3853083478">(385) 308-3478</Link>
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-white">Navigate</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={`text-sm/6 ${
                            isActive
                              ? "font-semibold text-indigo-400"
                              : "text-gray-400 hover:text-white"
                          }`}
                          suppressHydrationWarning
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm/6 mt-10 text-center">
          Intuit, QuickBooks, and QuickBooks ProAdvisor are registered
          trademarks of Intuit Inc. used with permission under the QuickBooks
          ProAdvisor Agreement.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
