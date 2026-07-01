import React from "react";

export const Buttons = ({ mobile }: { mobile?: boolean }) => {
  return (
    <nav className={`flex items-center gap-2 text-[16px] font-semibold text-white ${mobile ? "flex-col items-start" : ""}`}>
      <a
        href="/about-us"
        className="rounded-full px-4 py-2 transition-all duration-300 hover:scale-105 hover:bg-khuns-green hover:text-white"
      >
        About Us
      </a>

      <a
        href="/what-we-do"
        className="rounded-full px-4 py-2 transition-all duration-300 hover:scale-105 hover:bg-khuns-green hover:text-white"
      >
        What We Do
      </a>

      <a
        href="/partners"
        className="rounded-full px-4 py-2 transition-all duration-300 hover:scale-105 hover:bg-khuns-green hover:text-white"
      >
        Partners
      </a>

      <a
        href="/news"
        className="rounded-full px-4 py-2 transition-all duration-300 hover:scale-105 hover:bg-khuns-green hover:text-white"
      >
        News
      </a>

      <a
        href="/contact"
        className="rounded-full px-4 py-2 transition-all duration-300 hover:scale-105 hover:bg-khuns-green hover:text-white"
      >
        Contact
      </a>
    </nav>
  );
};