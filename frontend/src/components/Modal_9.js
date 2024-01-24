import React from "react";
import cross from "../images/x.svg";

const Modal_9 = ({ toggleModal, index }) => {
  const handleBackdropClick = () => {
    // Close the modal regardless of where the click originated
    toggleModal(index);
  };

  return (
    <div className="relative" onClick={handleBackdropClick}>
      <div className={toggleModal ? "" : "hidden"}>
        <div className="fixed top-0 md:w-1/2 w-full md:-translate-x-[40rem] -translate-x-[10rem] md:translate-y-[60rem] translate-y-[200rem] flex items-center justify-center z-[9999]">
          <div className="bg-white w-[70%] h-[80%] rounded-3xl shadow-lg overflow-hidden">
            <div className="relative justify-between items-center border-b pb-4 mb-4">
              <h3 className="mt-3 mx-3 my-3 text-xl font-semibold text-[#00418C] p-2 font-sans">
                INTRODUCTION TO ASTRONOMY
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
              <div className="my-4">
                <h4 className="text-black p-2 mx-1 text-xl font-sans">
                  Overview
                </h4>
                <p className="text-black mx-3 text-base font-sans">
                  Embark on an enchanting cosmic journey with our Moon Gazing
                  and Star Gazing Astronomy Workshop! Discover lunar wonders,
                  decode celestial constellations, and explore the night sky
                  using cutting-edge telescopes. Our passionate astronomers will
                  guide you through this captivating experience, blending
                  enthusiasm with expertise. Limited spaces available, so secure
                  your spot now for an unforgettable celestial adventure.
                </p>
              </div>

              <div className="my-4 text-lg">
                <h2 className="mt-2 mx-1 p-2 font-sans">
                  Conducted by: The Astronomy Club Manipal
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal_9;
