import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="fixed h-12 pl-5 pr-5 w-full bg-dark bg-opacity-25 flex justify-between items-center z-10">
        <Image alt="logo" src="./VK-logo.svg" width={32} height={32} />
        <a href="#projects" className=" text-dark font-body text-xl">
          Projects
        </a>
      </div>
    </>
  );
}
