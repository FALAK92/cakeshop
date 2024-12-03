"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 text-purple-600 shadow-lg ">
      <div className="container mx-auto flex items-center justify-between p-3">
        {/* Logo */}
        <Link href="/">
          <motion.div
            className="flex items-center cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/icon2.png"
              alt="Cake Shop Logo"
              className="w-14 h-14 rounded-full"
            />
            <span className="text-2xl text-purple-600 font-bold">CakeUp</span>
          </motion.div>
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-10 m-3 text-2xl">
          <Link href="/" className="hover:text-pink-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-pink-600">
            About
          </Link>
          <Link href="/menu" className="hover:text-pink-600">
            Menu
          </Link>
          <Link href="/contact" className="hover:text-pink-600">
            Contact
          </Link>

          {/* Cart Icon */}
          <Link href="/cart" className="relative">
            <AiOutlineShoppingCart className="text-2xl hover:text-pink-600" />

            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
              0
            </span>
          </Link>
        </nav>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? (
            <AiOutlineClose className="text-4xl text-purple-900" />
          ) : (
            <AiOutlineMenu className="text-4xl text-purple-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-purple-400 p-8 space-y-8 text-2xl text-purple-900"
        >
          <Link href="/" className="block hover:text-pink-600">
            Home
          </Link>
          <Link href="/about" className="block hover:text-pink-600">
            About
          </Link>
          <Link href="/menu" className="block hover:text-pink-600">
            Menu
          </Link>
          <Link href="/contact" className="block hover:text-pink-600">
            Contact
          </Link>

          {/* Mobile Cart Icon */}
          <Link
            href="/cart"
            className="flex items-center space-x-1 hover:text-pink-600"
          >
            <AiOutlineShoppingCart className="text-2xl" />

            <span className="bg-red-500 text-white text-xs rounded-full px-2">
              0
            </span>
          </Link>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
