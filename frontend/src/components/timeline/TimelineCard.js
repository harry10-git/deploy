import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Checkbox,
    Image,
  } from "@nextui-org/react";
import neuralnetworks from "../../images/neuralnetworks.png";
import React, { useState } from "react";
import Modal_1 from "../Modal_1";
import Modal_2 from "../Modal_2";
import Modal_3 from "../Modal_3";
import Modal_4 from "../Modal_4";
import Modal_5 from "../Modal_5";
import Modal_6 from "../Modal_6";
import Modal_7 from "../Modal_7";
import Modal_8 from "../Modal_8";
import Modal_9 from "../Modal_9";

export default function TimelineCard() {
    const [selectedModalIndex, setSelectedModalIndex] = useState(null);

    const timelineCards = Array.from({ length: 9 }, (_, index) => ({
        title: `Event ${index + 1}`,
        time: "05:30PM - 08:00PM",
        date: `4th January, 2024`,
        image: neuralnetworks,
      }));

      const toggleModal = (index) => {
        setSelectedModalIndex(index);
      };
    return (
        <div className="p-10">
    <div className="p-6 grid md:grid-cols-3 grid-cols-2 bg-aurora-bg bg-cover rounded-3xl">
        {timelineCards.map((card, index) => (
            <div
              key={index}
              className="py-5 m-auto"
            >
              <Card className="py-4 lg:w-[20rem] w-[10rem]">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">
                    {card.time}
                  </p>
                  <small className="text-default-500">{card.date}</small>
                  <h4 className="font-bold text-large">{card.title}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={card.image}
                    width={270}
                  />
                  <div className="w-16 mt-6">
                    <Button
                      color="primary"
                      size="sm"
                      radius="lg"
                      onClick={() => toggleModal(index)}
                    >
                      Read More
                    </Button>
                    <Checkbox size="md" color="success" radius="sm">
                      Participate
                    </Checkbox>
                  </div>

                  {selectedModalIndex === index && (
                    <>
                      {index === 0 && (
                        <Modal_1
                          toggleModal={() => toggleModal(null)}
                          index={index}
                        />
                      )}
                      {index === 1 && (
                        <Modal_2 toggleModal={() => toggleModal(null)} />
                      )}
                      {index === 2 && (
                        <Modal_3 toggleModal={() => toggleModal(null)} />
                      )}
                      {index === 3 && (
                        <Modal_4 toggleModal={() => toggleModal(null)} />
                      )}
                      {index === 4 && (
                        <Modal_5 toggleModal={() => toggleModal(null)} />
                      )}
                      {index === 5 && (
                        <Modal_6 toggleModal={() => toggleModal(null)} />
                      )}
                      {index === 6 && (
                        <Modal_7 toggleModal={() => toggleModal(null)} />
                      )}
                      {index === 7 && (
                        <Modal_8 toggleModal={() => toggleModal(null)} />
                      )}
                      {index === 8 && (
                        <Modal_9 toggleModal={() => toggleModal(null)} />
                      )}
                    </>
                  )}
                </CardBody>
              </Card>
            </div>
          ))}
          </div>
          </div>
    )
}