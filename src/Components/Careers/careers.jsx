import Header from "../Header/header";
import Blogsheader from "../Blogsheader/blogsheader";
import Blogs from "../Blogs/blogs";
import "./career.css"

const Careers = (props) => {
  const { header, blogs } = props;
  return (
    <div className="career-container">
      <Header header={header} />
      <Blogsheader />
      <div className="header-container">
      <div className="row">
        {blogs.map((blog, index) => {
          return <Blogs blog={blog} key={index} />;
        })}
      </div>
      </div>
    </div>
  );
};

export default Careers;
