import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import './PostCard.css'
import { useState, useEffect } from "react";
import  { Link, useParams } from 'react-router-dom'



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


function SinglePost() { 
  const [expanded, setExpanded] = React.useState(false);
  const [post, setPost] = useState({})
  const [errors, setErrors] = useState(false)
  const params = useParams()

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(()=>{
    fetch(`/posts/${params.id}`)
    .then(res => { 
      if(res.ok){
        res.json().then(data => {
          setPost(data)
        })
      } else {
        res.json().then(data => setErrors(data.error))
      }
    })
  },[])

  console.log(post.reviews)


//   const handleReviews = () => {
//     if (post.reviews === []) {
//       return 'No Reviews Yet';
//     } else {
//       return post.reviews.map((review) => (
//         <li>
//           Reviews: {review.comment}
//         </li>
//       ));
//     }
//   };
  

//   const handleDelete = () => { 
//     fetch(`/posts/${post.id}`, {
//     method: "DELETE",
//   })
//     .then(() => console.log(post));
//   }


  return (
<Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        Restaurant={post.restaurant_name}
      />
      <CardMedia
        component="img"
        height="194"
        image={post.image}
        alt={post.restaurant_name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <h3>{post.restaurant_name}</h3>
          {post.city}, {post.state}
          <p>{post.description} </p>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <CardActions sx={{ml: 'auto'}}>
          <Button >Delete</Button>
          <Button>Edit</Button>
        </CardActions>
    
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <p>Address: {post.address}</p>
            <p>Cuisine: {post.cusine}</p>
            {/* <ul> 
              {post.reviews.map((review) => 
                <li> 
                  {review.comment}
                </li>)}
            </ul> */}
          </Typography>
        </CardContent>
      </Collapse>
</Card>
  );
}
    

    


export default SinglePost; 

