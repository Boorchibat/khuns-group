"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { NewsCard } from "../components/NewsCard";

type News = {
  Image: string[];
  title: string;
  description: string;
  date: string;
  Type: "News";
  Id: number;
};

export const newsData: News[] = [
  {
    Id: 1,
    Image: [
      "https://cdn.greensoft.mn/uploads/site/1106/post/new_1a0e3913ec9b1d04fab5da1b154930727914be37.jpg",
    ],
    title: "News 1",
    description:
      "News 1 is a leading company in the industry, known for its commitment to quality and innovation.",
    date: "2023-05-01",
    Type: "News",
  },
  {
    Id: 2,
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
    Id: 3,
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
    Id: 4,
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

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const newsPerPage = 9;

  const totalPages = Math.ceil(newsData.length / newsPerPage);

  const startIndex = (currentPage - 1) * newsPerPage;

  const currentNews = newsData.slice(startIndex, startIndex + newsPerPage);

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

  return (
    <div className="py-12">
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
          </motion.div>
        </div>

        <motion.div
          key={currentPage}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        >
          {currentNews.map((news) => (
            <motion.div
              key={news.title}
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
              <NewsCard news={news} />
            </motion.div>
          ))}
        </motion.div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-12">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-full border-2 border-khuns-green text-khuns-green disabled:opacity-40"
            >
              ←
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 rounded-full font-bold ${
                  currentPage === index + 1
                    ? "bg-khuns-green text-white"
                    : "border-2 border-khuns-green text-khuns-green"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-full border-2 border-khuns-green text-khuns-green disabled:opacity-40"
            >
              →
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Page;
