import { AiOutlinePlus } from "react-icons/ai";
import blogImg from "/assets/images/blog/blog_thumb01.png";
import blogImg2 from "/assets/images/blog/blog_thumb02.png";
import blogImg3 from "/assets/images/blog/blog_thumb03.png";
import BlogMain from "./BlogMain";

const Blog = () => {
  return (
    <section className="py-28">
      <div className="Container">
        <div className="text-center">
          <h5 className="section-sub-title">WHAT WE DO</h5>
          <h1 className="text-[30px] leading-9 md:text-5xl font-bold mb-4 font-Yantramanav text-PrimaryColor-0 pt-3">
            Services What we Provide
          </h1>
          <p className="font-Archivo font-light text-[#575f66] md:w-2/4 m-auto pt-1 2xl:w-5/12 ">
            Monotonectally iterate stand-alone bandwidth rather than driven
            materials. Continually drive client-based e-markets
          </p>
        </div>
        <div className="grid gap-7 items-center pt-14 md:grid-cols-2 lg:grid-cols-3">
          <BlogMain
            blogBoxImg={blogImg}
            blogBoxPost={"By Constre"}
            blogBoxDate={"02 January, 2024"}
            blogBoxTitle={"Most Popular Building Design Equipment - 2024"}
            blogBoxLink={"Read More"}
            blogBoxIcon={<AiOutlinePlus />}
          />
          <BlogMain
            blogBoxImg={blogImg2}
            blogBoxPost={"By Constre"}
            blogBoxDate={"02 January, 2024"}
            blogBoxTitle={"How to Plan A Modern Building Design Properly?"}
            blogBoxLink={"Read More"}
            blogBoxIcon={<AiOutlinePlus />}
          />
          <BlogMain
            blogBoxImg={blogImg3}
            blogBoxPost={"By Constre"}
            blogBoxDate={"02 January, 2024"}
            blogBoxTitle={"Top 10 Equipment for Building Design Tools - 2024"}
            blogBoxLink={"Read More"}
            blogBoxIcon={<AiOutlinePlus />}
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
