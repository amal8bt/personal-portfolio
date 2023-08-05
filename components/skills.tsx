"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { skillsImg } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills & Certificates</SectionHeading>
      <div className="block gap-3 md:flex">
      <div className="flex flex-wrap w-full md:w-1/2 justify-center gap-3 m-3">
      {skillsImg.map((skill, index) => (
        <motion.div className="flex justify-center align-middle"
        key={index}
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={index}>
           <Image className="skill m-1" alt="tech-logo" src={skill.imageUrl} width={100} height={100}></Image>
        </motion.div>
       
        ))}
      </div>
      <div className="flex flex-col justify-center w-full md:w-1/2">
      <ul className="inline-block justify-center align-middle gap-2 mt-3 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 m-2"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill.title}
            <span style={{color:"#757a7d",marginLeft:"10px"}}>- {skill.organization}</span>
          </motion.li>
        ))}
      </ul>
      </div>
      </div>
      
    </section>
  );
}
