'use client';

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
          Estudante de Ciência da Computação na 
          Universidade Tecnológica Federal do Paraná, estou 
          em constante busca por conhecimento e atualização tecnológica. 
          Valorizo a colaboração e a aprendizagem contínua, elementos que 
          considero fundamentais para o sucesso profissional e pessoal. 
          Engajado em projetos que exploram a fronteira da tecnologia, estou 
          comprometido em entregar excelência e produtividade sem deixar de lado 
          a meticulosidade de um bom desenvolvedor
        </p>
      </div>
      <a href='' className='text-primary font-body text-xl hover:underline'>Read More</a>
    </div>
  );
}
