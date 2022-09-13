import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getCookie } from '../utils';
import { setSession } from '../actions';
import axios from 'axios';
import './grocery-history.scss';
import { setCookie } from '../utils';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';

const GroceryOrderHistory = props => {
    const searchParams = useLocation().search;
    const userType = queryString.parse(searchParams).userType;
    console.log("gorceryhistory" + userType)
    const [orderList, updateOrderList] = useState([])
    const [dp, setDp] = useState(false);
    if (userType == "OWNER") {
        let userId = getCookie('userId');
        console.log("get Owner order" + userId)
        axios.get(window.apiDomain + "/v1/orders?userId=" + userId)
            .then((res) => {
                console.log("groceydata" + JSON.stringify(res.data.data))

                if (res.status === 200) {
                    if (res.data.data[0].items.length > 0) {
                        console.log("cook request for data items" + JSON.stringify(res.data.data[0].items));
                        updateOrderList(res.data.data)
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    else {
        console.log("cartlist empty")
    }
    return (
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
                                    {/* {orderList.length} */}
                                    {
                                        // orderList.length >= 1 ?
                                        orderList.map((data) => (
                                            <div>
                                                {data.items}
                                                {/* {data.items.fruits[0].name} */}
                                                {/* {data.items.grocery[0].name} */}

                                            </div>
                                        ))
                                        //  : null
                                    }
                                    {dp && <div>
                                        <ul>
                                            <li>
                                                Onion, Chilli,  Potato , Tomato ,  egg ,  bread ,  ginger,
                                                Papaya, Bread, Egg
                                            </li>
                                        </ul>
                                    </div>}


                                </div>

                            </div>
                            <div className='billing-amount'>Paid: 500 ₹</div>
                        </div>

                        <div className='ordrhistory-sec-btm'>
                            <span>
                                Delivered
                            </span>
                        </div>

                    </div>
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
                                    {/* {orderList.length} */}
                                    {
                                        // orderList.length >= 1 ?
                                        orderList.map((data) => (
                                            <div>
                                                {data.items}
                                                {/* {data.items.fruits[0].name} */}
                                                {/* {data.items.grocery[0].name} */}

                                            </div>
                                        ))
                                        //  : null
                                    }
                                    {dp && <div>
                                        <ul>

                                            <li>
                                                Onion, Chilli,  Potato , Tomato ,  egg ,  bread ,  ginger
                                                Sugar, Chilli,  Gaggery ,

                                            </li>

                                        </ul>
                                    </div>}


                                </div>

                            </div>
                            <div className='billing-amount'>Paid: 300 ₹</div>
                        </div>

                        <div className='ordrhistory-sec-btm'>
                            <span>
                                Completed
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        session: state.session
    }
}

export default connect(mapStateToProps, { setSession })(GroceryOrderHistory);