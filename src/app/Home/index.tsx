'use client'

import Lottie from 'react-lottie'
import Header from '../components/Header'
import BackgroundCircles from '../components/Backgrount-Circles'
import AboutMeCard from '../components/AboutMeCard'
import ProjectCard from '../components/ProjectCard'

import welcomeAnimation from '../animations/welcome.json'
export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: welcomeAnimation,
    renderSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <>
      <Header />
      <BackgroundCircles />
      <div className="z-1 flex items-center justify-between h-screen">
        <h2 className=' text-dark text-6xl text-center font-title'>Ask me about JavaScript, ReactJS, React Native, NodeJS</h2>
        <Lottie
          options={defaultOptions}
          height={1800}
          width={1800}
        />
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
