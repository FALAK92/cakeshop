// /pages/menu.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";

// Product data
const products = [
  {
    id: 1,
    name: "Chocolate Cake",
    description: "Rich and moist chocolate cake topped with ganache.",
    price: 12,
    image: "/cake1.jpg",
  },
  {
    id: 2,
    name: "Vanilla Delight",
    description: "Classic vanilla cake with creamy frosting.",
    price: 10,
    image: "/cake2.jpg",
  },
  {
    id: 3,
    name: "Red Velvet",
    description: "Smooth red velvet with cream cheese frosting.",
    price: 15,
    image: "/cake3.webp",
  },
  {
    id: 4,
    name: "Strawberry Bliss",
    description: "Sweet strawberry cake with fresh strawberries.",
    price: 14,
    image: "/cake4.jpg",
  },
  {
    id: 5,
    name: "Lemon Tart",
    description: "Tangy lemon cake for a refreshing treat.",
    price: 11,
    image: "/cake5.jpg",
  },
  {
    id: 6,
    name: "Carrot Cake",
    description: "Moist carrot cake with creamy frosting.",
    price: 13,
    image: "/cake6.jpg",
  },
];

const Menu = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-300">
      {/* Page Content */}
      <div className="container mx-auto py-10 px-6 md:px-16">
        <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-8">
          Delicious Cakes Await You!
        </h1>
        <p className="text-center text-lg text-purple-600 mb-12">
          Choose from our variety of freshly baked cakes, perfect for every
          occasion.
        </p>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="rounded-lg shadow-lg bg-white p-4 hover:shadow-2xl border-2 border-purple-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: product.id * 0.1 }}
            >
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="mt-4">
                <h3 className="text-xl font-bold text-purple-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="text-lg font-semibold mt-2 text-purple-900">
                  ${product.price}
                </p>
              </div>
              <motion.button
                className="w-full mt-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to Cart
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
