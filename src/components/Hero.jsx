import React from "react";
import img1 from '../assets/3.jpg'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32" id="home">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <img 
            src={img1} 
            className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600" 
            alt="Profile" 
          />
        </motion.div>
        <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-5xl font-light transition-all duration-300 hover:opacity-100 md:text-7xl">Karen Ehab</h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent opacity-80 text-2xl font-light transition-all duration-300 hover:opacity-100 md:text-3xl">Front-End Developer</h3>
          <p className="text-xs md:text-base text-pretty  text-gray-400">
            I am Karen Ehab, a passionate Frontend Developer with a strong focus on creating engaging and user-friendly web experiences. 
            Proficient in React.js, JavaScript, HTML, and CSS, I specialize in building responsive and interactive interfaces that seamlessly blend functionality with design. 
            I am constantly expanding my knowledge and staying updated with the latest web technologies. I thrive on solving challenges, optimizing performance, and collaborating 
            on innovative projects to bring creative ideas to life.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
