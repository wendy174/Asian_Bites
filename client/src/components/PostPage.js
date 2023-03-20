import React, {useState, useEffect} from 'react'; 
import PostList from './PostList';



function PostPage() { 
    
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("/posts")
          .then(resp => resp.json())
          .then(items => setPosts(items)) // are getting the post 
      }, [])

    return (
        <div>
            <PostList posts={posts}/>
        </div>

    )

}

export default PostPage; 