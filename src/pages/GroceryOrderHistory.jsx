import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getCookie } from '../utils';
import { setSession } from '../actions';
import axios from 'axios';
import './grocery-history.scss';
import { setCookie } from '../utils';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useEffect } from 'react';


const GroceryOrderHistory = props => {
   
   
    const {
        deliveryCharges,
        highDemandCharges
    } = props

    const [cartTotal, updateTotal] = useState('');
    const searchParams = useLocation().search;
    const userType = queryString.parse(searchParams).userType;
    console.log("gorceryhistory" + userType)
    const [orderList, updateOrderLIst] = useState([])
    const [orderStatus, updateOrderStatus] = useState('');
    const [dp,setDp] = useState();
    let userId = getCookie('userId');
    console.log("get Owner order" + userId)
    useEffect(() => {
        axios.get(window.apiDomain + "/v1/orders?userId=" + userId)
            .then((res) => {
                console.log(res)
                console.log("values" + res.data.data[0])
                //updateOrderLIst(res.data.data[0].items);
                let items = [];
                Object.keys(res.data.data[0].items).map((cur) => {
                    items = [...items, ...res.data.data[0].items[cur]]
                })
                updateOrderLIst(items)
                updateOrderStatus(res.data.data[0].status)
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])

    const BillingSection = props => {
        const {
            data
        } = props;
        let mrp = 0;
        let discount = 0;
        let total = 0;
        let cartVal = 0
        orderList.map(cur => {
            mrp += cur.quantity * cur.originalPrice;
            discount += cur.quantity * cur.DiscountedPrice
            total += cur.quantity * cur.originalPrice;
        })
        cartVal = total + highDemandCharges + deliveryCharges;
        //cartVal = total + 50 + 60;
        updateTotal(cartVal)
        return (
            <div className='billing-holder'>
                <label className='heading'>Paid Amount</label>
              
                     <div className='value total'>
                        <span>₹</span>{cartVal}
                        </div>
            </div>
        )
    }
  
    return (
        <>
            <div className='grocey-history'>
                <div className='border-card'>
                    <div className='inner'>
                        <div className='title'>Your Past Orders</div>
                        <div className='grocery-list'>
                            <div className='orderhistory-sec-top'>
                                <div className='left'>
                                    <p>
                                        <span>
                                            <img src={require('../assets/images/grocey-icon1.png').default} alt="not loaded" />
                                        </span>
                                        <span>
                                            Grocery
                                        </span>
                                    </p>
                                    {/* <p>
                                    <span>
                                        <img src={require('../assets/images/house-icon.jpg').default} alt="not loaded" />
                                    </span>
                                    <span>Home</span></p> */}
                                </div>
                                <div className='right'>
                                    <span>Help: 8884221487</span>
                                    <span>12 May 2022</span>
                                </div>
                            </div>
                           
                            <div className='ordrhistory-sec-mid'>
                            <div className='left'>
                                <div className='grocery'>
                                    <p className='list-items'>
                                        <span>List Items</span>
                                        <span>
                                            <button
                                                type="button"
                                                onClick={() => setDp(!dp)}
                                            >
                                                <img src={require('../assets/images/arrrow-up.png').default} alt="not loaded" />

                                            </button>
                                        </span>
                                    </p>
                                    
                                    {dp && <div className='gro-sec'>
                                        <ul>
                                        {
                                            orderList.map((cur) => {
                                                return (
                                                    <li>
                                                        {cur.name}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    </div>}


                                </div>

                            </div>
                         
                            <div className='billing-amount'>
                                         
                                        <BillingSection/>
                              </div>
                        </div>
                            <div className='ordrhistory-sec-btm'>
                                <span>
                                    {orderStatus}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

const mapStateToProps = state => {
    return {
        session: state.session,
        deliveryCharges: state.cart.deliveryCharges,
        highDemandCharges: state.cart.highDemandCharges
    }
}

export default connect(mapStateToProps, { setSession })(GroceryOrderHistory);