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
import { useHistory, useLocation, withRouter } from 'react-router-dom';
import MoreIcon from '@mui/icons-material/MoreVert';
import {ReactComponent as BackIcon} from '../assets/images/backHeader.svg';
import {ReactComponent as SearchIcon} from '../assets/images/search.svg';

const Header = props => {
    const location = useLocation();
    const [isLoginPage, updatePage] = useState(location.pathname == '/login');
    const history = useHistory();
    const [sectionToShow,updateSection] = useState([]);
    let showSection = {
        '/': ['burger','notification','profile'],
        '/stock-refill': ['back','search','notification','profile']
    }

    useEffect(() => {
        if (['/login', '/signup'].includes(location.pathname)) {
            updatePage(true)
        } else {
            updatePage(false);
        }
        updateSection(showSection[location.pathname])
    }, [location.pathname])

    const headings= {
        '/': 'Home',
        '/stock-refill' : 'STOCK REFILL'
    }

    return (
        !isLoginPage ?
            <div className={'header-ui '+(location.pathname != '/'?'no-groc':'')}>
                <div className='fake-div' />
                <div className='header-top'>
                    <div className='left'>
                        {sectionToShow?.includes('back')?
                            <BackIcon style={{height: '12px',width: '12px',marginRight: '10px'}} onClick={() => history.goBack()}/> : null}
                        {sectionToShow?.includes('burger')?<span><img src={require('../assets/images/menu.png').default} /></span>: null}
                        <span>{headings[location.pathname]}</span>
                    </div>
                    <div className='right'>
                            {sectionToShow.includes('search')?
                                <span><SearchIcon /></span>
                            :null}
                            {sectionToShow.includes('notification')?
                            <Button color="inherit" onClick={() => props.history.push('/login')} className="headerbtn">
                                <img src={require('../assets/images/Vector.png').default} />
                                <img src={require('../assets/images/Ellipse.png').default} className="login-icon"/>
                            </Button>: null}
                            {sectionToShow.includes('profile')?
                                <span>
                                    <img src={require('../assets/images/login-photo.png').default} className="loginphoto"/>
                                </span>
                            :null}

                    </div>
                </div>
                <div className='header-bottom'>
                {location.pathname == '/'?
                <div className='grocey-sec'>
                    <div className='left'>
                        <h1>Hi Simran </h1>
                        <p>Your cook requested stock refill</p>
                        <Button color="inherit" onClick={() => props.history.push('/stock-refill')}>
                        Approve Order
                        </Button>
                    </div>
                    <div className='right'>
                    <img src={require('../assets/images/groceyrightimg.svg').default} />
                    {/* <img src={require('../assets/images/grocery1.PNG').default} />
                    <img src={require('../assets/images/gr2.PNG').default} />
                    <img src={require('../assets/images/approve-banner-icon.png').default} /> */}
                    </div>
                </div>: null}
                </div>
            </div>
            : null
    )
};

export default withRouter(Header);