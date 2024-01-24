import React from "react";
import cross from "../images/x.svg";

const Modal_5 = ({ toggleModal, index }) => {
  const handleBackdropClick = () => {
    // Close the modal regardless of where the click originated
    toggleModal(index);
  };

  return (
    <div className="relative" onClick={handleBackdropClick}>
      <div className={toggleModal ? "" : "hidden"}>
        <div className="fixed top-0 md:w-1/2 w-full md:-translate-x-[20rem] -translate-x-[10rem] md:translate-y-[35rem] translate-y-[105rem] flex items-center justify-center z-[9999]">
          <div className="bg-white w-[70%] h-[80%] rounded-3xl shadow-lg overflow-hidden">
            <div className="relative justify-between items-center border-b pb-4 mb-4">
              <h3 className="mt-3 mx-3 my-3 text-xl font-semibold text-[#00418C] p-2">
                EXPLORE CHATBOTS
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
                  The ChatBots Workshop by GDSC Manipal offers a comprehensive
                  2-day exploration of AI and Natural Language Processing (NLP).
                  Day 1 introduces participants to the secrets of AI/ML,
                  establishing a foundational understanding. Delving into NLP,
                  attendees gain insights into language manipulation. Day 2
                  delves into hands-on development, guiding participants in
                  setting up an optimal environment with tools like Anaconda
                  Navigator and exploring essential libraries such as PyTorch
                  and TensorFlow. The session culminates in a guided experience,
                  allowing participants to construct a basic chatbot from
                  scratch, providing valuable practical insights into the world
                  of ChatBots.
                </p>
              </div>

              <div className="my-4">
                <h2 className="mt-2 p-2 text-lg mx-1 font-sans">
                  Day 1: Foundation
                </h2>
                <p className="text-black text-base mx-3 font-sans">
                  Unlocking the Secrets of AI & Machine Learning: Dive deep into
                  the fundamentals of AI/ML, laying the groundwork for an
                  understanding of advanced concepts. Introduction to Natural
                  Language Processing (NLP): Discover the intricacies of NLP,
                  unraveling how machines comprehend and manipulate language—a
                  key skill for crafting chatbots and venturing into broader
                  applications.
                </p>
              </div>
              <div className="my-4">
                <h2 className="mt-2 p-2 text-lg mx-1 font-sans">
                  Day 2: Hands-on ChatBot Development
                </h2>
                <p className="text-black text-base mx-3 font-sans">
                  Mastering Your Machine Learning Toolkit: Create the ideal
                  environment using Anaconda Navigator and delve into essential
                  libraries such as PyTorch and TensorFlow, empowering you with
                  the tools needed for effective development. Build Your Own
                  ChatBot from Scratch: Translate your knowledge into action
                  with a guided hands-on session. Craft a basic chatbot and
                  witness the enchantment of NLP firsthand, solidifying your
                  practical expertise.
                </p>
              </div>
              <div className="my-4">
                <h2 className="mt-2 p-2 text-lg mx-1 font-sans">
                  Prerequisites
                </h2>
                <p className="text-black text-base mx-3 font-sans">
                  Installation of Anaconda Navigator
                </p>
              </div>
              <div className="my-4 text-lg mx-1 font-sans">
                <h2 className="mt-2 p-2">Conducted by: GDSC Manipal</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal_5;
