import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "../../styles/swiper.css"; // Ensure this includes any required styles for Tailwind

const DiffImageSlider = ({ images, spaceBetween = 20, rounded = false, slidesPerView = 3, fullScreen = false, closeButtonClass = "" }) => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleImageClick = (image) => {
    if (fullScreen) {
      setFullscreenImage(image);
    }
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <section className="relative flex justify-center items-center w-full h-full">
      <div className="w-full h-full mx-auto swiper-container">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: Math.min(slidesPerView, 2),
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: Math.min(slidesPerView, 2),
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: slidesPerView,
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
              className="relative flex justify-center items-center"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className={`max-w-full max-h-full object-contain ${rounded ? "rounded-md" : ""}`}
                onClick={() => handleImageClick(image)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <button className="swiper-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-opacity">
          <FaAngleLeft className="text-xl" />
        </button>
        <button className="swiper-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-opacity">
          <FaAngleRight className="text-xl" />
        </button>
      </div>

      {/* Fullscreen Image View */}
      {fullscreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            className="max-w-full max-h-full object-contain"
          />
          <button
            onClick={closeFullscreen}
            className={`absolute top-4 right-4 bg-white text-black rounded-full p-2 hover:bg-gray-200 transition ${closeButtonClass}`}
          >
            X
          </button>
        </div>
      )}
    </section>
  );
};

export default DiffImageSlider;
