import "./styles/NavDetails.css";
import { Link } from "react-router-dom";

function NavDetails({ handleTog }) {
  
  return (
    <div className="blue-line">
      <ul className="nav-line-upper">
        <Link to="/real-time-chatapp/profile">
        <li style={{ cursor: "pointer" }} >
          <i className="fa-solid fa-user"></i>
        </li>
        </Link>
        <Link to="/real-time-chatapp">
        <li style={{ cursor: "pointer" }}>
          <i className="fa-solid fa-message"></i>
        </li>
        </Link>
        <Link to="/real-time-chatapp/settings">
        <li style={{ cursor: "pointer" }} onClick={handleTog}>
          <i className="fa-solid fa-gear"></i>
        </li>
        </Link>
      </ul>
      <ul>
        <li style={{ cursor: "pointer" }}>
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </li>
      </ul>
    </div>
  );
}

export default NavDetails;
