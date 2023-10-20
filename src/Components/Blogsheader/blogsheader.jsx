import "./blogsheader.css";
import { Link } from "react-router-dom";

const Blogsheader = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-light">
      <div class="collapse navbar-collapse nav-blog" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link className="blog nav-item nav-link" to="/">
            ALL
          </Link>
          <Link className="blog nav-item nav-link" to="/fsd">
            FULL STACK DEVELOPMENT
          </Link>
          <Link className="blog nav-item nav-link" to="/datascience">
            DATA SCIENCE
          </Link>
          <Link className="blog nav-item nav-link" to="/cybersecurity">
            CYBER SECURITY
          </Link>
          <Link className="blog nav-item nav-link" to="/careers">
            CAREER
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Blogsheader;
