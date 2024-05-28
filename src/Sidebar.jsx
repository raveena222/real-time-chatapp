import "./styles/Sidebar.css";

function Sidebar(){
    return(
        <div className="sidebar-chat">
            <div className="chats">
                Chats
            </div>
            <div className="input">
            <i class="fa-solid fa-magnifying-glass glass"></i>
                <input type="text"
                placeholder="Search or start a new chat"/>
                <button>+</button>
            </div>
            <div className="chat-set">
                <ul className="chat-set-ul">
                    <div className="chat-set-ul-li"><i class="user fa-solid fa-user"></i></div>
                    <li>
                        <div className="chat-name">Abhinav Kumar</div>
                        <div className="last-text">Kha Hai??</div>
                    </li>
    
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;