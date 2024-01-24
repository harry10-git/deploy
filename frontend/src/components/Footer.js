import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.svg";
import WaIcon from '../assets/whatsapp-icon-256x256-4tah7p12.png'

export default function Footer() {
  // const navigate = useNavigate()

  const [googleUserData, setGoogleUserData] = useState({});

  const admins = [
    "2shashank11@gmail.com",
    "istemanipalboard@gmail.com",
    "aditi26shr@gmail.com",
    "prateekanand.work@gmail.com",
    "tanishakar1906@gmail.com",
  ];

  const getGoogleData = async () => {
    try {
      const response = await axios.get("/login/success", {
        withCredentials: true,
      });
      setGoogleUserData(response.data.user);
    } catch (error) {
      //console.log("error", error)
      //navigate('/*')
    }
  };

  useEffect(() => {
    getGoogleData();
  }, []);

  // const goTeam = () =>{
  //   navigate('/developers')
  // }

  return (
    <div className="bg-footer-texture bg-transparent h-screen bg-blend-darken bg-fixed bg-cover bg-bottom">
      <div>
        <div className="lg:pt-[20rem] pt-96">
          <div className="flex justify-center">
            <a
              href="/developers"
              class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden text-2xl font-bold text-white rounded-md shadow-2xl group"
            >
              <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

              <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

              <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

              <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

              <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
              <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
              <span class="relative">Click to meet the Team !!</span>
            </a>
          </div>
          <div className="text-center text-xl text-blue-600">
            {admins.includes(googleUserData.email) ? (
              <>
                <span className="p-4 text-white text-right">
                  <Link size="lg" to="/workshops-registrations">
                    Workshops Data
                  </Link>
                </span>

                <span className="p-4 text-white text-right">
                  <Link size="lg" to="/hackathon-registrations">
                    Hackathon Data
                  </Link>
                </span>

                <span className="p-4 text-white text-right">
                  <Link size="lg" to="/users">
                    Registrations Data
                  </Link>
                </span>
              </>
            ) : (
              <></>
            )}
          </div>
          {/* <h4 className="text-white p-5 text-center">Contact Us:</h4> */}
          <div className="flex justify-center gap-3">
            <a href="https://www.instagram.com/iste_manipal?igsh=MWxmaG5zeTlnMms3aw==">
              <button className="relative top-[0.3rem] p-1">
                <img src={instagram} alt="hdu" />
              </button>
            </a>

            <a href="https://www.linkedin.com/company/iste-manipal/">
              <button className="p-2">
                <img src={linkedin} alt="hdusdvsf" />
              </button>
            </a>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div className="border-1 border-white px-4 py-2 backdrop-blur-xl">
              <p className="text-md lg:text-2xl text-white">
                For Queries Contact :  <a href="https://chat.whatsapp.com/BAIAzWJPx7DHVhPdY45B7l" target="_blank" rel="noopener noreferrer">
                <div className="flex justify-center hover:scale-105 transition"> <img className="h-10 my-2" src={WaIcon} alt="wa-icon" /> </div>
                </a>
                <div className="grid grid-cols-2 gap-4">
                  <h4>Prateek: 62077-86340</h4>
                  <h4>Swapnil: 62078-64542</h4>
                </div>
              </p>
            </div>
          </div>
         
          <h4 className="text-center p-5 text-white">
            Copyright &copy; 2023 All Rights Reserved | Made by ISTE Manipal
          </h4>
        </div>
      </div>
    </div>
  );
}
