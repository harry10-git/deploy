import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import React, { useState } from "react";
import W_iste2 from "../../images/AppDev.svg";
import W_gdsc from "../../images/ChatBot.svg";
import W_mist from "../../images/Cybersec.svg";
import W_ieee from "../../images/W-ieee.svg";
import W_iemech from "../../images/W-iemech.svg";
import W_iste1 from "../../images/W-iste1.svg";
import W_acm from "../../images/W_acm.svg";
import W_astronomy from "../../images/W_astronomy.svg";
import W_dronaid from "../../images/W_dronaid.svg";
import EventCheck from "../EventCheck";
// import "./styles.css"
// Separate arrays for titles, times, dates, and images
const titles = [
  "ACM",
  "DRONAID",
  "MIST",
  "ISTE",
  "GDSC",
  "ISTE2",
  "IE MECH",
  "IEEE",
  "Event 9",
];

const times = [
  "05:30PM - 08:30PM & 10:00AM - 05:00PM",
  "05:30PM - 08:30PM & 10:00AM - 05:00PM",
  "05:30PM - 08:30PM",
  "05:30PM - 08:30PM",
  "05:30PM - 08:30PM",
  "05:30PM - 08:30PM",
  "05:30PM - 08:30PM",
  "05:30PM - 08:30PM",
  "05:30PM - 08:30PM",
  "05:30PM - 08:30PM",
];
const dates = [
  "3rd February, 2024 & 4th February, 2024",
  "3rd February, 2024 & 4th February, 2024",
  "5th February, 2024 & 6th February, 2024",
  "5th February, 2024 & 6th February, 2024",

  "7th February, 2024 & 8th February, 2024",
  "7th February, 2024 & 8th February, 2024",
  "9th February, 2024",
  "9th February, 2024",
  "9th February, 2024",
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

const modalComponents = Array.from(
  { length: 9 },
  (_, index) => require(`../Modal_${index + 1}`).default
);

export default function Timeline() {
  const [selectedModalIndex, setSelectedModalIndex] = useState(null);

  const toggleModal = (index) => {
    setSelectedModalIndex(index);
  };

  return (
    <div className="p-6 grid md:grid-cols-3 grid-cols-2 ">
      {titles.map((title, index) => (
        <div key={index} className="py-5 m-auto">
          <Card className="py-4 lg:w-[19rem] w-[6.8rem] lg:h-auto h-[15rem] text-xs">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <p className=" uppercase font-bold lg:text-[0.8rem] text-[0.50rem] p-1">
                {times[index]}
              </p>
              <h4 className="text-default-500 lg:text-[0.7rem] text-[0.6rem] p-1">
                {dates[index]}
              </h4>
              <h4 className="font-bold lg:text-[1.3rem] p-1.5">{title}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 items-center ">
              <Image
                alt="Card background"
                className="object-cover rounded-xl "
                src={images[index]}
                width={270}
              />
              <div className="mx-auto mt-6 flex lg:flex-row flex-col lg:gap-5 gap-2">
                <EventCheck />
                <Button
                  className=" "
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
          </Card>
        </div>
      ))}
    </div>
  );
}