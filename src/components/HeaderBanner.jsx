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
import HomePage from '../pages/HomePage';
import Header from './Header';
const HeaderBanner = props => {
    const {
        name,
    } = props.session

    let cookName = getCookie('cookName');
    console.log("cookName in  header" + cookName)
    let userType = getCookie('userType');
   var userId = sessionStorage.getItem("userId");
    console.log("userid in header===="+ userId)
   // let orderstatus = sessionStorage.getItem("orderStatusValue")
   var orderStatusValue = sessionStorage.getItem('orderStatusValue')

    let customerName = getCookie('customerName');
    console.log(customerName)
    const location = useLocation();
    const [orderStatus, updateOrderStatus] = useState('');
   // const [orderId,  updateOrderId] = useState('');
    const [isLoginPage, updatePage] = useState(location.pathname === '/login');
    const history = useHistory();
    const [sectionToShow, updateSection] = useState([]);
   
   

    useEffect(()=>{
        if(orderStatusValue === 'REQUESTED'){
            alert(orderStatusValue)
        }
        else{
            updateOrderStatus("APPROVED")
        }
    },[orderStatusValue])

   
    if(sessionStorage.getItem('isLoggedIn') === 'true') {
        console.log("ïnside get order api call")
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
                if(res.data.data[cur].status === 'REQUESTED'){
                  //  setTimeout(() => {
                       console.log("req1")
                        sessionStorage.setItem('orderStatusValue' , res.data.data[cur].status)
                      //  updateOrderStatus(res.data.data[cur].status)
                        // alert("req")
                  //  }, 2000);
                }
                else{
                       console.log("ap")
                      
                     sessionStorage.setItem('orderStatusValue' , 'APPROVED')
                     updateOrderStatus("APPROVED")
                } 
            })  
        })
        .catch((err) => {
            console.log(err);
        })
    }



     return (
        <div>
        {orderStatus === 'APPROVED' || orderStatus === 'REQUESTED'  &&  <HomePage/>}
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
        </div>
    )
};

const mapStateToProps = state => {
    return {
        session: state.session,
        reqStatus: state.session.reqStatus
    }
}

export default connect(mapStateToProps, { toggleSliderDrawer })(withRouter(HeaderBanner));
