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
    console.log("userid in header===="+ userId)
   // let orderstatus = sessionStorage.getItem("orderStatusValue")
   

    let customerName = getCookie('customerName');
    console.log(customerName)
    const location = useLocation();
    const [orderStatus, updateOrderStatus] = useState('APPROVED');
   // const [orderId,  updateOrderId] = useState('');
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
        '/select-owner': [ 'back' ],
        '/add-owner-list': [ 'back' ],
        '/todays-dish': [ ' ' ],
        '/grocery-history': ['back'],
        '/payment': ['back'],
        '/my-reward': ['back'],
        '/meal-plan': ['back'],
        '/meal-food-recipe': ['back']
    }

    useEffect(() => {
        if (['/login', '/signup', '/'].includes(location.pathname)) {
            updatePage(true)
        } else {
            updatePage(false);
        }
        updateSection(showSection[location.pathname])
      
    }, [location.pathname])

    useEffect(()=>{
        if(orderStatus === 'REQUESTED'){
            alert(orderStatus)
        }
    },[orderStatus])
    
    if(sessionStorage.getItem('isLoggedIn') === 'true') {
        axios.get(window.apiDomain + "/v1/orders?userId=" + userId)
        .then((res) => {
            console.log(res)
            console.log("values" + res.data.data[0])

            Object.keys(res.data.data).map((cur) => {
                console.log("proceed to pay req" + res.data.data[cur].status)
                   // updateOrderStatus(res.data.data[cur].status)
               
                   // updateOrderId(res.data.data[cur]._id)
                sessionStorage.setItem('orderIdValue' , res.data.data[cur]._id) 
                console.log("req values" + res.data.data[cur].status)
                if(res.data.data[cur].status == 'REQUESTED'){
                    setTimeout(() => {
                        // alert("req1")
                       // sessionStorage.setItem('orderStatusValue' , res.data.data[cur].status)
                        updateOrderStatus(res.data.data[cur].status)
                        // alert("req")
                    }, 2000);
                }
                // else{
                //     sessionStorage.setItem('orderStatusValue' , 'APPROVED')
                // } 
            })  
        })
        .catch((err) => {
            console.log(err);
        })
    }


 
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
        '/meal-food-recipe': "Recipe"
    }
     return (
        !isLoginPage ?
            <div className={'header-ui ' + (location.pathname !== '/home' ? 'no-groc' : '') +  (orderStatus == 'APPROVED' ? 'order-arroved' : 'order-req')}>
                <div className='fake-div' />
                <div className={'header-top ' + (sessionStorage.getItem("orderStatusValue") == 'APPROVED' ? 'order-arroved' : 'order-req') }>
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
                {/* {orderstatus} */}
                 {orderStatus == 'REQUESTED' && location.pathname === '/home' ? 
                    <div className='header-bottom'>
                        <div className='grocey-sec'>
                            <div className='left'>
                                <h1>{'Hi ' + name + "!"}</h1>
                                <p>{cookName + '  requested for stock refill'}</p>
                                {/* <Button color="inherit" onClick={handleApproveOrder}> */}
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
        session: state.session,
        reqStatus: state.session.reqStatus
    }
}

export default connect(mapStateToProps, { toggleSliderDrawer })(withRouter(Header));
