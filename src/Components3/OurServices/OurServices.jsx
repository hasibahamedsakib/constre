import SectionHeader from "../SectionHeader/SectionHeader";
import { VscTools } from "react-icons/vsc";
import ServiceCard from "./ServiceCard";
const serviceImg_1 = "./images/home-3/service-card-1.jpg";
const serviceImg_2 = "./images/home-3/service-card-2.jpg";
const serviceImg_3 = "./images/home-3/service-card-3.jpg";
import { BsHouseGearFill } from "react-icons/bs";
import { GrUserSettings } from "react-icons/gr";
const OurServices = () => {
  return (
    <section className="py-20 2xl:py-[120px]">
      <div className="Container ">
        <SectionHeader
          subTitle="Our Services"
          title="Our Services That We Provide"
        />

        {/* all service card */}
        <div className="grid items-center md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-[30px] mt-10 md:mt-14 lg:mt-[60px]">
          <ServiceCard
            image={serviceImg_1}
            title="General Construction"
            description="Modern designer are mosters famed common 
              prefabricated wooden make fastened."
            icon={<VscTools size={40} />}
            btnUrl={"#"}
          />
          <ServiceCard
            image={serviceImg_2}
            title="Property maintenance"
            description="Modern designer are mosters famed common 
              prefabricated wooden make fastened."
            icon={<BsHouseGearFill size={40} />}
            btnUrl={"#"}
          />
          <ServiceCard
            image={serviceImg_3}
            title="Project managment"
            description="Modern designer are mosters famed common 
              prefabricated wooden make fastened."
            icon={<GrUserSettings size={40} />}
            btnUrl={"#"}
          />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
