import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/">Home</Link>
      </li>
      <li className="navbar-item">
        <Link to="/shippingships">Ships</Link>
      </li>
      <li className="navbar-item">
        <Link to="/haulingships">Haulers</Link>
      </li>
      <li className="navbar-item">
        <Link to="/docks">Docks</Link>
      </li>
    </ul>
  );
};
