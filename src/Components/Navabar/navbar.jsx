import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img className="img" src="https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png" alt="guvi-logo" />
        
        <Link className="navbar-brand heading" to="/">
          Guvi
        </Link>
        <div class="collapse navbar-collapse heading-nav" id="navBarTop">
          <div class="navbar-nav">
            <Link className="blog nav-item nav-link">COURSES</Link>
            <Link className="blog nav-item nav-link">LIVE CLASSES</Link>
            <Link className="blog nav-item nav-link">PRACTICE</Link>
            <Link className="blog nav-item nav-link">RESOURCES</Link>
            <Link className="blog nav-item nav-link">OUR PRODUCTS</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
