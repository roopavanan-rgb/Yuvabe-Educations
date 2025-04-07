"use client";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
    className="relative w-full h-screen flex items-center justify-center bg-black bg-cover bg-center bg-no-repeat"
    
  >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Animated Text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative text-white text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold">This Page is Under Construction</h1>
        <p className="mt-4 text-lg md:text-2xl">
          We’re working hard to bring you something amazing. Stay tuned!
        </p>
      </motion.div>
    </div>
  );
};

export default HeroSection;
