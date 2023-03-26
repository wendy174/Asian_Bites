import React from "react";
import PostCard from "./PostCard";
import './PostList.css'


function PostList({posts, handleDeletePost, review}) { 


    return (
    <ul className="post-card-container">
      {posts.map(post => <PostCard key={post.id} post={post} handleDeletePost={handleDeletePost}/>)}
    </ul>

    )
}

export default PostList; 