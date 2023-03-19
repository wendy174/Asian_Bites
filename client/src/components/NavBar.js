import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';






function NavBar() {
    return (
        <AppBar position="static"  >
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Asian Bites
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
          </Toolbar>
        </AppBar>
      );


}

export default NavBar 