import React from "react";
import TitleStuff from './Title_Stuff';
import DaleImg from "../images/Dale.png";
import LinkedIn from '../assets/bi_linkedin.svg'
import AOS from "aos";
import "aos/dist/aos.css";

const TechTalk = () => {
  AOS.init();
  return (
    <div
     data-aos="zoom-out-up"
      data-aos-duration="1000">

    <TitleStuff name="techtalk" className="relative lg:top-[9rem]"/>
      <div className="flex flex-col justify-center items-center gap-2 mb-2">
        <h4 className="text-white text-md lg:text-3xl">9th February, 2024</h4>
        <h4 className="text-white text-md lg:text-3xl">Library Auditorium, MIT Manipal</h4>
      </div>
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 text-white mx-10 lg:mx-20">
        <div className="basis-1/3">
          <div className="flex flex-col items-center justify-center h-full">
            <img
              src={DaleImg}
              alt="dale-vaz"
              className="hover:scale-110 transition"
            />
            <div className="mt-2 text-center">
            <h2 className="text-4xl font-globa" style={{textShadow: '0 10px 15px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff'}}>Dale Vaz</h2>
              <p className="text-l font-bold">
                EX-AMAZON DIRECTOR <br />
                EX-CTO, SWIGGY <br />
                FOUNDER & CEO, AARITYA
              </p>
              <div className="flex justify-center">
              <a href="http://linkedin.com/in/dalevaz" target="_blank" rel="noreferrer">
              <img src={LinkedIn} alt="linkedin" className="scale-75" />
              </a>
              </div>
            </div>
          </div>
        </div>

        <div className="basis-2/3 flex items-center justify-center">
          <p className="text-md lg:text-xl lg:px-20">
            Dale Vaz led the technology, product, AI and analytics for{" "}
            <span className="text-blue-400">Swiggy </span>, scaling it from a
            unicorn to a decacorn in four years.
            <br />
            He was also a
            <span className="text-blue-400">
              {" "}
              technology director at Amazon{" "}
            </span>
            , where he built and scaled businesses for Amazon Retail
            International in Seattle and India. <br />
            An MIT Manipal alumni, Dale was awarded the prestigious Dr. T.M.A.
            Pai Gold Medal for Computer Engineering - Batch of 2000. <br />
            He is a visionary entrepreneur and the
            <span className="text-blue-400"> founder of Aaritya </span>, a
            start-up whose mission is to empower individual Investors by giving
            them pro grade tools without the complexity and clutter.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfn_gjO-a56gO1oiFh7V7g8fJqE3ilco_G4lXt-pBj25Teq6w/viewform?pli=1" target="_blank" rel="noreferrer">
      <button class="text-red font-bold text-2xl hover:before:bg-greenborder-green-500 relative h-[50px] w-40 overflow-hidden border border-green-500 bg-white px-3 text-blue-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-500 hover:text-white hover:shadow-greeen-500 hover:before:left-0 hover:before:w-full rounded-xl"><span class="relative z-10 ">Register</span></button>
      </a>
      </div>
    </div>
  );
};

export default TechTalk;
