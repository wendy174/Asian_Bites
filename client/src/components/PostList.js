import React from "react";
import PostCard from "./PostCard";
// import './PostList.css'
import Grid from '@mui/material/Unstable_Grid2';





function PostList({posts, handleDeletePost}) { 

  // if (!posts){posts=[]}
    return (
      <Grid container spacing={2} justifyContent="center">
        {posts.map(post => (
          // <Grid item  xs={12} sm={6} md={2}>
          // <Grid item  xs={12} sm={4} md={2}>
          // <Grid item xs={12} sm={6} md={4} xl={2}>
          <Grid key={post.id} item xs={12} sm={6} md={3} xl={2}>
            <PostCard post={post} handleDeletePost={handleDeletePost} />
          </Grid>
        ))}
      </Grid>
    );
}

export default PostList; 