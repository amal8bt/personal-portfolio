import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Head from 'next/head';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Head>
        <link rel="icon" href="./fav.png" />
      </Head>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
