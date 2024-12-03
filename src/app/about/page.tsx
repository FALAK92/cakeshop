"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-purple-500 to-purple-300 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:px-12 lg:px-20 flex flex-col items-center">
        {/* Header Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-extrabold text-purple-800">
            About Our Cake Shop
          </h1>
          <p className="mt-4 text-lg text-purple-800">
            Redefining sweetness, one masterpiece at a time.
          </p>
        </motion.div>

        {/* Image and Text Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.4 },
            }}
          >
            <div className="bg-white rounded-lg shadow-2xl p-4">
              <Image
                src="/about.avif"
                alt="Cake Shop"
                className="rounded-lg w-full transition-all duration-300 ease-in-out"
                />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="flex flex-col space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl leading-relaxed text-purple-800">
              Welcome to a world of flavor and artistry! At our cake shop, we
              combine passion with perfection to create cakes that not only look
              stunning but taste unforgettable. From birthdays to weddings and
              everything in between, we’re here to make your celebrations truly
              special.
            </p>
            <motion.a
              href="#contact"
              className="self-start inline-block bg-purple-400 text-purple-900 font-semibold text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-purple-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
