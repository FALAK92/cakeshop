"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("Thank you for reaching out! We will get back to you soon.");
    setTimeout(() => setFormStatus(""), 5000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-r from-purple-200 via-indigo-300 to-pink-300 animate-gradient-x">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-5 md:px-10 relative z-10">
        <motion.h1
          className="text-5xl font-extrabold text-center text-purple-500 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We &apos; d Love to Hear From You
        </motion.h1>

        <motion.p
          className="text-xl text-center text-purple-500 mb-8 px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Fill out the form below and we will get in touch with you soon.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-80 p-10 rounded-xl shadow-2xl backdrop-blur-xl max-w-sm w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-lg font-medium text-purple-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-6 py-4 mt-2 bg-purple-50 border-2 border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-lg font-medium text-purple-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-6 py-4 mt-2 bg-purple-50 border-2 border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-lg font-medium text-purple-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-6 py-4 mt-2 bg-purple-50 border-2 border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full py-3 mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-purple-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Success Message */}
        {formStatus && (
          <motion.div
            className="mt-6 bg-pink-900 text-white p-4 rounded-lg text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {formStatus}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Contact;
