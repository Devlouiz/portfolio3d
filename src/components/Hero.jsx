import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { mysocials } from "../constants";
import { louis } from "../assets";
import FlippableImage from "./FlippableImage";
import myResume from "../assets/louis_onyedikachi-Resumé.pdf";

const Hero = ({ handleFlip, isFlipped}) => {
  const [text] = useTypewriter({
    words: ["Front-End Engineer", "Wordpress Designer", "Civil Engineer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <section
      className="relative w-full h-full 
    mx-auto "
    >
      <div
        className={`${styles.paddingX} relative
       top-[110px] max-w-7xl mx-auto flex flex-col items-start
       gap-5 lg:flex-row justify-between`}
      >
        <div className="flex items-start lg:w-1/2">
          <div
            className="flex flex-col justify-center
         items-center mt-5"
          >
            <div className="w-5 h-5 rounded-full bg-[#1a8ab4]" />
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#1a8ab4]" />
          </div>
          <div>
            <h1
              className={`${styles.heroHeadText}
          text-primary2`}
            >
              Hi, I'm Louis a &nbsp;
              <br />
              <span className="text-[#1a8ab4]">{text}</span>
              <Cursor cursorColor="black" />
            </h1>
            <p
              className={`${styles.heroSubText} 
          mt-2 text-primary2`}
            >
              I develop user interfaces, web <br className="sm:block hidden" />
              applications and 3D visuals
            </p>
            <div className="flex gap-5 text-black my-5">
              {mysocials.map((item, index) => (
                <a href={item.source_code_link} key={index}>
                  <img
                    src={item.image}
                    alt="socials"
                    className="w-[35px] h-[35px]"
                  />
                </a>
              ))}
              <a href={myResume} download="louis_onyedikachi-Resumé.docx"
              className="flex align-middle p-1 text-white bg-black rounded-md">Download CV</a>
            </div>
          </div>
        </div>
        <div className=" flex h-2/3 lg:justify-end justify-center lg:w-auto w-full">
          <div className="w-[400px] h-[550px]">
            <FlippableImage
              handleFlip={handleFlip}
              isFlipped={isFlipped}
              imageSrc={louis}
              aboutText=" I'm a skilled software developer with experience in JavaScript, and expertise in React framework. I'm a quick learner and collaborate closely with clients and my team to create efficient, scalable, and user-friendly solutions that solve real- world problems. Let's work together to bring your ideas to life "
            />
          </div>
        </div>
      </div>
      {/*<ComputersCanvas/>*/}
      <div
        className=" xs:bottom-10  bottom-32 mt-5
        w-full flex justify-center items-center"
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px]
            rounded-3xl border-4 border-secondary
            flex justify-center items-start p-2"
          >
            <motion.div
              className="w-3 h-3 rounded-full bg-secondary
                mb-1 "
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};
export default Hero;
