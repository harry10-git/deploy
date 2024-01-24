import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";
import W_iste2 from "../../images/AppDev.svg";
import ctf from "../../images/CTF (1).svg";
import W_gdsc from "../../images/ChatBot.svg";
import W_mist from "../../images/Cybersec.svg";
import hackathon from "../../images/Hacathon.svg";
import W_ieee from "../../images/W-ieee.svg";
import W_iemech from "../../images/W-iemech.svg";
import W_iste1 from "../../images/W-iste1.svg";
import W_acm from "../../images/W_acm.svg";
import W_astronomy from "../../images/W_astronomy.svg";
import W_dronaid from "../../images/W_dronaid.svg";
import TitleStuff from "../Title_Stuff";
import "./styles.css";

import AOS from "aos";
import "aos/dist/aos.css";

const TimelineMain = () => {
  AOS.init();
  //desktop
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [scrollPercentageMobile, setScrollPercentageMobile] = useState(0);

  const [timelineHeight, setTimelineHeight] = useState(0);

  const [windowSize, setWindowSize] = useState([
    window.innerWidth, //0
    window.innerHeight, //1
  ]);

  useEffect(() => {
    const maxTimelineHeight =
      (document.querySelectorAll(".timeline-container").length - 1) * 100;
    setTimelineHeight(maxTimelineHeight);
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const firstCard = document.querySelector(".timeline-card:first-child");
      const lastCard = document.querySelector(".timeline-card:last-child");

      const dashedLine = document.querySelector(".vertical-dashed-line");
      const solidLine = document.querySelector(".vertical-solid-line");

      if (!firstCard || !lastCard || !dashedLine || !solidLine) return;

      const firstCardRect = firstCard.getBoundingClientRect();
      const lastCardRect = lastCard.getBoundingClientRect();

      const startScrollPosition = firstCardRect.top + window.scrollY;
      const endScrollPosition = lastCardRect.bottom + window.scrollY;

      const maxTimelineHeight = endScrollPosition - startScrollPosition;
      const newScrollPercentage = Math.max(
        0,
        Math.min(
          100,
          ((window.scrollY - startScrollPosition) / maxTimelineHeight) * 100
        )
      );

      setScrollPercentage(newScrollPercentage);

      const firstCardTop = firstCardRect.top + window.scrollY;
      const lastCardBottom = lastCardRect.bottom + window.scrollY;
      const dashedLineHeight = lastCardBottom - firstCardTop;
      dashedLine.style.height = `${dashedLineHeight}px`;
      solidLine.style.zIndex = newScrollPercentage > 0 ? 2 : 0;

      const adjustedPercentage = Math.min(240, newScrollPercentage * 2.5);
      document.querySelector(".vertical-solid-line").style.height =
        adjustedPercentage + "rem";

      // Handle mobile timeline
      const firstCardMobile = document.querySelector(
        ".timeline-card-mobile:first-child"
      );
      const lastCardMobile = document.querySelector(
        ".timeline-card-mobile:last-child"
      );
      const dashedLineMobile = document.querySelector(
        ".vertical-dashed-line-mobile"
      );
      const solidLineMobile = document.querySelector(
        ".vertical-solid-line-mobile"
      );

      if (
        !firstCardMobile ||
        !lastCardMobile ||
        !dashedLineMobile ||
        !solidLineMobile
      )
        return;

      const firstCardRectMobile = firstCardMobile.getBoundingClientRect();
      const lastCardRectMobile = lastCardMobile.getBoundingClientRect();

      const startScrollPositionMobile =
        firstCardRectMobile.top + window.scrollY;
      const endScrollPositionMobile =
        lastCardRectMobile.bottom + window.scrollY;

      const maxTimelineHeightMobile =
        endScrollPositionMobile - startScrollPositionMobile;
      const newScrollPercentageMobile = Math.max(
        0,
        Math.min(
          155.5,
          ((window.scrollY - startScrollPositionMobile) /
            maxTimelineHeightMobile) *
            200
        )
      );

      setScrollPercentageMobile(newScrollPercentageMobile);

      const firstCardTopMobile = firstCardRectMobile.top + window.scrollY;
      const lastCardBottomMobile = lastCardRectMobile.bottom + window.scrollY;
      const dashedLineHeightMobile = lastCardBottomMobile - firstCardTopMobile;
      dashedLineMobile.style.height = `${dashedLineHeightMobile}px`;
      solidLineMobile.style.zIndex = newScrollPercentageMobile > 0 ? 2 : 0;

      const adjustedPercentageMobile = Math.min(
        380,
        newScrollPercentageMobile * 2.39
      );

      document.querySelector(".vertical-solid-line-mobile").style.height =
        adjustedPercentageMobile + "rem";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const titles = [
    "CLASSIFIED",
    "AEROCIRCUITS", //change
    "HACKLINUX",
    "BEYOND RATINGS",
    "AURORA CTF",
    "UNLOCKING CONVERSATIONS",
    "FLUTTERCRAFT",
    "F1 CAR MODELLING",
    "SCRAPESPHERE",
    "STARGAZING",

    "DEVSPRINT HACKATHON",
  ];

  const times = [
    "3rd February, 2024: 05:30PM - 08:00PM \n 4th February, 2024 : 10:00AM - 12:30PM & 2:00PM - 4:30PM",
    "3rd February, 2024: 05:30PM - 08:00PM \n 4th February, 2024 : 10:00AM - 12:30PM & 2:00PM - 4:30PM",
    "5th February, 2024: 05:30PM - 08:00PM \n 6th February, 2024 : 05:30PM - 08:00PM ",
    "5th February, 2024: 05:30PM - 08:00PM \n 6th February, 2024 : 05:30PM - 08:00PM ",
    "7th February, 2024: 12:00AM - 11:59PM",
    "7th February, 2024: 05:30PM - 08:00PM \n 8th February, 2024 : 05:30PM - 08:00PM ",
    "7th February, 2024: 05:30PM - 08:00PM \n 8th February, 2024 : 05:30PM - 08:00PM ",
    "10th February, 2024: 05:30PM - 08:00PM \n 12th February, 2024 : 05:30PM - 08:00PM ",
    "10th February, 2024: 05:30PM - 08:00PM \n ",
    "1st February, 2024: 7:30PM Onwards \n 4th February, 2024 7:30PM Onwards",

    "11th February, 2024: 08:00AM - 10:00PM",
  ];

  const images = [
    W_acm,
    W_dronaid,
    W_mist,
    W_iste1,
    ctf,
    W_gdsc,
    W_iste2,
    W_iemech,
    W_ieee,
    W_astronomy,

    hackathon,
  ];
  const des = [
    "A real world classification project using Machine Learning and Neural Networks",
    "A two-day Aircraft Modeling and Printed Circuit Board Design Workshop",
    "Unleashing the power of Capture The Flag",
    "Making intelligent Recommendatings using Machine Learning",
    "As a digital explorer navigate diverse challenges,  unveil hidden paths and unlock treasury secrets to enhance your cyber security skills in an immersive a Odyssey.",
    "A dive into Machine Learning and Natural Language Processing with ChatBots",
    "Exploring App Development",
    "Computational Fluid Dynamics Simulation of a Formula Car and 3D printing",
    "A Web Scraping workshop using Selenium",
    "Embrace the beauty of star and moon gazing under the night sky",
    "The Ultimate Hackathon",
  ];
  const host = [
    "Conducted By: ACM Manipal",
    "Conducted By: Project Dronaid",
    "Conducted By: MIST Manipal",
    "Conducted By: ISTE Manipal",
    "Conducted By: MIST Manipal",
    "Conducted By: GDSC Manipal",
    "Conducted By: ISTE Manipal",
    "Conducted By: IE-MECH Manipal",
    "Conducted By: IEEE Manipal",
    "Conducted By: The Astronomy Club Manipal",
    "Conducted By: ISTE Manipal",
  ];
  return (
    <div className="" id="timeline">
      {/* desktop timeline  */}
      <div className={windowSize[0] > 760 ? "bg-transparent" : "hidden"}>
        <TitleStuff name="timeline" className="relative top-[10rem]" />
        <div className="timeline-container relative top-[-24rem]">
          <div
            className="my-timeline"
            style={{ position: "relative", margin: "280px auto" }}
          >
            {/* Vertical Dashed Line */}
            <div
              className="vertical-dashed-line absolute left-0 top-0 bg-transparent w-1 h-full"
              style={{
                marginLeft: "50%",
                marginTop: "200px", // Set the left margin for the vertical line
                backgroundImage: `repeating-linear-gradient(transparent, transparent 10px, white 10px, white 20px)`, // Vertical dashed line background
              }}
            ></div>
            <div
              className="vertical-solid-line absolute left-[-0.1rem] top-0 bg-transparent m-auto w-2 glow"
              style={{
                marginLeft: "50%",
                marginTop: "200px",
                background: "white",
                transition: "top 1.5s ease",
              }}
            ></div>
            {/* Timeline Cards */}
            <div
              className="timeline-card-container lg:mx-96 mx-7 grid lg:grid-cols-3 grid-cols-2"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                justifyItems: "center", // Centering the cards
              }}
            >
              {titles.map((title, index) => (
                <div
                  key={index}
                  className="timeline-card py-5"
                  style={{
                    marginTop: index % 2 === 0 ? "250px" : "10px",
                    zIndex: 2,
                    gridColumn: index % 2 === 0 ? "3" : "2",
                    marginLeft: index % 2 === 0 ? "-1600px" : "500px",
                    gridColumnGap: index % 2 === 0 ? "700px" : "500px",
                    width: "fit-content",
                  }}
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                >
                  <div data-aos="flip-right">
                    <Card
                      className="py-4 lg:w-[20rem] w-[14rem] custom-timeline-card bg-black text-white hover:scale-105"
                      id="shadowcard"
                    >
                      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        {times[index].split("\n").map((line, lineIndex) => (
                          <p
                            key={lineIndex}
                            className="text-small uppercase font-bold p-1 font-sans"
                          >
                            {line}
                          </p>
                        ))}
                        <h7 className="font-black text-2xl p-1 font-sans heading">
                          {title}
                        </h7>
                        <p className="text-tiny uppercase font-medium p-1 font-sans">
                          {des[index]}
                        </p>
                      </CardHeader>
                      <CardBody className="overflow-visible py-2">
                        <Image
                          alt="Card background"
                          className="object-cover rounded-xl ml-3 mt-3"
                          src={images[index]}
                          width={270}
                        />
                        <p className="text-tiny uppercase font-medium  pl-2.5  pt-4 font-sans">
                          {host[index]}
                        </p>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* mobile timeline  */}
      <div
        id="timeline"
        className={windowSize[0] <= 760 ? "bg-transparent" : "hidden"}
      >
        <TitleStuff name="timeline" />
        <div className="timeline-container relative top-[-15rem]">
          <div
            className="my-timeline"
            style={{ position: "relative", margin: "280px auto" }}
          >
            {/* Vertical Dashed Line */}
            <div
              className="vertical-dashed-line-mobile absolute left-0 top-1 bg-transparent w-1 h-full"
              style={{
                marginLeft: "40px", // Adjusted the left margin for the vertical line
                marginTop: "60px", // Set the top margin for the vertical line
                backgroundImage: `repeating-linear-gradient(transparent, transparent 10px, white 10px, white 20px)`, // Vertical dashed line background
              }}
            ></div>
            <div
              className="vertical-solid-line-mobile absolute left-0 top-0 bg-transparent m-auto w-1 glow "
              style={{
                marginLeft: "40px", // Adjusted the left margin for the vertical line
                marginTop: "80px",
                background: "white",
                transition: "top 1.5s ease",
              }}
            ></div>
            {/* Timeline Cards */}
            <div
              className="timeline-card-container"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {titles.map((title, index) => (
                <div
                  key={index}
                  className="timeline-card-mobile py-5"
                  style={{
                    margin: "10px",
                    zIndex: 2,
                    width: "fit-content", // Adjust the width as needed
                  }}
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                >
                  <div>
                    <Card
                      className="py-4 lg:w-[20rem] w-[14rem] custom-timeline-card bg-black text-white hover:scale-105"
                      id="shadowcard"
                    >
                      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        {times[index].split("\n").map((line, lineIndex) => (
                          <p
                            key={lineIndex}
                            className="text-small uppercase font-bold p-1 font-sans"
                          >
                            {line}
                          </p>
                        ))}
                        <h7 className="font-black text-large p-1 font-sans heading">
                          {title}
                        </h7>
                        <p className="text-tiny uppercase font-medium p-1 font-sans">
                          {des[index]}
                        </p>
                      </CardHeader>
                      <CardBody className="overflow-visible py-2">
                        <Image
                          alt="Card background"
                          className="object-cover rounded-xl ml-0.5 mt-1"
                          src={images[index]}
                          width={270}
                        />
                        <p className="text-tiny uppercase font-medium pt-4 font-sans">
                          {host[index]}
                        </p>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineMain;
