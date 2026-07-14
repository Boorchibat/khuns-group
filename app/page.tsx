import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="w-full">

      <section className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/KhunsGroupHero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-6 sm:px-10 lg:px-[100px]">
          <div className="max-w-3xl flex flex-col items-center">
            <Image
              src="/KhunsGroupLogo.png"
              alt="Khuns Group Logo"
              width={500}
              height={500}
              className="w-[400px] sm:w-[400px] md:w-[500px] lg:w-[500px] h-auto"
              priority
            />

            <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white/80">
              Leading meat production company in Mongolia delivering quality to
              the world.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent via-white/20 to-white z-10" />
      </section>

      <section className="px-6 sm:px-10 lg:px-[100px] pb-16 sm:pb-24">
        <div className="relative -mt-28 z-20 flex items-center justify-center gap-5 mb-12">
          <div className="w-[400px] h-[200px] bg-white/90 border-2 border-khuns-green rounded-lg flex justify-center items-center flex-col transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <h1 className="text-[40px] font-bold text-khuns-green">1992</h1>
            <p className="text-lg text-khuns-green">Year Established</p>
          </div>

          <div className="w-[400px] h-[200px] bg-white/90 border-2 border-khuns-green rounded-lg flex justify-center items-center flex-col transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <h1 className="text-[40px] font-bold text-khuns-green">20+</h1>
            <p className="text-lg text-khuns-green">Partner Companies</p>
          </div>

          <div className="w-[400px] h-[200px] bg-white/90 border-2 border-khuns-green rounded-lg flex justify-center items-center flex-col transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <h1 className="text-[40px] font-bold text-khuns-green">
              34 Years
            </h1>
            <p className="text-lg font-bold text-khuns-green">
              Years of Experience
            </p>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          About Khuns Group
        </h2>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl">
          Khuns Group is a leading company in Mongolia specializing in meat
          production, export, and food manufacturing. We are committed to
          delivering high-quality products to customers worldwide.
        </p>
      </section>
    </div>
  );
};

export default Page;