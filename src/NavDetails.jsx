import "./styles/NavDetails.css";

function NavDetails({ handleTog }) {
  return (
    <div className="blue-line">
      <ul className="nav-line-upper">
        <li style={{ cursor: "pointer" }} onClick={handleTog}>
          <i className="fa-solid fa-user"></i>
        </li>
        <li style={{ cursor: "pointer" }}>
          <i className="fa-solid fa-message"></i>
        </li>
        <li style={{ cursor: "pointer" }}>
          <i className="fa-solid fa-gear"></i>
        </li>
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
