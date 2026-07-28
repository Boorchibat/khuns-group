"use client";

import { Button } from "@/components/ui/button";


export const LogInForm = () => {

  return (
    <div className="w-full mb-[50px] pt-[50px] max-w-md mx-auto p-6 md:p-8 rounded-2xl bg-khuns-green shadow-xl">
      <h1 className="text-3xl font-bold text-center text-white mb-8">Log In</h1>

      <div className="space-y-5">
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
  
          className="w-full p-3 rounded-lg bg-white text-black"
        />

        <input
          id="password"
          type="password"
          placeholder="Enter your password"
       
          className="w-full p-3 rounded-lg bg-white text-black"
        />

   

        <Button
      
          className="w-full mt-4 py-6 text-[20px] rounded-xl bg-black/20 hover:bg-green-800 text-white font-semibold scale-105 transition-all duration-300 ease-in-out"
        >
          Log In
        </Button>
      </div>
    </div>
  );
};
