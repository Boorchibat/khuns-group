"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const KhunsIntro = () => {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const hasSeenIntro = window.sessionStorage.getItem("khunsIntroSeen");

    if (hasSeenIntro) return;

    window.sessionStorage.setItem("khunsIntroSeen", "true");

    const startTimer = setTimeout(() => {
      setShowIntro(true);
    }, 0);

    const hideTimer = setTimeout(() => {
      setShowIntro(false);
    }, 1500);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          className="fixed inset-0 z-[9999] bg-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="/KhunsGroupIntro.png"
              alt="Khuns Group Intro"
              fill
              priority
              sizes="100vw"
              className="object-contain p-8 sm:p-12 md:p-16"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};