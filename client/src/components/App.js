
import { useState, useEffect } from "react";
import SignIn from "./SignIn"
import Header from "./Header"
import {Routes, Route} from "react-router-dom"
import { CardHeader } from "@mui/material";
import NavBar from "./NavBar"
import Signup from "./Signup"



function App() {

  
  return (

    <div>
      <NavBar />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
   
   
   
  );
}

export default App;
