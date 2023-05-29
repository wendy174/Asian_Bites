import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect} from 'react'
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useNavigate } from 'react-router-dom';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const theme = createTheme();

export default function PostForm({handleNewPost}) {

  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [cusine, setCusine] = useState('')
  const [restaurant_name, setRestaurantName] = useState('')

  const navigate = useNavigate()
  const [errors, setErrors] = useState([])

  console.log(errors)


  let newPost = { 
      description: description, 
      image: image, 
      address: address, 
      city: city, 
      state: state, 
      cusine: cusine, 
      restaurant_name: restaurant_name 
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    


  fetch("/posts", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
  },
    body: JSON.stringify(newPost)
  })
  .then((r => {
    if(r.ok){
      r.json().then(handleNewPost); 
      navigate('/postlist')
    } else {
      //Display errors
      // r.json().then(json => console.log(json.errors))
      r.json().then(json => setErrors(json.errors))
    }
  })
  )

}

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PostAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Share some awesome food! 
          <br></br>
          <br></br>
          </Typography>
          <Typography component="h3" variant="h6" style={{ color: 'purple', textAlign: 'center'}}>
            {errors?errors.map(e => <div>{e}</div>):null}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="restaurant"
              label="Restaurant Name"
              type="restaurant"
              id="restaurant" 
              autoComplete="current-restaurant"
              value={restaurant_name}
              onChange={(e) => setRestaurantName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="description"
              label="Description"
              name="description"
              autoComplete="current-description"
              autoFocus
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="image"
              label="Image Url"
              id="image"
              autoComplete="current-image"
              autoFocus
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="address"
              label="Address"
              type="address"
              id="address"
              autoComplete="current-address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="city"
              label="City"
              type="city"
              id="city"
              autoComplete="current-city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="state"
              label="State"
              type="state"
              id="state"
              autoComplete="current-state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="cuisine"
              label="Cuisine"
              type="cuisine"
              id="cuisine"
              autoComplete="current-cuisine"
              value={cusine}
              onChange={(e) => setCusine(e.target.value)}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Post
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
