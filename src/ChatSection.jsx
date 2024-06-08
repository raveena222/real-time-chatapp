import "./styles/ChatSection.css";
import turtle from "./assets/turtle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPaperclip, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { useState} from "react";

function ChatSection(){
    
    const [inputText, setInputText] = useState('');
    const [divElements, setDivElements] = useState([]);    

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSendClick = () => {
        if (inputText.trim() !== '') {
        setDivElements([...divElements, inputText]);
        setInputText('');
        }
    };
    
    return(
        <div className="chat-section">
            <div className="top-bar">
                <img src={turtle} className="turtle"/>
                <span className="userName">Turtle</span>
            </div> 
           
            <div className="allChats">
                {divElements.map((text, index) => (
                <div key={index} className="display-text">
                    {text}
                </div>
                ))}  
            </div>  
            
            <div className="chatinput">

                <FontAwesomeIcon icon={faFaceSmile} size="lg" className="smile"/>
                <input className="chatInput" placeholder="Type here..." type="text" value={inputText} onChange={handleInputChange}/>
                <FontAwesomeIcon icon={faPaperclip} size="lg" className="clip"/>
                <FontAwesomeIcon icon={faPaperPlane} size="lg" className="paper" onClick={handleSendClick}/>
                
            </div>
        </div>

    )
}

export default ChatSection;