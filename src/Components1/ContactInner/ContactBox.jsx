import { Link } from "react-router-dom";
import { FaEnvelope, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";

const ContactBox = () => {
    return (
      <section>
        <div className="Container grid grid-cols-3 gap-7">
          <div className="bg-[#f5f6f8] text-center group pt-10 pb-9">
            <div className="w-[100px] h-[100px] flex items-center justify-center bg-white rounded-full text-SecondaryColor-0 text-4xl relative m-auto z-10 transition-all duration-500 group-hover:text-white before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full group-hover:before:scale-100">
              <FaPhoneVolume />
            </div>
            <h5 className="font-Yantramanav font-medium text-[22px] text-PrimaryColor-0 mt-6 mb-3">
              Give Us a Call
            </h5>
            <ul>
              <li>
                <Link to={"/"}>
                  <button className="font-Archivo text-[#575f66] transition-all duration-500 hover:text-SecondaryColor-0 mb-2">
                    (+880) 123 4567 890
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="font-Archivo text-[#575f66] transition-all duration-500 hover:text-SecondaryColor-0">
                    (+880) 123 4567 890
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-[#f5f6f8] text-center group pt-10 pb-9">
            <div className="w-[100px] h-[100px] flex items-center justify-center bg-white rounded-full text-SecondaryColor-0 text-4xl relative m-auto z-10 transition-all duration-500 group-hover:text-white before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full group-hover:before:scale-100">
              <FaEnvelope />
            </div>
            <h5 className="font-Yantramanav font-medium text-[22px] text-PrimaryColor-0 mt-6 mb-3">
              Send E-Mail
            </h5>
            <ul>
              <li>
                <Link to={"/"}>
                  <button className="font-Archivo text-[#575f66] transition-all duration-500 hover:text-SecondaryColor-0 mb-2">
                    example@yahoo.com
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="font-Archivo text-[#575f66] transition-all duration-500 hover:text-SecondaryColor-0">
                    yourmail@domain.com
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-[#f5f6f8] text-center group pt-10 pb-9">
            <div className="w-[100px] h-[100px] flex items-center justify-center bg-white rounded-full text-SecondaryColor-0 text-4xl relative m-auto z-10 transition-all duration-500 group-hover:text-white before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full group-hover:before:scale-100">
              <FaLocationDot />
            </div>
            <h5 className="font-Yantramanav font-medium text-[22px] text-PrimaryColor-0 mt-6 mb-3">
              Visit Office
            </h5>
            <p className="font-Archivo text-[#575f66] w-4/6 m-auto leading-8">
              102 B/C New Market, Sandigo USA - 1280
            </p>
          </div>
        </div>
      </section>
    );
};

export default ContactBox;