import React, { useState } from 'react';
import ImageSlider from '../common/ImageSlider'; // Adjust the path based on your structure
import { faculty } from '../../data/slider-data'; // Adjust the path based on your structure
import '../../index.css'; // Your custom styles
import { FaCircleRight } from "react-icons/fa6";

const Faculty = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };
  return (
    <section
      id="faculty"
      className="w-full bg-black py-2 px-4 sm:px-6 lg:px-8" // Added padding for smaller screens
    >
      <div className="relative w-10/12 mx-auto py-10">
        <div className="flex flex-col lg:mb-14 sm:mb-12 mb-8 gap-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-regular text-left mt-4 sm:mt-10 lg:mt-12 text-white">
            SCHOOL FACULTY
          </h2>
          <div className='w-[70px] h-1 bg-white'></div>
          <div className='flex justify-end'>
            <div className='w-max flex gap-x-1 items-center cursor-pointer'>
              <span
                className={`text-red flex items-center ${flipped ? 'animate-flip' : ''} hover:animate-flip-hover`}
                onClick={handleFlip}
              >
                <FaCircleRight />
              </span>
              <span className='text-white hover:text-red-500 transition duration-300'>View More</span>
            </div>
          </div>
          <div className="w-full"> {/* Container for slider */}
            <ImageSlider 
              images={faculty} 
              backgroundColor="black" 
              showNames={true} 
              spaceBetween={35} // Adjust spaceBetween for smaller screens if needed
              rounded={true} // Apply rounded corners
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
