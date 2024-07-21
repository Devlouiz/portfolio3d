import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn,textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full rounded-[20px]
      shadow-card">
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary rounded-[20px]
        py-5 px-12 min-h-[280px] flex justify-evenly
        items-center flex-col ">
          <img src={icon} alt={title} 
          className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px]
          font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const Service = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Best Fit</p>
        <h2 className={`${styles.sectionHeadText}`}>Expertise.</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)}
      className="mt-4 text-tertiary text-[17px]
      max-w-3xl leading-[30px]">
          With a good foundation in civil engineering and a passion for web
          development, I'm excited to explore opportunities that combine my technical
          skills and creative flair. Whether it's building innovative web applications with
          Reactjs, designing engaging Wordpress websites, or leveraging my engineering 
          problem-solving skills to drive digital solutions, I'm eager to contribute.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) =>(
          <ServiceCard key={service.title} index={index}
          {...service}/>
        ))}
      </div>
    </>
  )
}
//export default About
export default SectionWrapper(Service, "service")