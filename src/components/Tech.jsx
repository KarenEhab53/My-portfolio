import React from "react";
import { BiLogoBootstrap, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import {motion} from 'framer-motion'
const Tech = () => {
  const varients={
    hidden:{opacity:0,y:50},
    visible:{opacity:1,y:0}
  }
  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
      <motion.h1 variants={varients} initial="hidden" whileInView="visible" transition={{duration:0.5}} className="text-4xl font-light text-white md:text-6xl">Technologies</motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div variants={varients} initial="hidden" whileInView="visible" transition={{duration:0.5}} >
          <BiLogoJavascript className="cursor-pointer text-[80px] text-orange-500 transation-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div variants={varients} initial="hidden" whileInView="visible" transition={{duration:0.5}} >
          <BiLogoBootstrap className="cursor-pointer text-[80px] text-indigo-500 transation-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div variants={varients} initial="hidden" whileInView="visible" transition={{duration:0.5}} >
          <BiLogoTailwindCss className="cursor-pointer text-[80px] text-sky-500 transation-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div variants={varients} initial="hidden" whileInView="visible" transition={{duration:0.5}} >
          <BiLogoReact className="cursor-pointer text-[80px] text-blue-500 transation-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div variants={varients} initial="hidden" whileInView="visible" transition={{duration:0.5}} >
          <BiLogoCss3 className="cursor-pointer text-[80px] text-blue-500 transation-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
      </div>
    </div>
  )
};

export default Tech;
