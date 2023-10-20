import Header from "../Header/header";
import Blogsheader from "../Blogsheader/blogsheader";
import Blogs from "../Blogs/blogs";
import "./datascience.css"

const Datascience = (props) => {
  const { header, blogs } = props;
  return (
    <div className="datascience-container">
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

export default Datascience;
