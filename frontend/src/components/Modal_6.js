import React from "react";
import cross from "../images/x.svg";

const Modal_6 = ({ toggleModal, index }) => {
  const handleBackdropClick = () => {
    // Close the modal regardless of where the click originated
    toggleModal(index);
  };

  return (
    <div className="relative" onClick={handleBackdropClick}>
      <div className={toggleModal ? "" : "hidden"}>
        <div className="fixed top-0 md:w-1/2 w-full md:-translate-x-[40rem] -translate-x-[12rem] md:translate-y-[35rem] translate-y-[130rem] flex items-center justify-center z-[9999]">
          <div className="bg-white w-[70%] h-[80%] rounded-3xl shadow-lg overflow-hidden">
            <div className="relative justify-between items-center border-b pb-4 mb-4">
              <h3 className="mt-3 mx-3 my-3 text-xl font-semibold text-[#00418C] p-2">
                APPCRAFT APP DEV
              </h3>
              <button
                onClick={() => toggleModal(index)}
                style={{
                  position: "absolute",
                  top: "0.5rem",
                  right: "1.5rem",
                  cursor: "pointer",
                }}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <img
                  src={cross}
                  style={{
                    width: "25px",
                  }}
                  alt="Close"
                />
                {/* close */}
              </button>
            </div>
            <div className="p-5 overflow-y-auto max-h-[60vh]">
              <div className="my-0">
                <h4 className="text-black mb-1 text-2xl mx-2 p-1 font-sans">
                  Course Overview
                </h4>
                <p className="text-black mx-3 text-base font-sans">
                  Delve into mobile app development in our professional
                  workshop. Learn Flutter, Dart basics, and widget
                  implementation. Create a sleek BMI Calculator app and explore
                  APIs, device location permissions, crafting a "Daily
                  Essentials" app with real-time weather and a compass display.
                  Four days prior, participants receive resources for smooth
                  Flutter installation. Elevate your app development skills in
                  this hands-on, two-day workshop.
                </p>
              </div>

              <div className="my-4">
                <h2 className="mt-2 p-2 text-lg mx-1 font-sans">
                  Day 1: Introduction to Flutter and Dart
                </h2>
                <p className="text-black text-base mx-3 font-sans">
                  Unveil the fundamentals of Flutter, Dart programming language,
                  and the concept of widgets. Hands-on session: Develop a sleek
                  BMI Calculator app with an engaging user interface.
                </p>
              </div>
              <div className="my-4">
                <h2 className="mt-2 p-2 text-lg mx-1 font-sans">
                  Day 2: Harnessing APIs and Device Location Permissions
                </h2>
                <p className="text-black text-base mx-3 font-sans">
                  Dive into API integration and the nuances of device location
                  permissions. Practical application: Construct a multi-page
                  "Daily Essentials" app. Page 1: Showcase real-time weather
                  using the OpenWeather API with dynamic weather-related
                  animations. Page 2: Implement a compass display. Both pages
                  necessitate location permissions from the device.
                </p>
              </div>
              <div className="my-4">
                <h2 className="mt-2 p-2 text-lg mx-1 font-sans">
                  Prerequisites
                </h2>
                <p className="text-black text-base mx-3 font-sans">
                  Details will be shared to the participants.
                </p>
              </div>
              <div className="my-4 text-lg mx-1 font-sans">
                <h2 className="mt-2 p-2">Conducted by: ISTE Manipal</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal_6;
