import React from "react";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { useTypewriter,Cursor } from "react-simple-typewriter";
import Manlaptop from "../assets/manlaptop.json"
import Lottie from "lottie-react";
import { mysocials } from "../constants";

const Hero = () => {
  const [text] = useTypewriter({
    words : ['Software Developer', 'Wordpress Designer', 'Civil Engineer'],
    loop : {},
    typeSpeed : 120,
    deleteSpeed : 80
  });
  return (
    <section className="relative w-full h-full 
    mx-auto ">
      <div className={`${styles.paddingX} relative
       top-[110px] max-w-7xl mx-auto flex flex-row items-start
       gap-5 `}>
        <div className="flex flex-col justify-center
         items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#1a8ab4]"/>
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#1a8ab4]"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}
          text-primary2`}>
            Hi, I'm Louis a &nbsp;
            <br />
            <span className="text-[#1a8ab4]">
               {text}
            </span>
            <Cursor cursorColor="black"/>
          </h1>
          <p className={`${styles.heroSubText} 
          mt-2 text-primary2`}>
            I develop user interfaces, web <br 
            className="sm:block hidden"/> 
            applications and 3D visuals
          </p>
        <div className="flex gap-5 text-black my-5">
          {
            mysocials.map((item,index) => (
              <a href={item.source_code_link} key={index}>
                <img src={item.image} alt="socials" className="w-[35px] h-[35px]"/>
              </a>
            ))
          }
        </div>
        </div>
      </div>
      <div className="w-full flex justify-center h-2/3 items-center mt-[120px] sm:mt-[120px]">
        <div className="w-[600px]">
          <Lottie animationData={Manlaptop}/>
        </div>
      </div>
      {/*<ComputersCanvas/>*/}
      <div className=" xs:bottom-10  bottom-32 mt-5
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