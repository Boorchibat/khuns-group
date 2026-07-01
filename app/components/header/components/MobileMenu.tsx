"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  open: boolean;
}

export const MobileMenu = ({ open }: MobileMenuProps) => {
  return (
  <div
  className={`absolute left-0 right-0 top-[82px] origin-top overflow-hidden rounded-3xl border border-white/20 bg-black/90 backdrop-blur-xl shadow-2xl transition-all duration-300 ease-out lg:hidden ${
    open
      ? "translate-y-0 opacity-100"
      : "-translate-y-3 pointer-events-none opacity-0"
  }`}
>
      <div className="space-y-2 px-6 pb-6">
        <Link
          href="/about-us"
          className="block rounded-lg px-4 py-3 text-white transition-colors hover:bg-khuns-green"
        >
          About Us
        </Link>

        <Link
          href="/what-we-do"
          className="block rounded-lg px-4 py-3 text-white transition-colors hover:bg-khuns-green"
        >
          What We Do
        </Link>

        <Link
          href="/partners"
          className="block rounded-lg px-4 py-3 text-white transition-colors hover:bg-khuns-green"
        >
          Partners
        </Link>

        <Link
          href="/news"
          className="block rounded-lg px-4 py-3 text-white transition-colors hover:bg-khuns-green"
        >
          News
        </Link>

        <Link
          href="/contact"
          className="block rounded-lg px-4 py-3 text-white transition-colors hover:bg-khuns-green"
        >
          Contact
        </Link>

        <div className="mt-4 space-y-3">
   
          <Button className="flex h-10 w-full items-center justify-center rounded-full bg-khuns-green transition-all duration-300 hover:bg-khuns-green-dark">
            <Image
              src="/globe.svg"
              alt="Language"
              width={18}
              height={18}
              className="mr-2"
            />
            MN
          </Button>

          <Link href="/login">
            <Button className="h-10 w-full rounded-full bg-khuns-green transition-all duration-300 hover:bg-khuns-green-dark">
              Log In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};