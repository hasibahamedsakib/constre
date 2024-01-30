import About from "../../Components1/About/About";
import AboutInner from "../../Components1/AboutInner/AboutInner";
import Banner from "../../Components1/Banner/Banner";
import Blog from "../../Components1/Blog/Blog";
import Brand from "../../Components1/Brand/Brand";
import Breadcamp from "../../Components1/Breadcamp/Breadcamp";
import ContactBox from "../../Components1/ContactInner/ContactBox";
import Feature from "../../Components1/Feature/Feature";
import Project from "../../Components1/Project/Project";
import Service from "../../Components1/Service/Service";
import TeamMember from "../../Components1/TeamMember/TeamMember";
import Testimonial from "../../Components1/Testimonial/Testimonial";
import WhyChoose from "../../Components1/WhyChoose/WhyChoose";

const Home1 = () => {
  return (
    <>
      <Banner />
      <Feature />
      <About />
      <Service />
      <WhyChoose />
      <Project />
      <Breadcamp />
      <AboutInner />
      <ContactBox />
      <TeamMember />
      <Testimonial />
      <Brand />
      <Blog />
    </>
  );
};

export default Home1;
