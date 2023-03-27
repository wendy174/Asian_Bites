
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
import PostList from './PostList'





function App() {
  const [influencer, setCurrentInfluencer] = useState('')
  const [errors, setErrors] = useState(false)
  const [posts, setPosts] = useState([])
  

  useEffect(() => {
    fetch("/me")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((influencer) => {
          updateInfluencer(influencer);
        });
      }
    })
  },[])

  useEffect(() => {fetchPosts()},[]) 
  
  
  const fetchPosts = () => {
    fetch('/posts')
    .then(res => {
      if(res.ok){
        return res.json()
      }else {
        res.json().then(data => setErrors(data.error))
      }
    })
    .then(setPosts)
  }

   function handleDeletePost(deletedPost) {
        const updatedPost = posts.filter(post => post.id !== deletedPost.id); 
        setPosts(updatedPost)
    }

  function handleNewPost(newPost) {
      setPosts([...posts,newPost])
  }



  // useEffect(() => { 
  //   fetch('/me')
  //   .then(r => r.json())
  //   .then(setCurrentInfluencer); 
  // }, []) 

  // useEffect(() => {
  //   fetch("/posts")
  //     .then(resp => resp.json())
  //     .then(items => setPosts(items)) // are getting the post 
  // }, [])

  // gets current influencer 
  const updateInfluencer = (influencer) => setCurrentInfluencer(influencer)
  
  return (

    <div>
      <NavBar influencer={influencer}/>
      <Routes>
        <Route path="/signin" element={<SignIn updateInfluencer={updateInfluencer}/>} />
        {/* <Route path="/" element={<Homepage influencer={influencer}/>} /> */}
        <Route path="/signup" element={<Signup updateInfluencer={updateInfluencer} />} />
        {/* <Route path='/posts' element={<PostPage />} /> */}
        <Route path='/postform' element={<PostForm handleNewPost={handleNewPost}/>} />
        <Route path='/editpostform' element={<EditPostForm />} />
        {/* <Route path='/singlepost/:id' element={<SinglePost />} /> */}
        <Route path='/navbar' element={<NavBar updateInfluencer={updateInfluencer} />} />
        <Route path='/' element={<PostList posts={posts} handleDeletePost={handleDeletePost}/>} />
      </Routes>
    </div>
   
  );
}

export default App;
