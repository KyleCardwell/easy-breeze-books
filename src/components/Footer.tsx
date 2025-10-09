"use client";

import { navigation } from "@/utils/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();
  
  return (
    <footer className="relative mx-auto pt-16 max-w-7xl px-6 lg:px-8">
      <div className="border-t border-gray-900/10 py-8 sm:py-14 lg:py-20 dark:border-white/10">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          {/* <img
            alt="Company name"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="h-9 dark:hidden"
          />
          <img
            alt="Company name"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="h-9 not-dark:hidden"
          /> */}
          <div className="flex flex-col mt-16 md:grid md:grid-cols-2 md:gap-8 xl:col-span-2 md:mt-0">
            {/* Badges */}
            <div className="mx-auto grid grid-cols-2 items-center gap-x-8 gap-y-12 sm:gap-x-10 sm:gap-y-14">
              <Image
                alt="Quickbooks ProAdvisor Level 2 Certification Badge"
                src="/Quickbooks-Level-2-Badge.png"
                width={200}
                height={200}
                className="max-h-48 w-full object-contain"
              />
              <Image
                alt="Quickbooks Payroll Certification Badge"
                src="/Quickbooks-Payroll-Badge.png"
                width={200}
                height={200}
                className="max-h-48 w-full object-contain"
              />
            </div>
            <div className="flex flex-col md:flex-row md:gap-8 md:justify-around">
              {/* Business Info */}
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Breeze Bookkeeping
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <p>Herriman, UT</p>
                </ul>
              </div>

              {/* Navigation */}
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Navigate
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={`text-sm/6 ${
                            isActive
                              ? "text-indigo-600 font-semibold dark:text-indigo-400"
                              : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
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
      </div>
    </footer>
  );
};

export default Footer;
