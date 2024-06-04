import download from "./assets/download.jpg";
import "./styles/chatlists.css";
import { obj } from "./data";
import { useState } from "react";

function ChatLists({ search }) {
  return (
    <div className="chatlistbox">
      {search.length > 0
        ? search.map((x) => (
            <div key={x.id} className="chat-set">
              <img src={download} alt="profile-pic" className="im1" />
              <div className="userChatInfo">
                <div className="chat-name">{x.name}</div>
                <div className="last-text">Kha Hai??</div>
              </div>
            </div>
          ))
        : obj.map((x) => (
            <div key={x.id} className="chat-set">
              <img src={download} alt="profile-pic" className="im1" />
              <div className="userChatInfo">
                <div className="chat-name">{x.name}</div>
                <div className="last-text">Kha Hai??</div>
              </div>
            </div>
          ))}
    </div>
  );
}

export default ChatLists;
