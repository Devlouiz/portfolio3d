import { motion } from "framer-motion";
import "../utils/style.css";
import { animatedArrows } from "../utils/motion";
import { styles } from "../styles";

const FlippableImage = ({ imageSrc, aboutText, handleFlip, isFlipped }) => {

  return (
    <div
      className="relative w-full h-full [perspective: 1000px] "
      onClick={handleFlip}
    >
      <div
        className={`w-full h-full cursor-pointer transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/*front-side*/}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <img
            src={imageSrc}
            alt="flippable image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 hover:opacity-0" />
          <div className="flex items-center space-x-1 absolute top-1/2 left-1/2  h-8 text-white">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                custom={index}
                variants={animatedArrows}
                initial="initial"
                animate="animate"
                className="text-2xl"
              >
                &gt;
              </motion.div>
            ))}
          </div>
        </div>
        <div
          className=" absolute inset-0 w-full h-full backface-hidden bg-[#050816] text-white p-4 flex flex-col items-start justify-center "
          style={{ transform: "rotateY(180deg)" }}
        >
          <p className={`text-white ${styles.sectionSubText}`}>About</p>
          <h2 className={`text-white ${styles.sectionHeadText}`}>Overview.</h2>
          <p className="text-[17px] max-w-3xl leading-[30px]">{aboutText}</p>
        </div>
      </div>
    </div>
  );
};

export default FlippableImage;
