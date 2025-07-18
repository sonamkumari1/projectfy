import React from "react";
import { motion } from "framer-motion";

function ProjectDashboard() {
  return (
    <div className="flex flex-col items-center justify-center px-5 py-20 bg-black gap-32">
      {/* Top Section - Selling Projects */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
         viewport={{ amount: 0.2 }}
          className="max-w-xl mb-10 md:mb-0"
        >
          <h1 className="text-5xl font-extrabold text-white mb-4 leading-tight">
            Selling Projects
          </h1>
          <p className="text-gray-300 mb-6">
            Easily list your projects for sale, connect with interested buyers, and grow your business faster. Our platform helps you organize, promote, and sell your projects with efficiency and confidence.
          </p>
          <button className="px-6 py-3 bg-zinc-900 text-white rounded-full hover:bg-blue-700 transition">
            Sell Projects
          </button>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
           viewport={{ amount: 0.2 }}
        >
          <img
            src="/logosell.png"
            alt="Sell Your Projects"
            className="rounded-lg shadow-lg w-[520px] h-auto"
          />
        </motion.div>
      </div>

      {/* Middle Section - Buying Projects */}
      <div className="flex flex-col md:flex-row items-center justify-between py-10 w-full gap-10">
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
           viewport={{ amount: 0.2 }}
        >
          <img
            src="/explore.png"
            alt="Buy Your Projects"
            className="rounded-lg shadow-lg w-[450px] h-auto"
          />
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2 }}
          className="max-w-xl"
        >
          <h1 className="text-5xl font-extrabold text-white mb-4 leading-tight">
            Buying Projects
          </h1>
          <p className="text-gray-300 mb-6">
            Discover a wide range of projects available for purchase. Find the perfect fit for your business goals and expand your portfolio with ease and confidence.
          </p>
          <button className="px-6 py-3 bg-zinc-900 text-white rounded-full hover:bg-green-700 transition">
            Buy Projects
          </button>
        </motion.div>
      </div>

      {/* Bottom Section - Share Your Idea for Project */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2 }}
          className="max-w-xl"
        >
          <h1 className="text-5xl font-extrabold text-white mb-4 leading-tight">
            Share Your Idea for Project
          </h1>
          <p className="text-gray-300 mb-6">
            Got a unique project idea? Share it with us and let us help you turn it into a successful business opportunity. Collaborate, innovate, and create with confidence.
          </p>
          <button className="px-6 py-3 bg-zinc-900 text-white rounded-full hover:bg-purple-700 transition">
            Share Your Idea
          </button>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2 }}
        >
          <img
            src="/ideas.png"
            alt="Share Your Idea"
            className="rounded-lg shadow-lg w-[550px] h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectDashboard;
