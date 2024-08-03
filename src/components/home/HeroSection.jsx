import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade'; // Import effect styles
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import '../../App.css'; // Your custom styles

import image1 from '../../images/hero_section_img_1.webp';
import image2 from '../../images/hero_section_img_2.webp';
import image3 from '../../images/hero_section_img_3.webp';

const images = [image1, image2, image3];

const HeroSection = () => {
  return (
    <section id="home" className="w-full xl:h-[700px] xlg:h-[650px] lg:h-[600px] xmd:h-[560px] smd:h-[510px] md:[480px] sm:h-[520px] xs:h-[480px] h-[420px]">
      <div className="relative w-full h-full p-0 ">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          className="h-full"
          loop={true}
          autoplay={{ delay: 7000 }} // 7000ms = 7 seconds
          effect="fade" // Using the fade effect
          speed={500} // Transition speed
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="relative w-full h-full ">
              <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />

              {/* --------------- text content  div ------------------ */}
              <div className='w-full h-full absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center'>

              
              <div
                className={`smd:w-10/12  xs:w-[88%] w-11/12   flex flex-col justify-center items-${
                  index === 0 ? 'start text-left' : index === 1 ? 'center text-center' : 'end text-right'
                } p-10 bg-transparent  text-white`}
              >
                {index === 0 && (
                  <>
                    <h2 className="text-xxl md:text-9xl font-bold uppercase mb-6 mt-10">Education</h2>
                    <div className="bg-dark-blue w-max text-center uppercase font-semibold text-lg md:text-3xl text-white border-l-4 border-red px-4 py-2 md:px-5 md:py-4 mt-4">
                      Inspire. Learn. Grow.
                    </div>
                    <p className="text-base md:text-lg mb-6">At Little Scholars, we inspire, we learn, we grow.</p>
                    <a
                      href="https://onlineregistration.littlescholars-kashipur.com/OnlineRegistration/"
                      className="bg-red w-max hover:bg-bright-black text-white font-semibold text-base md:text-lg py-1 px-3 md:py-2 md:px-12"
                    >
                      Get Enroll
                    </a>
                  </>
                )}
                {index === 1 && (
  <>
    <h2 className="text-xxl md:text-9xl font-bold uppercase mb-6 mt-10 text-center">Education</h2>
    <div className="w-max bg-dark-blue text-center uppercase font-semibold text-xl md:text-2xl text-white border-0 border-r-6 border-l-6 border-red rounded-full px-4 py-2 md:px-6 md:py-3 mt-4 mx-auto">
      Bright Futures Begin Here
    </div>
    <p className="w-max text-lg md:text-xl mb-4 text-center mx-auto">Little Scholars: Where Bright Futures Begin.</p>
    <a
      href="https://onlineregistration.littlescholars-kashipur.com/OnlineRegistration/"
      className="bg-red hover:bg-bright-black text-white font-semibold text-lg md:text-xl py-2 px-4 md:py-3 md:px-12 mx-auto"
    >
      Get Enroll
    </a>
  </>
)}

{index === 2 && (
  <>
    <h2 className="text-xxl md:text-9xl font-bold uppercase mb-4 mt-20 text-right">Education</h2>
    <div className="w-max bg-dark-blue text-center uppercase font-semibold text-xl md:text-2xl text-white border-0 border-l-6 border-red rounded-full px-4 py-2 md:px-6 md:py-3 mt-4 ml-auto">
      Unlock Potential.
    </div>
    <p className="text-lg md:text-xl mb-4 text-right ml-auto">Little Scholars: Unlocking Every Child's Potential.</p>
    <a
      href="https://onlineregistration.littlescholars-kashipur.com/OnlineRegistration/"
      className="w-max bg-red hover:bg-bright-black text-white font-semibold text-lg md:text-lg py-2 px-4 md:py-3 sm:px-12 ml-auto"
    >
      Get Enroll
    </a>
  </>
)}

              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
