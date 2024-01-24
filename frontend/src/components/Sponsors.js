import React from "react";
import spons1 from "../images/spons1.svg";
import spons2 from "../images/spons2.svg";
import spons3 from "../images/spons3.svg";
import spons4 from "../images/spons4.svg";
import spons5 from "../images/spons5.svg";
import spons6 from "../images/spons6.svg";
import spons7 from "../images/spons7.svg";
import spons8 from "../images/spons8.svg";
import spons9 from "../images/spons9.svg";
import TitleStuff from "./Title_Stuff";
import STW from "../images/stw.png";

import AOS from "aos";
import "aos/dist/aos.css";
export default function Sponsors() {
  AOS.init();
  return (
    <div id="sponsors" className="relative top-[-15rem]">
      <TitleStuff name="sponsors" className="relative top-[-10rem]" />
      <div
        className="flex justify-center items-center gap-4 my-4"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <a href="https://shoptheworld.in/" target="_blank" rel="noopener noreferrer">
        <img src={STW} className="h-52 border-r-2 hover:scale-105 transition" alt="stw" />
        </a>
        <h1 className="text-white text-5xl font-bold">
          Title <br /> Sponsor
        </h1>
      </div>
      <div
        className="grid items-center justify-center lg:grid-cols-4 grid-cols-2 gap-20 lg:mx-60 p-5"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <img src={spons1} alt="h" className="lg:w-full w-[8rem]" />
        <img src={spons2} alt="h" className="lg:w-full w-[8rem]" />
        <img src={spons3} alt="h" className="lg:w-full w-[8rem]" />
        <img src={spons4} alt="h" className="lg:w-full w-[8rem]" />
        <img src={spons5} alt="h" className="lg:w-full w-[8rem]" />
        <img src={spons6} alt="h" className="lg:w-full w-[8rem]" />
        <img src={spons7} alt="h" className="lg:w-full w-[8rem]" />
        <img src={spons8} alt="h" className="lg:w-full w-[8rem]" />
        <img src={spons9} alt="h" className="lg:w-full w-[8rem" />
      </div>
    </div>
  );
}
