import SectionHeader from "../SectionHeader/SectionHeader";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  const blogsData = [
    {
      id: 1,
      blogImg: "./images/home-3/blog-1.jpg",
      blogDate: "20 March",
      user: "Admin",
      blogComment: "5 Comments",
      blogTitle: " Diversity in Building Celebrated by Builderrine",
      blogUrl: "#",
    },
    {
      id: 2,
      blogImg: "./images/home-3/blog-2.jpg",
      blogDate: "15 April",
      user: "Moderator",
      blogComment: "3 Comments",
      blogTitle: " Diversity in Building Celebrated by Builderrine",
      blogUrl: "#",
    },
    {
      id: 3,
      blogImg: "./images/home-3/blog-3.jpg",
      blogDate: "25 June",
      user: "Admin",
      blogComment: "7 Comments",
      blogTitle: " Diversity in Building Celebrated by Builderrine",
      blogUrl: "#",
    },
  ];

  return (
    <section className="py-20 2xl:py-[120px]">
      <div className="Container">
        <SectionHeader subTitle="Latest News" title="Our Latest News & Blog" />
        {/* BLog Content */}

        {/* blog details */}
        <div className="grid items-center md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-[30px] mt-10 md:mt-14 lg:mt-[60px]">
          {blogsData.map(
            ({
              id,
              blogImg,
              blogDate,
              user,
              blogComment,
              blogTitle,
              blogUrl,
            }) => {
              return (
                <BlogCard
                  key={id}
                  blogImg={blogImg}
                  blogDate={blogDate}
                  user={user}
                  blogComment={blogComment}
                  blogTitle={blogTitle}
                  blogUrl={blogUrl}
                />
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
