import { Link } from "react-router-dom";
import { ImPhone } from "react-icons/im";
import { MdLocationPin } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import footerLogo from "/assets/images/logo/logo.png";
import footerImg1 from "/assets/images/footer/footer1.png";
import footerImg2 from "/assets/images/footer/footer2.png";

const Footer1 = () => {
  return (
    <footer>
      <div className="bg-SecondaryColor-0 relative">
        <div className="Container">
          <div className="flex flex-col md:flex-row justify-end gap-10 py-8 md:items-center md:gap-28 lg:justify-between xl:justify-end">
            <div>
              <h2 className="font-Yantramanav text-white text-[34px] font-bold">
                Our Newsletter
              </h2>
              <p className="font-Archivo text-white text-[15px] font-normal">
                For Latest Update Subscribe Newsletter
              </p>
            </div>
            <div className="inline-block relative">
              <form action="#" method="post">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your E-Mail..."
                  required
                  className="w-full md:w-[345px] h-[60px] p-6 inline-block focus:outline-none 2xl:w-[456px]"
                />
                <div className="absolute top-0 right-0">
                  <button
                    type="submit"
                    className="relative bg-PrimaryColor-0 border border-PrimaryColor-0 text-white inline-block font-Yantramanav px-9 py-[17px] font-medium before:absolute before:top-2/4 z-[1] before:w-[20px] before:h-[20px] before:bg-SecondaryColor-0 before:rounded-[50%] before:-left-5 before:-translate-x-1/2 before:-z-[1] before:-translate-y-1/2 after:absolute after:top-2/4 after:-right-[20px] after:translate-x-1/2 after:-translate-y-1/2 after:w-[20px] after:h-[20px] after:bg-SecondaryColor-0 before:transition-all before:duration-500 after:transition-all after:-z-[1] after:duration-500 after:rounded-[50%] hover:before:animate-[criss-cross-left_0.8s_both] hover:before:[animation-direction:alternate] hover:after:animate-[criss-cross-right.8s_both] hover:after:[animation-direction:alternate] overflow-hidden transition-all duration-300"
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[100px] bg-[url('/assets/images/footer/footer-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="Container grid gap-7 md:grid-cols-2 xl:grid-cols-12">
          <div className="bg-[#212121] py-12 px-12 col-span-4 relative z-10 xl:-mt-[200px] ">
            <img src={footerLogo} />
            <p className="font-Archivo font-light text-[#8e939f] pt-7 pb-5">
              Competently are disseminate high-qualityfu whereas viral
              functionalities building engin user friendly markets through
            </p>
            <h3 className="font-Yantramanav text-white font-medium text-[22px] relative pb-2 before:absolute  before:bottom-0 before:left-0 before:w-[30px] before:h-[2px] before:bg-SecondaryColor-0">
              Contact Info
            </h3>
            <ul>
              <li className="block mt-5">
                <Link to={"#"}>
                  <button type="button" className="inline-block text-[#8e939f]">
                    <ImPhone className="inline-block text-SecondaryColor-0 mr-1" />
                    +980 (1234) 567 890
                  </button>
                </Link>
              </li>
              <li className="block mb-8 mt-4">
                <Link to={"#"} className="flex ">
                  <MdLocationPin className="inline-block text-SecondaryColor-0 text-xl flex-[.1] text-left" />
                  <button
                    type="button"
                    className="inline-block text-[#8e939f] text-left flex-[.9]"
                  >
                    102/B New Elephant Rd, Uttara Dhaka - 1212
                  </button>
                </Link>
              </li>
            </ul>
            <ul className="flex gap-3">
              <li>
                <Link to={"/"}>
                  <button className="relative text-white w-8 h-8 bg-[#ffffff1a] flex justify-center items-center text-sm z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:-z-10 before:scale-0 hover:before:scale-100 ">
                    <FaFacebookF />
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="relative text-white w-8 h-8 bg-[#ffffff1a] flex justify-center items-center text-sm z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:-z-10 before:scale-0 hover:before:scale-100 ">
                    <FaXTwitter />
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="relative text-white w-8 h-8 bg-[#ffffff1a] flex justify-center items-center text-sm z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:-z-10 before:scale-0 hover:before:scale-100 ">
                    <FaLinkedinIn />
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="relative text-white w-8 h-8 bg-[#ffffff1a] flex justify-center items-center text-sm z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:-z-10 before:scale-0 hover:before:scale-100 ">
                    <FaInstagram />
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="font-Yantramanav text-white font-medium text-[22px] relative pb-2 before:absolute  before:bottom-0 before:left-0 before:w-[30px] before:h-[2px] before:bg-SecondaryColor-0 mb-4">
              Quick Links
            </h3>
            <ul>
              <li>
                <Link to={"/"}>
                  <button className="font-Yantramanav font-medium text-[#8e939f] transition-all duration-500 hover:text-white text-[17px] mt-4 ">
                    About Us
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="font-Yantramanav font-medium text-[#8e939f] transition-all duration-500 hover:text-white text-[17px] mt-4">
                    Team Member
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="font-Yantramanav font-medium text-[#8e939f] transition-all duration-500 hover:text-white text-[17px] mt-4">
                    Testimonial
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="font-Yantramanav font-medium text-[#8e939f] transition-all duration-500 hover:text-white text-[17px] mt-4">
                    Blog
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="font-Yantramanav font-medium text-[#8e939f] transition-all duration-500 hover:text-white text-[17px] mt-4">
                    Contact Us
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="font-Yantramanav text-white font-medium text-[22px] relative pb-2 before:absolute  before:bottom-0 before:left-0 before:w-[30px] before:h-[2px] before:bg-SecondaryColor-0 mb-4">
              Our Services
            </h3>
            <ul>
              <li>
                <Link to={"/"}>
                  <button className="font-Yantramanav font-medium text-[#8e939f] transition-all duration-500 hover:text-white text-[17px] mt-4">
                    Construction
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="font-Yantramanav font-medium text-[#8e939f] transition-all duration-500 hover:text-white text-[17px] mt-4">
                    Architecture
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="font-Yantramanav font-medium text-[#8e939f] transition-all duration-500 hover:text-white text-[17px] mt-4">
                    Interior
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="font-Yantramanav font-medium text-[#8e939f] transition-all duration-500 hover:text-white text-[17px] mt-4">
                    Building Design
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="font-Yantramanav font-medium text-[#8e939f] transition-all duration-500 hover:text-white text-[17px] mt-4">
                    Real Eastate
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-4">
            <h3 className="font-Yantramanav text-white font-medium text-[22px] relative pb-2 before:absolute  before:bottom-0 before:left-0 before:w-[30px] before:h-[2px] before:bg-SecondaryColor-0 mb-6">
              Latest Blog
            </h3>
            <Link to={"/"} className="flex gap-5 items-center group mb-7">
              <img src={footerImg1} />
              <div>
                <h4 className="text-white font-Yantramanav font-medium text-lg transition-all duration-500 group-hover:text-SecondaryColor-0">
                  Balancing the Budget of Power...
                </h4>
                <p className="font-light font-Archivo text-[#8e939f] text-sm">
                  Jan 22, 2024
                </p>
              </div>
            </Link>
            <Link to={"/"} className="flex gap-5 items-cente group">
              <img src={footerImg2} />
              <div>
                <h4 className="text-white font-Yantramanav font-medium text-lg transition-all duration-500 group-hover:text-SecondaryColor-0">
                  DC President Invites World Bank...
                </h4>
                <p className="font-light font-Archivo text-[#8e939f] text-sm">
                  Jan 18, 2024
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#212121]">
        <div className="Container flex flex-col justify-between items-center py-7 md:flex-row">
          <div>
            <p className="text-[15px] text-white font-light font-Archivo mb-5 lg:mb-0">
              &copy; 2024, Constre. All Rights Reserved.
            </p>
          </div>
          <div>
            <ul className="flex gap-12">
              <li>
                <Link to={"/"}>
                  <button className="font-Yantramanav text-[17px] font-normal text-[#8e939f] transition-all duration-500 hover:text-white">
                    Terms & Condition
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="font-Yantramanav text-[17px] font-normal text-[#8e939f] transition-all duration-500 hover:text-white">
                    Privacy Policy
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
