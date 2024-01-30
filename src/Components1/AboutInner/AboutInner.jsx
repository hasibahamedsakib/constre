import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import aboutInnerImg from "/assets/images/about/about-inner-thumb.jpg"
import aboutInnerImg2 from "/assets/images/about/about-inner-thumb2.jpg"
import aboutInnerProfile from "/assets/images/about/about-author.jpg";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const AboutInner = () => {
    return (
      <section className="bg-[url('/assets/images/about/about_bg2.jpg')] bg-center bg-no-repeat py-28">
        <div className="Container grid grid-cols-2">
          <div className="inline-block relative z-10">
            <img src={aboutInnerImg} />
            <div className="absolute -bottom-10 -left-28 z-20">
              <img src={aboutInnerImg2} />
            </div>
            <div className="absolute bottom-28 left-28">
              <div className="w-[124px] h-[124px] px-4 rounded-full z-30 bg-white flex flex-col justify-center items-center relative before:absolute before:-top-2 before:-left-1 before:w-full before:h-full before:bg-SecondaryColor-0 before:rounded-full before:-z-10">
                <CountUp
                  start={-9}
                  end={10}
                  suffix="+"
                  className="text-4xl font-Yantramanav font-medium text-white"
                />
                <h6 className="font-Yantramanav text-white font-medium text-center leading-4">
                  Years Experience
                </h6>
              </div>
            </div>
          </div>
          <div>
            <h5 className="section-sub-title">ABOUT US</h5>
            <h1 className="text-[30px] leading-9 md:text-5xl font-bold mb-4 font-Yantramanav text-PrimaryColor-0 pt-3">
              We’re aspire to Enhance Your Stylish experiences
            </h1>
            <p className="font-Archivo text-[#575f66] font-light pt-2 mb-6">
              Monotonectally pontificate multidisciplinary methodologies through
              24 main business. Conveniently develop future-proof niches and
              cross-platform markets. Synergistically aggregate enable
              compelling relationships more principle evolve open-source in
              whereas enterprise human capital
            </p>
            <div>
              <ul className="grid grid-cols-2 gap-3">
                <li className="font-Yantramanav text-lg text-PrimaryColor-0 font-medium flex items-center gap-2">
                  <MdOutlineCheckCircleOutline className="text-xl" /> Expertise
                  Engineers
                </li>
                <li className="font-Yantramanav text-lg text-PrimaryColor-0 font-medium flex items-center gap-2">
                  <MdOutlineCheckCircleOutline className="text-xl" /> Best
                  Quality Supports
                </li>
                <li className="font-Yantramanav text-lg text-PrimaryColor-0 font-medium flex items-center gap-2">
                  <MdOutlineCheckCircleOutline className="text-xl" />{" "}
                  Satisfaction Gauranted
                </li>
                <li className="font-Yantramanav text-lg text-PrimaryColor-0 font-medium flex items-center gap-2">
                  <MdOutlineCheckCircleOutline className="text-xl" /> 100%
                  Timely Finised Work
                </li>
              </ul>
            </div>
            <div className="flex gap-5 mt-10">
              <div>
                <Link to={"/"}>
                  <button className="group primary-button bg-SecondaryColor-0 text-white inline-block font-Yantramanav px-9 py-4 font-medium">
                    About More
                    <FaArrowRightLong className="inline-block ml-1 -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                  </button>
                </Link>
              </div>
              <div className="flex gap-5 items-center">
                <div>
                  <img src={aboutInnerProfile} />
                </div>
                <div>
                  <h6 className="font-Yantramanav text-xl font-medium text-PrimaryColor-0">
                    John D. Alexon
                  </h6>
                  <p className="text-sm font-Archivo font-light">
                    CEO & Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default AboutInner;