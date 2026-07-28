import Image from "next/image";
import { motion, Variants } from "framer-motion";

type Partner = {
  Image: string;
  name: string;
  Connetion: string;
};

export const Partners = ({ Partners }: { Partners: Partner[] }) => {
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
    <section className="px-6 sm:px-10 lg:px-[100px] mt-16 md:mt-20 w-full">
      <div className="max-full flex flex-col mx-0 sm:mx-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center rounded-full p-3 border-2 border-khuns-green bg-white/90 mb-6 w-[150px]"
        >
          <h1 className="font-bold text-xl text-khuns-green">Partners</h1>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="w-full flex-col mt-8 gap-x-5 justify-between"
        >
          <div className="flex gap-x-2 items-center flex-wrap">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Partner
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-khuns-green">
              Companies
            </h2>
          </div>

          <h1 className="text-sm sm:text-base md:text-lg text-black max-w-3xl mt-6 sm:mt-[30px] font-normal">
            Partners are an essential part of our business, and we are proud to
            work with a diverse range of companies that share our commitment to
            quality and excellence. Our partners help us to expand our reach,
            improve our products, and provide better services to our customers.
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
        >
          {Object.values(Partners).map((partner, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="
         group
         h-full
         bg-white
         border border-gray-200
         rounded-2xl
         p-8
         flex flex-col
         items-center
         justify-between
         text-center
         shadow-sm
         transition-all
         duration-300
         hover:-translate-y-2
         hover:shadow-2xl
         hover:border-khuns-green
       "
            >
              <div className="h-40 flex items-center justify-center mb-6">
                <Image
                  src={partner.Image}
                  alt={partner.name}
                  width={180}
                  height={180}
                  className="max-h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold text-khuns-green">
                  {partner.name}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {partner.Connetion}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
