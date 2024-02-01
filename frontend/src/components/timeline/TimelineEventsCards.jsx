import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import workshopsevents from "../../images/workshopsevents.svg";

import gr from "../../images/Group.svg";
import hecker from "../../images/Hacker-cuate-2 1.png";
import calen from "../../images/calendar.svg";
import clock from "../../images/clock.svg";
import P1 from "../../images/ctf1st.svg";
import P2 from "../../images/ctf2nd.svg";
import P3 from "../../images/ctf3rd.svg";
import ctfevents from "../../images/ctfevents.png";
import laptop from "../../images/laptop.svg";
import submitchoices from "../../images/submitchoices.png";

import W_iste2 from "../../images/AppDev.png";
import W_gdsc from "../../images/ChatBot.png";
import W_mist from "../../images/Cybersec.png";
import W_ieee from "../../images/W-ieee.svg";
import W_iemech from "../../images/W-iemech.svg";
import W_iste1 from "../../images/W-iste1.svg";
import W_acm from "../../images/W_acm.png";
import W_astronomy from "../../images/W_astronomy.png";
import W_dronaid from "../../images/W_dronaid.png";

//
import "./CheckBoxStyles.css";

const allEvents = [
  ["TS1_E1_ACM", "CLASSIFIED"],
  ["TS1_E2_DRONAID", "AEROCIRCUITS"],
  ["TS2_E1_MIST", "HACKLINUX"],
  ["TS2_E2_ISTE1", "BEYOND RATINGS"],
  ["TS3_E1_GDSC", "UNLOCKING CONVERSATIONS"],
  ["TS3_E2_ISTE2", "FLUTTERCRAFT"],
  ["TS4_E1_IEMECH", "F1 CAR MODELLING"],
  ["TS4_E2_IEEE", "SCRAPESPHERE"],
  ["TS5_E1_ASTRONOMY", "STARGAZING"],
];

const times = [
  "05:00PM - 08:00PM & 10:00AM - 04:30PM",
  "05:00PM - 08:00PM & 10:00AM - 04:30PM",
  "05:00PM - 08:00PM",
  "05:00PM - 08:00PM",
  "05:00PM - 08:00PM",
  "05:00PM - 08:00PM",
  "05:00PM - 08:30PM",
  "05:00PM - 08:00PM",
  "7:30 PM onwards",
];
const dates = [
  "3rd & 4th February, 2024",
  "3rd & 4th February, 2024",

  "5th & 6th February, 2024",
  "5th & 6th February, 2024",

  "7th & 8th February, 2024",
  "7th & 8th February, 2024",

  "10th & 12th February, 2024",

  "10th February, 2024",

  "1st and 4th February, 2024",
];
const images = [
  W_acm,
  W_dronaid,
  W_mist,
  W_iste1,
  W_gdsc,
  W_iste2,
  W_iemech,
  W_ieee,
  W_astronomy,
];

const names = [
  "ACM MANIPAL",
  "PROJECT DRONAID",
  "MIST MANIPAL",
  "ISTE MANIPAL",
  "GDSC MANIPAL",
  "ISTE MANIPAL",
  "IE-MECH MANIPAL",
  "IEEE MANIPAL",
  "ASTRONOMY CLUB MANIPAL",
];

const modalComponents = Array.from(
  { length: 9 },
  (_, index) => require(`../Modal_${index + 1}`).default
);

