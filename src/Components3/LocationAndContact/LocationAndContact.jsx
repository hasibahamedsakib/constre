import { BsSmartwatch } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { PiMapPinLine } from "react-icons/pi";
const LocationAndContact = () => {
  return (
    <section className="bg-orange py-12 xl:py-20">
      <div className="Container grid  md:grid-cols-2 lg:grid-cols-3 items-center justify-center lg:justify-between gap-y-4 lg:gap-y-0">
        <div
          className="flex items-center  text-white"
          data-aos="zoom-in"
          data-aos-duration="1100"
        >
          <BsSmartwatch className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-[55px] xl:h-[65px] text-white" />
          <div className="ml-[20px]">
            <h5 className="text-sm sm:text-base font-bold font-Yantramanav leading-7 sm:leading-9 md:leading-10 ">
              WE ARE OPEN MONDAY-FRIDAY
            </h5>
            <h2 className="text-xl sm:text-2xl xl:text-[30px] font-bold font-Yantramanav leading-9 sm:leading-10">
              7:00 am - 9:00 pm
            </h2>
          </div>
        </div>
        <div
          className="flex items-center  text-white"
          data-aos="zoom-in"
          data-aos-duration="1100"
        >
          <FiPhoneCall className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-[55px] xl:h-[65px] text-white" />
          <div className="ml-[20px]">
            <h5 className="text-sm sm:text-base font-bold font-Yantramanav leading-7 sm:leading-9 md:leading-10 ">
              HAVE A QUESTION?
            </h5>
            <h2 className="text-xl sm:text-2xl xl:text-[30px] font-bold font-Yantramanav leading-7 sm:leading-9 md:leading-10">
              +2546 214 21536
            </h2>
          </div>
        </div>
        <div
          className="flex items-center  text-white"
          data-aos="zoom-in"
          data-aos-duration="1100"
        >
          <PiMapPinLine className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-[55px] xl:h-[65px] text-white" />
          <div className="ml-[20px]">
            <h5 className="text-sm sm:text-base font-bold font-Yantramanav leading-7 sm:leading-9 md:leading-10 ">
              NEED A REPAIR? OUR ADDRESS
            </h5>
            <h2 className="text-xl sm:text-2xl xl:text-[30px] font-bold font-Yantramanav leading-7 sm:leading-9 md:leading-10">
              Liza Street, NewYork
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAndContact;
