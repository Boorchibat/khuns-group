import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-khuns-green px-6 sm:px-10 lg:px-20 xl:px-32">
      <div className="flex flex-col lg:flex-row justify-between gap-12 py-12 text-white">
        
        <div className="flex flex-col gap-5 lg:w-1/2">
          <Image
            src="/KhunsGroupLogo.png"
            alt="Khuns Group Logo"
            width={200}
            height={200}
          />

          <p className="text-sm sm:text-base text-white/90 lg:w-4/5">
            Khuns Group is a widely recognized leader in its field, dedicated to
            providing exceptional services and solutions to our clients. Focusing
            on meat manufacturing, Khuns Group is one of the largest companies in
            Mongolia selling meat products to the world.
          </p>

      
          <div className="flex items-center gap-4 pt-2">
            <Button
              size="icon"
              className="h-12 w-12 rounded-full border border-white/70 bg-white/70 backdrop-blur-sm transition hover:scale-110 hover:bg-white"
            >
              <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
            </Button>

            <Button
              size="icon"
              className="h-12 w-12 rounded-full border border-white/70 bg-white/70 backdrop-blur-sm transition hover:scale-110 hover:bg-white"
            >
              <Image src="/insta.svg" alt="Instagram" width={24} height={24} />
            </Button>

            <Button
              size="icon"
              className="h-12 w-12 rounded-full border border-white/70 bg-white/70 backdrop-blur-sm transition hover:scale-110 hover:bg-white"
            >
              <Image src="/youtube.svg" alt="YouTube" width={24} height={24} />
            </Button>
          </div>
        </div>

   
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:w-1/2">
          
          
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold mb-2">Company</h2>

            {[
              { href: "/about-us", label: "About Us" },
              { href: "/what-we-do", label: "What We Do" },
              { href: "/partners", label: "Partners" },
              { href: "/news", label: "News" },
              { href: "/contact", label: "Contact Us" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-5 rounded-lg transition "
              >
                <span>{item.label}</span>
                <ArrowUpRight className="h-4 w-4 opacity-0 translate-x-2 transition group-hover:opacity-100 group-hover:translate-x-0" />
              </Link>
            ))}
          </div>

        
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold mb-2">Contact Us</h2>

            <p className="text-white/90">123 Main Street</p>
            <p className="text-white/90">Anytown, USA 12345</p>

            <a href="mailto:info@khunsgroup.com" className="hover:underline">
              info@khunsgroup.com
            </a>

            <a href="tel:+11234567890" className="hover:underline">
              (123) 456-7890
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};