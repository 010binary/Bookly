import React from "react";
import Image from "next/image";
import {
  backgroundImage,
  Book1,
  Book2,
  Book3,
  Book4,
  Book5,
  Book6,
} from "../../public";

const Discover: React.FC = () => {
  return (
    <>
      <div>
        <section>
          <Image
            src={backgroundImage}
            alt="bg-image"
            className="w-full  absolute top-0 -z-10 skew-x-12"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          {/* text */}
          <div className="p-8">
            <h2 className="font-bold text-white capitalize">
              Discover the Biggest Books of Fall
            </h2>
            <p className="font-medium text-gray-300 mt-auto">
              Let us guide you to the most anticipated new reads this season
            </p>
          </div>
        </section>
        <section className="flex flex-col items-center justify-between bg-slate-400 p-4">
          <Image src={Book1} alt="bg-image" />
          <h2>Book Title</h2>
          <p>Book Author</p>
        </section>
      </div>
    </>
  );
};

export default Discover;
