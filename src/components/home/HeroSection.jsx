import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade'; 
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'; 
import '../../index.css'; 


import image1 from '../../images/hero_section_img_1.webp';
import image2 from '../../images/hero_section_img_2.webp';
import image3 from '../../images/hero_section_img_3.webp';

const images = [image1, image2, image3];

const HeroSection = () => {
  return (
    <section id="home" className="w-full xl:h-[700px] xlg:h-[650px] lg:h-[600px] xmd:h-[560px] smd:h-[510px] md:h-[480px] sm:h-[520px] xs:h-[480px] h-[420px] z-20">
      <div className="relative w-full h-full p-0">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          className="h-full"
          loop={true}
          autoplay={{ delay: 7000 }} 
          effect="fade" 
          speed={500} 
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="relative z-10 w-full h-full">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="object-cover w-full h-full" 
              />
              {/* --------------- text content div ------------------ */}
              <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-full">
                <div
                  className={`w-11/12 xs:w-[88%] smd:w-10/12 flex flex-col justify-center ${
                    index === 0 ? 'sm:items-center md:items-start text-left' : index === 1 ? 'items-center text-center' : 'sm:items-center md:items-end text-right'
                  } p-10 bg-transparent text-white`}
                >
                  {index === 0 && (
                    <>
                      <h2 className="mt-10 mb-6 text-xl font-bold uppercase dxs:text-4xl sm:text-7xl md:text-7xl">Education</h2>
                      <div className="px-4 py-2 mt-4 text-lg font-semibold text-center text-white uppercase border-l-4 bg-dark-blue w-max sm:text-2xl md:text-3xl border-red md:px-5 md:py-4">
                        Inspire. Learn. Grow.
                      </div>
                      <p className="mb-4 mt-6 text-sm sm:text-base md:text-lg">At Little Scholars, we inspire, we learn, we grow.</p>
                      <Link
                        to="/OnlineRegistration"
                        className="px-3 py-1 text-sm font-semibold text-white sm:text-base bg-red w-max hover:bg-red md:text-lg md:py-2 sm:px-12"
                      >
                        Get Enroll
                      </Link>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <h2 className="mt-10 mb-6 text-xl font-bold text-center uppercase dxs:text-4xl sm:text-7xl md:text-7xl">Education</h2>
                      <div className="px-4 py-2 mx-auto mt-4 text-lg font-semibold text-center text-white uppercase border-l-4 border-r-4 bg-dark-blue  rounded-full w-max sm:text-2xl md:text-2xl border-r-6 border-l-6 border-red md:px-6 md:py-3">
                        Bright Futures Begin Here
                      </div>
                      <p className="mx-auto mb-4 mt-6 text-sm text-center sm:text-base w-max md:text-xl">Little Scholars: Where Bright Futures Begin.</p>
                      <Link
                        to="/OnlineRegistration"
                        className="px-4 py-2 mx-auto text-sm font-semibold text-white sm:text-base bg-red hover:bg-red md:text-lg md:py-3 sm:px-12"
                      >
                        Get Enroll
                      </Link>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <h2 className="mt-20 mb-4 text-xl font-bold text-right uppercase dxs:text-4xl sm:text-7xl md:text-7xl">Education</h2>
                      <div className="px-4 py-2 mt-4 ml-auto text-lg font-semibold text-center text-white uppercase border-r-4 bg-dark-blue w-max sm:text-2xl md:text-2xl border-r-6 border-red md:px-6 md:py-3">
                        Unlock Potential.
                      </div>
                      <p className="mb-4 mt-6 ml-auto text-sm text-right sm:text-base md:text-xl">Little Scholars: Unlocking Every Child's Potential.</p>
                      <Link
                        to="/OnlineRegistration"
                        className="px-4 py-2 ml-auto text-sm font-semibold text-white sm:text-base w-max bg-red hover:bg-red md:text-lg md:py-3 sm:px-12"
                      >
                        Get Enroll
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
       
        <div className="swiper-next  owl-next">
          <FaAngleRight className="text-white  className='text-3xl icon hover:text-gray-400" />
        </div>
        <div className="swiper-prev  owl-prev">
          <FaAngleLeft className="text-white className='text-3xl icon  hover:text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
 