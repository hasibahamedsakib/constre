import { Link, NavLink } from "react-router-dom";
import { FaArrowRight, FaBars } from "react-icons/fa";
import { IoMdCall, IoMdClose } from "react-icons/io";
import { BiChevronDown, BiEnvelope } from "react-icons/bi";
import { useState } from "react";

const Navbar3 = () => {
  // modal openar
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={` w-full transition-all duration-300 bg-wheat  text-graySmoke`}
    >
      {/* top Navbar */}
      <div className="bg-[#090f27] h-[50px] hidden md:flex items-center  ">
        <div className=" Container flex items-center justify-between ">
          <p className="text-sm md:text-base 3xl:text-[17px] items-center font-Yantramanav">
            {" "}
            We will go through all the stages of construction
          </p>
          <div className="flex items-center justify-between gap-4 xl:gap-[60px]">
            <div className="flex items-center text-base font-Yantramanav">
              <IoMdCall className="text-orange mr-2" size={18} />
              +88 ( 5548 ) 6548
            </div>
            <div className="flex items-center text-base font-Yantramanav">
              <BiEnvelope className="text-orange mr-2" size={18} />
              infoyour@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className=" Container">
        {/* main Navbar */}
        <div className="flex flex-col lg:flex-row items-center justify-between  lg:h-[100px]">
          {/* website Logo */}
          <div className=" w-48 lg:w-52 lg:p-4 ">
            <Link to="/">
              <img
                src="/images/home-3/logo.png"
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
                  src="/images/home-3/logo.png"
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
                <IoMdClose className="w-6 h-6 " />
              ) : (
                <FaBars className="w-5 h-5 " />
              )}
            </button>
          </div>
          {/* All navLink are hear with active */}
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } text-left w-full lg:w-fit  ease-in-out lg:flex space-y-2 lg:space-y-0 lg:text-center space-x-0 lg:space-x-3 xl:space-x-4 2xl:space-x-5 3xl:space-x-[24px] flex flex-col lg:flex-row text-sm uppercase lg:bg-transparent dark:lg:bg-transparent py-3 lg:py-0 font-Yantramanav font-medium sm:text-base `}
          >
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""}     lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative`}
              to="/"
            >
              <span className="flex items-center">
                Home
                <BiChevronDown className="ml-1" />
              </span>
              <div className="absolute pt-5 lg:pt-8 z-20">
                <ul className="shadow-lg hidden group-hover:block rounded-sm  text-graySmoke w-[200px] text-left   transition-all duration-500 text-sm sm:text-base py-4 bg-wheat ">
                  <div className=" px-5 group hover:text-white hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/" className="py-2 block">
                        Home One
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:text-white hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/home2" className="py-2 block">
                        Home Two
                      </NavLink>
                    </li>
                  </div>

                  <div className=" px-5 group hover:text-white hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/home3" className="py-2 block">
                        Home Three
                      </NavLink>
                    </li>
                  </div>

                  <div className=" px-5 group hover:text-white hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/home4" className="py-2 block">
                        Home Four
                      </NavLink>
                    </li>
                  </div>

                  <div className=" px-5 group hover:text-white hover:bg-orange ">
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
                  : ""}     lg:border-b-0 px-3 py-2 w-full block transition-all duration-300`}
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
                  : ""}     lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative `}
              to="#"
            >
              <span className="flex items-center">
                Service
                <BiChevronDown className="ml-1" />
              </span>
              <div className="absolute pt-5 lg:pt-8 z-20">
                <ul className="shadow-lg hidden group-hover:block rounded-sm  text-graySmoke w-[200px] text-left   transition-all duration-500 text-sm sm:text-base  py-4 bg-wheat ">
                  <div className=" px-5 group hover:text-white hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/room" className="block py-2">
                        Room
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:text-white hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/find_room" className="block py-2">
                        Find Room
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:text-white hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/room_details" className="block py-2">
                        Room Details
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
                  : ""}     lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative `}
              to="#"
            >
              <span className="flex items-center">
                Page
                <BiChevronDown className="ml-1" />
              </span>
              <div className="absolute pt-5 lg:pt-8 z-20">
                <ul className="shadow-lg hidden group-hover:block rounded-sm  text-graySmoke w-[200px] text-left   transition-all duration-500 text-sm sm:text-base  py-4 bg-wheat ">
                  <div className=" px-5 group hover:text-white hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/about" className="py-2 block">
                        ABOUT US
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:text-white hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/services" className="py-2 block">
                        SERVICE
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:text-white hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/service_details" className="py-2 block">
                        SERVICE DETAILS
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:text-white hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/our_team" className="py-2 block">
                        OUR TEAM
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:text-white hover:bg-orange ">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/pricing" className="py-2 block">
                        PRICING
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
                  : ""}     lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative `}
              to="#"
            >
              <span className="flex items-center">
                BLOG
                <BiChevronDown className="ml-1" />
              </span>
              <div className="absolute pt-4 lg:pt-8 z-20">
                <ul className="shadow-lg hidden group-hover:block rounded-sm bg-wheat text-graySmoke w-60 text-left   transition-all duration-500 text-sm sm:text-base py-4">
                  <div className=" px-5 group hover:text-white hover:bg-orange ">
                    <li className="hover:ml-3 duration-300 ">
                      <NavLink to="/blog" className="py-2 block">
                        BLOG
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:text-white hover:bg-orange ">
                    <li className="hover:ml-3 duration-300 ">
                      <NavLink to="/blog_details" className="py-2 block">
                        BLOG DETAILS
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
          </ul>

          {/* large device visible button and search icon */}
          <div className="hidden lg:flex items-center">
            <Link to="#">
              <button className="w-[150px] h-[50px] xl:w-[200px] xl:h-[56px] bg-orange rounded-md font-Yantramanav text-white text-base md:text-md 2xl:text-lg flex items-center justify-center ">
                Get A Quoute
                <FaArrowRight className="text-white ml-2" size={16} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar3;
