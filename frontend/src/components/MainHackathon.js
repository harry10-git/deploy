import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "../images/ArrowLeft";
import trophycup from "../images/whitetrophy.svg";
import brain from "../images/hck1.svg";
import book from "../images/hck2.svg";

export const MainHackathon = () => {
  return (
    <div className="[font-family:'Inter-Regular',Helvetica] w-screen bg-black bg-clip-text h-screen">
      <div className="">
        <div className="flex w-screen h-24">
          <a href="/">
            <ArrowLeft className={`fixed w-[66px] h-[66px] top-0 left-0`} />
          </a>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="[text-shadow:0px_4px_53px_#00000073] [font-family:'Inter-Regular',Helvetica] font-normal text-white md:text-[27px] text-[16px] tracking-[0] leading-[normal]">
            AURORA PRESENTS
          </div>
          <div className="[text-shadow:0px_4px_37.2px_#0070f394] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0070f3] lg:text-[4rem] text-[2rem] tracking-[0] leading-[normal]">
            &lt;DEVSPRINT’24 /&gt;
          </div>
         
          <p className="w-5/6 pt-8 pb-24 [font-family:'Inter-Medium',Helvetica] font-medium text-white md:text-[25px] text-[16px] text-center tracking-[0] leading-7]">
            Our annual hackathon, Devsprint is back for the 2024 edition. It is
            an exciting learning opportunity for students who are passionate
            about technology and are interested in solving real-world problems
            with cutting-edge solutions. We&#39;re hoping to see much more
            innovative, improved and effective solutions to the issues at hand
            and share them with the rest of the world by bringing back the
            community of student developers together yet again.
            <br />
            <br />
            <h3 className="text-white text-lg lg:text-xl">Date:  11th Feb, 2024</h3>
            <h3 className="text-white text-lg lg:text-xl">Time:  8:00 AM to 8:00 PM</h3>
            <h3 className="text-white text-lg lg:text-xl">Venue:  Library</h3>
            <h3 className="text-white text-lg lg:text-xl">Prize Pool:  12,000 INR</h3>

          </p>
         
          <Link to="/hackathon-form" className="">
            <Button
              size=""
              className="bg-[#0070f3] flex p-6 pt-8 pb-8 rounded-3xl font-bold text-xl text-white"
            >
              <img src={trophycup} alt="wtf" />
              <span className="pl-3">Register Now!</span>
            </Button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-28 my-8 text-white">
        <a href='https://drive.google.com/file/d/1z9bnpL12WXUS1gRUfVD-7YLmdwrv0iss/view?usp=sharing' target="_blank" rel="noopener noreferrer">
        <Button
              size=""
              className="bg-[#0070f3] flex p-6 pt-8 pb-8 rounded-3xl font-bold text-xl text-white"
            >
              <img src={brain} className="text-white" alt="wtf" />
              <span className="pl-3">
               
                  View Rulebook
           
              </span>
            </Button>
            </a>
            <a href='https://drive.google.com/file/d/1zzDFFK6mEVicWRloIMFKq_jk2o3QeEq_/view?usp=sharing' target="_blank" rel="noopener noreferrer">
            <Button
              size=""
              className="bg-[#0070f3] flex p-6 pt-8 pb-8 rounded-3xl font-bold text-lg text-white"
            >
              <img src={book} className="text-white" alt="wtf" />
              <span className="pl-3">
             
                  Problem Statements
            
              </span>
            </Button>
            </a>
        </div>
      </div>
    </div>
  );
};
