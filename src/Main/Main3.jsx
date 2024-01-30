import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Navbar3 from "../Shared/Navbar/Navbar3";
import Footer3 from "../Shared/Footer/Footer3";
import GoToTop from "../Shared/GoToTop";
import { useEffect } from "react";

// Animation
import AOS from "aos";
import "aos/dist/aos.css";

const Main3 = () => {
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <ScrollToTop />
      <GoToTop />
      <Navbar3 />
      <div>
        <Outlet />
      </div>
      <Footer3 />
    </>
  );
};

export default Main3;
