import React from "react";
import Image from "next/image";
import { screens } from "./index";

const LandingPage = () => {
  return (
    <div className="bg-[url('/Images/background.webp')] bg-cover bg-center bg-no-repeat min-h-screen">
      <div className="relative">
        <Image
          className="flex items-center justify-center w-full p-10 pt-20"
          src={screens}
          alt="demo screen"
        />
        <section className="rounded-t-3xl text-center flex flex-col justify-between fixed z-10 bottom-0 pt-6 pb-10 bg-grey-97 text-black">
          <p className="mb-3 text-lg font-medium">welcome</p>
          <p className="font-bold text-lg px-14">
            challenge yourself to read more this year!
          </p>
          <a href="/">
            <button className="px-16 py-4 text-lg capitalize font-bold mt-5 bg-primary text-white hover:bg-white hover:text-black focus:text-black transition duration-200 ease-in-out">
              let's get started
            </button>
          </a>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
