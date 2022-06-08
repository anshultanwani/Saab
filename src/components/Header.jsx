import React, { useState, useEffect } from 'react';
import { AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Sort from '@mui/icons-material/Sort';
import './header.scss';
import { withRouter } from 'react-router-dom';

const Header = props => {
    const [isLoginPage,updatePage] = useState(window.location.pathname == '/login');

    useEffect(() => {
        if(['/login','/signup'].includes(window.location.pathname)){
            updatePage(true)
        }else {
            updatePage(false);
        }
    },[window.location.pathname])

    return (
        !isLoginPage ?
        <div className='header-ui'>
            <div className='fake-div' />
            <AppBar position="fixed" className="header-ui">
                <Toolbar>
                <IconButton
                    size="medium"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ m: 1 }}
                >
                    <Sort />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <div className='heading'>{
                        "Home"
                    }</div>
                </Typography>
                <img src={require('../assets/images/Vector.png').default}  />
                <Button color="inherit" onClick={() => props.history.push('/login')}>
                <img src={require('../assets/images/login-photo.png').default}  />
                </Button>
                </Toolbar>
               
            </AppBar>
        </div>
        : null
    )
};

export default withRouter(Header);