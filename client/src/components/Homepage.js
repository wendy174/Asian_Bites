import PostPage from './PostPage'
import NavBar from './NavBar'

function Homepage({influencer}) { 

    return ( 
        <div>
            <NavBar influencer={influencer} />
            <PostPage />
        </div>
    )
}

export default Homepage 