import NavDetails from "./NavDetails";
import Sidebar from "./Sidebar";
import ChatSection from "./ChatSection";
import Profile from "./Profile";
import Settings from "./Settings";
import { Route, Routes } from "react-router-dom";
import React from "react";

function Home({ tog, handleTog }) {
  
  return (
    <>
      <NavDetails  handleTog={handleTog} />
     
         
          <Routes>
            <Route path="/real-time-chatapp" element={<Sidebar />} />
            <Route path="/real-time-chatapp/Profile" element={<Profile />} />
            <Route path="/real-time-chatapp/settings" element={<Settings />} />
          </Routes>
        
        
       
          <ChatSection />
     
      
    </>
  );
}

export default Home;
