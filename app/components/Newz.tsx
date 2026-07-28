import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type News = {
  Image: string[];
  title: string;
  description: string;
  date: string;
  Type: "News";
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
        {News.map((news, index) => (
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
            <div className="relative h-56 sm:h-64 w-full overflow-hidden">
              <Image
                src={news.Image[0]}
                alt={news.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                style={{
                  transformOrigin: "center",
                  backfaceVisibility: "hidden",
                }}
              />

              <div className="absolute -bottom-px left-0 w-full h-24 bg-gradient-to-b from-transparent via-white/60 to-white pointer-events-none" />
            </div>

            <div className="flex flex-col p-6 flex-1">
              <p className="text-sm text-gray-500 mb-2 transition-colors duration-300 group-hover:text-khuns-green">
                {news.date}
              </p>

              <h3 className="text-xl sm:text-[25px] font-bold text-black line-clamp-2 transition-colors duration-300 group-hover:text-khuns-green">
                {news.title}
              </h3>

              <p className="text-gray-600 mt-3 line-clamp-3 flex-1 transition-colors duration-300 group-hover:text-khuns-green">
                {news.description}
              </p>

              <button className="mt-4 self-start bg-khuns-green text-white px-5 py-2 rounded-full font-medium transition-colors duration-300 hover:bg-khuns-green/90">
                Read More →
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
