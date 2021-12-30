import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom"

function Navbar() {
  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
            Prectise Project   
          </Typography>
            <div className="links">
                <Link to="/Home" color="inherit">Home</Link>
                <Link to="/Signup" color="inherit">SignUp</Link>
                <Link to="/Login" color="inherit">Login</Link>
            </div>
        </Toolbar>
      </AppBar>
  );
}

export default Navbar;