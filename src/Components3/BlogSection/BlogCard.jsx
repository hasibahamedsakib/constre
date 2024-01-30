import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogCard = ({
  blogImg,
  blogDate,
  blogComment,
  user,
  blogTitle,
  blogUrl,
}) => {
  return (
    <div className="rounded-md border-b-orange border-b-[1px] relative group">
      <div className="overflow-hidden rounded-t-md">
        <img
          src={blogImg}
          alt="service section images "
          draggable={false}
          className="w-full rounded-t-md group-hover:scale-110 transition-all duration-300"
        />
      </div>
      {/* card icons */}
      <div className="px-[20px] xl:px-[26px] py-[10px] xl:py-[12px] bg-orange group-hover:bg-wheat absolute right-0 top-[43%] sm:top-[62%] md:top-[47%] lg:top-[43%] xl:top-[46%] 2xl:top-1/2 rounded-l-full  flex items-center justify-center transition-all duration-300 overflow-hidden">
        <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-in-out transform translate-y-0 bg-normalBlack group-hover:h-full opacity-90"></span>
        <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-in-out transform translate-y-0 bg-orange group-hover:h-full "></span>
        <p className="text-white text-base md:text-lg font-Yantramanav font-medium z-[1] transition-all duration-300">
          {blogDate}
        </p>
      </div>
      {/* card details*/}
      <div className="p-5 xl:px-[37px] xl:pt-[25px] xl:pb-[15px] bg-wheat">
        <p className="tex-sm sm:text-base md:text-[17px] leading-7 text-graySmoke mb-[15px] ">
          <span>{user}</span> / <span>{blogComment}</span>
        </p>

        <Link className="" to="#">
          <h2 className="text-lg sm:text-xl xl:text-2xl text-normalBlack group-hover:text-orange font-Yantramanav font-bold leading-7 lg:leading-8 transition-all duration-300 ease-in-out">
            {blogTitle}
          </h2>
        </Link>

        <div className="flex items-center justify-between">
          <Link
            className="flex items-center text-sm sm:text-base md:text-[17px] text-normalBlack group-hover:text-orange font-medium font-Yantramanav leading-10 2xl:leading-[45px] mt-2 transition-all duration-300"
            to={blogUrl}
          >
            Read More
            <FaArrowRightLong className="text-normalBlack group-hover:text-orange  ml-2 transition-all duration-300" />
          </Link>

          <img
            src="./images/home-3/blog-shape.png"
            alt="blog shape"
            draggable={!true}
            className="filter hue-rotate-30 brightness-0 invert-0 transition-all duration-300 group-hover:filter-none"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
