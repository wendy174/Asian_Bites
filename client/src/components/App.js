
import { useState, useEffect } from "react";
import SignIn from "./SignIn"
import {Routes, Route} from "react-router-dom"
import NavBar from "./NavBar"
import Signup from "./Signup"
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

  // deletes post, passed down to postcard 
   function handleDeletePost(deletedPost) {
        const updatedPost = posts.filter(post => post.id !== deletedPost.id); 
        setPosts(updatedPost)
    }

// handles new post
  function handleNewPost(newPost) {
      setPosts([...posts,newPost])
  }

// handles edited post 
  const updatePost = (updatedPost) => setPosts(current => {
        return current.map(post => {
         if(post.id === updatedPost.id){
           return updatedPost
         } else {
           return post
         }
        })
      })


  // gets current influencer 
  const updateInfluencer = (influencer) => setCurrentInfluencer(influencer)
  
  return (

    <div>
      <NavBar influencer={influencer}/>
      <Routes>
        <Route path="/signin" element={<SignIn updateInfluencer={updateInfluencer}/>} />
        <Route path="/signup" element={<Signup updateInfluencer={updateInfluencer} />} />
        <Route path='/postform' element={<PostForm handleNewPost={handleNewPost}/>} />
        <Route path='/editpostform' element={<EditPostForm />} />
        <Route path='/posts/:id' element={<SinglePost />} />
        <Route path='/navbar' element={<NavBar updateInfluencer={updateInfluencer} />} />
        <Route path='/' element={<PostList posts={posts} handleDeletePost={handleDeletePost}/>} />
      </Routes>
    </div>
   
  );
}

export default App;
