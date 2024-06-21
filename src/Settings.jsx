import React, { useState } from "react";
import "./styles/profile.css";
import download from "./assets/download.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faCircleExclamation,
  faArrowLeft,
  faPen
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./styles/settings.css";

function Settings() {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);

  const [name, setName] = useState("Your Name");
  const [about, setAbout] = useState("Description about yourself");
  const [email, setEmail] = useState("Your Email");
  const [profileImage, setProfileImage] = useState(download);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="settings">
      <Link to="/real-time-chatapp">
        <FontAwesomeIcon className="Arrow" icon={faArrowLeft} />
      </Link>
      <div className="dp-box ima1">
        <img className="im2 " src={profileImage} alt="Profile" />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        
      </div>

      <div className="containers">
        <div
          style={{
            width: "85%",
            height: "0.1px",
            backgroundColor: "gray",
          }}
        ></div>

        <div className="user-name" >
          <div>
            <FontAwesomeIcon className="profile-icons" icon={faUser} />
          </div>
          <div>
            <div style={{ color: "lightgray", fontSize: "13px" }}>Name</div>
            {isEditingName ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => setIsEditingName(false)}
                autoFocus
              />
            ) : (
              <div style={{ color: "white", marginTop: "2px" }}>{name}</div>
            )}
          </div>
          <div className="edit" onClick={() => setIsEditingName(true)}>
          <FontAwesomeIcon icon={faPen} />
          </div>
        </div>

        <div
          style={{
            width: "85%",
            height: "0.1px",
            backgroundColor: "gray",
          }}
        ></div>

        <div className="About" >
          <div>
            <FontAwesomeIcon
              className="profile-icons"
              icon={faCircleExclamation}
            />
          </div>
          <div>
            <div style={{ color: "lightgray", fontSize: "13px" }}>About</div>
            {isEditingAbout ? (
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                onBlur={() => setIsEditingAbout(false)}
                autoFocus
              />
            ) : (
              <div>{about}</div>
            )}
          </div>

          <div className="edit" onClick={() => setIsEditingAbout(true)}>
          <FontAwesomeIcon icon={faPen} />
          </div>
        </div>

        <div
          style={{
            width: "85%",
            height: "0.1px",
            backgroundColor: "gray",
          }}
        ></div>

        <div className="emailId" onClick={() => setIsEditingEmail(true)}>
          <div>
            <FontAwesomeIcon className="profile-icons" icon={faEnvelope} />
          </div>
          <div>
            <div style={{ color: "lightgray", fontSize: "13px" }}>Email</div>
            {isEditingEmail ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setIsEditingEmail(false)}
                autoFocus
              />
            ) : (
              <div>{email}</div>
            )}
          </div>
          <div className="edit"onClick={() => setIsEditingEmail(true)}>
          <FontAwesomeIcon icon={faPen} />
          </div>
        </div>
      </div>
      <button className="save">Save</button>
    </div>
  );
}

export default Settings;
