import Header from "../Header/header";
import Blogsheader from "../Blogsheader/blogsheader";
import Blogs from "../Blogs/blogs";

const Courses = (props) => {
  const { header, blogs } = props;
  return (
    <div className="course-container">
      <img
        src="https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-2048x315.png"
        alt="guvi-logo" className="img-url"
      />

      <Header header={header} />
      <Blogsheader />
      <div className="row">
        {blogs.map((blog, index) => {
          return <Blogs blog={blog} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Courses;
