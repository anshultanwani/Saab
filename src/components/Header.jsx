import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import './header.scss';
import { useHistory, useLocation, withRouter } from 'react-router-dom';
import { ReactComponent as BackIcon } from '../assets/images/backHeader.svg';
import { ReactComponent as SearchIcon } from '../assets/images/search.svg';
import { connect } from 'react-redux';
import { toggleSliderDrawer } from '../actions';
import { getCookie } from '../utils';
const Header = props => {
    const {
        name
    } = props.session

    let cookName = getCookie('cookName');

    console.log("cookName in  header" + cookName)
    let reqStatus;
    console.log("re"+reqStatus)
    if (!getCookie('reqStatus')) {
        reqStatus = "false"
        console.log("cook req value from session" + reqStatus)
    }
    else {
        reqStatus = getCookie('reqStatus');
        console.log("cook req from cookie" + reqStatus)
    }

    let customerName = getCookie('customerName');
    console.log(customerName)
    const location = useLocation();
    const [isLoginPage, updatePage] = useState(location.pathname === '/login');
    const history = useHistory();
    const [sectionToShow, updateSection] = useState([]);
    let showSection = {
        // '/home': ['burger', 'notification', 'profile'],
        '/home': ['burger' , 'search'],
        // '/stock-refill': ['back', 'search', 'notification', 'profile'],
        '/stock-refill': ['back', 'search'],
        '/add-address': ['back', 'search'],
        '/addedit-combo': ['back', 'search'],
        '/my-prefrences': ['back', 'search'],
        '/history': ['back', 'search'],
        '/select-owner': ['back', 'search'],
        '/add-owner-list': ['back', 'search'],
        '/todays-dish': ['back' , 'search'],
        '/grocery-history': ['back', 'search'],
        '/payment': ['back', 'search']
    }

    useEffect(() => {
        if (['/login', '/signup', '/'].includes(location.pathname)) {
            updatePage(true)
        } else {
            updatePage(false);
        }
        updateSection(showSection[location.pathname])
    }, [location.pathname])

    const headings = {
        '/home': '',
        '/stock-refill': 'STOCK REFILL',
        '/add-address': 'Choose Address',
        '/my-prefrences': 'My Preferences',
        '/history': 'History',
        '/select-owner': 'Select Customer',
        '/add-owner-list': 'Add Customer',
        '/payment': 'Payment',
        '/grocery-history': "Your Past Orders",
        '/todays-dish': "Today Dish"
    }

    return (
        !isLoginPage ?
            <div className={'header-ui ' + (location.pathname !== '/home' ? 'no-groc' : '')}>
                <div className='fake-div' />
                <div className='header-top'>
                    <div className='left'>
                        {sectionToShow?.includes('back') ?
                            <BackIcon style={{ height: '12px', width: '12px', marginRight: '10px' }} onClick={() => history.goBack()} /> : null}
                        {sectionToShow?.includes('burger') ? <span onClick={() => props.toggleSliderDrawer({ sideMenu: true })}><img src={require('../assets/images/menu.png').default} alt="not loaded" /></span> : null}
                        <span>{headings[location.pathname]}</span>
                    </div>
                    <div className='right'>
                        {sectionToShow.includes('search') ?
                            <span><SearchIcon /></span>
                            : null}
                        {sectionToShow.includes('notification') ?
                            <Button color="inherit" className="headerbtn">
                                <img src={require('../assets/images/Vector.png').default} alt="not loaded" />
                                <img src={require('../assets/images/Ellipse.png').default} className="login-icon" alt="not loaded" />
                            </Button> : null}
                        {sectionToShow.includes('profile') ?
                            <span className="namethumb">

                                {name.slice(0, 2)}
                                {/* <img src={require('../assets/images/login-photo.png').default} className="loginphoto" alt="not loaded" /> */}
                            </span>
                            : null}
                        {sectionToShow.includes('logo') ?
                            <span className="namethumb">
                              
                            <img src={require('../assets/images/logo.png').default} className="loginphoto" alt="not loaded" /> 
                            </span>
                            : null}

                    </div>
                </div>
                {reqStatus == 'true' && location.pathname === '/home' ?
                    <div className='header-bottom'>
                        <div className='grocey-sec'>
                            <div className='left'>
                                <h1>{'Hi ' + name + "!"}</h1>
                                <p>{cookName + '  requested for stock refill'}</p>
                                <Button color="inherit" onClick={() => props.history.push('/stock-refill?userType=OWNER')}>
                                    Approve Order
                                </Button>
                            </div>
                            <div className='right'>
                                <img src={require('../assets/images/groceyrightimg.svg').default} />

                            </div>
                        </div>
                    </div>
                    : null}
            </div>
            : null
    )
};

const mapStateToProps = state => {
    return {
        session: state.session
    }
}

export default connect(mapStateToProps, { toggleSliderDrawer })(withRouter(Header));
