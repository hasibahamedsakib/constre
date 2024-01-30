import { Link } from "react-router-dom";
import aboutImg from "/assets/images/about/about_thumb.jpg";
import aboutShape from "/assets/images/about/about-shape.png";
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  return (
    <section className="bg-[url('/assets/images/about/about_bg.jpg')] bg-bannerBg bg-cover relative z-10 bg-no-repeat bg-center py-28">
      <div className="Container flex flex-col  items-center gap-8 lg:flex-row lg:gap-14 2xl:gap-24">
        <div className="flex-1">
          <img src={aboutImg} />
        </div>
        <div className="flex-1">
          <h5 className="section-sub-title">ABOUT US</h5>
          <h1 className="text-[30px] leading-9 md:text-5xl font-bold mb-4 font-Yantramanav text-PrimaryColor-0 pt-3">
            Build Your Full Projects Management
          </h1>
          <p className="font-Archivo text-[#575f66] font-light pt-2 mb-10">
            Monotonectally pontificate multidisciplinary methodologies through
            24/7 main e-business. Conveniently develop future-proof niches and
            cross-platform the markets. Synergistically aggregate enable
            compelling relationships more principle-centered deliverables
            apidiously
          </p>
          <Link to={"/"}>
            <button className="group primary-button bg-SecondaryColor-0 text-white inline-block font-Yantramanav px-9 py-4 font-medium">
              About More
              <FaArrowRightLong className="inline-block ml-1 -rotate-45 group-hover:rotate-0 transition-all duration-300" />
            </button>
          </Link>
        </div>
        <div className="hidden absolute right-[2%] bottom-[5%] animate-[dance2_3s_alternate_infinite] -z-10 md:right-[0%] lg:block xl:bottom-10 2xl:bottom-2 2xl:right-[2%] 3xl:bottom-20 4xl:right-24">
          <img src={aboutShape} className="lg:w-3/5 2xl:w-[inherit]" />
        </div>
      </div>
    </section>
  );
};


export default About;
