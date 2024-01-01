import { Outlet } from "react-router-dom";

import ScrollToTop from "../ScrollToTop";
import Navbar3 from "../Shared/Navbar/Navbar3";
import Footer3 from "../Shared/Footer/Footer3";

const Main3 = () => {
  return (
    <>
      <ScrollToTop />

      <Navbar3 />
      <div>
        <Outlet />
      </div>
      <Footer3 />
    </>
  );
};

export default Main3;
