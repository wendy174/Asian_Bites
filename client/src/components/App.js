
import { useState, useEffect } from "react";
import SignIn from "./SignIn"
import Header from "./Header"
import {Routes, Route} from "react-router-dom"
import { CardHeader } from "@mui/material";
import NavBar from "./NavBar"
import Signup from "./Signup"



function App() {
  const [user, setUser] = useState('')

  // fetch who is current user that is login 
  useEffect(() => { 
    fetch('/me')
    .then(r => r.json())
    .then(setUser)
  }, []) 


  
  return (

    <div>
      <NavBar user={user} />
      <Routes>
        <Route path="/signin" element={<SignIn setUser={setUser}/>} />
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
   
   
   
  );
}

export default App;
