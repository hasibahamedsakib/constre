import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";

const Navbar3 = () => {
  // modal openar
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={` w-full  font-Lora z-10  lg:px-5 lg:py-2  transition-all duration-300   text-black`}
    >
      <div className=" Container">
        <div className="flex flex-col lg:flex-row items-center justify-between">
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
            } text-left w-full lg:w-fit  ease-in-out lg:flex space-y-2 lg:space-y-0 lg:text-center space-x-0 lg:space-x-3 xl:space-x-4 2xl:space-x-5 3xl:space-x-[24px] flex flex-col lg:flex-row text-sm    uppercase font-normal   lg:bg-transparent dark:lg:bg-transparent py-3 lg:py-0 `}
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
                <ul className="shadow-2xl hidden group-hover:block rounded-sm  text-black w-[200px] text-left   transition-all duration-500 text-sm py-4 ">
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/" className="py-2 block">
                        Hotel Booking
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/home2" className="py-2 block">
                        Resort
                      </NavLink>
                    </li>
                  </div>

                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/home3" className="py-2 block">
                        Hostel
                      </NavLink>
                    </li>
                  </div>

                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/home4" className="py-2 block">
                        City Hotel
                      </NavLink>
                    </li>
                  </div>

                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/home5" className="py-2 block">
                        Apartment
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
                Rooms
                <BiChevronDown className="ml-1" />
              </span>
              <div className="absolute pt-5 lg:pt-8 z-20">
                <ul className="shadow-2xl hidden group-hover:block rounded-sm  text-black w-[200px] text-left   transition-all duration-500 text-sm py-4 ">
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/room" className="block py-2">
                        Room
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/find_room" className="block py-2">
                        Find Room
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
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
                <ul className="shadow-2xl hidden group-hover:block rounded-sm  text-black w-[200px] text-left   transition-all duration-500 text-sm py-4 ">
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/about" className="py-2 block">
                        ABOUT US
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/services" className="py-2 block">
                        SERVICE
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/service_details" className="py-2 block">
                        SERVICE DETAILS
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/our_team" className="py-2 block">
                        OUR TEAM
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
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
                <ul className="shadow-2xl hidden group-hover:block rounded-sm  text-black w-60 text-left   transition-all duration-500 text-sm  py-4">
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300 ">
                      <NavLink to="/blog" className="py-2 block">
                        BLOG
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
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
              <button className="w-[200px] h-[56px] bg-orange rounded-md font-Yantramanav text-white text-lg flex items-center justify-center space-x-2">
                Get A Quoute
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar3;
