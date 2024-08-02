import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import image1 from '../../images/hero_section_img_1.webp';
import image2 from '../../images/hero_section_img_2.webp';
import image3 from '../../images/hero_section_img_3.webp';

const images = [image1, image2, image3];

const HeroSection = () => {
  return (
    <section id="home" className="">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination, Autoplay]}
              className="rounded-lg overflow-hidden h-full"
              loop={true}
              autoplay={{ delay: 10000 }} // 10000ms = 10 seconds
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-10 bg-black bg-opacity-50 text-white">
                    {index === 0 && (
                      <>
                        <h2 className="text-6xl font-bold uppercase mb-4">Education</h2>
                        <p className="text-2xl mb-4">At Little Scholars, we inspire, we learn, we grow.</p>
                        <p className="text-lg mb-4">Inspire. Learn. Grow.</p>
                        <a href="https://onlineregistration.littlescholars-kashipur.com/OnlineRegistration/" className="btn btn-flat btn-theme-colored2 text-white">Get Enroll</a>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <h2 className="text-6xl font-bold uppercase mb-4">Education</h2>
                        <p className="text-2xl mb-4">Little Scholars: Where Bright Futures Begin.</p>
                        <p className="text-lg mb-4">Bright Futures Begin Here.</p>
                        <a href="https://onlineregistration.littlescholars-kashipur.com/OnlineRegistration/" className="btn btn-flat btn-theme-colored2 text-white">Get Enroll</a>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <h2 className="text-6xl font-bold uppercase mb-4">Education</h2>
                        <p className="text-2xl mb-4">Little Scholars: Unlocking Every Child's Potential.</p>
                        <p className="text-lg mb-4">Unlock Potential.</p>
                        <a href="https://onlineregistration.littlescholars-kashipur.com/OnlineRegistration/" className="btn btn-flat btn-theme-colored2 text-white">Get Enroll</a>
                      </>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};




export default HeroSection;