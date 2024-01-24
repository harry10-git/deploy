import React from "react";
import cross from "../images/x.svg";

const Modal_2 = ({ toggleModal, index }) => {
  const handleBackdropClick = () => {
    // Close the modal regardless of where the click originated
    toggleModal(index);
  };

  return (
    <div className="relative" onClick={handleBackdropClick}>
      <div className={toggleModal ? "" : "hidden"}>
        <div className="fixed top-0 md:w-1/2 w-full -translate-x-[10rem] md:-translate-x-[20rem] md:translate-y-[10rem] translate-y-[25rem] flex items-center justify-center z-[9999]">
          <div className="bg-white w-[70%] h-[80%] rounded-3xl shadow-lg overflow-hidden ">
            <div className="relative justify-between items-center border-b pb-4 mb-4">
              <h3 className="mt-3 mx-3 my-3 text-xl font-semibold text-[#00418C] p-2">
                ELECTRONICS AND DRONE DESIGN WORKSHOP
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
                  Join Project DronAid for a dynamic two-day workshop on PCB
                  design using KiCad. Day one covers PCB basics, software
                  tutorials, and design guidelines, while day two includes a
                  hands-on mini project in drone design. As a bonus, explore
                  aircraft modeling with OpenVSP and CFD analysis with VSPAero.
                  Ideal for electronics enthusiasts seeking a professional and
                  practical learning experience. Don't miss this opportunity to
                  enhance your skills with Project DronAid!
                </p>
              </div>

              <div className="my-4">
                <h2 className="mt-2 p-2 text-lg mx-1 font-sans">
                  Day 1: Introduction to PCB Design Project
                </h2>
                <p className="text-black  text-base mx-3 font-sans">
                  DronAid's two-day workshop kicks off with a deep dive into the
                  fundamental aspects of PCB (Printed Circuit Board) design
                  using the advanced software tool KiCad. Highlights:
                  Understanding PCB Basics: Grasp the essentials of PCBs,
                  components, and their intricate interconnections. PCB Design
                  Software Tutorial: Acquire practical skills using
                  industry-leading PCB design tools for schematic capture and
                  layout. Design Guidelines: Learn best practices for ensuring
                  signal integrity, power distribution, and efficient thermal
                  management. Prototyping Techniques: Explore methods for
                  creating and testing prototypes of your PCB designs.
                </p>
              </div>
              <div className="my-4">
                <h2 className="mt-2 p-2 text-lg mx-1 font-sans">
                  Day 2: Mini Project Objectives
                </h2>
                <p className="text-black  text-base mx-3 font-sans">
                  On the second day, participants will engage in a hands-on mini
                  project that reinforces the learned concepts, focusing on
                  practical applications in drone design. Highlights: System
                  Requirements Analysis: Define power needs for a drone,
                  considering various components like motors, sensors, and
                  communication modules. Schematic Design: Create a
                  comprehensive schematic diagram for the power distribution
                  board, emphasizing voltage regulation and current management.
                  Layout and Routing: Implement efficient board layout
                  techniques, ensuring minimal signal interference and optimal
                  thermal dissipation.
                </p>
              </div>
              <div className="my-4">
                <h2 className="mt-2 p-2 text-lg mx-1 font-sans">
                  Day 3:OpenVSP and VSPAero Workshop
                </h2>
                <p className="text-black  text-base mx-3 font-sans">
                  In addition to the PCB Design workshop, Project DronAid is
                  offering a second workshop for enthusiasts interested in
                  aircraft modeling and flow simulation. Highlights: OpenVSP -
                  Aircraft Modeling Made Easy: Model fuselage, wings, and
                  empennage swiftly. Include different control surfaces
                  effortlessly. Make Your Own Model: Apply your learning to
                  create an OpenVSP model of your choice. Introduction to
                  VSPAero: Learn CFD analysis using VSPAero. Extract relevant
                  values from the analysis for informed decision-making.
                </p>
              </div>
              <div className="my-4">
                <h2 className="mt-2 p-2 text-lg mx-1 font-sans">
                  Prerequisites
                </h2>
                <p className="text-black  text-base mx-3 font-sans">
                Details will be shared to the participants.
                </p>
              </div>
              <div className="my-4 text-lg mx-1 font-sans">
                <h2 className="mt-2 p-2">Conducted by: PROJECT DRONAID </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal_2;
