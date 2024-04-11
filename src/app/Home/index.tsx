import Image from 'next/image'
import BackgroundCircles from '../components/Backgrount-Circles'
export default function Home() {
  return (
    <>
      <div className="fixed h-12 pl-5 pr-5 w-full bg-dark bg-opacity-25 flex justify-between items-center ">
        <Image
          alt='logo'
          src="./VK-logo.svg"
          width={32}
          height={32}
        />
        <h1 className="text-dark font-body text-xl">Projects</h1>
      </div>
      <BackgroundCircles />
    </>
  );
}
