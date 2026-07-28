import Image from 'next/image'
import { motion, Variants } from "framer-motion";

export const WhatWeDo = () => {
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
           <div className="flex flex-col lg:flex-row mt-16 md:mt-24 lg:mt-[120px] mx-0 sm:mx-8 gap-8 lg:gap-x-10 items-start">
             <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.3 }}
               variants={fadeUp}
               className="max-w-3xl flex flex-col"
             >
               <div className="text-center rounded-full p-3 border-2 border-khuns-green bg-white/90 mb-6 w-[150px]">
                 <h1 className="font-bold text-xl text-khuns-green">What we do</h1>
               </div>
               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                 Our Mission
               </h2>
   
               <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl">
                 To promote a healthy food culture by producing products that suit
                 modern lifestyles, using profesionaly expertise, healthy recipeis
                 and advanced tech. We are investing 3.8 million USD in the
                 state-of-the-art meat and meat product processing plant that
                 integrates technological innovation and meets international
                 qualitty standards. - Battuvshin CEO of Khuns Group
               </p>
             </motion.div>
   
             <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.3 }}
               variants={fadeUp}
               className="w-full lg:w-auto flex-shrink-0"
             >
               <Image
                 src="/Batushah.jpg"
                 alt="CEO"
                 className="rounded-lg w-full h-auto lg:w-[600px] lg:h-[400px] object-cover"
                 width={600}
                 height={400}
               />
             </motion.div>
           </div>
   
           <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.2 }}
             variants={staggerContainer}
             className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 items-center justify-items-center"
           >
             <motion.div variants={fadeUp}>
               <Image
                 src="/IFS.svg"
                 alt="IFS Logo"
                 width={300}
                 height={250}
                 className="w-full max-w-[250px] h-auto"
               />
             </motion.div>
             <motion.div variants={fadeUp}>
               <Image
                 src="/BRCGS.jpg"
                 alt="BRCGS Logo"
                 width={400}
                 height={250}
                 className="w-full max-w-[280px] h-auto"
               />
             </motion.div>
             <motion.div variants={fadeUp}>
               <Image
                 src="/FSSC.webp"
                 alt="FSSC Logo"
                 width={300}
                 height={250}
                 className="w-full max-w-[250px] h-auto"
               />
             </motion.div>
           </motion.div>
         </section>
  )
}
