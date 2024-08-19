import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import "../../index.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ImageSlider = ({
  images,
  backgroundColor = "white",
  showNames = false,
  showDesignation = false,
  spaceBetween = 20,
  rounded = false,
}) => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const nextButton = document.querySelector(".owl-next");
    const prevButton = document.querySelector(".owl-prev");

    const handleClick = (event) => {
      event.target.classList.add("clicked");
      setTimeout(() => {
        event.target.classList.remove("clicked");
      }, 500);
    };

    nextButton.addEventListener("click", handleClick);
    prevButton.addEventListener("click", handleClick);

    return () => {
      nextButton.removeEventListener("click", handleClick);
      prevButton.removeEventListener("click", handleClick);
    };
  }, []);

  const handleMouseEnter = () => {
    setHovered(true);
    document.querySelector(".owl-next").classList.add("arrow-animate-next");
    document.querySelector(".owl-prev").classList.add("arrow-animate-prev");
  };

  const handleMouseLeave = () => {
    setHovered(false);
    document.querySelector(".owl-next").classList.remove("arrow-animate-next");
    document.querySelector(".owl-prev").classList.remove("arrow-animate-prev");
  };

  return (
    <section
      id="home"
      className={`w-full flex justify-center items-center ${
        backgroundColor === "transparent" ? "transparent-bg" : ""
      }`}
      style={{ backgroundColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full mx-auto py-20">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".owl-next",
            prevEl: ".owl-prev",
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
          <div className="swiper-wrapper">
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col items-center swiper-slide"
              >
                <img
                  src={image.image}
                  alt={image.name}
                  className={`w-full h-auto max-w-[500px] ${
                    rounded ? "rounded-md" : ""
                  }`}
                />
                {showNames && (
                  <div className="mt-0 text-center">
                    <div className="text-white bg-opacity-50 px-2 py-1 rounded font-bold single-line-text">
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
          </div>
        </Swiper>

        <button className={`owl-next ${hovered ? "arrow-animate-next" : ""}`}>
          <FaAngleRight className="text-3xl icon" />
        </button>
        <button className={`owl-prev ${hovered ? "arrow-animate-prev" : ""}`}>
          <FaAngleLeft className="text-3xl icon" />
        </button>
      </div>
    </section>
  );
};

export default ImageSlider;
