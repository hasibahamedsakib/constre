import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useSwiper } from "swiper/react";

const ServiceNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className="justify-center flex gap-7 mt-20">
      <button
        className="w-12 h-12 overflow-visible relative bg-white flex items-center text-sm text-[#1717177a] justify-center hover:text-white transition-all duration-500 z-10 before:absolute before:-left-16 before:top-1/2 before:-translate-y-1/2 before:w-12 before:h-[2px] before:bg-[#1717172a] after:absolute after:top-[0] after:left-[0] after:bg-SecondaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100"
        onClick={() => swiper.slidePrev()}
      >
        <FaChevronLeft />
      </button>
      <button
        className="w-12 h-12 overflow-visible relative bg-white flex items-center text-sm text-[#1717177a] justify-center hover:text-white transition-all duration-500 z-10 before:absolute before:-right-16 before:top-1/2 before:-translate-y-1/2 before:w-12 before:h-[2px] before:bg-[#1717172a] after:absolute after:top-[0] after:left-[0] after:bg-SecondaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100"
        onClick={() => swiper.slideNext()}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ServiceNavigation;
