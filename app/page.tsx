"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

import { motion, Variants } from "framer-motion";

import { Contact } from "./components/Contact";
import { Newz } from "./components/Newz";
import { Partners } from "./components/Partners";
import { WhatWeDo } from "./components/WhatWeDo";

const Goals = {
  goal1: {
    Image: "/quality.png",
    Motto: "Misson",
    title: "Quality Products",
    description:
      "We prioritize quality in every step of our production process, ensuring that our products meet the highest standards.",
  },
  goal2: {
    Image: "/quality.png",
    Motto: "Vision",
    title: "Quality Products",
    description:
      "We prioritize quality in every step of our production process, ensuring that our products meet the highest standards.",
  },
  goal3: {
    Image: "/quality.png",
    Motto: "Motto",
    title: "Quality Products",
    description:
      "We prioritize quality in every step of our production process, ensuring that our products meet the highest standards.",
  },
};
type Partner = {
  Image: string;
  name: string;
  Connetion: string;
  description: string;
};
export const Partnerdata: Partner[] = [
  {
    Image: "/Amunda.png",
    name: "Amunda",
    Connetion: "Trusted Partner",
    description: "Amunda is a company that IDK.",
  },
  {
    Image: "/ChingisRoad.png",
    name: "Chingis Road",
    Connetion: "Trusted Partner",
    description: "Chingis Road is apart of Khuns Group.",
  },
  {
    Image: "/Kailas.png",
    name: "Kailas",
    Connetion: "Trusted Partner",
    description:
      "Kailas is an international importing company that is part of Khuns Group.",
  },
  {
    Image: "/KhunsKitchen.png",
    name: "Khuns Kitchen",
    Connetion: "Trusted Partner",
    description:
      "Khuns Kitchen is a valued partner, known for its innovative approach and high-quality offerings.",
  },
];

type News = {
  Image: string[];
  title: string;
  description: string;
  date: string;
  Type: "News";
};

export const newsData: News[] = [
  {
    Image: [
      "https://cdn.greensoft.mn/uploads/site/1106/post/new_1a0e3913ec9b1d04fab5da1b154930727914be37.jpg",
      "",
    ],
    title: "News 1",
    description:
      "News 1 is a leading company in the industry, known for its commitment to quality and innovation.",
    date: "2023-05-01",
    Type: "News",
  },
  {
    Image: [
      "https://cdn.greensoft.mn/uploads/site/1106/post/new_1a0e3913ec9b1d04fab5da1b154930727914be37.jpg",
    ],
    title: "News 2",
    description:
      "News 2 has been a trusted partner for many years, providing exceptional products and services.",
    date: "2023-05-01",
    Type: "News",
  },
  {
    Image: [
      "https://cdn.greensoft.mn/uploads/site/1106/post/new_1a0e3913ec9b1d04fab5da1b154930727914be37.jpg",
    ],
    title: "News 3",
    description:
      "News 3 has been a trusted partner for many years, providing exceptional products and services.",
    date: "2023-05-01",
    Type: "News",
  },
  {
    Image: [
      "https://cdn.greensoft.mn/uploads/site/1106/post/new_1a0e3913ec9b1d04fab5da1b154930727914be37.jpg",
    ],
    title: "News 4",
    description:
      "News 4 has been a trusted partner for many years, providing exceptional products and services.",
    date: "2023-05-01",
    Type: "News",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const Page = () => {
  return (
    <div className="w-full overflow-x-hidden">
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl flex flex-col items-center"
          >
            <Image
              src="/KhunsGroupLogo.png"
              alt="Khuns Group Logo"
              width={500}
              height={500}
              className="w-[260px] sm:w-[340px] md:w-[420px] lg:w-[500px] h-auto"
              priority
            />

            <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white/80 px-4">
              Leading meat production company in Mongolia delivering quality to
              the world.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} />
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-32 sm:h-64 bg-gradient-to-b from-transparent via-white/20 to-white z-10" />
      </section>

      <section className="px-6 sm:px-10 lg:px-[100px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="relative -mt-20 sm:-mt-24 md:-mt-28 z-20 grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12"
        >
          {[
            { value: "1992", label: "Year Established" },
            { value: "20+", label: "Partner Companies" },
            { value: "34 Years", label: "Years of Experience" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="w-full h-[160px] sm:h-[180px] md:h-[200px] bg-white/90 border-2 border-khuns-green rounded-lg flex justify-center items-center flex-col transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-khuns-green">
                {stat.value}
              </h1>
              <p className="text-base sm:text-lg text-khuns-green text-center px-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="max-full flex flex-col mt-16 md:mt-24 lg:mt-32 mx-2 sm:mx-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center rounded-full p-3 border-2 border-khuns-green bg-white/90 mb-6 w-[150px]"
          >
            <h1 className="font-bold text-xl text-khuns-green">About us</h1>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
          >
            About Khuns Group
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl"
          >
            Khuns Group is a leading company in Mongolia specializing in meat
            production, export, and food manufacturing. We are committed to
            delivering high-quality products to customers worldwide.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-8"
          >
            {Object.values(Goals).map((goal, index) => (
              <motion.div key={index} variants={fadeUp} className="w-full">
                <div className="bg-white/90 border-2 border-khuns-green rounded-lg p-6 h-full">
                  <h1 className="text-xl font-bold text-khuns-green">
                    {goal.Motto}
                  </h1>
                  <h3 className="text-2xl font-bold text-black">
                    {goal.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{goal.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="w-full bg-khuns-green rounded-lg mt-8 flex flex-col"
          >
            <h1 className="text-white font-bold text-lg sm:text-xl px-6 sm:px-10 pt-8 sm:pt-10 w-full sm:w-[80%] lg:w-[70%]">
              Khuns Group is one of Mongolias leading food production companies,
              committed to delivering high-quality, safe, and nutritious
              products that support the well-being of families across the
              country.
            </h1>
            <h1 className="text-gray-300 font-medium px-6 sm:px-10 py-8 sm:py-10">
              Guided by a dedication to innovation, sustainability, and
              excellence, we combine modern production standards with decades of
              industry expertise to provide trusted food solutions. By
              continuously investing in advanced technology, responsible
              business practices, and the growth of our people, we strive to
              strengthen Mongolias food industry while creating lasting value
              for our customers, partners, and communities.
            </h1>
          </motion.div>
        </div>
      </section>

      <WhatWeDo />
      <Partners Partners={Partnerdata} />

      <Newz News={newsData} />
      <Contact />
    </div>
  );
};

export default Page;
