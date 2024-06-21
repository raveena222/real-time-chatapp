import "./styles/ChatSection.css";
import turtle from "./assets/turtle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPaperclip, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState} from "react";
import EmojiPicker from "emoji-picker-react";

function ChatSection(){
    
    const [inputText, setInputText] = useState('');
    const [divElements, setDivElements] = useState([]);  
    const [open, setOpen] = useState(false); 
    
    const endRef = useRef(null);

    useEffect(()=>{
        endRef.current?.scrollIntoView ({behavior:"smooth"});
    },[]);
    
    const handleEmoji =(e) =>{
        setInputText((prev)=> prev +e.emoji);
    }
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
                <div className="user">
                    <img src={turtle} className="turtle"/>
                    <div className="text">
                        <span className="userName">Turtle</span>
                        <span className="lastseen">10 mins ago</span>    
                    </div>
                </div>
            </div> 
           
            <div className="allChats">
                
                    <div className="chatYou">
                        <img src={turtle} className="turtle-chat"/>
                        <div className="chatText">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam cumque, quasi nulla iure qui enim dolore modi pariatur, atque aut minus, repudiandae iste delectus quisquam fugit laudantium suscipit quos! Voluptatibus?</p>
                        <span>1 min ago</span>
                        </div>
                        
                    </div>
                    <div className="chatMe">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam cumque, quasi nulla iure qui enim dolore modi pariatur, atque aut minus, repudiandae iste delectus quisquam fugit laudantium suscipit quos! Voluptatibus?</p>
                        <span>1 min ago</span>
                    </div>
                    <div className="chatYou">
                        <img src={turtle} className="turtle-chat"/>
                       <div className="chatText">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam cumque, quasi nulla iure qui enim dolore modi pariatur, atque aut minus, repudiandae iste delectus quisquam fugit laudantium suscipit quos! Voluptatibus?</p>
                        <span>1 min ago</span>
                        </div>
                    </div>
                    <div className="chatMe">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam cumque, quasi nulla iure qui enim dolore modi pariatur, atque aut minus, repudiandae iste delectus quisquam fugit laudantium suscipit quos! Voluptatibus?</p>
                        <span>1 min ago</span>
                    </div>
                    <div className="chatYou">
                        <img src={turtle} className="turtle-chat"/>
                        <div className="chatText">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam cumque, quasi nulla iure qui enim dolore modi pariatur, atque aut minus, repudiandae iste delectus quisquam fugit laudantium suscipit quos! Voluptatibus?</p>
                        <span>1 min ago</span>
                        </div>
                    </div>
                    <div className="chatMe">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam cumque, quasi nulla iure qui enim dolore modi pariatur, atque aut minus, repudiandae iste delectus quisquam fugit laudantium suscipit quos! Voluptatibus?</p>
                        <span>1 min ago</span>
                    </div>
                    <div className="chatYou">
                        <img src={turtle} className="turtle-chat"/>
                        <div className="chatText">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam cumque, quasi nulla iure qui enim dolore modi pariatur, atque aut minus, repudiandae iste delectus quisquam fugit laudantium suscipit quos! Voluptatibus?</p>
                        <span>1 min ago</span>
                        </div>
                    </div>
                    <div className="chatMe">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam cumque, quasi nulla iure qui enim dolore modi pariatur, atque aut minus, repudiandae iste delectus quisquam fugit laudantium suscipit quos! Voluptatibus?</p>
                        <span>1 min ago</span>
                    </div>
                    <div className="chatYou">
                        <img src={turtle} className="turtle-chat"/>
                        <div className="chatText">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam cumque, quasi nulla iure qui enim dolore modi pariatur, atque aut minus, repudiandae iste delectus quisquam fugit laudantium suscipit quos! Voluptatibus?</p>
                        <span>1 min ago</span>
                        </div>
                    </div>
                    <div className="chatMe">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam cumque, quasi nulla iure qui enim dolore modi pariatur, atque aut minus, repudiandae iste delectus quisquam fugit laudantium suscipit quos! Voluptatibus?</p>
                        <span>1 min ago</span>
                    </div>
                    {divElements.map((text, index) => (
                    <div key={index} className="display-text">
                        {text}
                    </div>
                    ))}
                <div ref={endRef}></div>
                
            </div>  
            
            <div className="chatinput">
               
                <div className="smile">
                    <FontAwesomeIcon icon={faFaceSmile} size="lg" onClick={()=> {setOpen((prev)=> !prev)}}/>
                    <div className="pickEmoji">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                
                <input className="chatInput" placeholder="Type here..." type="text" value={inputText} onChange={handleInputChange}/>
                <FontAwesomeIcon icon={faPaperclip} size="lg" className="clip"/>
                <FontAwesomeIcon icon={faPaperPlane} size="lg" className="paper" onClick={handleSendClick}/>
                
            </div>
        </div>

    )
}

export default ChatSection;
