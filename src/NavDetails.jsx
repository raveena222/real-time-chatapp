import "./styles/NavDetails.css";

function NavDetails() {
  return (
    <div className="nav-line">
      <ul className="nav-line-upper">
        <li>
          <i className="fa-solid fa-user"></i>
        </li>
        <li>
          <i className="fa-solid fa-message"></i>
        </li>
        <li>
          <i className="fa-solid fa-gear"></i>
        </li>
      </ul>
      <ul>
        <li>
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </li>
      </ul>
    </div>
  );
}

export default NavDetails;
