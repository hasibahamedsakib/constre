import FeatureMain from "./FeatureMain";


const Feature = () => {
  return (
    <section className="py-28 bg-PrimaryColor-0">
      <div className="Container">
        <h5 className="section-sub-title">WHO WE ARE ?</h5>
        <h1 className="text-[30px] leading-9 md:text-5xl font-bold mb-5 font-Yantramanav text-white pt-3 pb-7">
          Top Constructor in USA
        </h1>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          <FeatureMain
            number={"01"}
            designation={"Expertise"}
            title={"Experienced Workers"}
            desc={
              "Compellingly foster B2B information through prospective mindshare brand"
            }
            button={"Read More"}
          />
          <FeatureMain
            number={"02"}
            designation={"Award"}
            title={"Award Wining Company"}
            desc={
              "Compellingly foster B2B information through prospective mindshare brand"
            }
            button={"Read More"}
          />
          <FeatureMain
            number={"03"}
            designation={"Experienced"}
            title={"10+ Years Experience"}
            desc={
              "Compellingly foster B2B information through prospective mindshare brand"
            }
            button={"Read More"}
          />
        </div>
      </div>
    </section>
  );
};

export default Feature;
