'use client'

import Header from '../components/Header'
import BackgroundCircles from '../components/Backgrount-Circles'
import AboutMeCard from '../components/AboutMeCard'
import ProjectCard from '../components/ProjectCard'

import IconCloud from "../components/magicui/icon-cloud";
import LetterPullup from "../components/magicui/letter-pullup";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "postgresql",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "figma",
];
export default function Home() {
  return (
    <>
      <Header />
      <BackgroundCircles />
      <div className="z-1 flex items-center justify-between h-screen">
        <div className='ml-8'>
          <LetterPullup words={"Ask me about "} delay={0.05} />
          <LetterPullup words={"JavaScript, ReactJS,"} delay={0.05} />
          <LetterPullup words={"React Native, NodeJS"} delay={0.05} />
        </div>

        {/* <h2 className=' text-dark text-6xl text-center font-title'>Ask me about JavaScript, ReactJS, React Native, NodeJS</h2> */}
        <div className="relative flex h-full w-full max-w-[44rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>

      <AboutMeCard />

      <div className='flex flex-col items-center mt-52'>
        <h2 className='text-dark text-5xl text-center font-body ml-10'>Projetos:</h2>
        <div className='w-full max-w-7xl mt-28'>
          <div className='grid grid-cols-2 gap-16'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </>
  );
}
