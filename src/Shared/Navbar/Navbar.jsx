import { Link, NavLink } from "react-router-dom";
import { RiTimeLine } from "react-icons/ri";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import {
  FaXTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaBars,
} from "react-icons/fa6";
import { BiChevronDown, BiMenuAltLeft } from "react-icons/bi";
import Logo from "/assets/images/logo/logo.png";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  // modal openar
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={` w-full transition-all duration-300 bg-PrimaryColor-0  text-[#7d7f8c]`}
    >
      {/* top Navbar */}
      <header className="bg-PrimaryColor-0 border-b border-BorderColor-0 overflow-hidden hidden md:block">
        <div className="Container flex items-center justify-between">
          <div>
            <ul className="flex">
              <li className="font-Yantramanav text-[15px] py-4 -mb-1 pr-8 border-r border-BorderColor-0">
                <Link to={"#"} className="text-white flex items-center">
                  <FaPhoneAlt className="text-SecondaryColor-0 mr-1 text-sm" />
                  +980 (1234) 567 890
                </Link>
              </li>
              <li className="text-white flex items-center py-4 -mb-1  font-Yantramanav text-[15px] pl-8">
                <RiTimeLine className="text-SecondaryColor-0 mr-1" />
                Mon - Sat, 8:00 - 17:30, Sunday - Closed
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex -mb-2">
              <li>
                <Link
                  to={"#"}
                  className="text-white text-sm px-4 py-5 border-l border-BorderColor-0 transition-all duration-300 hover:text-SecondaryColor-0 inline-block"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className="text-white text-sm px-4 py-5 border-l border-BorderColor-0 transition-all duration-300 hover:text-SecondaryColor-0 inline-block"
                >
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className="text-white text-sm px-4 py-5 border-l border-BorderColor-0 transition-all duration-300 hover:text-SecondaryColor-0 inline-block"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className="text-white text-sm px-4 py-5 border-x border-BorderColor-0 transition-all duration-300 hover:text-SecondaryColor-0 inline-block"
                >
                  <FaPinterestP />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* top Navbar */}
      <nav className=" Container" data-aos="zoom-in" data-aos-duration="1000">
        {/* main Navbar */}
        <div className="flex flex-col lg:flex-row items-center justify-between  lg:h-[100px]">
          {/* website Logo */}
          <div className=" w-48 lg:w-52 lg:p-4 ">
            <Link to="/">
              <img
                src={Logo}
                className="hidden lg:block w-full"
                alt="website_logo"
              />
            </Link>
          </div>
          {/* small screen size */}
          <div className="px-3 w-full lg:hidden flex justify-between   bg-khaki h-[70px]  items-center  p-3">
            <div className=" w-28  ">
              <Link to="/">
                <img
                  src={Logo}
                  className="block lg:hidden "
                  alt="constre_website_logo"
                />
              </Link>
            </div>
            {/* toggle bar mode. */}
            <button
              className="lg:hidden block focus:outline-none "
              onClick={toggleNavbar}
            >
              {/* modal open and close */}
              {isOpen ? (
                <IoMdClose className="w-6 h-6 text-white" />
              ) : (
                <FaBars className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
          {/* All navLink are hear with active */}
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } text-left w-full lg:w-fit  ease-in-out lg:flex space-y-2 lg:space-y-0 lg:text-center space-x-0 lg:space-x-1  flex flex-col lg:flex-row text-sm uppercase lg:bg-transparent dark:lg:bg-transparent py-3 lg:py-0 font-Yantramanav font-medium sm:text-base text-white transition-all duration-500 `}
          >
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""}  text-white hover:text-SecondaryColor-0 pr-12   lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative`}
              to="/"
            >
              <span className="flex items-center">
                Home
                <BiChevronDown className="ml-1" />
              </span>
              <div className="absolute pt-5 lg:pt-8 z-20">
                <ul className="shadow-lg hidden group-hover:block rounded-sm  text-white w-[200px] text-left   transition-all duration-500 text-sm sm:text-base py-4 bg-[#171717] ">
                  <div className=" px-5 group  hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/" className="py-2 block">
                        Home One
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group  hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/home2" className="py-2 block">
                        Home Two
                      </NavLink>
                    </li>
                  </div>

                  <div className=" px-5 group  hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/home3" className="py-2 block">
                        Home Three
                      </NavLink>
                    </li>
                  </div>

                  <div className=" px-5 group  hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/home4" className="py-2 block">
                        Home Four
                      </NavLink>
                    </li>
                  </div>

                  <div className=" px-5 group  hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/home5" className="py-2 block">
                        Home Five
                      </NavLink>
                    </li>
                  </div>
                </ul>
              </div>
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-white hover:text-SecondaryColor-0 pr-12   lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative`}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-white hover:text-SecondaryColor-0 pr-12   lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative`}
              to="#"
            >
              <span className="flex items-center">
                Service
                <BiChevronDown className="ml-1" />
              </span>
              <div className="absolute pt-5 lg:pt-8 z-20">
                <ul className="shadow-lg hidden group-hover:block rounded-sm  text-white w-[200px] text-left   transition-all duration-500 text-sm sm:text-base py-4 bg-[#171717] ">
                  <div className=" px-5 group  hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/" className="py-2 block">
                        Service One
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group  hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/home2" className="py-2 block">
                        Service Two
                      </NavLink>
                    </li>
                  </div>

                  <div className=" px-5 group  hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/home3" className="py-2 block">
                        Service Four
                      </NavLink>
                    </li>
                  </div>
                </ul>
              </div>
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""}  text-white hover:text-SecondaryColor-0 pr-12   lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative `}
              to="#"
            >
              <span className="flex items-center">
                Page
                <BiChevronDown className="ml-1" />
              </span>
              <div className="absolute pt-5 lg:pt-8 z-20">
                <ul className="shadow-lg hidden group-hover:block rounded-sm  text-white w-[200px] text-left   transition-all duration-500 text-sm sm:text-base py-4 bg-[#171717] ">
                  <div className=" px-5 group  hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/" className="py-2 block">
                        Page One
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group  hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/home2" className="py-2 block">
                        Page Two
                      </NavLink>
                    </li>
                  </div>

                  <div className=" px-5 group  hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/home3" className="py-2 block">
                        Page Four
                      </NavLink>
                    </li>
                  </div>
                </ul>
              </div>
            </NavLink>
            {/* blog sub menu link */}
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-white hover:text-SecondaryColor-0 pr-12   lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative `}
              to="#"
            >
              <span className="flex items-center">
                BLOG
                <BiChevronDown className="ml-1" />
              </span>
              <div className="absolute pt-5 lg:pt-8 z-20">
                <ul className="shadow-lg hidden group-hover:block rounded-sm  text-white w-[200px] text-left   transition-all duration-500 text-sm sm:text-base py-4 bg-[#171717] ">
                  <div className=" px-5 group  hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/" className="py-2 block">
                        Home One
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group  hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/home2" className="py-2 block">
                        Home Two
                      </NavLink>
                    </li>
                  </div>

                  <div className=" px-5 group  hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/home3" className="py-2 block">
                        Home Three
                      </NavLink>
                    </li>
                  </div>
                </ul>
              </div>
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""}    lg:border-b-0 px-3 py-2 w-full block transition-all duration-300`}
              to="/contact"
            >
              Contact
            </NavLink>
            <div className="hidden lg:flex items-center lg:pl-10 ">
              <Link to={"/"}>
                <BiMenuAltLeft className="w-10 h-10 bg-SecondaryColor-0 text-xl text-white" />
              </Link>
            </div>
          </ul>

          {/* large device visible button and search icon */}
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
