
import { useState, useEffect } from "react";
import SignIn from "./SignIn"
import {Routes, Route} from "react-router-dom"
import { CardHeader } from "@mui/material";
import NavBar from "./NavBar"
import Signup from "./Signup"
import PostPage from './PostPage'
import Homepage from "./Homepage"
import PostForm from './PostForm'
import EditPostForm from './EditPostForm'
import SinglePost from './SinglePost'




function App() {
  const [influencer, setCurrentInfluencer] = useState('')

  // fetch who is current user that is login 
  useEffect(() => { 
    fetch('/me')
    .then(r => r.json())
    .then(setCurrentInfluencer)
  }, []) 

  const updateInfluencer = (influencer) => setCurrentInfluencer(influencer)
  
  return (

    <div>
      <Routes>
        <Route path="/signin" element={<SignIn updateInfluencer={updateInfluencer}/>} />
        <Route path="/" element={<Homepage influencer={influencer}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/posts' element={<PostPage />} />
        <Route path='/postform' element={<PostForm />} />
        {/* <Route path='/editpostform' element={<EditPostForm />} /> */}
        <Route path='/singlepost/:id' element={<SinglePost />} />
      </Routes>
    </div>
   
  );
}

export default App;
