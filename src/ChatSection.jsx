import "./styles/ChatSection.css";
import turtle from "./assets/turtle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPaperclip, faFaceSmile } from "@fortawesome/free-solid-svg-icons";

function ChatSection(){
    return(
        <div className="chat-section">
            <div className="top-bar">
                <img src={turtle} className="turtle"/>
                <span className="userName">Turtle</span>
            </div> 
            <div className="allChats">
                 
            </div>  
            <div className="chatinput">

                <FontAwesomeIcon icon={faFaceSmile} size="lg" className="smile"/>
                <input className="chatInput" placeholder="Write" type="text"/>
                <FontAwesomeIcon icon={faPaperclip} size="lg" className="clip"/>
                <FontAwesomeIcon icon={faPaperPlane} size="lg"/>
                
            </div>
        </div>

    )
}

export default ChatSection;