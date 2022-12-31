import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import './header.scss';
import { useHistory, useLocation, withRouter } from 'react-router-dom';
import { ReactComponent as BackIcon } from '../assets/images/backHeader.svg';
import { ReactComponent as SearchIcon } from '../assets/images/search.svg';
import { connect } from 'react-redux';
import { toggleSliderDrawer } from '../actions';
import { getCookie } from '../utils';
import axios from 'axios';
const Header = props => {
    const {
        name,
    } = props.session
   
    let cookName = getCookie('cookName');
    console.log("cookName in  header" + cookName)
    let userType = getCookie('userType');
    var userId = sessionStorage.getItem("userId");
    console.log("userid in header====" + userId)
    // let orderstatus = sessionStorage.getItem("orderStatusValue")

    var showGroceryBanner = "";
    let customerName = getCookie('customerName');
    console.log(customerName)
    const location = useLocation();
    const [orderStatusNew, updateOrderStatusNew] = useState([]);
    // const [orderId,  updateOrderId] = useState('');
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [isLoginPage, updatePage] = useState(location.pathname === '/login');
    const history = useHistory();
    const [sectionToShow, updateSection] = useState([]);
    let showSection = {
        // '/home': ['burger', 'notification', 'profile'],
        '/home': ['burger'],
        // '/stock-refill': ['back', 'search', 'notification', 'profile'],
        '/stock-refill': ['back' , 'burger'],
        '/add-address': ['back'],
        '/addedit-combo': ['back'],
        '/my-prefrences': ['back'],
        '/history': ['back'],
        '/select-owner': ['back' , 'burger'],
        '/add-owner-list': ['back'],
        '/todays-dish': ['burger'],
        '/grocery-history': ['back' , 'burger'],
        '/payment': ['back'],
        '/my-reward': ['back'],
        '/meal-plan': ['back'],
        '/services': ['back'],
        '/meal-food-recipe': ['']

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
        '/home': 'HOME',
        '/stock-refill': 'STOCK REFILL',
        '/add-address': 'Choose Address',
        '/my-prefrences': 'My Preferences',
        '/history': 'History',
        '/select-owner': 'Select Customer',
        '/add-owner-list': 'Add Customer',
        '/payment': 'Payment',
        '/grocery-history': "Grocery History",
        '/todays-dish': "Today Dish",
        '/my-reward': "My Rewards",
        '/services': "Our Services"
    }
    return (
        !isLoginPage ?
            <div className={'header-ui ' + (location.pathname !== '/home' ? 'no-groc' : '') + (orderStatusNew == 'APPROVED' ? 'order-arroved' : 'order-req')}>
                {console.log("inside div 3===" + showGroceryBanner)}
                <div className='fake-div' />
                <div className={'header-top'}>
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
             </div>
            : null
    )
};

const mapStateToProps = state => {
    return {
        session: state.session,
        reqStatus: state.session.reqStatus
    }
}

export default connect(mapStateToProps, { toggleSliderDrawer })(withRouter(Header));