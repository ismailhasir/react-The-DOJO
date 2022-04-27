import { Link } from "react-router-dom";

//styles & images
import "./Navbar.css";
import Temple from "../assets/temple.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="dojo logo" />
          <span>Dojo</span>
        </li>

        <li>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </li>

        <li>
          <button className="btn">Log Out</button>
        </li>
      </ul>
    </div>
  );
}
