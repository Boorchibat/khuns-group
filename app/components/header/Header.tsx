"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Buttons } from "./components/Buttons";
import { Language } from "./components/Language";
import { MobileMenu } from "./components/MobileMenu";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
    <div
 className={`relative mt-5 border border-white/20 bg-black/80 backdrop-blur-md transition-all duration-300 ${
  open ? "rounded-3xl" : "rounded-full"
}`}
>
        <div className="flex h-[70px] items-center justify-between px-6">
          <Link href="/">
            <Image
              src="/KhunsGroupLogo.png"
              alt="Khuns Group Logo"
              width={100}
              height={100}
            />
          </Link>

          <div className="hidden lg:block">
            <Buttons />
          </div>

          <div className="hidden lg:block">
            <Language />
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-full p-2 text-white transition hover:bg-white/10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <MobileMenu open={open} />
      </div>
    </header>
  );
};