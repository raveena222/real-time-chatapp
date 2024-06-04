import "./styles/ChatSection.css";

function ChatSection(){
    return(
     
            
            <div className="chat-section">
            <div className="top-bar">
                <img src="./images/turtle.png" className="turtle"/>
                <div>Turtle</div>
                <p>Online</p>
            </div>   
                <div>
                    <input placeholder="Write" type="text" className="chat-input"/>
                </div>
            </div>

    )
}

export default ChatSection;