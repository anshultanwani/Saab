import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Sort from '@mui/icons-material/Sort';
import './header.scss';
import { withRouter } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';

const Header = props => {
    const [isLoginPage, updatePage] = useState(window.location.pathname == '/login');

    useEffect(() => {
        if (['/login', '/signup'].includes(window.location.pathname)) {
            updatePage(true)
        } else {
            updatePage(false);
        }
    }, [window.location.pathname])
    return (
        !isLoginPage ?
            <div className='header-ui'>
                <div className='fake-div' />
                <div className='header-top'>
                    <div className='left'>
                        <span><img src={require('../assets/images/menu.png').default} /></span>
                        <span>Home</span>
                    </div>
                    <div className='right'>
                            <Button color="inherit" onClick={() => props.history.push('/login')} className="headerbtn">
                                <img src={require('../assets/images/Vector.png').default} />
                                <img src={require('../assets/images/Ellipse.png').default} className="login-icon"/>
                            </Button>
                        <span>
                            <img src={require('../assets/images/login-photo.png').default} className="loginphoto"/>
                        </span>

                    </div>
                </div>
                <div className='header-bottom'>
                <div className='grocey-sec'>
                                <div className='left'>
                                    <h1>Hi Simran </h1>
                                    <p>Your cook requested for stock refill</p>
                                    <Button color="inherit" onClick={() => props.history.push('/stock-reflll')}>
                                    Approve Order
                                    </Button>
                                </div>
                                <div className='right'>
                                <img src={require('../assets/images/grocery1.PNG').default} />
                                <img src={require('../assets/images/gr2.PNG').default} />
                                <img src={require('../assets/images/approve-banner-icon.png').default} />
                                </div>
                            </div>
                </div>
            </div>
            : null
    )
};

export default withRouter(Header);