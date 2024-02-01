import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../images/Mask group.svg";
import trophy from "../images/trophycup.svg";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const loginwithgoogle = () => {
    window.open("/auth/google/callback", "_self");
  };

  const [googleUserData, setGoogleUserData] = useState({});

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

  //logout
  const logout = () => {
    window.open("/logout", "_self");
  };

  useEffect(() => {
    getGoogleData();
  }, []);

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="bg-[none] absolute p-6"
        isBlurred="false"
        id="nav"
      >
        <NavbarContent className="lg:relative left-[-10%]">
          <NavbarBrand className="flex">
          <a href="/">
            <img src={logo} alt="h" className="w-10 md:w-20 h-fit" />
          </a>
            <p className="pl-5 text-white font-semibold">
              {googleUserData.googleName
                ? `Hi, ${googleUserData.googleName.split(" ")[0]}`
                : " "}{" "}
            </p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden md:flex sm:flex gap-4 "
          justify="center"
        >
          <NavbarItem className="hover:scale-125 transform transition">
            <HashLink
              smooth
              className="text-white hover:text-blue-200 hover:underline p-6"
              to="#about"
            >
              About
            </HashLink>
          </NavbarItem>
          <NavbarItem className="hover:scale-125 transform transition">
            <HashLink
              smooth
              className="text-white hover:text-blue-200 hover:underline p-6"
              to="#partners"
            >
              Partners
            </HashLink>
          </NavbarItem>
          <NavbarItem className="hover:scale-125 transform transition">
            <HashLink
              smooth
              className="text-white hover:text-blue-200 hover:underline p-6"
              to="#timeline"
            >
              Timeline
            </HashLink>
          </NavbarItem>
          <NavbarItem className="hover:scale-125 transform transition">
            <HashLink
              smooth
              className="text-white hover:text-blue-200 hover:underline p-6"
              to="#sponsors"
            >
              Sponsors
            </HashLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="lg:relative left-[10%]">
          <NavbarItem>
            <Link to="/events" className="">
              <a
                href="/events"
                class="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
              >
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

                <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

                <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

                <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

                <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <span class="relative">Events</span>
              </a>
            </Link>
          </NavbarItem>
          <NavbarItem>
                        <Link to='/hackathon' className="">
                            <div className="lg:w-[7.2rem]  w-[5.9rem] lg:text-[14px] text-[12px] shadow-2xl font-mono h-fit flex justify-between bg-[#1b224a] text-white rounded-lg p-2 hover:scale-110 transition hover:underline transition">
                                <img src={trophy} alt="h" className="lg:w-[1.5rem] w-[1rem]" />
                                Hackathon
                            </div>
                        </Link>
                    </NavbarItem>

          {/* <NavbarItem>
            <Link to="/hackathon" className="">
              <div className="lg:w-[7.2rem]  w-[5.9rem] lg:text-[14px] text-[12px] shadow-2xl font-medium h-fit flex justify-between bg-[#1b224a] text-[#006FEE] rounded-lg p-2 hover:scale-110 transition hover:text-white">
                <img src={trophy} alt="h" className="lg:w-[1.5rem] w-[1rem]" />
                Hackathon
              </div>
            </Link>
          </NavbarItem> */}

          {Object?.keys(googleUserData)?.length > 0 ? (
            <>
              <NavbarItem className="hidden lg:flex p-4 text-red-700 text-right">
                <HashLink size="lg" href="#" onClick={logout}>
                  <a
                    href="#_"
                    class="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
                  >
                    <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                      <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                    </span>
                    <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                      Logout
                    </span>
                  </a>
                </HashLink>
              </NavbarItem>
            </>
          ) : (
            <NavbarItem className="hidden lg:flex ">
              <Link href="#" className="" onClick={loginwithgoogle}>
                <a
                  href="#_"
                  class="relative px-5 py-2 overflow-hidden font-medium text-green-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
                >
                  <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                  <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                  <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                  <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                    Login
                  </span>
                </a>
              </Link>
            </NavbarItem>
          )}
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden sm:hidden fixed right-[0.75rem] text-white"
          />
        </NavbarContent>
        <NavbarMenu className="mt-10 bg-black h-[5rem]">
          {/* {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))} */}
          <NavbarMenuItem className="p-4 text-white text-right">
            <HashLink smooth size="lg" to="#about">
              About
            </HashLink>
          </NavbarMenuItem>
          <NavbarMenuItem className="p-4 text-white text-right">
            <HashLink smooth size="lg" to="#partners">
              Partners
            </HashLink>
          </NavbarMenuItem>
          <NavbarMenuItem className="p-4 text-white text-right">
            <HashLink smooth size="lg" to="#timeline">
              Timeline
            </HashLink>
          </NavbarMenuItem>
          <NavbarMenuItem className="p-4 text-white text-right">
            <HashLink smooth size="lg" to="#sponsors">
              Sponsors
            </HashLink>
          </NavbarMenuItem>
          <NavbarMenuItem className="p-4 text-white text-right">
            <HashLink smooth size="lg" to="/events">
              Events
            </HashLink>
          </NavbarMenuItem>
          {Object?.keys(googleUserData)?.length > 0 ? (
            <>
              <NavbarMenuItem className="p-4 text-red-700 text-right">
                <HashLink size="lg" href="#" onClick={logout}>
                  Log Out
                </HashLink>
              </NavbarMenuItem>
            </>
          ) : (
            <NavbarMenuItem className="p-4 text-green-700 text-right">
              <HashLink
                className=""
                size="lg"
                href="#"
                onClick={loginwithgoogle}
              >
                Login
              </HashLink>
            </NavbarMenuItem>
          )}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
