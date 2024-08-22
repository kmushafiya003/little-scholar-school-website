import React, { useEffect, useState } from 'react';
import { infrastructure } from '../../data/common/slider-data';
import Button from '../common/Buttton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay ,} from 'swiper/modules';
import '../../index.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Infragallery() {
  const [activeAlbum, setActiveAlbum] = useState('School Building');
  const [hovered, setHovered] = useState(false);
  const [animateBorder, setAnimateBorder] = useState(false);

  useEffect(() => {
    const nextButton = document.querySelector('.owl-next');
    const prevButton = document.querySelector('.owl-prev');

    const handleClick = (event) => {
      event.target.classList.add('clicked');
      setTimeout(() => {
        event.target.classList.remove('clicked');
      }, 300);
    };

    nextButton.addEventListener('click', handleClick);
    prevButton.addEventListener('click', handleClick);

    return () => {
      nextButton.removeEventListener('click', handleClick);
      prevButton.removeEventListener('click', handleClick);
    };
  }, []);

  const handleMouseEnter = () => {
    setHovered(true);
    setAnimateBorder(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleAlbumClick = (albumName) => {
    setActiveAlbum(albumName);
    setAnimateBorder(false);
    setTimeout(() => setAnimateBorder(true), 10);
  };

  // Remove duplicates by using the picture property as a unique key
  const renderSlides = (images) => {
    const uniqueImages = images.filter(
      (images, index, self) =>
        index === self.findIndex((img) => img.picture === images.picture)
    );
    return uniqueImages.map((images) => (
      <SwiperSlide key={images.id} className="flex flex-col items-center animate-dragFromTop">
        <img src={images.picture} alt={`Slide ${images.id}`} className="w-full h-auto" />
        <div className="mt-2 text-lg font-medium text-center">{images.name}</div>
      </SwiperSlide>
    ));
  };

  const getActiveAlbumImages = () => {
    const album = infrastructure.find(item => item.name === activeAlbum);
    return album ? album.images : [];
  };

  return (
    <section className='relative w-full py-24 bg-off-white-bg'>
      <div className='w-10/12 mx-auto'>
        <div className='flex-col xxl:pr-1 xmd:flex-col xl:flex-row rounded-3xl xmd:items-center xl:items-start dxs:flex-col dxs:items-center dxs:pl-0 dxs:pr-0'>
          <div className='flex flex-col mb-20 gap-y-4 text-resp-black'>
            <h1 className='uppercase text-[32px] font-semibold'>
              INFRASTRUCTURE
            </h1>
            <div className='w-[70px] h-1 bg-black'></div>
          </div>
          <div className='flex flex-wrap gap-0 mt-5'>
            {infrastructure.map((album) => (
              <Button
                key={album.id}
                label={album.name}
                onClick={() => handleAlbumClick(album.name)}
                isActive={activeAlbum === album.name}
                className='items-center justify-center transition duration-300 w-36'
              />
            ))}
          </div>
          <div className='relative w-full py-4'>
            <div className={`relative border-2 border-gray-100 p-4 ${animateBorder ? 'swiper-border-drag-top' : ''}`}>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                  nextEl: '.owl-next',
                  prevEl: '.owl-prev',
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={30}
                slidesPerView={4}
                loop={true}
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
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                }}
                loop={true}
                speed={500}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {renderSlides(getActiveAlbumImages())}
              </Swiper>
              <button
                className={`owl-next absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-black rounded-full ${hovered ? 'arrow-animate-next' : ''} shadow-lg z-10`}
                type="button"
                aria-label="Next Slide"
              >
                <FaAngleRight className='text-2xl text-white' />
              </button>
              <button
                className={`owl-prev absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-black rounded-full ${hovered ? 'arrow-animate-prev' : ''} shadow-lg z-10`}
                type="button"
                aria-label="Previous Slide"
              >
                <FaAngleLeft className='text-2xl text-white' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Infragallery;
