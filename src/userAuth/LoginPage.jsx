import { useState } from "react";
import "./LoginPage.css";
import {toast} from "react-toastify";
import turtle from"../assets/turtle.png";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth, db} from "../backend/firebase.js";
import {doc, setDoc} from "firebase/firestore";
import upload from "../backend/upload.js"

function LoginPage(){
    const [isSignIn, setIsSignIn] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleSignInClick = () => {
        setIsSignIn(true);
    };

    const handleSignUpClick = () => {
        setIsSignIn(false);
    };

    const[avatar, setAvatar] = useState({
        file:null,
        url: ""
    })
    
    const handleAvatar = e =>{
        if(e.target.files[0]){
            setAvatar({
                file:e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
        
    }

    const handleRegister = async(e) =>{
        e.preventDefault();
        setLoading(true)
        const formData = new FormData(e.target);
        const {username, email, password} = Object.fromEntries(formData);
        try{
            const res = await createUserWithEmailAndPassword(auth,email,password);

            const imgUrl = await upload(avatar.file)

            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                avatar:imgUrl,
                id: res.user.uid,
            });
            

            await setDoc(doc(db, "userchats", res.user.uid), {
                chats:[],
            });
            
            toast.success("Account Created! You can login now!")
        }
        catch(err){
            console.log(err);
            toast.error(err.message);
        }
        finally{
            setLoading(false);   
        }
        

    }

    const handleLogin = async(e) =>{
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);
        const {email, password} = Object.fromEntries(formData);
        try{
            await signInWithEmailAndPassword(auth, email,password);
        }catch(err){
            console.log(err);
            toast.error(err.message);
        }
        finally{
            setLoading(false)
        }
    }


    return(
        <div className="loginPage">
            <div className="head">
                <nav>
                <ul>
                    <li>
                    <button onClick={handleSignInClick} className={isSignIn ? 'active' : ''}>Sign In</button>
                    </li>
                    <li>
                    <button onClick={handleSignUpClick} className={!isSignIn ? 'active' : ''}>Sign Up</button>
                    </li>
                </ul>
                </nav>
            </div>
            <div className="bodySection">
                {isSignIn ? (
                <div className="form-section">
                    <h1>Welcome Back!</h1>
                    <h2>Sign In</h2>
                    <form className="signIn" onSubmit={handleLogin}>
                        <input type="email" name="email" placeholder="Enter your email"required />
                        <input type="password" placeholder="Enter your password" name="password" required />
                        <button type="submit" className="submitButton" disabled={loading}>{loading ? "Loading":"Sign In"}</button>
                    </form>
                </div>
                ) : (
                <div className="form-section">
                    <h1>Create Account</h1>
                    <form className="signUp" onSubmit={handleRegister}>
                        <label htmlFor="file" >
                            <img src={avatar.url || turtle} alt=""/>
                            Upload your image
                        </label>
                        <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar}/>
                        <input type="text" placeholder="Enter your username" name="username" required />
                        <input type="email" placeholder="Enter your email" name="email" required />
                        <input type="password" placeholder="Enter your password" name="password" required />
                        <input type="password" placeholder="Confirm password" name="confirm-password" required />
                        <button type="submit" className="submitButton" disabled={loading}>{loading ? "Loading":"Sign Up"}</button>
                    </form>
                </div>
                )}
            </div>
        </div>
    );
        
}
           

export default LoginPage;