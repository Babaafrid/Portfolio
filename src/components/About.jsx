import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[300px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[30px] py-5 px-9 min-h-[250px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='object-contain'
        />

        {/* <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3> */}
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a student pursuing B.Tech in Computer Science and Engineering specialized in AI & IPA at KL University. My passion lies in creating impactful projects that not only intrigue me but also contribute to my skill set. I am passionate about participating in hackathons and coding competitions, which push my boundaries and allow me to showcase my problem-solving skills on a broader stage. My experiences in group projects have taught me the value of teamwork, effective communication, and leveraging each team member's strengths. I firmly believe in exploring different resources to improve my abilities. As a peer mentor, I've had the privilege of assisting fellow students in their academic journey, reinforcing my own understanding while helping them succeed. I am dedicated to continuously enhancing my skills and exploring new areas to expand my horizons within the field of computer science. Thank you for taking the time to learn a bit about me.
      </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
