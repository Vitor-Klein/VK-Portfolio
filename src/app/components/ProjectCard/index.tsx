'use client'
export default function ProjectCard() {
  return (
    <>
      <a href="#" className="flex flex-col items-center rounded-lg md:flex-row 
        md:max-w-xl bg-dark shadow-2xl transition ease-in-out delay-150 
        hover:-translate-y-5 duration-300"
      >
        <img className="object-cover w-full rounded-t-lg h-96 md:max-h-56 md:w-48 md:rounded-none md:rounded-s-lg"
          src="https://github.com/Vitor-Klein.png" alt="porject image" />
        <div className="flex flex-col justify-between leading-normal p-4">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary white">Project Name</h5>
          <p className="mb-3 font-normal text-texts">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href='' className='text-primary font-body text-xl hover:underline'>Read More</a>
        </div>
      </a>
    </>
  );
}

