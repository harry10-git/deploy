import React from "react";
import cross from "../images/x.svg";

const Modal_7 = ({ toggleModal, index }) => {
  const handleBackdropClick = () => {
    // Close the modal regardless of where the click originated
    toggleModal(index);
  };

  return (
    <div className="relative" onClick={handleBackdropClick}>
      <div className={toggleModal ? "" : "hidden"}>
        <div className="fixed top-0 md:translate-y-[60rem] translate-y-[160rem] md:translate-x-0 -translate-x-[10rem] md:w-1/2 w-full flex items-center justify-center z-[9999]">
          <div className="bg-white w-[70%] h-[80%] rounded-3xl shadow-lg overflow-hidden ">
            <div className="relative justify-between items-center border-b pb-4 mb-4">
              <h3 className="mt-3 mx-3 my-3 text-xl font-semibold text-[#00418C] p-2">
                ENGINEERING EXCELLENCE JOURNEY: F1 CAR MODELLING EVENT
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
            <div className="p-5 overflow-y-auto max-h-[60vh] font-sans">
              <div className="my-0">
                <h4 className="text-black mb-1 text-2xl mx-2 p-1 font-sans">
                  Course Overview
                </h4>
                <p className="text-black text-base mx-3">
                  Embark on a dynamic two-day event that delves into the art of
                  F1 car modelling and the fascinating world of 3D printing.
                </p>
              </div>

              <div className="my-4">
                <h2 className="mt-2 p-2 text-lg mx-1 font-sans">
                  Day 1: F1 Car Modelling
                </h2>
                <p className="text-black text-base mx-3 font-sans">
                  Mastering F1 Car Modelling: Comprehensive exploration of F1
                  car design intricacies. Guided session through the
                  step-by-step design processes. Interactive ANSYS Simulation:
                  Engage in an interactive ANSYS simulation to understand the
                  intricacies of airflow. Gain invaluable insights into the
                  impact of design choices on aerodynamics. Visualize your F1
                  car designs in a realistic simulation environment.
                </p>
              </div>
              <div className="my-4 font-sans">
                <h2 className="mt-2 p-2 text-lg mx-1">
                  Day 2: 3D Printing Workshop
                </h2>
                <p className="text-black text-base mx-3 font-sans">
                  Basics of 3D Printing: Hands-on workshop covering the
                  fundamentals of 3D printing technology. Explore various 3D
                  printing techniques and materials. Witness Your F1 Car Designs
                  Come to Life: Translate your virtual designs into tangible
                  prototypes using 3D printing. Experience the thrill of seeing
                  your F1 car designs materialize layer by layer. Personalized
                  3D Printed F1 Car: As a token of achievement, each participant
                  receives a personalized 3D printed F1 car. A tangible memento
                  commemorating your engineering adventure and newfound skills.
                </p>
              </div>
              <div className="my-4 font-sans">
                <h2 className="mt-2 p-2 text-lg mx-1">Prerequisites</h2>
                <p className="text-black text-base mx-3 font-sans">
                  Details will be shared to the participants.
                </p>
              </div>
              <div className="my-4 text-lg font-sans">
                <h2 className="mt-2 p-2 mx-1">Conducted by: IE-MECH </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal_7;
