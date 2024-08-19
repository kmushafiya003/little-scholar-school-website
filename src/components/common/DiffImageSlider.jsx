import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "../../styles/swiper.css"; // Assuming your CSS is in this path

const DiffImageSlider = ({ images, spaceBetween = 20, rounded = false }) => {
  return (
    <section className="flex justify-center items-center w-full h-full">
      <div className="w-full h-full relative mx-auto swiper-container">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          spaceBetween={spaceBetween}
          slidesPerView={1}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
          className="h-full"
          loop={true}
          autoplay={{ delay: 7000 }}
          speed={500}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide relative flex justify-center items-center"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className={`max-w-full max-h-full object-contain ${rounded ? "rounded-md" : ""}`}
              />
              {/* Navigation buttons */}
              <button className="swiper-prev rounded-lg">
                <FaAngleLeft className="text-2xl icon" />
              </button>
              <button className="swiper-next rounded-lg">
                <FaAngleRight className="text-2xl icon" />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DiffImageSlider;
