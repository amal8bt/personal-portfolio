import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dashboard from "@/public/Dashboard.png"
import chat from "@/public/chat.png";
import myl from "@/public/Myl.png";
import dforu from "@/public/dforu.png";
import eve from "@/public/TopEvent mockup.png";
import edc from "@/public/Education Platform Website - Rearing.png";
import shopy from "@/public/shopy.png";
import edu from "@/public//edu.png";
import agency from "@/public/digitu.jpg";
import beyang from "@/public/beyang.png"
import reactLogo from "@/public/react.png"
import mongoLogo from "@/public/mongo.png"
import nestLogo from "@/public/nest.png"
import jsLogo from "@/public/js.png"
import tsLogo from "@/public/typescrript.png"
import nextLogo from "@/public/nexxx.png"
import nodeLogo from "@/public/nodej.png"
import expLogo from "@/public/expres.webp"
import htmlLogo from "@/public/html.png"
import wpLogo from "@/public/Wordpress_Blue_logo.png"
import phpLogo from "@/public/php.png"
import cssLogo from "@/public/css.png"
import pyLogo from "@/public/python.png"
import figLogo from "@/public/figma.png"
import awsLogo from "@/public/ISO_C++_Logo.svg.png"
import gitLogo from "@/public/Git-Icon-1788C.png"
import sqlLogo from "@/public/sql.png"
import sassLogo from "@/public//Sass_logo.png"
import twLogo from "@/public/Tailwind-img.png"
import jqLogo from "@/public/jqweryy.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Journey",
    hash: "#journey",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Licence in Telecommunication",
    location: "High Institut of technologies and communications",
    description:
      "Training program in web developement, graphic design and digital marketing.",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2021",
  },
  {
    title: "BTS in Multimedia & marketing",
    location: "CSFT Tunis",
    description:
      "Training program in web developement, graphic design and digital marketing.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2023",
  },
  
  {
    title: "Web developement intership",
    location: "DND services",
    description:
      "I've created an educational platform for students, to facilitating their learning by providing them the opportunity to subscribe to online courses and to follow news and updates in this field. ",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Web developement intership",
    location: "DIGIT-U",
    description:
      "I've created a web application for connecting professionals and individuals to manage and facilitate their well-being.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  
  {
    title: "Chat App",
    type:"webApp",
    description:
      "A real-time communication platform that allows users to communicate and interacte together.",
    tags: ["React", "TypeScript", "Next.js", "Pusher.Js", "Nest.Js", "MongoDB"],
    imageUrl: chat,
  },
  {
    title: "Dashboard",
    type:"webApp",
    description:
      "This job board provides an overview of key performance indicators related to a company's operations, finances, and objectives.",
    tags: ["React", "Next.js", "MongoDB", "Node.JS", "Express.Js","Refine"],
    imageUrl: dashboard,
  },
  {
    title: "Beyang",
    type:"webApp",
    description:
      "A  web application for connecting professionals and individuals to manage and facilitate their well-being.",
    tags: ["React", "Next.js", "TypeScript", "RESTapi", "Node.js", "Nest.Js"],
    imageUrl: beyang,
  },
  {
    title: "MYL",
    type:"site",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: myl,
  },
  {
    title: "Shopy",
    type:"site",
    description:
      "An e-commerce website that enables businesses to showcase and sell their products or services to customers.",
    tags: ["HTML", "SASS", "JAVASCRIPT", "BOOTSRAP", "jQuery"],
    imageUrl: shopy,
  },
  {
    title: "Edu-TALKS",
    type:"site",
    description:
      "an educational platform for students, to facilitating their learning by providing them the opportunity to subscribe to online courses.",
    tags: ["HTML", "CSS", "JAVASCRIPT", "PHP", "MySQL"],
    imageUrl: edu,
  },
  {
    title: "Digital Agency",
    type:"site",
    description:
      "An e-commerce website that enables businesses to showcase and sell their products or services to customers.",
    tags: ["HTML", "SASS", "JAVASCRIPT", "BOOTSRAP", "jQuery"],
    imageUrl: agency,
  },
  {
    title: "Educational Platform",
    type:"design",
    description:
      "An e-commerce website that enables businesses to showcase and sell their products or services to customers.",
    tags: ["Figma"],
    imageUrl: edc,
  },
  {
    title: "Dforu agency",
    type:"design",
    description:
      "An e-commerce website that enables businesses to showcase and sell their products or services to customers.",
    tags: ["Figma"],
    imageUrl: dforu,
  },
  {
    title: "Top Event",
    type:"design",
    description:
      "An e-commerce website that enables businesses to showcase and sell their products or services to customers.",
    tags: ["Figma","Adobe XD"],
    imageUrl: eve,
  },
] as const;

export const skillsData = [
  {
    title: "Programming essentials in Python",
    organization:"Cisco",
  },
  {
    title: "Algorithms and Data structure",
    organization:"FreeCodeCamp",
  },
  {
    title: "Web developer bootcamp MERN",
    organization:"Udemy",
  },
  {
    title: "Advanced React",
    organization:"Meta",
  },
  {
    title: "UX Design",
    organization:"Google",
  },
] as const;

export const skillsImg = [
  {imageUrl:htmlLogo},
  {imageUrl:cssLogo},
  {imageUrl:sassLogo},
  {imageUrl:twLogo},
  {imageUrl:jsLogo},
  {imageUrl:jqLogo},
  {imageUrl:reactLogo},
  {imageUrl:nextLogo},
  {imageUrl:nodeLogo},
  {imageUrl:tsLogo},
  {imageUrl:expLogo},
  {imageUrl:nestLogo},
  {imageUrl:mongoLogo},
  {imageUrl:sqlLogo},
  {imageUrl:phpLogo},
  {imageUrl:pyLogo},
  {imageUrl:awsLogo},
  {imageUrl:gitLogo},
  {imageUrl:wpLogo},
  {imageUrl:figLogo},
] as const;
