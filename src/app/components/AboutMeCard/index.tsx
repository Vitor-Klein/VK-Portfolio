'use client';

import './styles.css';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function AboutMeCard() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`w-6/12 h-30 bg-dark p-5 rounded-xl ml-10 mt-10 shadow-2xl 
    shadow-dark transition-opacity duration-700 
      ${inView ? 'animate-one-bounce opacity-100' : 'opacity-0'}`}
    >
      <div className="flex justify-between">
        <Image
          alt='Profile Picture'
          src="https://github.com/Vitor-Klein.png"
          width={700}
          height={700}
          className='w-32 h-32 mb-3 rounded-full shadow-lg float-left'
        />
        <p className='w-9/12 text-texts font-body text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio asdd Et
          ultrices neque ornare aenean euismod elit, sed do eiusmod elit, sed do sea.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio asdd
          Et ultrices neque ornare aenean euismod elit, sed do eiusmod elit, sed do sea.
        </p>
      </div>
      <a href='' className='text-primary font-body text-xl hover:underline'>Read More</a>
    </div>
  );
}
