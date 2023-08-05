"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [category,setCat] = useState('webApp');
  const getBackgroundColor = (cat:any) => {
    return cat === category ? 'white' : '';
  };
  
  console.log('cat',category);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div style={{display:"flex",justifyContent:"center",gap:'2rem',marginBottom:"25px"}}>
        <p className="catLink" 
         onClick={() => { setCat('webApp') }}
        style={{ backgroundColor: getBackgroundColor('webApp') }}
      >Web Apps</p>
        <p className="catLink" onClick={()=>{setCat('site')}}
        style={{ backgroundColor: getBackgroundColor('site') }}
        >Websites</p>
        <p className="catLink"
        onClick={()=>{setCat('design')}}
        style={{ backgroundColor: getBackgroundColor('design') }}
      >UI/UX</p>
      </div>
      <div>
        {projectsData.map((project, index) => (
          project.type == category &&
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
