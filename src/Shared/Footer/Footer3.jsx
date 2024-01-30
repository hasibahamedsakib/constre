import { Link } from "react-router-dom";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import Brand from "../../Components3/Brand/Brand";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa6";
import { BsEnvelopeAt } from "react-icons/bs";

const Footer3 = () => {
  return (
    <footer className="bg-[url('./images/home-3/footer-bg.jpg')] bg-center bg-cover bg-no-repeat">
      <div
        className="w-full  md:w-[720px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1330px] mx-auto"
        data-aos="zoom-in-down"
        data-aos-duration="1100"
      >
        <Brand />
      </div>
      <div className="Container grid md:grid-cols-2 lg:grid-cols-4 gap-5 2xl:gap-[30px] items-center lg:items-start justify-between py-20 2xl:py-[120px] space-y-5 lg:space-y-0">
        <div
          className="px-2 sm:px-5 lg:px-2"
          data-aos="zoom-in-up"
          data-aos-duration="1100"
        >
          <img src="/images/home-3/footer-logo.png" className="" alt="" />
          <p className="text-sm lg:text-base xl:text-[17px] leading-[30px] font-Archivo font-light text-graySmoke  mt-6 lg:mt-[35px] ">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
            eiusmod tempor in cididunt ut labore.
          </p>
          <p className="font-Archivo text-sm sm:text-base text-white font-medium leading-[30px] py-3">
            Opening Hours :{" "}
            <span className="text-sm lg:text-base xl:text-[17px] font-light text-graySmoke  ">
              Monday – Sat: 9am to 6pm
            </span>
          </p>
          <div className="flex items-center space-x-6 mt-2">
            <Link to={""}>
              <FaFacebookF
                size={16}
                className=" text-white hover:text-orange transition-all duration-300"
              />
            </Link>
            <Link to={""}>
              <FaTwitter
                size={16}
                className=" text-white hover:text-orange transition-all duration-300"
              />
            </Link>
            <Link to={""}>
              <FaLinkedinIn
                size={16}
                className="text-white hover:text-orange transition-all duration-300"
              />
            </Link>

            <Link to={""}>
              <FaPinterestP
                size={16}
                className=" text-white hover:text-orange transition-all duration-300"
              />
            </Link>
          </div>
        </div>

        <div
          className="px-2 sm:px-5 lg:px-2 "
          data-aos="zoom-in-up"
          data-aos-duration="1100"
        >
          <h4 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] leading-7 sm:leading-8 md:leading-[30px] font-Yantramanav font-bold text pb-4 md:pb-5 lg:pb-8 2xl:pb-10 text-white">
            Our Services
          </h4>
          <ul className="space-y-[14px]">
            <li className="footer-service-list">
              Chemical Engineering Projects
            </li>
            <li className="footer-service-list">Space Program XYZ</li>
            <li className="footer-service-list">
              Engineering Welding Engineering
            </li>
            <li className="footer-service-list">Welding Engineering</li>
            <li className="footer-service-list">
              Mining Engineering Construction
            </li>
          </ul>
        </div>
        <div
          className="px-2 sm:px-5 lg:px-2 "
          data-aos="zoom-in-up"
          data-aos-duration="1100"
        >
          <h4 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] leading-7 sm:leading-8 md:leading-[30px] font-Yantramanav font-bold text pb-4 md:pb-5 lg:pb-8 2xl:pb-10 text-white">
            Contact Info
          </h4>
          <ul className="space-y-[14px] grid items-center justify-start">
            <p className="flex items-start text-graySmoke font-Archivo font-normal text-sm sm:text-base md:text-[17px] leading-[30px]">
              <IoLocationOutline className="text-white w-[35px] h-[40px]  mr-3" />
              Ta-134/A, Gulshan Badda Link Rd, Rangpur
            </p>
            <p className="flex items-start text-graySmoke font-Archivo font-normal text-sm sm:text-base md:text-[17px] leading-[30px]">
              <IoCallOutline className="text-white w-[22px] h-[22px]  mr-3" />
              <div>
                <span className="mb-1">+ (123) 1234-567-8901 </span> <br />
                <span>+ (123) 1234-567-8902</span>
              </div>
            </p>
            <p className="flex items-start text-graySmoke font-Archivo font-normal text-sm sm:text-base md:text-[17px] leading-[30px]">
              <BsEnvelopeAt className="text-white w-[20px] h-[20px]  mr-3" />
              infoname@gmail.com
            </p>
          </ul>
        </div>
        <div
          className="px-2 sm:px-5 lg:px-2 "
          data-aos="zoom-in-up"
          data-aos-duration="1100"
        >
          <h4 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] leading-7 sm:leading-8 md:leading-[30px] font-Yantramanav font-bold text pb-4 md:pb-5 lg:pb-8 2xl:pb-10 text-white">
            News Latter
          </h4>
          <ul className="space-y-[14px] grid items-center justify-start">
            <p className="flex items-start text-graySmoke font-Archivo font-normal text-sm sm:text-base md:text-[17px] leading-[30px]">
              Tetur adipiscing elit, sed do eiusmod tempor in cididunt ut
              labore.
            </p>
            <form action="">
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Email"
                required
                className="w-[283px] sm:w-full h-[55px] bg-deepBlue focus:outline-0 text-white text-sm sm:text-base md:text-[17px] px-3 capitalize mb-4"
              />
              <button
                type="submit"
                className="w-[150px] sm:w-full h-[50px] xl:h-[53px] bg-orange hover:bg-[#c43e00] transition-all duration-300 rounded-md font-Yantramanav text-white text-base md:text-md 2xl:text-lg flex items-center justify-center"
              >
                SUBSCRIBE
              </button>
            </form>
          </ul>
        </div>
      </div>
      <div
        className="bg-[#0C1438] py-7"
        data-aos="zoom-in-up"
        data-aos-duration="1100"
      >
        <div className="Container flex flex-col sm:flex-row items-center justify-between">
          <p
            className="text-sm xl:text-base text-graySmoke
           font-Archivo font-normal leading-7"
          >
            {` © ${new Date().getFullYear()}. All Rights Reserved By `}
            <strong> Dream-It</strong>
          </p>
          <p
            className="text-sm xl:text-base text-graySmoke
           font-Archivo font-normal leading-7"
          >
            Developed by: <strong>Hasib Ahamed</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;
