import Image from 'next/image'
import Header from '../components/Header'
import BackgroundCircles from '../components/Backgrount-Circles'
import AboutMeCard from '../components/AboutMeCard'
export default function Home() {
  return (
    <>
      <Header />
      <BackgroundCircles />
      <div className="z-1 flex items-center justify-between h-screen">
        <h2 className=' text-dark text-6xl text-center font-title'>Ask me about JavaScript, ReactJS, React Native, NodeJS</h2>
        <Image
          alt='Yellow person'
          src="./yellowPerson.svg"
          width={700}
          height={700}
        />
      </div>

      <AboutMeCard />
    </>
  );
}
