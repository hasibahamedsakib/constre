import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-[url('/images/home-3/home3_hero_bg.jpg')] h-[850px] bg-center bg-cover bg-no-repeat  flex justify-start items-center ">
      <div className="Container">
        <div className="sm:w-[420px] md:w-[450px] lg:w-[500px] xl:w-[550px] font-Archivo ">
          <p className="text-sm sm:text-base md:text-lg xl:text-xl font-medium text-orange ">
            Welcome to Constre
          </p>
          <h1
            className="text-3xl md:text-4xl xl:text-5xl uppercase text-white font-bold py-2 leading-10 md:leading-[50px] lg:leading-[60px] xl:leading-[70px] font-Archivo "
            style={{ wordSpacing: "6px" }}
          >
            Building a new and consistent
            <span className="text-orange"> future</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg leading-7 text-whiteSmoke text-opacity-80 font-light font-Archivo ">
            Modern timber roofs are masters framed with pairs of common rafters
            or prefabricated wooden trusses fastened.
          </p>
          <div className="flex  items-center mt-8 md:mt-9 lg:mt-10 xl:mt-11 2xl:mt-[50px] gap-3 md:gap-[15px] lg:gap-[30px]">
            <Link to="#">
              <button className="w-[150px] h-[50px] xl:w-[200px] xl:h-[56px] bg-orange hover:bg-[#c43e00] transition-all duration-300 rounded-md font-Yantramanav text-white text-base md:text-md 2xl:text-lg flex items-center justify-center">
                Get A Quoute
                <FaArrowRight className="text-white ml-2" size={16} />
              </button>
            </Link>
            <div className="flex items-center gap-[10px] lg:gap-4">
              <Link to="#">
                <img
                  src="/images/home-3/hero-user.png"
                  className="w-[100px] md:w-[110px] lg:w-full"
                  alt=""
                />
              </Link>
              <p className="text-sm md:text-base lg:text-lg leading-7 text-white  font-medium font-Archivo hidden sm:block">
                20k+ Happy Client
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
