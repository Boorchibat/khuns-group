import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const Language = () => {
  return (
    <div className="flex items-center gap-3">
      <Button className="h-10 rounded-full bg-khuns-green px-5 text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-khuns-green-dark hover:shadow-md">
        <Image
          src="/globe.svg"
          alt="Language"
          width={18}
          height={18}
          className="mr-2"
        />
        MN
      </Button>
      <a href="/login">
        <Button className="h-10 rounded-full bg-khuns-green px-6 text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-khuns-green-dark hover:shadow-md">
          Log In
        </Button>
      </a>
    </div>
  );
};
