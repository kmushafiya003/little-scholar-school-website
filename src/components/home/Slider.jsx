import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import infrastructureImages from '../../../src/data/infrastructureData';
import facultyImages from '../../../src/data/facultyData';

const ImageSlider = ({ images }) => {
    const [infrastructureData, setInfrastructureData] = useState([]);
  const [facultyData, setFacultyData] = useState([]);

  useEffect(() => {
    setInfrastructureData(infrastructureImages);
    setFacultyData(facultyImages);
  }, []);
  return (
    <section id="home" className="w-full xl:h-[700px] xlg:h-[650px] lg:h-[600px] xmd:h-[560px] smd:h-[510px] md:[480px] sm:h-[520px] xs:h-[480px] h-[420px]">
      <div className="relative w-full h-full p-0 ">
      
    
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={10}
      slidesPerView={1}
      className="h-full"
      loop={true}
      autoplay={{ delay: 7000 }}
      effect="fade"
      speed={500}
      style={{ backgroundColor: 'white' }} // Change background color here
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <img src={image.src} alt={image.alt} className="w-full h-auto" />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
    </section>
  );
};

export default ImageSlider;
