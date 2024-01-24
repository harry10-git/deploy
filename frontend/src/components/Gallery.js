import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './Gallery.css';

import i3 from "../images/Frame 59 1.png";
import i4 from "../images/Frame 61 1.png";
import i5 from "../images/Frame 62 1.png";
import i1 from "../images/Frame 63 1.png";
import i2 from "../images/Frame 64 1.png";

import { Autoplay, Navigation } from 'swiper/modules';
import TitleStuff from './Title_Stuff';

function Gallery() {
  const images = [i1, i2, i3, i4, i5]
    return(
      <div className='bg-transparent'>
      <TitleStuff name="gallery" className="relative lg:top-[9rem]"/>
      <div className="w-full overflow-hidden relative lg:top-[-10rem]">
          <Swiper
            className='mySwiper'
            modules={[Navigation, Autoplay]}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.5}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="w-full h-auto">
              <img 
                src={image} 
                className={`w-full h-auto m-auto rounded-3xl object-cover lg:p-32 p-4`}
                alt={`Slide ${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
    )
}

export default Gallery