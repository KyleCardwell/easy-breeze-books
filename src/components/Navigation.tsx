"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "@/utils/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="hidden md:flex items-center justify-end px-8 bg-indigo-600 h-10">
        <p className="text-white">Herriman, UT</p>
      </div>
      <nav
        aria-label="Global"
        className="flex items-start justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          {/* <p className="text-2xl font-semibold">Breeze Bookkeeping</p> */}
          <Link href="/" className="block">
            <Image
              src="/breeze_bookkeeping_logo.svg"
              alt="Breeze Bookkeeping"
              width={500}
              height={256}
              className="max-w-1/4 sm:max-w-1/5 drop-shadow-lg invert"
              priority
            />
          </Link>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-12 items-start">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm/6 font-semibold ${
                  isActive
                    ? "text-indigo-400"
                    : "text-white hover:text-gray-300"
                }`}
                suppressHydrationWarning
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto p-6 sm:max-w-sm sm:ring-1 bg-gray-900 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/30">
              <div className="space-y-2 py-6">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold ${
                        isActive
                          ? "text-indigo-400 bg-gray-800"
                          : "text-white hover:bg-white/5"
                      }`}
                      suppressHydrationWarning
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
