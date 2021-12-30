import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { Link as RouterLink, useHistory } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import SideMenu from './SideMenu';

const Topheader = () => {
    const history = useHistory();
    const [data, setData] = useState({
    open: false,
    drop: false,
    redirect: false,
    user: JSON.parse(localStorage.getItem('user'))
    });

    const logOut = (e) => {
      e.preventDefault()
      history.push('/Login');
    }

    const bodyclickHandler = () => {
    document.body.classList.toggle('toggle');
    }

    const handleClick = () => {
      setData({ open: (data.open) ? false : true });
    }

    return (
      <header className="customHeader">
        <SideMenu />
        <div>
          <AppBar>
            <Toolbar>
              <IconButton onClick={(e) => bodyclickHandler(e)}
                edge="start"
                color="inherit"
                aria-label="open drawer">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Prectise Project
              </Typography>
                <div className="header-links">
                  <Button onClick={(e) => handleClick(e)}><Typography style={{ color: 'white' }} noWrap>Welcome Shadab</Typography></Button>
                  {data.open ? (
                    <Paper style={{
                      marginLeft: '50px',
                      position: 'absolute',
                      width: '200'
                    }}>
                      <MenuList>
                        <Link component={RouterLink} to={'/Profile'}>
                          <MenuItem>Profile</MenuItem>
                        </Link>
                        <MenuItem onClick={(e) => { if (window.confirm('Are you sure want to logout.')) { logOut(e) } }}>Logout</MenuItem>
                      </MenuList>
                    </Paper>
                  ) : null}
                </div> 
            </Toolbar>
          </AppBar>
        </div>
      </header>
    );
}

export default Topheader;


