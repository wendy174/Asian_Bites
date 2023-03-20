import React from "react";
import PostCard from "./PostCard";

function PostList({posts}) { 


    return (
    <ul className="cards">
      {posts.map(post => <PostCard key={post.id} post={post}/>)}
    </ul>

    )
}

export default PostList; 