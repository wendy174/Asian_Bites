import React from "react";
import PostCard from "./PostCard";
// import './PostList.css'
import Grid from '@mui/material/Unstable_Grid2';


export default function PostList({posts, handleDeletePost}) { 

  // if (!posts){posts=[]}
    return (
      <Grid container spacing={2} justifyContent="center">
        {posts.map(post => (
          <Grid key={post.id} item xs={12} sm={6} md={3} xl={2}>
            <PostCard post={post} handleDeletePost={handleDeletePost} />
          </Grid>
        ))}
      </Grid>
    );
}