export default function TimelineEventsCards() {
  const [selectedModalIndex, setSelectedModalIndex] = useState(null);

  const toggleModal = (index) => {
    setSelectedModalIndex(index);
  };

  var registeredWorkshops = [];
  const [uniqueID, setUniqueID] = useState("");
  const [logged, setLogged] = useState(0);
  const [registered, setRegistered] = useState([]);
  const [googleUserData, setGoogleUserData] = useState({});
  const [userData, setuserData] = useState({});

  const getGoogleData = async () => {
    try {
      const response = await axios.get("/login/success", {
        withCredentials: true,
      });
      setLogged(1);
      setUniqueID(response.data.user._id);
      //console.log(response.data.user);
      setGoogleUserData(response.data.user);

      if (response.data.user.registered === false) {
        const checkbox = document.getElementsByClassName("event");
        const label = document.getElementsByClassName("event_label");
        for (let i = 0; i < checkbox.length; i++) {
          checkbox[i].style.visibility = "hidden";
          label[i].style.visibility = "hidden";
        }
        document.getElementsByClassName("event-submit")[0].style.visibility =
          "hidden";

        formNotify();
      }
    } catch (error) {
      const checkbox = document.getElementsByClassName("event");
      const label = document.getElementsByClassName("event_label");
      for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].style.visibility = "hidden";
        label[i].style.visibility = "hidden";
      }
      document.getElementsByClassName("event-submit")[0].style.visibility =
        "hidden";
      formNotify();
      //console.log("error", error)
    }
    // console.log(registered)
  };

  const getUser = async () => {
    try {
      const response = await axios.get(
        `/get-user-data?email=${googleUserData.email}`,
        { withCredentials: true }
      );
      //console.log("getuserdata: ", response);
      setUniqueID(response.data._id);
      setuserData(response.data);

      let a = response.data.workshops;
      let newRegistered = [];
      for (let i = 0; i < a.length; i++) {
        if (a[i] === "ACM") {
          newRegistered.push("TS1_E1_ACM");
          document.getElementById("TS1_E1_ACM").checked = true;
        } else if (a[i] === "DRONAID") {
          newRegistered.push("TS1_E2_DRONAID");
          document.getElementById("TS1_E2_DRONAID").checked = true;
        } else if (a[i] === "MIST") {
          newRegistered.push("TS2_E1_MIST");
          document.getElementById("TS2_E1_MIST").checked = true;
        } else if (a[i] === "ISTE1") {
          newRegistered.push("TS2_E2_ISTE1");
          document.getElementById("TS2_E2_ISTE1").checked = true;
        } else if (a[i] === "GDSC") {
          newRegistered.push("TS3_E1_GDSC");
          document.getElementById("TS3_E1_GDSC").checked = true;
        } else if (a[i] === "ISTE2") {
          newRegistered.push("TS3_E2_ISTE2");
          document.getElementById("TS3_E2_ISTE2").checked = true;
        } else if (a[i] === "IEMECH") {
          newRegistered.push("TS4_E1_IEMECH");
          document.getElementById("TS4_E1_IEMECH").checked = true;
        } else if (a[i] === "IEEE") {
          newRegistered.push("TS4_E2_IEEE");
          document.getElementById("TS4_E2_IEEE").checked = true;
        } else if (a[i] === "ASTRONOMY") {
          newRegistered.push("TS5_E1_ASTRONOMY");
          document.getElementById("TS5_E1_ASTRONOMY").checked = true;
        } else if (a[i] === "CTF") {
          newRegistered.push("TS6_E1_CTF");
          document.getElementById("TS6_E1_CTF").checked = true;
        }
      }
      setRegistered(newRegistered);
    } catch (error) {
      // console.log("error: ", error)
    }
  };

  const notifyRegistered = () => {
    toast.success("Successfully Registered!", {
      position: "top-right",
      autoClose: 1500,
      theme: "light",
    });
  };

  const formNotify = () => {
    toast.warn("Complete Registration process to participate in events!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const selectionNotify = () => {
    toast.info(
      "Remember, you can only select one Workshop in a particular time-slot!",
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );
  };

  const clearNotify = () => {
    toast.warn("All Selections Cleared!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  useEffect(() => {
    if (logged === 0) {
      getGoogleData();
    }
  });

  useEffect(() => {
    getUser();
  }, [googleUserData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log("in handleSubmit", registered)
    for (let i = 0; i < registered.length; i++) {
      switch (registered[i]) {
        case "TS1_E1_ACM":
          registeredWorkshops.push("ACM");
          break;
        case "TS1_E2_DRONAID":
          registeredWorkshops.push("DRONAID");
          break;
        case "TS2_E1_MIST":
          registeredWorkshops.push("MIST");
          break;
        case "TS2_E2_ISTE1":
          registeredWorkshops.push("ISTE1");
          break;
        case "TS3_E1_GDSC":
          registeredWorkshops.push("GDSC");
          break;
        case "TS3_E2_ISTE2":
          registeredWorkshops.push("ISTE2");
          break;
        case "TS4_E1_IEMECH":
          registeredWorkshops.push("IEMECH");
          break;
        case "TS4_E2_IEEE":
          registeredWorkshops.push("IEEE");
          break;
        case "TS5_E1_ASTRONOMY":
          registeredWorkshops.push("ASTRONOMY");
          break;
        case "TS6_E1_CTF":
          registeredWorkshops.push("CTF");
          break;
        default:
          break;
      }
    }
    try {
      const response = await axios.patch(
        `/workshop-registration/${uniqueID}`,
        {
          workshops: registeredWorkshops,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // The response.data contains the JSON parsed response
      //console.log("Response JSON: ", response.data);
      //console.log("workshops: ", registeredWorkshops);
      notifyRegistered();
    } catch (error) {
      // console.error("Error updating data:", error);
    }

    registeredWorkshops = [];
    // getUpdatedUser()
  };
  const clearSelection = () => {
    let a = document.getElementsByClassName("event");
    for (let i = 0; i < a.length; i++) {
      a[i].checked = false;
    }
    setRegistered([]);
    clearNotify();
  };

  function updateEvent(eventID) {
    let timeSlot = eventID.substring(0, 3);
    let newRegistered = [...registered];
    var found;
    if (newRegistered.length > 0) {
      for (let i = 0; i < newRegistered.length; i++) {
        found = 0;
        if (newRegistered[i].includes(timeSlot)) {
          found = 1;
          document.getElementById(newRegistered[i]).checked = false;
          newRegistered.splice(i, 1);
          newRegistered.push(eventID);
          document.getElementById(eventID).checked = true;
          setRegistered(newRegistered);
          if (found === 1) {
            selectionNotify();
          }
          break;
        } else if (i === newRegistered.length - 1 && found === 0) {
          newRegistered.push(eventID);
          document.getElementById(eventID).checked = true;
          setRegistered(newRegistered);
        }
      }
    } else if (newRegistered.length === 0) {
      newRegistered.push(eventID);
      document.getElementById(eventID).checked = true;
      setRegistered(newRegistered);
    }
  }

  return (
    <>
      <div className="lg:p-12 p-4 bg-transparent">
        <div className=" m-5 p-6 rounded-[2rem]" id="glasseffect2">
          <div>
            <img src={workshopsevents} alt="gsgs" className="mx-auto m-5" />

            <div className="p-3 grid md:grid-cols-3 grid-cols-1 ">
              {allEvents.map((event, index) => (
                <div key={index} className="py-5 m-auto">
                  <Card className="py-4 text-xs lg:h-[24rem] h-[22rem] lg:w-[20rem] w-[12rem] bg-black border-1 border-solid border-[#4F4F4F]">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center ">
                      <p className=" uppercase text-white font-bold lg:text-[0.8rem] text-[0.50rem] p-1">
                        {times[index]}
                      </p>
                      <h4 className="text-white lg:text-[0.7rem] text-[0.6rem] p-1">
                        {dates[index]}
                      </h4>
                      <h4 className="font-bold text-white lg:text-[1.1rem] p-1.5">
                        {event[1]}
                      </h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 items-center ">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl pb-3"
                        src={images[index]}
                        width={270}
                      />
                      <div className="mx-auto mt-3 flex lg:flex-row flex-col lg:gap-5 gap-2">
                        <div className="checkwrapper">
                          {index === 0 || index === 2 || index === 4 ? (
                            <label className="control event_label">
                              <span>Slot full</span>
                            </label>
                          ) : (
                            <>
                              <label
                                htmlFor={event[0]}
                                id={"label_" + event}
                                className="control event_label"
                              >
                                <span>Select</span>
                              </label>
                              <input
                                type="checkbox"
                                id={event[0]}
                                name={event[0]}
                                className="toggle visualy-hidden event"
                                onClick={() => {
                                  updateEvent(event[0]);
                                }}
                              />
                            </>
                          )}
                        </div>

                        <Button
                          className="rounded-[25px]"
                          color="primary"
                          size="sm"
                          radius="lg"
                          onClick={() => toggleModal(index)}
                        >
                          Preview
                        </Button>
                      </div>

                      {selectedModalIndex === index && (
                        <>
                          {React.createElement(modalComponents[index], {
                            toggleModal: () => toggleModal(null),
                            index,
                          })}
                        </>
                      )}
                    </CardBody>
                    <div className="text-center">
                      <h4 className="text-white">BY: {names[index]}</h4>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
            {/* ctf stuff */}
            <div className="lg:p-16 p-0 text-white">
              <div className="" id="glasseffect2">
                <div className="text-white  bg-center rounded-3xl lg:p-28 p-0">
                  <img
                    src={ctfevents}
                    alt="ggf"
                    className="col-span-2 mx-auto"
                  />
                  <div className="grid  md:grid-cols-2 grid-cols-1 rounded-3xl ">
                    <div className="flex justify-center align-middle">
                      <img
                        className="m-auto mt-0 "
                        alt="ess"
                        src={hecker}
                      ></img>
                    </div>
                    <div className="flex-col justify-center align-middle p-3">
                      <img
                        className="lg:h-72 h-32 lg:w-72 object-center m-auto"
                        alt="gsege"
                        src={gr}
                      ></img>
                      <p className="text-center w-5/6 m-auto lg:text-lg text-xs">
                        Chronicles of the Cyber Treasury. A narrative driven
                        CTF. As a digital explorer navigate diverse challenges,
                        unveil hidden paths and unlock treasury secrets to
                        enhance your cyber security skills in an
                        immersive a Odyssey.
                      </p>
                    </div>
                    <div className="flex-col flex m-auto justify-center align-middle md:text-3xl text-xl p-6">
                      <div className="pt-4 pl-10 flex flex-row">
                        <img
                          src={calen}
                          alt="gfw"
                          className="lg:w-fit w-[1rem]"
                        ></img>
                        <span className="pt-4 pl-10 [font-family:'Inter-Medium',Helvetica] font-semibold lg:text-lg text-[0.8rem]">
                          {" "}
                          Date: <br className="lg:hidden"></br>7th Feb
                        </span>
                      </div>
                      <div className="pt-6 pl-10 flex flex-row">
                        <img
                          src={clock}
                          alt="sgse"
                          className="lg:w-fit w-[1rem]"
                        ></img>
                        <span className="pt-1 pl-10 [font-family:'Inter-Medium',Helvetica] font-semibold lg:text-lg text-[0.8rem]">
                          {" "}
                          Time: 00:00 hrs - 23:59 hrs
                        </span>
                      </div>
                      <div className="pt-6 pl-10 flex flex-row">
                        <img
                          src={laptop}
                          alt="gesags"
                          className="lg:w-fit w-[1rem]"
                        ></img>
                        <span className="pt-2 pl-10 [font-family:'Inter-Medium',Helvetica] font-semibold lg:text-lg text-[0.8rem]">
                          {" "}
                          Mode: Online
                        </span>
                      </div>
                    </div>
                    <div className="p-6 justify-center align-middle">
                      <div className="[text-shadow:0px_4px_37.2px_#0070f3] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0070f3] md:text-[58px] text-[35px] tracking-[0] leading-[normal]">
                        <h1 className="text-center p-6 text-[#0070f3]">
                          Cash Prizes
                        </h1>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="p-6 flex-col items-center">
                          <img className="w-36 h-36" src={P1} alt=""></img>
                        </div>
                        <div className="flex flex-row justify-center flex-wrap">
                          <div className="p-6 flex-col items-center">
                            <img className="w-36 h-36" src={P2} alt=""></img>
                          </div>
                          <div className="p-6 flex-col items-center">
                            <img className="w-36 h-36" src={P3} alt=""></img>
                          </div>
                          <h4 className="text-white text-2xl font-mono">
                            Organised by MIST Manipal
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="checkwrapper mx-auto lg:mb-0 mb-8">
                    <label
                      htmlFor="TS6_E1_CTF"
                      id={"label_" + "TS6_E1_CTF"}
                      className="control event_label"
                    >
                      <span>Select</span>
                    </label>
                    <input
                      type="checkbox"
                      id="TS6_E1_CTF"
                      name={"TS6_E1_CTF"}
                      className="toggle visualy-hidden event"
                      onClick={() => {
                        updateEvent("TS6_E1_CTF");
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* submit choices */}
            <div className="grid event-submit">
              <img src={submitchoices} alt="" className="mx-auto" />
              <div className="mx-auto">
                <Button
                  color="primary"
                  size="sm"
                  variant="shadow"
                  className="lg:w-[15rem] lg:m-5 m-1"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Submit
                </Button>
                <Button
                  color="danger"
                  size="sm"
                  variant="shadow"
                  className="lg:w-[15rem] lg:m-5 m-1"
                  onClick={(e) => {
                    clearSelection(e);
                  }}
                >
                  Clear
                </Button>
              </div>
            </div>
          </div>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </div>
    </>
  );
}
