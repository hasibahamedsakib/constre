import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const Breadcamp = () => {
  return (
    <div className="bg-[url('assets/images/breadcamp/breadcamp-bg.jpg')] bg-center flex items-center h-[350px] sm:h-[500px]">
      <div className="Container">
        <h1 className="font-Yantramanav font-bold text-[56px] text-white">
          About Us
        </h1>
        <ul className="flex gap-5 items-center">
          <li>
            <Link to={"/"}>
              <button className="font-Yantramanav font-medium text-white flex gap-2 transition-all duration-500 hover:text-SecondaryColor-0">
                <IoHome /> HOME
              </button>
            </Link>
          </li>
          <li>
            <FaArrowRightLong className="text-white" />
          </li>
          <li>
            <Link to={"/"}>
              <button className="font-Yantramanav font-medium text-white flex gap-2 transition-all duration-500 hover:text-SecondaryColor-0">
                ABOUT US
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcamp;
