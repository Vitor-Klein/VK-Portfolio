"use client";
import React from "react";
import AboutMeCard from "../components/AboutMeCard";
import Hero from "../components/Hero";

import { cn } from "@/lib/utils";

import BlurFade from "../components/magicui/blur-fade";
import IconCloud from "../components/magicui/icon-cloud";
import LetterPullup from "../components/magicui/letter-pullup";
import Marquee from "../components/magicui/marquee";
import { BentoCard, BentoGrid } from "../components/magicui/bento-grid";
import Iphone15Pro from "../components/magicui/iphone-15-pro";

import {
  GitHubLogoIcon,
  FigmaLogoIcon,
  BackpackIcon,
  TrashIcon,
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

const files = [
  {
    name: "Trash-It♻️",
    body: "App criado com o intuito de ajudar na otimização da coleta de lixo facilitando a comunicação entre prefeitura e seus moradores",
  },
  {
    name: "Portfolio🖋️",
    body: "Desing deste portfólio junto com outras ideias e designs passados",
  },
  {
    name: "Drink-It🍹",
    body: "App voltado para diversão com a criação de um 'Drinking game' para diversao em festas",
  },
  {
    name: "CoffeApp☕",
    body: "App criado com o intuito de auxiliar na criação e armazenamento de receitas para baristas e entusiastas do mundo dos cafés especiais.",
  },
];

const features = [
  //Figma Posts
  {
    Icon: FigmaLogoIcon,
    name: "Desiner UX/UI",
    description: "Alguns De Meus Mokups e Prototipações",
    href: "https://www.figma.com/@vitorKlein",
    cta: "Acessar Perfil Figma",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3",
    iconColor: "text-rose-500",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:10s] [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-52 h-96 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  // trash-it
  {
    Icon: TrashIcon,
    name: "Trash-It",
    description:
      "Aplicação para potencializar e auxiliar a coleta de lixo em pequenas e medias cidades.",
    href: "https://trash-it.vercel.app",
    cta: "Acessar Aplicação",
    background: (
      <div className="absolute mt-80">
        <Iphone15Pro src="./Splash.png" className="size-72" />
      </div>
    ),
    className: "lg:col-start-2 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    iconColor: "text-green-600",
  },
  //UTFPR
  {
    Icon: BackpackIcon,
    name: "UTFPR",
    description: "Atualmente cursando Ciencia da Computação",
    href: "https://github.com/Vitor-Klein/Materias-UTFPR",
    cta: "Acessar repositório de projetos",
    background: (
      <img
        alt=""
        src="./utfpr-white.png"
        className=" absolute w-60 right-4 top-6 opacity-70"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
    iconColor: "text-yellow-500",
  },
  //Nada ainda
  {
    Icon: GitHubLogoIcon,
    name: "Coffetfolio",
    description: "Meu portfolio para cafés.",
    href: "http://localhost:6666",
    cta: "Veja mais",
    background: (
      <img
        alt=""
        src="./coffetfolio.png"
        className=" absolute top-11 opacity-80 w-64"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-2",
    iconColor: "text-[#8C4C17]",
  },
];
export default function Home() {
  return (
    <>
      <BlurFade delay={0.25} inView>
        <Hero />
      </BlurFade>

      <div className="flex flex-col items-center mt-52" id="projects">
        <h2 className="text-dark text-5xl text-center font-body ml-10">
          Projetos:
        </h2>
        <div className="w-full max-w-7xl mt-28">
          <BentoGrid className="lg:grid-rows-3 h-[38rem]">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
      <BlurFade delay={0.25} inView>
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-dark text-5xl text-center font-body ml-10">
            Curriculo:
          </h2>
          <img className="mt-20 rounded-xl m-5" src="./Curriculum.svg" alt="" />
          <a
            href="./Curriculum.pdf"
            download="Vitor Curriculum"
            className="text-xl bg-dark pr-20 pl-20 pt-4 pb-4 rounded-xl hover:bg-dark hover:bg-opacity-95"
          >
            Download CV
          </a>
        </div>
      </BlurFade>
    </>
  );
}
