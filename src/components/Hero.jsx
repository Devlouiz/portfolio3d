import React from "react";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { useTypewriter,Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words : ['React Developer', 'Wordpress Dev', 'UI Designer'],
    loop : {},
    typeSpeed : 120,
    deleteSpeed : 80
  });
  return (
    <section className="relative w-full h-[800px] 
    mx-auto ">
      <div className={`${styles.paddingX} absolute inset-0
       top-[110px] max-w-7xl mx-auto flex flex-row items-start
       gap-5 `}>
        <div className="flex flex-col justify-center
         items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#1a8ab4]"/>
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#1a8ab4]"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}
          text-white`}>
            Hi, I'm Louis a &nbsp;
            <br />
            <span className="text-[#1a8ab4]">
               {text}
            </span>
            <Cursor/>
          </h1>
          <p className={`${styles.heroSubText} 
          mt-2 text-white-100`}>
            I develop user interfaces, web <br 
            className="sm:block hidden"/> 
            applications and 3D visuals
          </p>
        </div>
      </div>
      <ComputersCanvas/>
      <div className="absolute xs:bottom-10  bottom-32
        w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px]
            rounded-3xl border-4 border-secondary
            flex justify-center items-start p-2">
              <motion.div 
                className="w-3 h-3 rounded-full bg-secondary
                mb-1"
                animate={{
                  y:[ 0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
              />
            </div>
          </a>
      </div>
    </section>
  )
}
export default Hero