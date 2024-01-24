import { Button } from "@nextui-org/react";
import { ParallaxProvider } from "react-scroll-parallax";
import trophy from '../../images/whitetrophy.svg';
import { AdvancedBannerTop } from "./advancedBanner";

export default function MyParallax() {

  const loginwithgoogle = () => {
    window.open("/auth/google/callback", "_self")
}

  return (
    <ParallaxProvider>
      <AdvancedBannerTop />
      {/* <div className="center full">
        <h1 className="headline gray">Goodnight.</h1>
      </div> */}
      <div className="w-[50%] absolute lg:top-[30rem] top-[20rem]">
        <p className='text-white text-center lg:text-xl text-xs relative left-[50%] lg:w-full lg:px-10 lg:pt-2 pt-8'>
          Experience Aurora, the ultimate tech week by ISTE! Attend workshops, participate in a thrilling hackathon, and conquer the Capture the Flag (CTF) event for a week of innovation and problem-solving. Unlock your creativity and discover.
        </p>
        <div className="m-auto relative left-[75%] lg:pt-20 pt-12 w-[100%]">
          <Button color="primary" className="m-auto w-[50%] lg:text-lg text-[0.64rem]" onClick={loginwithgoogle}>
            <img src={trophy} alt="h" className="lg:w-[2rem] w-[0.9rem]" />
            Register Now
          </Button>
        </div>
      </div>
    </ParallaxProvider>
  );
}
