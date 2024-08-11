import React, { useState } from "react";
import ImageSlider from "../common/ImageSlider"; 
import { faculty } from "../../data/common/slider-data"; 
import "../../index.css"; 
import { FaCircleRight } from "react-icons/fa6";

const Faculty = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };
  return (
    <section
      id="faculty"
      className="relative w-full px-4 py-2 bg-parallax sm:px-6 lg:px-8"
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-40"></div>
      <div className="relative z-20 w-10/12 py-10 mx-auto ">
        <div className="flex flex-col mb-8 lg:mb-14 sm:mb-12 gap-y-2">
          <h2 className="mt-4 text-2xl text-left text-white sm:text-3xl lg:text-4xl font-regular sm:mt-10 lg:mt-12">
            SCHOOL FACULTY
          </h2>
          <div className="w-[70px] h-1 bg-dark-blue"></div>
          <div className="flex justify-end">
            <div className="flex items-center cursor-pointer w-max gap-x-1">
              <span
                className={`text-red flex items-center ${
                  flipped ? "animate-flip" : ""
                } hover:animate-flip-hover`}
                onClick={handleFlip}
              >
                <FaCircleRight />
              </span>
              <span className="text-white transition duration-300 hover:text-red-500">
                View More
              </span>
            </div>
          </div>
          <div className="w-full">
            {" "}
            {/* Container for slider */}
            {
              <ImageSlider
                images={faculty}
                backgroundColor="transparent"
                showNames={true}
                spaceBetween={40} 
                showDesignation={true}
                rounded={true} 
              />
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
