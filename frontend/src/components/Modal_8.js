import React from "react";
import cross from "../images/x.svg";

const Modal_8 = ({ toggleModal, index }) => {
  const handleBackdropClick = () => {
    // Close the modal regardless of where the click originated
    toggleModal(index);
  };

  return (
    <div className="relative" onClick={handleBackdropClick}>
      <div className={toggleModal ? "" : "hidden"}>
        <div className="fixed top-0 md:w-1/2 w-full md:-translate-x-[20rem] -translate-x-[10rem] md:translate-y-[60rem] translate-y-[190rem] flex items-center justify-center z-[9999]">
          <div className="bg-white w-[70%] h-[20%] rounded-3xl shadow-lg overflow-hidden">
            <div className="relative justify-between items-center border-b pb-4 mb-4">
              <h3 className="mt-3 mx-3 my-3 text-xl font-semibold text-[#00418C] p-2 font-sans">
                INTRODUCTION TO WEB SCRAPING
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
            <div className="p-5 overflow-y-auto max-h-[30vh]">
              <div className="my-4">
                <h4 className="text-black p-2 text-xl font-sans mx-1">
                  Course Overview
                </h4>
                <p className="text-black mx-3 text-large font-sans">
                  Embark on a journey through web scraping fundamentals in our
                  workshop. Day 1 covers basics and introduces Selenium for data
                  extraction. Day 2 features a hands-on project applying skills
                  to real scenarios. Elevate your proficiency, engage with
                  forms, and fetch valuable data. Uncover the potential of web
                  scraping with Selenium in this dynamic workshop!
                </p>
              </div>

              <div className="my-4">
                <h2 className="mt-2 p-2 text-lg font-sans mx-1">Day 1</h2>
                <p className="text-black text-base font-sans mx-3">
                  Exploration of Fundamentals: Define web scraping and its
                  essential components. Discuss optimal scraping times for
                  effective data retrieval. Understand the critical aspect of
                  determining site permissions. Dive into Selenium: In-depth
                  exploration of Selenium. Step-by-step guide through Selenium
                  setup. Techniques for data extraction and automating browser
                  tasks.
                </p>
              </div>
              <div className="my-4">
                <h2 className="mt-2 p-2 text-lg font-sans mx-1">Day 2</h2>
                <p className="text-black text-base font-sans mx-3">
                  Hands-On Project: Apply acquired skills in a real-world
                  scenario. Engage in activities like interacting with forms and
                  executing actions on a site. Fetch valuable data using
                  Selenium for practical experience. Advanced Techniques:
                  Explore advanced web scraping techniques. Enhance proficiency
                  in Selenium for more complex tasks. Elevate your web scraping
                  capabilities for diverse projects.
                </p>
              </div>
              <div className="my-4">
                <h2 className="mt-2 p-2 text-lg font-sans mx-1">
                  Prerequisites
                </h2>
                <p className="text-black text-base font-sans mx-3">
                  Basics of python.
                </p>
              </div>
              <div className="my-4 text-lg">
                <h2 className="mt-2 p-2 font-sans mx-1">
                  Conducted by: IEEE Manipal
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal_8;
