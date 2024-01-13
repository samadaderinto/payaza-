import "./header.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="main">
        <img src={logo} alt="safe mom logo" />

        <nav className="nav">
          <Link to="">Why we care?</Link>
          <Link to="">For Health Practitioners</Link>
          <div className="">We’re Open Daily 09am - 05pm</div>
        </nav>
      </div>

      <div className="action">
        <Link to="/login">Get Started</Link>
        <Link to="register">Sign Up</Link>
      </div>
    </div>
  );
};

export default Header;
