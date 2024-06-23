'use client'

import Header from '../components/Header'
import BackgroundCircles from '../components/Backgrount-Circles'
import AboutMeCard from '../components/AboutMeCard'

import IconCloud from "../components/magicui/icon-cloud";
import LetterPullup from "../components/magicui/letter-pullup";

import { BentoCard, BentoGrid } from "../components/magicui/bento-grid";
import {
  GitHubLogoIcon
} from "@radix-ui/react-icons";

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

const features = [
  {
    Icon: GitHubLogoIcon,
    name: "Calendar1",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img src='' alt='' className=" absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GitHubLogoIcon,
    name: "Calendar2",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img alt='' className=" absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-2 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GitHubLogoIcon,
    name: "Calendar3",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img alt='' className=" absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: GitHubLogoIcon,
    name: "Calendar4",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img alt='' className=" absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-2",
  },

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

        <div className="relative flex h-full w-full max-w-[44rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>

      <AboutMeCard />

      <div className='flex flex-col items-center mt-52'>
        <h2 className='text-dark text-5xl text-center font-body ml-10'>Projetos:</h2>
        <div className='w-full max-w-7xl mt-28'>
          <BentoGrid className="lg:grid-rows-3 h-[38rem]">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </>
  );
}
