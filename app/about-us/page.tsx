"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

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

const page = () => {
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
    <section className="pt-28 md:pt-36 pb-20 px-6 sm:px-10 lg:px-[100px]">
      <div className="max-w-7xl mx-auto">
        <div className="max-full flex flex-col mx-0 sm:mx-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center rounded-full p-3 border-2 border-khuns-green bg-white/90 mb-6 w-[150px]"
          >
            <h1 className="font-bold text-xl text-khuns-green">About us</h1>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-x-10 items-center">
            <div className="w-full lg:max-w-3xl flex flex-col">
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
                className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl"
              >
                Khuns Group is a leading company in Mongolia specializing in
                meat production, export, and food manufacturing. We are
                committed to delivering high-quality products to customers
                worldwide.
              </motion.p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="w-full sm:w-[400px] lg:w-[500px] flex-shrink-0"
            >
              <Image
                src="/GanaEgch.png"
                alt="CFO"
                width={500}
                height={500}
                className="rounded-xl w-full h-auto"
              />
            </motion.div>
          </div>

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
      </div>
    </section>
  );
};
export default page;