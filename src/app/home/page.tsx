"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../component/header";
import Image from "next/image";

const images = [
  { src: "/pic2.png", title: "Delicious Cakes", subtitle: "Made with Love" },
  { src: "/pic1.jpg", title: "Custom Designs", subtitle: "Tailored for You" },
  { src: "/pic3.jpg", title: "Celebrate Moments", subtitle: "With Sweetness" },
  {
    src: "/pic5.jpg",
    title: "Premium Ingredients",
    subtitle: "For the Best Taste",
  },
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative bg-gradient-to-br from-pink-200 via-purple-300 to-blue-300 text-purple-900 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-5">
        <motion.h1
          className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-purple-700">CakeUp!</span>
        </motion.h1>
        <motion.p
          className="text-2xl font-medium max-w-3xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Experience the art of baking with delightful cakes that bring joy to
          every celebration.
        </motion.p>

        {/* Call-to-Action */}
        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(128, 90, 213, 0.9)",
            boxShadow: "0px 4px 20px rgba(128, 90, 213, 0.6)",
          }}
          className="bg-purple-500 text-purple-900 py-3 px-4 rounded-full font-semibold shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Explore Our Menu
        </motion.button>
      </section>

      {/* Carousel Section */}
      <section className="relative w-full max-w-6xl mx-auto py-2">
        <motion.div
          key={currentImage}
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={images[currentImage].src}
            alt={images[currentImage].title}
            fill
            className="object-fill"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gray/30 flex flex-col justify-end p-6">
            <h2 className="text-3xl text-purple-950 font-bold mb-2">
              {images[currentImage].title}
            </h2>
            <p className="text-lg text-pink-700">
              {images[currentImage].subtitle}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-pink-400 rounded-full blur-xl opacity-50"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.7, 0.5],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-16 right-8 w-24 h-24 bg-blue-400 rounded-full blur-lg opacity-60"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-32 left-16 w-32 h-32 bg-purple-400 rounded-full blur-lg opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
          rotate: [0, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      ></motion.div>
    </main>
  );
};

export default Home;
