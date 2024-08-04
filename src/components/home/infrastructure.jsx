import React from 'react';
import ImageSlider from '../../components/common/ImageSlider'; // Adjust the path based on your structure
import { infrastructure } from '../../data/slider-data'; // Adjust the path based on your structure
import '../../index.css'; // Your custom styles

const Infrastructure = () => {
  return (
    <section
      id="Infrastructure"
      className="w-full bg-white py-2 px-4 sm:px-6 lg:px-8 border-4 border-red" // Added padding for smaller screens
    >
      <div className="relative w-10/12 mx-auto  py-20">
     <div className="flex flex-col lg:mb-14 sm:mb-12 mb-8 gap-y-2">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-regular text-left mt-8 sm:mt-10 lg:mt-12 text-black">
          INFRASTRUCTURE
        </h2>

        <div className="w-full "> {/* Container for slider */}
          <ImageSlider 
            images={infrastructure} 
            backgroundColor="white" 
            showNames={false} 
            spaceBetween={20} // Adjust spaceBetween for smaller screens if needed
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Infrastructure;
