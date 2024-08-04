import React from 'react';
import ImageSlider from '../../components/common/ImageSlider'; // Adjust the path based on your structure
import { faculty } from '../../data/slider-data'; // Adjust the path based on your structure
import '../../index.css'; // Your custom styles

import { FaCircleRight } from "react-icons/fa6";

const Faculty = () => {
  return (
    <section
      id="faculty"
      className="w-full bg-black py-2 px-4 sm:px-6 lg:px-8 border-4 border-red" // Added padding for smaller screens
    >
      <div className="relative w-10/12 mx-auto  py-20 pb-5">
      <div className="flex flex-col lg:mb-14 sm:mb-12 mb-8 gap-y-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-regular text-left mt-8 sm:mt-10 lg:mt-12 text-white">
           SCHOOL FACULTY

        </h2>
        <div className='w-[70px] h-1 bg-white'></div>
        </div>
        {/* <a
            //href="#more" // Adjust this link as needed
            //className="justyfy-end w-20 sm:right-4 lg:right-6 bg-white text-black px-3 sm:px-4 lg:px-4 py-1 sm:py-2 lg:py-2 flex items-center space-x-1 rounded text-xs sm:text-sm lg:text-base"
          >
            <span>View More</span>
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </a> */}
       <div className='flex justify-end '>
        <div className='w-max flex gap-x-3 items-center'>
        <span className="text-red">
      <FaCircleRight />
    </span>
          <span className='text-white'>View More</span>

        </div>
       </div>
        <div className="relative w-full h-[400px] sm:h-[520px] lg:h-[640px]"> {/* Adjust height for different screen sizes */}
          <ImageSlider 
            images={faculty} 
            backgroundColor="black" 
            showNames={true} 
            showDesignation={true}
            spaceBetween={35} // Adjust spaceBetween for smaller screens
            rounded={true} // Apply rounded corners
          />
          {/* View More Button */}
          
        </div>
      </div>
    </section>
  );
};

export default Faculty;
