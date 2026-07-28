import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NewsCard } from "./NewsCard";

type News = {
  Image: string[];
  title: string;
  description: string;
  date: string;
  Type: "News";
  Id: number;
};

type NewzProps = {
  News: News[];
};

export const Newz = ({ News }: NewzProps) => {
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

  const threeNews = News.slice(0, 3);
  return (
    <section className="px-6 sm:px-10 lg:px-[100px] mt-16 md:mt-20 w-full pb-20">
      <div className="max-full flex flex-col mx-0 sm:mx-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center rounded-full p-3 border-2 border-khuns-green bg-white/90 mb-6 w-[150px]"
        >
          <h1 className="font-bold text-xl text-khuns-green">News</h1>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex flex-col sm:flex-row justify-between sm:items-center gap-4"
        >
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-[50px]">
            Latest News
          </h1>
          <div className="flex items-center gap-2 underline">
            <Link
              href="/news"
              className="text-khuns-green font-bold text-lg flex items-center"
            >
              View All News
              <ArrowRight className="inline-block ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
      >
        {threeNews.map((news, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="
         group
         bg-white border-2 border-khuns-green rounded-xl overflow-hidden
         w-full flex flex-col shadow-lg
         transition-all duration-300 ease-out
         hover:scale-105 hover:shadow-2xl
         hover:-translate-y-2
         cursor-pointer
       "
          >
           <NewsCard  news={news} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
