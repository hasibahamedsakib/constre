/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TeamMain = ({
  teamBoxImg,
  teamBoxTitle,
  teamBoxDesignation,
  teamBoxIcon,
  teamBoxIcon2,
  teamBoxIcon3,
}) => {
  return (
    <div className="bg-[url('/assets/images/team/team-shape.jpg')] bg-no-repeat bg-cover p-7 text-center group">
      <div className="inline-block overflow-hidden w-full">
        <img
          src={teamBoxImg}
          className="w-full group-hover:scale-110 transition-all duration-500"
        />
      </div>
      <div className="bg-white group-hover:bg-PrimaryColor-0 transition-all duration-500 group-hover:pb-[52px] group-hover:-mt-[60px] relative -mt-2 overflow-hidden border-b-[3px] border-transparent group-hover:border-SecondaryColor-0">
        <Link to={"/"}>
          <button className="font-Yantramanav font-bold text-[26px] text-PrimaryColor-0 transition-all duration-500 group-hover:text-white pt-6">
            {teamBoxTitle}
          </button>
        </Link>
        <h6 className="font-Yantramanav text-[#575f66] transition-all duration-500 group-hover:text-SecondaryColor-0">
          {teamBoxDesignation}
        </h6>
        <ul className=" flex gap-3 justify-center relative -bottom-9 transition-all duration-500 group-hover:-bottom-5">
          <li>
            <Link to={"/"} className="inline-block">
              <button className="w-[30px] h-[30px] flex items-center justify-center text-white text-[15px] border border-[#ffffff40] hover:border-SecondaryColor-0 bg-transparent transition-all duration-500 z-10 relative before:absolute before:top-0 before:left-0 before:bg-SecondaryColor-0 before:-z-10 before:w-full before:h-full before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                {teamBoxIcon}
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/"} className="inline-block">
              <button className="w-[30px] h-[30px] flex items-center justify-center text-white text-[15px] border border-[#ffffff40] hover:border-SecondaryColor-0 bg-transparent transition-all duration-500 z-10 relative before:absolute before:top-0 before:left-0 before:bg-SecondaryColor-0 before:-z-10 before:w-full before:h-full before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                {teamBoxIcon2}
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/"} className="inline-block">
              <button className="w-[30px] h-[30px] flex items-center justify-center text-white text-[15px] border border-[#ffffff40] hover:border-SecondaryColor-0 bg-transparent transition-all duration-500 z-10 relative before:absolute before:top-0 before:left-0 before:bg-SecondaryColor-0 before:-z-10 before:w-full before:h-full before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                {teamBoxIcon3}
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeamMain;
