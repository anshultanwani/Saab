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
    console.log("cookName" + cookName)
    let customerName = getCookie('customerName');
    console.log(customerName)
    // console.log("session values"+ JSON.stringify(props.session));
    // console.log("session ṇame values"+ JSON.stringify(props.session.name));
    // console.log("session cook name"+ JSON.stringify(props.session.services.cook));

    // //  console.log("session cook name"+ JSON.Stringify(props.session.services.cook[0].name));
    const location = useLocation();
    const [isLoginPage, updatePage] = useState(location.pathname === '/login');
    const history = useHistory();
    const [sectionToShow, updateSection] = useState([]);
    let showSection = {
        '/home': ['burger', 'notification', 'profile'],
        '/stock-refill': ['back', 'search', 'notification', 'profile'],
        '/add-address': ['back', 'burger', 'search', 'notification', 'profile'],
        '/addedit-combo': ['back', 'search', 'burger', 'notification', 'profile'],
        '/my-prefrences': ['back', 'search', 'burger', 'notification', 'profile'],
        '/history': ['back', 'search', 'burger', 'notification', 'profile'],
        '/select-owner': ['back', 'search', 'burger', 'notification', 'profile'],
        '/add-owner-list': ['back', 'search', 'burger', 'notification', 'profile'],
        '/todays-dish': ['back', 'burger', 'notification', 'profile' ],
        '/payment': ['back', 'search', 'burger', 'notification', 'profile']
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
        '/home': 'Home',
        '/stock-refill': 'STOCK REFILL',
        '/add-address': 'Choose Address',
        '/my-prefrences': 'My Preferences',
        '/history': 'History',
        '/select-owner': 'Select Customer',
        '/add-owner-list': 'Add Customer',
        '/payment': 'Payment',
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
                            <Button color="inherit" onClick={() => props.history.push('/login')} className="headerbtn">
                                <img src={require('../assets/images/Vector.png').default} alt="not loaded" />
                                <img src={require('../assets/images/Ellipse.png').default} className="login-icon" alt="not loaded" />
                            </Button> : null}
                        {sectionToShow.includes('profile') ?
                            <span>
                                <img src={require('../assets/images/login-photo.png').default} className="loginphoto" alt="not loaded" />
                            </span>
                            : null}

                    </div>
                </div>
                <div className='header-bottom'>
                    {location.pathname === '/home' ?
                        <div className='grocey-sec'>
                            <div className='left'>
                                <h1>{'Hi ' + name}</h1>
                                <p>{cookName} requested for stock refill</p> 
                                <Button color="inherit" onClick={() => props.history.push('/stock-refill?userType=OWNER')}>
                                    Approve Order
                                </Button>
                            </div>
                            <div className='right'>
                                <img src={require('../assets/images/groceyrightimg.svg').default} />
                            </div>
                        </div> : null}
                </div>
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