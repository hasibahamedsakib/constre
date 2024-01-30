import { FiLink } from "react-icons/fi";
import { MdOutlineControlCamera } from "react-icons/md";
import { Link } from "react-router-dom";

const ProjectCard = ({
  projectImg,
  projectName,
  projectInfo,
  controlUrl,
  linkUrl,
}) => {
  return (
    <div
      className={`overflow-hidden relative rounded-md h-[500px] w-full  bg-center bg-cover`}
    >
      <img
        src={projectImg}
        alt="project image"
        className="w-full h-full absolute object-cover"
        draggable={!true}
      />
      {/* latest project description content */}
      <div className="w-full h-full absolute hover:bg-gradient-to-b from-[#f5f6fc1a] via-[#f5f6fc1a] via-[#ff5e1480] to-orange transition-all duration-300 group ">
        <div className="w-[52px] h-[162px] rounded-b-full absolute right-0 top-0 bg-orange grid gap-[10px] content-end items-center justify-center pb-[10px] -mt-[170px] group-hover:-mt-0 transition-all ease-in-out duration-500">
          <Link
            to={controlUrl}
            className="w-10 h-10 rounded-full bg-white grid items-center justify-center  hover:bg-normalBlack transition-all duration-300"
          >
            <MdOutlineControlCamera
              size={25}
              className="text-orange rotate-45 hover:text-white"
            />
          </Link>
          <Link
            to={linkUrl}
            className="w-10 h-10 rounded-full bg-white grid items-center justify-center cursor-pointer hover:bg-normalBlack transition-all duration-300"
          >
            <FiLink size={18} className="text-orange hover:text-white" />
          </Link>
        </div>
        <div className="absolute bottom-[30px] left-0 right-0 -mb-[100px] group-hover:-mb-0 transition-all duration-500 ease-in-out">
          <h5 className="text-center text-xl md:text-2xl lg:text-[26px] font-Yantramanav leading-6 text-white font-bold">
            {projectName}
          </h5>
          <h6 className="text-center text-base md:text-lg font-Archivo leading-6 text-white font-medium mt-1">
            {projectInfo}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
