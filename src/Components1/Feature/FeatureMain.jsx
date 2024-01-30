/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";


const FeatureMain = ({ number, designation, title, desc, button }) => {
  return (
    <div>
      <div className="feature-box group">
        <div className="flex items-center gap-5 md:gap-3 2xl:gap-5">
          <div>
            <h5 className="w-[50px] h-[50px] bg-SecondaryColor-0 leading-[50px] text-xl text-white font-bold font-Yantramanav text-center">
              {number}
            </h5>
          </div>
          <div>
            <h6 className="text-[15px] text-[#767b7f] font-normal font-Archivo mb-1">
              {designation}
            </h6>
            <h6 className="text-lg font-Yantramanav font-bold group-hover:text-white transition-all duration-500 2xl:text-[22px]">
              {title}
            </h6>
          </div>
        </div>
        <p className="font-Archivo mt-5 mb-6 font-normal text-base text-[#767b7f]">
          {desc}
        </p>
        <Link to={"#"}>
          <button className="font-Yantramanav text-base text-PrimaryColor-0 font-medium border-b inline-block group-hover:text-SecondaryColor-0 group-hover:border-SecondaryColor-0  border-[#17171726] transition-all duration-300">
            {button}
            <FaArrowRightLong className="inline-block -rotate-45 group-hover:rotate-0 transition-all" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureMain;