import React from 'react';
import ImageSlider from '../common/ImageSlider'; 
import { infrastructure } from '../../data/slider-data'; 
import '../../index.css'; 

const Infrastructure = () => {
  return (
    <section
      id="Infrastructure"
      className="w-full bg-white py-2 px-4 sm:px-6 lg:px-8" 
    >
      <div className="relative w-10/12 mx-auto  py-30">
     <div className="flex flex-col lg:mb-14 sm:mb-12 mb-8 gap-y-2">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-regular text-left mt-4 sm:mt-10 lg:mt-12 text-black">
          INFRASTRUCTURE
        </h2>
        <div className='w-[70px] h-1 bg-black'></div>
        <div className="w-full "> 
          <ImageSlider 
            images={infrastructure} 
            backgroundColor="white" 
            showNames={false} 
            spaceBetween={20} 
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Infrastructure;