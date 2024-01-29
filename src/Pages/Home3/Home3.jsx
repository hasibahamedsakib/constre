import AboutConstre from "../../Components3/AboutConstre/AboutConstre";
import HeroSection from "../../Components3/HeroSection/HeroSection";
import LatestProject from "../../Components3/LatestProject/LatestProject";
import LocationAndContact from "../../Components3/LocationAndContact/LocationAndContact";
import OurServices from "../../Components3/OurServices/OurServices";
import OurTeam from "../../Components3/OurTeam/OurTeam";
import ProjectPlanning from "../../Components3/ProjectPlanning/ProjectPlanning";
import Testimonials from "../../Components3/Testimonials/Testimonials";

const Home3 = () => {
  return (
    <>
      <div>
        <HeroSection />
        <OurServices />
        <AboutConstre />
        <LatestProject />
        <OurTeam />
        <LocationAndContact />
        <Testimonials />
        <ProjectPlanning />
      </div>
    </>
  );
};

export default Home3;
