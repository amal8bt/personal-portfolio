"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p >
        
      As a full stack web developer I have successfully delivered numerous web applications.
      My proficiency in JavaScript frameworks such as React.Js Next.Js Express.Js and Nest.Js allows
 me to create innovative web applications.I am also familiar with TypeScript.<br></br>

      </p>
      <p className="mt-3">
    During my academic journey, I had the privilege of undertaking internships, where 
I played a pivotal role in developing and implementing complex web applications for our clients. 
Through collaboration with cross-functional teams, I demonstrated strong problem-solving abilities 
and a knack for finding innovative solutions to technical challenges. My attention to detail, 
coupled with a passion for writing clean, maintainable code, has consistently resulted in highly 
functional and scalable applications.<br></br>
</p>
      <p className="mt-3 italic font-medium">
        I am always looking to learn new technologies and make new challenges.
      </p>

    </motion.section>
  );
}
