import ProgressBar from "react-animated-progress-bar";
import { TfiCheckBox } from "react-icons/tfi";
import whyChooseImg from "/assets/images/choose/why-choose-thumb.png";
import whychooseShape from "/assets/images/choose/choose-shape.png";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoPlaySharp } from "react-icons/io5";
import CountUp from "react-countup";

const WhyChoose = () => {
  return (
    <section className="bg-[#f5f6f8] relative z-10">
      <div className="Container flex flex-col items-center bg-white lg:flex-row">
        <div className="flex-1">
          <div className="relative inline-block">
            <img
              src={whyChooseImg}
              className="w-full ml-0 mb-7 lg:mb-0 lg:w-[inherit] lg:max-w-[inherit] lg:-ml-[28rem] 2xl:-ml-[21rem]"
            />
            <div className="h-20 w-20 bg-SecondaryColor-0 flex items-center justify-center absolute bottom-10 right-8 sm:right-12 md:bottom-12 md:right-16 md:h-[120px] md:w-[120px] lg:bottom-6 lg:right-20">
              <Link to={"/"}>
                <button className="h-8 w-8 rounded-full bg-white flex justify-center items-center text-lg text-SecondaryColor-0 animate-[play-btn_8s_linear_infinite] md:text-2xl md:h-16 md:w-16">
                  <IoPlaySharp />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div>
            <h5 className="section-sub-title">WHY CHOOSE US</h5>
            <h1 className="text-[30px] leading-9 md:text-5xl font-bold mb-5 font-Yantramanav text-PrimaryColor-0 pt-3">
              Build Your Full Projects Management
            </h1>
            <p className="font-Archivo text-[#575f66] font-light mb-6">
              Monotonectally pontificate multidisciplinary methodologies through
              24/7 e-business. Conveniently develop future-proof niches
            </p>
            <ul>
              <li>
                <h5 className="font-Yantramanav text-lg text-PrimaryColor-0 inline-block mb-3">
                  <TfiCheckBox className="text-SecondaryColor-0 inline-block mr-2 text-xl" />
                  Credibly communicate performance
                </h5>
              </li>
              <li>
                <h5 className="font-Yantramanav text-lg text-PrimaryColor-0 inline-block mb-3">
                  <TfiCheckBox className="text-SecondaryColor-0 inline-block mr-2 text-xl" />
                  Professionally monetize enterprise action items
                </h5>
              </li>
              <li>
                <h5 className="font-Yantramanav text-lg text-PrimaryColor-0 inline-block mb-3">
                  <TfiCheckBox className="text-SecondaryColor-0 inline-block mr-2 text-xl" />
                  Assertively strategize out-of applications
                </h5>
              </li>
            </ul>
            <div className="mt-4">
              <h5 className="font-Yantramanav text-lg text-PrimaryColor-0 -mb-6">
                Constructions
              </h5>
              <ProgressBar
                rect
                width="100%"
                height="8px"
                fontColor="#1b1b1b"
                fontSize="16px"
                percentage="80"
                defColor={{
                  excellent: "#ff5e14",
                  good: "blue",
                  fair: "green",
                  poor: "red",
                }}
                rectBorderRadius="0px"
                trackPathColor="#171717"
                trackBorderColor="transparent"
              />
            </div>
            <div>
              <h5 className="font-Yantramanav text-lg text-PrimaryColor-0 -mb-6">
                Renovation
              </h5>
              <ProgressBar
                rect
                width="100%"
                height="8px"
                fontColor="#1b1b1b"
                fontSize="16px"
                percentage="70"
                defColor={{
                  excellent: "#ff5e14",
                  good: "blue",
                  fair: "green",
                  poor: "red",
                }}
                rectBorderRadius="0px"
                trackPathColor="#171717"
                trackBorderColor="transparent"
              />
            </div>
            <Link to={"/"}>
              <button className="group primary-button2 inline-block mt-4 mb-10">
                Get Started Now
                <FaArrowRightLong className="inline-block ml-1 -rotate-45 group-hover:rotate-0 transition-all duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="Container">
        <div className="py-28 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          <div className="group bg-[url('/assets/images/counter/counter_shape.png')] bg-no-repeat overflow-hidden bg-cover p-4 z-10 relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border-0 after:border-SecondaryColor-0 after:z-10 after:transition-all after:duration-500 hover:after:border-[16px]">
            <div className="text-center py-8 z-10 relative bg-white before:absolute before:-bottom-14 before:-right-14 before:w-[34px] before:h-[34px] before:transition-all before:duration-700 before:bg-[url(/assets/images/feature/feature-shape.png)] group-hover:before:bottom-0 group-hover:before:right-0 ">
              <CountUp
                start={-29}
                end={30}
                suffix="K+"
                className="text-5xl font-Yantramanav font-bold text-PrimaryColor-0"
              />
              <h6 className="font-Archivo font-light text-[#575f66] mt-2">
                Project Completed
              </h6>
            </div>
          </div>
          <div className="group bg-[url('/assets/images/counter/counter_shape.png')] bg-no-repeat overflow-hidden bg-cover p-4 z-10 relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border-0 after:border-SecondaryColor-0 after:z-10 after:transition-all after:duration-500 hover:after:border-[16px]">
            <div className="text-center py-8 z-10 relative bg-white before:absolute before:-bottom-14 before:-right-14 before:w-[34px] before:h-[34px] before:transition-all before:duration-700 before:bg-[url(/assets/images/feature/feature-shape.png)] group-hover:before:bottom-0 group-hover:before:right-0 ">
              <CountUp
                start={-9}
                end={10}
                suffix="K+"
                className="text-5xl font-Yantramanav font-bold text-PrimaryColor-0"
              />
              <h6 className="font-Archivo font-light text-[#575f66] mt-2">
                Happy Customers
              </h6>
            </div>
          </div>
          <div className="group bg-[url('/assets/images/counter/counter_shape.png')] bg-no-repeat overflow-hidden bg-cover p-4 z-10 relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border-0 after:border-SecondaryColor-0 after:z-10 after:transition-all after:duration-500 hover:after:border-[16px]">
            <div className="text-center py-8 z-10 relative bg-white before:absolute before:-bottom-14 before:-right-14 before:w-[34px] before:h-[34px] before:transition-all before:duration-700 before:bg-[url(/assets/images/feature/feature-shape.png)] group-hover:before:bottom-0 group-hover:before:right-0 ">
              <CountUp
                start={-97}
                end={98}
                suffix="K+"
                className="text-5xl font-Yantramanav font-bold text-PrimaryColor-0"
              />
              <h6 className="font-Archivo font-light text-[#575f66] mt-2">
                Expert Engineers
              </h6>
            </div>
          </div>
          <div className="group bg-[url('/assets/images/counter/counter_shape.png')] bg-no-repeat overflow-hidden bg-cover p-4 z-10 relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border-0 after:border-SecondaryColor-0 after:z-10 after:transition-all after:duration-500 hover:after:border-[16px]">
            <div className="text-center py-8 z-10 relative bg-white before:absolute before:-bottom-14 before:-right-14 before:w-[34px] before:h-[34px] before:transition-all before:duration-700 before:bg-[url(/assets/images/feature/feature-shape.png)] group-hover:before:bottom-0 group-hover:before:right-0 ">
              <CountUp
                start={-9.4}
                end={9.4}
                suffix="+"
                decimals={1}
                decimal="."
                className="text-5xl font-Yantramanav font-bold text-PrimaryColor-0"
              />
              <h6 className="font-Archivo font-light text-[#575f66] mt-2">
                Avg Clients Ratings
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-8 right-0 -z-10 animate-[dance2_3s_alternate_infinite]">
        <img src={whychooseShape} />
      </div>
    </section>
  );
};

export default WhyChoose;
