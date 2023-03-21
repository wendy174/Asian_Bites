
import { useState, useEffect } from "react";
import SignIn from "./SignIn"
import Header from "./Header"
import {Routes, Route} from "react-router-dom"
import { CardHeader } from "@mui/material";
import NavBar from "./NavBar"
import Signup from "./Signup"
import PostPage from './PostPage'
import Homepage from "./Homepage"
import PostForm from './PostForm'



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
      <Routes>
        <Route path="/signin" element={<SignIn setUser={setUser}/>} />
        <Route path="/" element={<Homepage/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/posts' element={<PostPage />} />
        <Route path='/postform' element={<PostForm />} />
      </Routes>
    </div>
   
   
   
  );
}

export default App;
