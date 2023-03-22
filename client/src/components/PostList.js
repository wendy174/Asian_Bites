import React from "react";
import PostCard from "./PostCard";


function PostList({posts, handleDeletePost, review}) { 


    return (
    <ul className="cards">
      {posts.map(post => <PostCard key={post.id} post={post} handleDeletePost={handleDeletePost}/>)}
    </ul>

    )
}

export default PostList; 