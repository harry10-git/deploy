import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './Partners.css';

import { Autoplay, Navigation } from 'swiper/modules';

import P1 from "../images/finalp1.svg";
import P2 from "../images/finalp2.svg";
import P3 from "../images/finalp3.svg";
import P4 from "../images/finalp4.svg";
import P5 from "../images/finalp5.svg";
import P6 from '../images/finalp6.svg';
import P7 from '../images/finalp7.svg';
import Title_Stuff from './Title_Stuff';

// import Title_Stuff from './Title_Stuff';

const Carousel = () => {
  const handleSlideChange = (swiper) => {
    
    const currentIndex = swiper.activeIndex;

    swiper.slides.forEach((slide) => {
      slide.classList.remove('swiper-slide-active-glow');
      slide.style.transform = 'scale(0.5)';
    });

    if (swiper.slides[currentIndex]) {
      swiper.slides[currentIndex].classList.add('swiper-slide-active-glow');
      swiper.slides[currentIndex].style.transform = 'scale(1)';
    }
    
    swiper.slides.forEach((slide) => {
      slide.style.transform = 'scale(0.5)';
    });

    if (swiper.slides[currentIndex]) {
      swiper.slides[currentIndex].style.transform = 'scale(1)';
    }

    if (swiper.slides[currentIndex - 2]) {
      swiper.slides[currentIndex - 2].style.transform = 'scale(0.3)';
    }
    if (swiper.slides[currentIndex + 2]) {
      swiper.slides[currentIndex + 2].style.transform = 'scale(0.3)';
    }
    if (swiper.slides[currentIndex + 1]) {
      swiper.slides[currentIndex + 1].style.transform = 'scale(0.55)';
    }
    if (swiper.slides[currentIndex - 1]) {
      swiper.slides[currentIndex - 1].style.transform = 'scale(0.55)';
    }
    if (swiper.slides[currentIndex - 3]) {
      swiper.slides[currentIndex - 3].style.transform = 'scale(0.1)';
    }
    if (swiper.slides[currentIndex + 3]) {
      swiper.slides[currentIndex + 3].style.transform = 'scale(0.1)';
    }
  }

  const images = [P1, P2, P3, P4, P5, P6, P7];
  return(
  <div className="w-full overflow-hidden pt-10 lg:h-[30rem]">
  {/* <h1 className=" p-6 h-[109px] text-center [text-shadow:0px_4px_25.1px_#ffffff80] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-3xl md:text-[69.9px] md:tracking-[6.99px] tracking-normal leading-[108.8px] md:leading-8 whitespace-nowrap">
          &lt;/Partners&gt;
        </h1> */}
    <Swiper
      className='mySwiper p-12'
      modules={[Navigation, Autoplay]}
      grabCursor={true}
      centeredSlides={true}
      breakpoints={{
        160: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      onSlideChange={handleSlideChange}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
  >
        <div className="swiper-button-next w-2 h-2y md:w-10 md:h-10 lg:w-12 lg:h-12">
          <svg
            className="w-full h-full text-black fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
          </svg>
        </div>
        <div className="swiper-button-prev w-2 h-2 md:w-10 md:h-10 lg:w-12 lg:h-12">
          <svg
            className="w-full h-full text-black fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
          </svg>
        </div>
    {images.map((image, index) => (
      <SwiperSlide key={index} className="w-full h-fit rounded-[15rem]">
        <img 
          src={image} 
          className={`w-full h-full flex justify-center items-center object-cover rounded-[15rem]`}
          alt={`Slide ${index}`}
        />
      </SwiperSlide>
      
    ))}
  </Swiper>
  </div>
  )
};

function Partners(){
    return (
      <div className="text-white bg-transparent" id='partners'>
        <div className="p-2">
          <Title_Stuff name="partners"/>
        </div>
        <Carousel />
      </div>
    )
}

export default Partners