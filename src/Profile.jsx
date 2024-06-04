import "./styles/profile.css";
import download from "./assets/download.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faCircleExclamation,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

function Profile({handleTog}) {
  return (
    <>
  
    <div className="Profile">
    <FontAwesomeIcon onClick={handleTog} className="Arrow" icon={faArrowLeft} />
      <div className="dp-box">
        <img className=" im2" src={download} alt="Profile Image" />
      </div>

      <div className="container">
        <div
          style={{
            width: "85%",
            height: "0.1px",
            backgroundColor: "gray",
          }}
        ></div>

        <div className="user-name">
          <div>
            <FontAwesomeIcon className="profile-icons" icon={faUser} />
          </div>
          <div>
            <div style={{ color: "lightgray", fontSize: "13px" }}>Name</div>
            <div style={{ color: "white", marginTop: "2px" }}>Ritu Raj</div>
          </div>
        </div>

        <div
          style={{
            width: "85%",
            height: "0.1px",
            backgroundColor: "gray",
          }}
        ></div>

        <div className="About">
          <div>
            <FontAwesomeIcon
              className="profile-icons"
              icon={faCircleExclamation}
            />
          </div>
          <div>
            <div style={{ color: "lightgray", fontSize: "13px" }}>About</div>
            <div>India is a big country</div>
          </div>
        </div>

        <div
          style={{
            width: "85%",
            height: "0.1px",
            backgroundColor: "gray",
          }}
        ></div>

        <div className="emailId">
          <div>
            <FontAwesomeIcon className="profile-icons" icon={faEnvelope} />
          </div>
          <div>
            <div style={{ color: "lightgray", fontSize: "13px" }}>Email</div>
            <div>code@example.com</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Profile;
