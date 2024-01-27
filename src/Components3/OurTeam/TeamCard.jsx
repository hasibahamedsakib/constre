import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamCard = ({ teamMemberImg, name, designation }) => {
  return (
    <div className="w-[286px] h-[383px] group overflow-y-hidden relative">
      <div className="w-[286px] h-[330px] relative group overflow-y-hidden">
        <img
          src={teamMemberImg}
          alt="team-member images"
          className="w-full h-full rounded-md"
        />
        <div className="w-[42px] h-[170px] rounded-b-full absolute right-0 top-0 bg-orange grid items-center justify-center py-[20px] -mt-[170px] group-hover:-mt-0 transition-all ease-in-out duration-500">
          <Link to={""}>
            <FaPinterestP size={16} className=" text-white" />
          </Link>
          <Link to={""}>
            <FaLinkedinIn size={16} className="text-white" />
          </Link>
          <Link to={""}>
            <FaTwitter size={15} className=" text-white" />
          </Link>
          <Link to={""}>
            <FaFacebookF size={16} className=" text-white" />
          </Link>
        </div>
      </div>
      <div className="w-[255px] h-[102px] bg-deepBlue border-[1px] border-orange rounded-tr-md rounded-b-md absolute bottom-0 left-0 p-[30px] grid items-center justify-start ">
        <h3 className="text-lg sm:text-xl font-Yantramanav font-bold leading-9 text-white">
          {name}
        </h3>
        <p className="text-sm sm:text-base leading-9 font-Archivo font-light text-graySmoke ">
          {designation}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
