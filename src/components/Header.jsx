import React from 'react';
import { AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Sort from '@mui/icons-material/Sort';
import './header.scss';

const Header = props => {
    return (
        <div className='header-ui'>
            <div className='fake-div' />
            <AppBar position="fixed" className="header-ui">
                <Toolbar>
                <IconButton
                    size="medium"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 0.5 }}
                >
                    <Sort />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <div className='heading'>{
                        "Home"
                    }</div>
                </Typography>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default Header;