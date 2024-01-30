/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogMain = ({
  blogBoxImg,
  blogBoxPost,
  blogBoxDate,
  blogBoxTitle,
  blogBoxLink,
  blogBoxIcon,
}) => {
  return (
    <div className="group">
      <div className="w-full inline-block overflow-hidden relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-0 before:border-SecondaryColor-0 before:z-10 before:opacity-50 before:transition-all before:duration-500 group-hover:before:border-[30px]">
        <img
          src={blogBoxImg}
          className="w-full group-hover:scale-110 transition-all duration-500"
        />
      </div>
      <div className="px-[30px] py-9 bg-[#F5F6F8] group-hover:bg-white transition-all duration-500 group-hover:drop-shadow-lg relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-SecondaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full -mt-[6px] lg:px-6 xl:px-[30px]">
        <h6 className="text-[#575f66] font-Archivo font-light">
          {blogBoxPost}
          <span className="pl-6 ml-3 relative before:absolute before:top-1 before:left-0 before:bg-[#b1b6bb] before:w-[10px] before:h-[10px] before:rounded-3xl">
            {blogBoxDate}
          </span>
        </h6>
        <div className="border-b border-[#d3d3d494] pb-5 mb-6 mt-4">
          <Link to={"/"}>
            <button className="text-xl font-Yantramanav font-bold text-PrimaryColor-0 text-left md:text-2xl lg:text-xl xl:text-2xl">
              {blogBoxTitle}
            </button>
          </Link>
        </div>
        <Link to={"/"}>
          <button className="flex items-center gap-3 font-Yantramanav font-medium text-[17px]">
            {blogBoxLink}
            <span className="w-8 h-8 flex items-center justify-center bg-transparent relative z-10 text-PrimaryColor-0 transition-all duration-500 group-hover:text-white before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 group-hover:before:scale-100">
              {blogBoxIcon}
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogMain;
