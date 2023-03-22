import React, {useState, useEffect} from 'react'; 
import PostList from './PostList';
import PostForm from './PostForm'



function PostPage() { 
    
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("/posts")
          .then(resp => resp.json())
          .then(items => setPosts(items)) // are getting the post 
      }, [])

    function handleNewPost(newPost) {
        setPosts([...posts,newPost])
    }

    function handleDeletePost(deletedPost) {
        const updatedPost = posts.filter(post => post.id !== deletedPost.id); 
        setPosts(updatedPost)
    }

    return (
        <div>
            <PostList posts={posts} handleDeletePost={handleDeletePost} />
            <PostForm handleNewPost={handleNewPost}/>
        </div>

    )
}

export default PostPage; 