import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import '../../index.css'; // Your custom styles
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ImageSlider = ({ images, backgroundColor = 'white', showNames = false, showDesignation = false, spaceBetween = 20, rounded = false}) => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const nextButton = document.querySelector('.owl-next');
    const prevButton = document.querySelector('.owl-prev');

    const handleClick = (event) => {
      event.target.classList.add('clicked');
      setTimeout(() => {
        event.target.classList.remove('clicked');
      }, 500); // Duration should match the CSS animation duration
    };

    nextButton.addEventListener('click', handleClick);
    prevButton.addEventListener('click', handleClick);

    return () => {
      nextButton.removeEventListener('click', handleClick);
      prevButton.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <section
      id="home"
      className={`w-full flex justify-center items-center ${backgroundColor === 'transparent' ? 'transparent-bg' : ''}`}
      style={{ backgroundColor }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full mx-auto py-20">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: '.owl-next',
            prevEl: '.owl-prev',
          }}
          pagination={{
            clickable: true,
            bulletElement: '.swiper-pagination',
            renderBullet: function (_index, className) {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          spaceBetween={spaceBetween}
          slidesPerView={5}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="h-full"
          loop={true}
          autoplay={{ delay: 7000 }}
          speed={500}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <img 
                src={image.image} 
                alt={image.name} 
                className={`w-full h-auto max-w-[500px] ${rounded ? 'rounded-md' : ''}`}
              />
              {showNames && (
                <div className="mt-2 text-center">
                  <div className="text-white bg-opacity-50 px-2 py-1 rounded font-bold">
                    {image.name}
                  </div>
                  {showDesignation && image.designation && (
                    <div className="text-white bg-opacity-50 px-1 py-1 mt-1 rounded font-bold">
                      {image.designation}
                    </div>
                  )}
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Navigation Buttons */}
        <button className={`owl-next ${hovered ? 'arrow-animate' : ''}`}><FaAngleRight className='text-2xl'/></button>
        <button className={`owl-prev ${hovered ? 'arrow-animate' : ''}`}><FaAngleLeft className='text-2xl'/></button>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default ImageSlider;
