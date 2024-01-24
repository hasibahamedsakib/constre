/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { VscTools } from "react-icons/vsc";
import { BsHouseGearFill } from "react-icons/bs";
import { GrUserSettings } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ServiceCard = ({ image, title, description, icon, btnUrl }) => {
  return (
    <div className="rounded-md border-b-orange border-b-[1px] relative group">
      <div className="overflow-hidden">
        <img
          src={image}
          alt="service section images "
          draggable={false}
          className="w-full rounded-t-md group-hover:scale-110 transition-all duration-300"
        />
      </div>
      {/* card icons */}
      <div className="w-[100px] h-[70px] bg-orange group-hover:bg-wheat absolute right-0 top-1/2 rounded-l-full border-b-2 border-b-normalBlack flex items-center justify-center transition-all duration-300 overflow-hidden">
        <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-normalBlack group-hover:h-full opacity-90"></span>
        <span className="text-white  z-[1] transition-all duration-300">
          {icon}
        </span>
      </div>
      {/* card details*/}
      <div className="p-5 xl:px-[37px] xl:py-[22px] bg-wheat">
        <Link className="" to="#">
          <h2 className="text-2xl xl:text-[26px] text-normalBlack hover:text-orange font-Yantramanav font-bold leading-9 lg:leading-10 xl:leading-[45px] transition-all duration-300">
            {title}
          </h2>
        </Link>
        <p className="tex-sm sm:text-base leading-7 text-gray font-light mt-[6px]">
          {description}
        </p>
        <Link
          className="flex items-center text-[17px] text-orange font-medium font-Yantramanav leading-10 mt-3"
          to={btnUrl}
        >
          Read More
          <FaArrowRightLong className="text-orange ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;