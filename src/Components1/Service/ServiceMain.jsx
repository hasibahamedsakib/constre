import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ServiceMain = ({
  serviceBoxIcon,
  serviceBoxTitle,
  serviceBoxDesc,
  url,
  serviceBoxImg,
}) => {
  return (
    <div className="group bg-white p-[30px] border-b-[3px] border-SecondaryColor-0 transition-all duration-500 hover:border-PrimaryColor-0 relative z-10 before:absolute before:bottom-0 before:left-0 before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 before:w-full before:h-0 hover:before:h-full">
      <span className="text-5xl text-SecondaryColor-0 transition-all duration-500 group-hover:text-white w-20 h-20 bg-[#f5f6f7] flex items-center justify-center  relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:scale-0 before:transition-all before:duration-500 group-hover:before:scale-100">
        {serviceBoxIcon}
      </span>
      <h5 className="font-Yantramanav text-[22px] text-PrimaryColor-0 font-bold transition-all duration-500 group-hover:text-white inline-block mt-6 mb-3">
        {serviceBoxTitle}
      </h5>
      <p className="font-Archivo text-[#575f66] font-light -mb-1 group-hover:opacity-0 transition-all duration-500 ">
        {serviceBoxDesc}
      </p>
      <div>
        <Link to={url}>
          <button className="font-Yantramanav text-base font-medium border-b inline-block text-SecondaryColor-0 border-SecondaryColor-0 transition-all duration-300 opacity-0 group-hover:opacity-100 relative -top-9">
            Read More{" "}
            <FaArrowRightLong className="inline-block group-hover:-rotate-45 transition-all" />
          </button>
        </Link>
      </div>
      <div className="border-4 border-transparent group-hover:border-white transition-all duration-500 inline-block">
        <img src={serviceBoxImg} alt="Image" className="w-full" />
      </div>
    </div>
  );
};

export default ServiceMain;
