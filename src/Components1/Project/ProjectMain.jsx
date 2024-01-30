import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProjectMain = ({projectImg,projectSubTilte,projectTitle,projectIcon}) => {
  return (
    <div className="py-5 relative group ">
      <img src={projectImg} />
      <Link
        to={"/"}
        className="group project-box flex justify-between items-center absolute -bottom-[50px] bg-[linear-gradient(90deg,_#ffffffff_0%,_#ffffffff_9%,_#ffffff00_100%)] border-2 border-[#ffffffb3] m-auto w-5/6 border-l-[#FF5E15] px-7 py-6 opacity-0 left-1/2 -translate-x-1/2 transition-all duration-500 group-hover:animate-[shrink_1s_alternate]"
      >
        <div>
          <h6 className="font-Yantramanav font-medium text-lg text-SecondaryColor-0">
            {projectSubTilte}
          </h6>
          <h4 className="font-Yantramanav font-medium text-lg text-PrimaryColor-0 sm:text-2xl lg:text-lg 2xl:text-2xl ">
            {projectTitle}
          </h4>
        </div>
        <div className="w-11 h-11 overflow-visible relative bg-SecondaryColor-0 flex items-center text-sm text-white justify-center transition-all duration-500 z-10 after:absolute after:top-[0] after:left-[0] after:bg-SecondaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100">
          <span className="inline-block ml-1 -rotate-45 group-hover:rotate-0 transition-all duration-300">
            {projectIcon}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ProjectMain;
