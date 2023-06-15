import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import DarkMode from "./DarkMode";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <span>S</span>
        <p>osa Jonathan</p>
      </div>
      <div className="nav-content">
        <DarkMode />
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
