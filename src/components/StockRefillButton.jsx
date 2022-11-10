import React, { useState } from 'react';
import './stockrefill-button.scss';
import { Button } from '@mui/material';
import { getCookie, setCookie } from '../utils';
import { useEffect } from 'react';
import axios from 'axios';
import FeedbackRequest from '../common/FeedbackRequest';
import { useHistory, useLocation } from 'react-router-dom';
import { updateCart, toggleSliderDrawer } from '../actions';
import RequestSend from '../common/RequestSend';
import { connect } from 'react-redux';
const StockRefillButton = props => {
    const {
        btnTxt = 'PROCEED TO PAY',
        amt,
        count,
        clickHandler,
        userType,
        curView,
    } = props;
    console.log(userType)
    console.log("curview"+curView)
    const history = useHistory();
   // let customerId = getCookie('customerId');
   var customerId = sessionStorage.getItem("customerId");
    console.log("customerid in stockrefill cook" + customerId)
    const [showModal, toggleModal] = useState(false)
   

   

    const handleStock = () =>{
        console.log("harsha");
        toggleModal(true)
        let dataToSend = {veg:[],fruits:[],grocery:[]};
        props.cartList.map((cur)=>{
            dataToSend[cur.category == "veggies" ? "veg" : cur.category].push(cur)
        })
        let status
            axios({
                method: 'post',
                url: window.apiDomain + '/v1/orders',
                data: {
                    items:{
                        ...dataToSend
                    },
                    userId: customerId,
                    status: "REQUESTED",
                    createdBy: "COOK"
                }
            }).then(res => {
                console.log(res.status)
                if (res.status === 200) {
                    console.log(res)
                 
                    console.log("create order api" + JSON.stringify(res.data.data)) 
                }
            }).catch(err => {
                console.log(err)
            })  
    }


    return (
        <div className='stockrefill-button-sec'>
            {userType == "COOK" && curView == 'cart' ?
                <div className='stockrefill-btnsec-cook'>
                    <Button
                        variant='contained'
                        className='stockpage-btn'
                        onClick={handleStock}
                        children={(
                            <div className='btn-content'>
                                send to customer
                            </div>
                        )}
                    />
                </div>
                :
                <div className='address-details owner-sec'>
                    <div className='stockrefillebtn-label-holder'>
                        <div className='button-text'>
                            ₹ {amt}
                            <span>{'(' + count + ' items)'}</span>
                        </div>
                        <div className='btn-holder'>
                            <Button
                                variant='contained'
                                className='stockpage-btn'
                                onClick={clickHandler}
                                children={(
                                    <div className='btn-content'>
                                        {btnTxt}
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                    {props.children}
                </div>
            }
          <RequestSend open={showModal} onClose={() => toggleModal(false)} />
        </div>
    )
};

const mapStateToProps = state => {
    return {
        cartList: state.cart.cartList,
        session: state.session
    }
}

export default connect(mapStateToProps , { updateCart, toggleSliderDrawer })(StockRefillButton);