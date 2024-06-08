import "./styles/Sidebar.css";
import ChatLists from "./ChatLists";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { obj } from "./data";

function Sidebar({ handleTog }) {
  const [isOpen, setIsOpen] = useState(false);

  const [search, setSearch] = useState([]);

  const handleSearch = (search) => {
    const searches = obj.filter((x) =>
      x.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearch(searches);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-chat">
      <div className="side-header">
        <div className="chats">Chats</div>
        <div className="bars" onClick={toggleNavbar}>
          {isOpen ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
      </div>
      <div className="input">
        <input
          type="text"
          className="input-bar"
          placeholder="Search or start a new chat"
          onChange={(e) => handleSearch(e.target.value)}
        />
        {/* <button className="plus-button">
          <FontAwesomeIcon icon={faPlus} />
        </button> */}
      </div>

      <div
        style={{
          width: "85%",
          height: "0.1px",
          backgroundColor: "gray",
          marginLeft: "8%",
          marginBottom: "20px",
        }}
      ></div>

      {isOpen && (
        <div
          className="top-toggle"
          style={{
            background: "white",
            color: "black",
            width: "80px",
            padding: "4px 8px",
            borderRadius: "9px",
          }}
        >
          <p className="toggle" onClick={handleTog}>
            Profile
          </p>
          <p className="toggle">Settings</p>
          <p className="toggle" style={{ color: "red" }}>
            Log Out
          </p>
        </div>
      )}

      <ChatLists search={search} />
    </div>
  );
}

export default Sidebar;
