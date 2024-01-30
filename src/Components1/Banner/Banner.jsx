import { Link } from "react-router-dom";
import BannerImg from "/assets/images/banner/hero-thumb.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="bg-[url('/assets/images/banner/banner.jpg')] overflow-hidden h-[30rem] bg-left sm:bg-center md:h-[800px] bg-cover items-center flex">
      <div className="Container grid items-center justify-between lg:grid-cols-2">
        <div className="relative z-10">
          <h5 className="inline-block font-Yantramanav text-SecondaryColor-0 text-lg font-medium relative pl-5 before:absolute before:top-2 before:left-0 before:h-[10px] before:w-[10px] before:bg-SecondaryColor-0">
            WELCOME TO CONSTRE
          </h5>
          <h1 className="text-[32px] leading-[42px] md:leading-[60px] md:text-[54px] lg:text-[54px] lg:leading-[68px] text-white font-Yantramanav font-bold  mt-5 mb-14 relative before:absolute before:-bottom-3 before:bg-SecondaryColor-0 before:w-[70px] before:h-[5px]">
            BUILD YOUR DREAM PROPERTY WITH NEW EXPERIENCE
          </h1>
          <Link to={"/"}>
            <button className="group primary-button bg-SecondaryColor-0 text-white inline-block font-Yantramanav px-9 py-4 font-medium">
              Get Started Now
              <FaArrowRightLong className="inline-block ml-1 -rotate-45 group-hover:rotate-0 transition-all duration-300" />
            </button>
          </Link>
          <h1 className="banner-shape text-transparent font-bold text-8xl font-Yantramanav transition duration-300 absolute -left-1/2 -rotate-90 top-1/2 -translate-y-2/4 -z-10 sm:text-9xl md:-left-2/3">
            CONSTRE
          </h1>
        </div>
        <div className="hidden lg:block">
          <img
            src={BannerImg}
            className="lg:-ml-2 max-w-[inherit] -mb-[6.1rem] -ml-12 animate-[Dance_5s_alternate_infinite]"
            alt="Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
