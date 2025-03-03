import "./styles.css";

export default function Hero() {
  return (
    <>
      <div className="relative h-screen shadow-[inset_0_0_100px_0_rgba(50,57,63,0.5)]">
        <img
          className="absolute top-0 right-0 rounded-xl w-96 h-auto"
          src="./svgTop.svg"
          alt=""
        />
        <div className="absolute w-full flex flex-row items-center justify-evenly mt-10 z-0 px-4 md:px-0">
          <button className="md:w-52 md:h-14 w-32 h-10 rounded-sm bg-secondary text-background font-primaryBold text-sm md:text-base">
            Projetos
          </button>
          <button className="md:w-52 md:h-14 w-32 h-10 rounded-sm bg-secondary text-background font-primaryBold text-sm md:text-base">
            Experiências
          </button>
          <button className="md:w-52 md:h-14 w-32 h-10 rounded-sm bg-secondary text-background font-primaryBold text-sm md:text-base">
            Currículo
          </button>
        </div>

        <div className="z-10 absolute w-full h-full flex flex-col items-center justify-center px-4 md:px-0">
          <img
            src="./meImage.jpg"
            alt=""
            className="w-80 h-80 mt-20 relative rounded-full -rotate-12"
          />

          <div className="w-full max-w-md h-80 -mt-28 md:-mt-44 bg-background-destaq rounded-xl flex items-end justify-center px-4">
            <span className="mb-4 p-4 font-primary text-2xl text-center">
              Olá, sou Vitor Klein, desenvolvedor web full stack apaixonado por
              criar soluções escaláveis e elegantes.
            </span>
          </div>
        </div>
        <img
          className="absolute bottom-0 left-0 rounded-xl w-96 h-auto z-0"
          src="./svgBottom.svg"
          alt=""
        />
      </div>
    </>
  );
}
