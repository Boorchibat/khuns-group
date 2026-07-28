"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  ArrowLeft,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const News = {
  Id: 2,
  Image: [
    "https://cdn.greensoft.mn/uploads/site/1106/post/new_1a0e3913ec9b1d04fab5da1b154930727914be37.jpg",
    "https://cdn.greensoft.mn/uploads/site/1106/post/new_1a0e3913ec9b1d04fab5da1b154930727914be37.jpg",
    "https://cdn.greensoft.mn/uploads/site/1106/post/new_1a0e3913ec9b1d04fab5da1b154930727914be37.jpg",
  ],
  title: "News 2",
  description:
    "News 2 has been a trusted partner for many years, providing exceptional products and services.",
  date: "2023-05-01",
  Type: "News",
};

const Page = () => {
  const router = useRouter();

  const [openGallery, setOpenGallery] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === News.Image.length - 1 ? 0 : prev + 1));
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev === 0 ? News.Image.length - 1 : prev - 1));
  };

  return (
    <div className="py-12">
      <section className="px-6 sm:px-10 lg:px-[100px] mt-16 md:mt-20 pb-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Button
              onClick={() => router.back()}
              className="
              mb-8 p-5
              bg-white/90
              border-2
              border-khuns-green
              text-khuns-green
              hover:bg-khuns-green/10
              "
            >
              <ArrowLeft />
              <span className="text-lg">Back</span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => setOpenGallery(true)}
            className="
            relative
            w-full
            h-[300px]
            sm:h-[450px]
            rounded-3xl
            overflow-hidden
            shadow-xl
            border-2
            border-khuns-green
            cursor-pointer
            group
            "
          >
            <Image
              src={News.Image[0]}
              alt={News.title}
              fill
              priority
              className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
              "
            />

            <div
              className="
              absolute inset-0
              bg-black/0
              group-hover:bg-black/20
              transition
              "
            />

            <div
              className="
              absolute
              bottom-5
              right-5
              bg-white/90
              px-4
              py-2
              rounded-full
              font-semibold
              text-khuns-green
              "
            >
              View Gallery
            </div>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="
            bg-white
            rounded-3xl
            shadow-lg
            border-2
            border-khuns-green
            p-6
            sm:p-10
            mt-8
            "
          >
            <div
              className="
              inline-flex
              items-center
              gap-2
              bg-khuns-green/10
              text-khuns-green
              px-4
              py-2
              rounded-full
              "
            >
              <Calendar size={16} />
              {News.date}
            </div>

            <h1
              className="
            mt-6
            text-3xl
            sm:text-5xl
            font-bold
            "
            >
              {News.title}
            </h1>

            <p
              className="
            mt-6
            text-gray-600
            text-lg
            "
            >
              {News.description}
            </p>
          </motion.article>

          <Modal open={openGallery} onClose={() => setOpenGallery(false)}>
            <Box
              className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[95%]
              max-w-5xl
              outline-none
              "
            >
              <div
                className="
                relative
                bg-black
                rounded-3xl
                overflow-hidden
                h-[70vh]
                "
              >
                <button
                  onClick={() => setOpenGallery(false)}
                  className="
                  absolute
                  top-5
                  right-5
                  z-20
                  bg-white/90
                  rounded-full
                  p-3
                  hover:bg-khuns-green
                  hover:text-white
                  transition
                  "
                >
                  <X />
                </button>

                <Image
                  src={News.Image[currentImage]}
                  alt="Gallery image"
                  fill
                  className="object-contain"
                />

                <button
                  onClick={previousImage}
                  className="
                  absolute
                  left-5
                  top-1/2
                  -translate-y-1/2
                  bg-white/90
                  rounded-full
                  p-3
                  hover:bg-khuns-green
                  hover:text-white
                  transition
                  "
                >
                  <ChevronLeft />
                </button>

                <button
                  onClick={nextImage}
                  className="
                  absolute
                  right-5
                  top-1/2
                  -translate-y-1/2
                  bg-white/90
                  rounded-full
                  p-3
                  hover:bg-khuns-green
                  hover:text-white
                  transition
                  "
                >
                  <ChevronRight />
                </button>

                <div
                  className="
                  absolute
                  bottom-5
                  left-1/2
                  -translate-x-1/2
                  bg-white/90
                  px-5
                  py-2
                  rounded-full
                  font-semibold
                  "
                >
                  {currentImage + 1} / {News.Image.length}
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </section>
    </div>
  );
};

export default Page;
