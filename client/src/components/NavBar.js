import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




function NavBar({influencer, updateInfluencer}) {

  const navigate = useNavigate()

  const handleLogOut = () => { 
    fetch('/logout', { 
      method: 'DELETE'
    })
    .then(res => { 
      if(res.ok) { 
        updateInfluencer(null);
      }
    })
    navigate('/signin')
  }

  

    return (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Asian Bites 
              {influencer.name}
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/signin">
              Sign In
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Sign Up
            </Button>
            <Button color="inherit" onClick={handleLogOut}>
              Log out 
            </Button>
            <Button color="inherit" component={Link} to="/postform">
              Add Post 
            </Button>
          </Toolbar>
        </AppBar>
      );


}

export default NavBar 