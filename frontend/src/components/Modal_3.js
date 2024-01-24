import React from "react";
import cross from "../images/x.svg";

const Modal_3 = ({ toggleModal, index }) => {
  const handleBackdropClick = () => {
    // Close the modal regardless of where the click originated
    toggleModal(index);
  };

  return (
    <div className="relative" onClick={handleBackdropClick}>
      <div className={toggleModal ? "" : "hidden"}>
        <div className="fixed top-0 md:translate-y-[10rem] translate-y-[50rem] md:w-1/2 w-full md:-translate-x-[40rem] -translate-x-[8rem] items-center justify-center z-[9999]">
          <div className="bg-white w-[70%] h-[80%] rounded-3xl shadow-lg overflow-hidden">
            <div className="relative justify-between items-center border-b pb-4 mb-4">
              <h3 className="mt-3 mx-3 my-3 text-xl font-semibold text-[#00418C] p-2">
                INTRODUCTION TO CYBERSECURITY
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
                <p className="text-black text-base mx-3 font-sans">
                  Wanna learn about Cybersecurity? This is the place to be. Come
                  join us in our 2-day workshop to introduce you to the world of
                  cybersecurity by indulging in games and being technical about
                  it. Learn about Linux, cryptography, forensics, and more.
                </p>
              </div>

              <div className="my-4">
                <h2 className="mt-2 p-2 text-lg mx-1 font-sans">
                  Day 1: Basics of Linux and Introduction of basic commands and
                  Bandit
                </h2>
                <p className="text-black text-base mx-3 font-sans">
                  On the inaugural day of our workshop, participants will
                  immerse themselves in the essential basics of Linux, gaining
                  proficiency in fundamental commands. This hands-on session
                  will equip them with practical skills, complemented by an
                  introduction to Bandit games, providing an engaging entry
                  point to the world of cybersecurity challenges.
                </p>
              </div>
              <div className="my-4">
                <h2 className="mt-2 p-2 text-lg mx-1 font-sans">
                  Day 2: Cryptography, Forensics, Capture the flag
                </h2>
                <p className="text-black text-base mx-3 font-sans">
                  Day two marks an exploration into advanced cybersecurity
                  domains, focusing on Cryptography and Forensics. Participants
                  will be introduced to the captivating realm of Capture the
                  Flag (CTF), where they'll gain insights into general skills
                  crucial for CTF challenges. The day's agenda includes
                  interactive sessions where participants will solve CTF
                  questions, applying their acquired skills in Cryptography and
                  Forensics, thus solidifying their practical understanding of
                  these domains.
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
                <h2 className="mt-2 p-2">Conducted by: MIST </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal_3;
