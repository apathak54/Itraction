import React from "react";
import Circles from "./circles";
import "../css/brandview.css";
import { motion } from "framer-motion";
// import Circles2 from "./circles2";

const circleVariants = {
  hidden: { opacity: 0, x: -300 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

const Service = () => {
  return (
    <section id="service" className="flex flex-col space-y-8 items-center justify-center w-[100%] h-[70vh] md:h-full text-black dark:text-white bg-white dark:bg-black">
      <div className="service-container flex flex-col md:flex-row justify-between items-center h-screen p-5 md:p-0 w-full max-w-7xl gap-2 md:gap-0">
     
        
        <div className="relative text-content flex flex-col px-5 md:pl-14 mb-2 md:mb-0 w-full md:w-[50%] text-center md:text-left">
          
        {/* {Array.from({ length: 5 }).map((_, index) => (
        <motion.div
          key={index}
          className={`circle  circle-${index + 1}`}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={circleVariants}
        />
      ))} */}
      <div className= "absolute top-[-9rem] left-[23rem] bg-blue-500 w-[80px] h-[80px] rounded-full"></div>

      <div className= "absolute bottom-[-5rem]  left-[10rem] bg-blue-500 w-[60px] h-[60px] rounded-full"></div>
      <div className= "absolute left-[0rem] top-[-5rem]  bg-blue-500 w-[70px] h-[70px] rounded-full"></div>


          
          <h1 className="text-4xl sm:text-5xl xl:text-6xl text-center md:text-left pb-6 md:pb-8 font-medium">
            our <span className="text-[#04ABE2]">domains</span>
          </h1>
          <p className="text-center md:text-left justify-center items-center text-lg lg:text-2xl text-[#999999]">
            we offer global services, driving growth with expertly designed
            apps. let us elevate your business with cost-effective solutions and
            unlock its full potential.
          </p>
        </div>

        <Circles />
        {/* <Circles2 /> */}
      </div>
    </section>
  );
};

export default Service;
