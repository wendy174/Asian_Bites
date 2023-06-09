import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect} from 'react'
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useParams } from 'react-router-dom'
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

export default function PostForm({updatePost}) {
    const [formData, setFormData] = useState({
        description:'', 
        image: '', 
        address: '', 
        city:'', 
        state:'', 
        cusine:'', 
        restaurant_name:''    
    }) 

    const [errors, setErrors] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()




    useEffect(() => {
        fetch(`/posts/${id}`)
        .then(res => res.json())
        .then(setFormData)
      },[])
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch(`/posts/${id}`, {
      method: "PATCH",
      headers: {
      "Content-Type": "application/json",
    },
      body: JSON.stringify(formData)
    })
    .then(res => {
        if(res.ok){
          res.json().then(updatePost)
          navigate('/postlist')
        } else {
          //Display errors
          res.json().then(item => setErrors(item.errors))
         
        }
      })
    }

     // res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
  

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
          {/* <Typography component="h1" variant="h5"> */}
          <Typography component="h1" variant="h5" style={{ color: 'purple', textAlign: 'center'}}>
            Edit this post
            {errors?errors.map(e => <div>{e}</div>):null}

          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="restaurant_name"
              label="Restaurant Name"
              id="restaurant_name" 
              autoComplete="current-restaurant_name"
              value={formData.restaurant_name}
              onChange={handleChange}
              autoFocus
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
              value={formData.description}
              onChange={handleChange}
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
              value={formData.image}
              onChange={handleChange}
    
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
              value={formData.address}
              onChange={handleChange}
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
              value={formData.city}
              onChange={handleChange}
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
              value={formData.state}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="cusine"
              label="Cusine"
              type="cusine"
              id="cusine"
              autoComplete="current-cusine"
              value={formData.cusine}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit 
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
