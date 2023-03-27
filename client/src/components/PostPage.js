import React, {useState, useEffect} from 'react'; 
import PostList from './PostList';
import PostForm from './PostForm'
import EditPostForm from './EditPostForm'
import {Routes, Route} from "react-router-dom"



function PostPage() { 
    
    // const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     fetch("/posts")
    //       .then(resp => resp.json())
    //       .then(items => setPosts(items)) // are getting the post 
    //   }, [])

    // function handleNewPost(newPost) {
    //     setPosts([...posts,newPost])
    // }

   

    // const updatePost = (updatedPost) => setPosts(current => {
    //     return current.map(post => {
    //      if(post.id === updatedPost.id){
    //        return updatedPost
    //      } else {
    //        return post
    //      }
    //     })
    //   })



    return (
        <div>
            {/* <PostList posts={posts} handleDeletePost={handleDeletePost} />
            <PostForm handleNewPost={handleNewPost}/> */}
            {/* <PostList /> */}
        </div>

    )
}

export default PostPage; 