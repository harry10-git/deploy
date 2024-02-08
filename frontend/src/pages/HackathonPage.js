import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import { AboutHackathon } from "../components/AboutHackathon";
import { MainHackathon } from "../components/MainHackathon";
import { PrizesHackathon } from "../components/PrizesHackathon";
import Mountain from "../images/hackathonpage.svg";
import Sun from "../images/sun.svg";
import WaIcon from "../assets/whatsapp-icon-256x256-4tah7p12.png";

function HackathonPage() {
  return (
    <div id="hackathonpage">
      <Parallax pages={4} className="bg-black no-scrollbar" id="hackathonpage">
        <ParallaxLayer offset={0} speed={1.5}>
          <div className="h-screen w-screen justify-center items-center flex lg:translate-y-[20rem] translate-y-[5rem]">
            <img className="lg:h-screen lg:w-screen" alt="h" src={Sun}></img>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.001} className="w-screen">
          <img
            className="w-[150rem] bottom-0 lg:translate-y-[10rem] translate-y-96"
            alt="h"
            src={Mountain}
          ></img>
        </ParallaxLayer>

        <ParallaxLayer offset={0} className="z-50" speed={0.1}>
          <MainHackathon />
        </ParallaxLayer>
        <ParallaxLayer offset={1} className="min-h-fit">
          {/* <AboutHackathon /> */}
          <PrizesHackathon />
          <div className="flex flex-col justify-center items-center text-center my-9">
            <div className="border-1 border-white px-4 py-2 backdrop-blur-xl">
              <p className="text-md lg:text-2xl text-white">
                For Queries Contact :{" "}
                <a
                  href="https://chat.whatsapp.com/BAIAzWJPx7DHVhPdY45B7l"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex justify-center">
                    {" "}
                    <img
                      className="h-10 my-2"
                      src={WaIcon}
                      alt="wa-icon"
                    />{" "}
                  </div>
                </a>
                <div className="grid grid-cols-2 gap-4">
                  <h4>Prateek: 62077-86340</h4>
                  <h4>Swapnil: 62078-64542</h4>
                </div>
              </p>
            </div>
          </div>
         
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default HackathonPage;
