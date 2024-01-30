import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import GoToTop from "../Shared/GoToTop";
import { useEffect } from "react";

// Animation
import AOS from "aos";
import "aos/dist/aos.css";
import Footer1 from "../Shared/Footer/Footer1";

import Navbar from "../Shared/Navbar/Navbar";

const Main1 = () => {
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <ScrollToTop />
      <GoToTop />
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer1 />
    </>
  );
};

export default Main1;
