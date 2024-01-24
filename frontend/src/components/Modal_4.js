import React from "react";
import cross from "../images/x.svg";

const Modal_4 = ({ toggleModal, index }) => {
  const handleBackdropClick = () => {
    // Close the modal regardless of where the click originated
    toggleModal(index);
  };

  return (
    <div className="relative" onClick={handleBackdropClick}>
      <div className={toggleModal ? "" : "hidden"}>
        <div className="fixed md:w-1/2 w-full top-0 md:translate-y-[35rem] translate-y-[75rem] md:translate-x-0 -translate-x-[10rem] flex items-center justify-center z-[9999]">
          <div className="bg-white w-[70%] h-[80%] rounded-3xl shadow-lg overflow-hidden">
            <div className="relative justify-between items-center border-b pb-4 mb-4">
              <h3 className="mt-3 mx-3 my-3 text-xl font-semibold text-[#00418C] p-2">
                RECOMMENDER SYSTEMS AND SENTIMENT ANALYSIS
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
                  Embark on a professional workshop covering Recommender Systems
                  and Sentiment Analysis. Day 1 introduces Python basics and
                  essential scipy libraries, culminating in the implementation
                  of a simple analysis model using TextBlob. Day 2 advances
                  skills with the implementation of a basic item-item
                  similarity-based recommender system and a more sophisticated
                  system integrating sentiment analysis. This comprehensive
                  course enhances proficiency in Python for data analysis,
                  machine learning, and the creation of impactful recommendation
                  models. Elevate your capabilities in data analysis and
                  sentiment-aware recommendations through practical, hands-on
                  learning in this dynamic workshop.
                </p>
              </div>

              <div className="my-4">
                <h2 className="mt-2 p-2 text-lg mx-1 font-sans">
                  Day 1: Introduction to Python for Data Analysis
                </h2>
                <p className="text-black text-base mx-3 font-sans">
                  Foundations of Python: Delve into the basics of Python for
                  data analysis. Explore essential scipy libraries including
                  pandas and numpy for efficient data analysis and model
                  building. Introduction to TextBlob: Implement a simple
                  analysis model using TextBlob, gaining insights into sentiment
                  analysis and text processing.
                </p>
              </div>
              <div className="my-4">
                <h2 className="mt-2 p-2 text-lg mx-1 font-sans">
                  Day 2: Recommender Systems and Sentiment Analysis
                  Implementation
                </h2>
                <p className="text-black text-base mx-3 font-sans">
                  Item-Item Similarity-Based Recommender System: Implement a
                  basic recommendation system focusing on item-item similarity,
                  understanding collaborative filtering concepts. Recommender
                  System with Sentiment Analysis: Implement a robust recommender
                  system incorporating sentiment analysis. Enhance
                  recommendations by considering user sentiments towards items.
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

export default Modal_4;
