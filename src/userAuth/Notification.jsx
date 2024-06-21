import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Notification.css';

function Notification(){
    return(
        <>
            <ToastContainer position="bottom-right"/>
        </>
    );
}

export default Notification