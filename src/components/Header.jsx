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



    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
        // Override media queries injected by theme.mixins.toolbar
        '@media all': {
            minHeight: 128,
        },
    }));


    return (
        !isLoginPage ?
            <div className='header-ui'>
                <div className='fake-div' />
                {/* <AppBar position="fixed" className="header-ui">
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
                </Toolbar>
                <div className='grocey-sec'>
                <img src={require('../assets/images/Vector.png').default}  />
                <Button color="inherit" onClick={() => props.history.push('/login')}>
                <img src={require('../assets/images/login-photo.png').default}  />
                </Button>
                </div>
            </AppBar> */}
                <AppBar position="fixed" className="header-ui">
                    <StyledToolbar>
                    <IconButton
                    size="medium"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ m: 1 }}
                    className="homemenu"
                >
                    <Sort />
                </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <div className='heading'>{
                                "Home"
                            }</div>
                        </Typography>
                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{ m: 1, alignSelf: 'flex-end' }}
                            className="groceysec"
                        >
                            <div className='grocey-sec'>
                                <div className='sec-left'>
                                    <p>Hi Simran </p>
                                    <p>you cook requested for stock refill</p>
                                    <Button color="inherit" onClick={() => props.history.push('/stock-reflll')}>
                                    Approve Order
                                    </Button>
                                </div>
                                <div className='sec-right'>
                                <img src={require('../assets/images/approve-banner-icon.png').default} />
                                </div>
                            </div>
                        </Typography>
                        <Button color="inherit" onClick={() => props.history.push('/login')}>
                            <img src={require('../assets/images/Vector.png').default} />
                        </Button>
                        <img src={require('../assets/images/login-photo.png').default} />
                    </StyledToolbar>
                </AppBar>
            </div>
            : null
    )
};

export default withRouter(Header);