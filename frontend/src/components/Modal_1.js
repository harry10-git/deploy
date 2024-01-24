import React from "react";
import cross from "../images/x.svg";

const Modal_1 = ({ toggleModal, index }) => {
  const handleBackdropClick = () => {
    // Close the modal regardless of where the click originated
    toggleModal(index);
  };

  return (
    <div className="relative" onClick={handleBackdropClick}>
      <div className={toggleModal ? "" : "hidden"}>
        <div className="fixed md:w-1/2 w-full md:translate-x-0 -translate-x-[10rem] top-0 translate-y-[10rem] flex items-center justify-center z-[9999]">
          <div className="bg-white w-[70%] h-[80%] rounded-3xl shadow-lg overflow-hidden ">
            <div className="relative justify-between items-center border-b pb-4 mb-4">
              <h3 className="mt-3 mx-3 my-3 text-xl font-semibold text-[#00418C] p-2">
                INTRODUCTION TO MACHINE LEARNING AND NEURAL NETWORKS
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
                <p className="text-black  text-base mx-3 font-sans">
                  Embark on a transformative learning experience designed to
                  equip you with essential skills in data analytics and machine
                  learning. This intensive three-day course combines theoretical
                  foundations with hands-on practical applications, providing a
                  comprehensive understanding of key concepts. Whether you're a
                  beginner or seeking to enhance your knowledge, join us for a
                  dynamic journey that bridges theory and real-world
                  application.
                </p>
              </div>

              <div className="my-4">
                <h2 className="mt-2 p-2 text-lg mx-1 font-sans">
                  Day 1: Python and Essential Libraries
                </h2>
                <p className="text-black text-base mx-3">
                  Day one focuses on strengthening your Python skills while
                  introducing indispensable libraries, Numpy and Pandas, laying
                  the groundwork for effective data analysis.
                </p>
              </div>
              <div className="my-4">
                <h2 className="mt-2 p-2 text-lg mx-1 font-sans">
                  Day 2: Machine Learning Foundations
                </h2>
                <p className="text-black text-base mx-3">
                  Day two delves into the mathematical intricacies of machine
                  learning, unraveling the logic behind algorithms such as
                  Linear Regression, Logistic Regression, and Basic Neural
                  Networks.
                </p>
              </div>
              <div className="my-4">
                <h2 className="mt-2 p-2 text-lg mx-1 font-sans">
                  Day 3: Project Based Learning
                </h2>
                <p className="text-black text-base mx-3">
                  Day three is dedicated to practical application, guiding you
                  through a hands-on project that reinforces learned concepts
                  and builds your confidence in data analysis and machine
                  learning model development
                </p>
              </div>
              <div className="my-4">
                <h2 className="mt-2 p-2 text-lg mx-1 font-sans">
                  Prerequisites
                </h2>
                <p className="text-black text-base mx-3">
                  IDE and python installed in systems.
                  Details will be shared to the participants.
                </p>
              </div>
              <div className="my-4 text-lg mx-1 font-sans">
                <h2 className="mt-2 p-2">Conducted by: ACM Manipal</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal_1;
