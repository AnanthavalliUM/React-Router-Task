import "./header.css";
const Header = (props) => {
  const { header } = props;
  return (
    <div className="container">
      <div className="home-container">
        <h2>{header.title}</h2>
        <p>{header.description}</p>
      </div>
    </div>
  );
};

export default Header;
