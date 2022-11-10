import React, { useState } from 'react';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import BoxWithSideBorder from '../components/BoxWithSideBorder';
import StockList from '../components/StockList';
import { connect } from 'react-redux';
import './stock-refill.scss';
import { Button } from '@mui/material';
import { ReactComponent as Info } from '../assets/images/info1.svg';
import { ReactComponent as Info1 } from '../assets/images/info2.svg';
import StockRefillHead from '../components/StockRefillHead';
import StockRefillButton from '../components/StockRefillButton';
import { updateCart, toggleSliderDrawer ,updateOrderStatus } from '../actions';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import EmptyCart from '../components/EmptyCart';
import { getCookie, setCookie } from '../utils';
import {orderIdAction} from '../actions/orderidaction';
import axios from 'axios';
const StockRefill = props => {
    const {
        cartList,
        deliveryCharges,
        highDemandCharges,
        toggleSliderDrawer
    } = props;

    const searchParams = useLocation().search;
    const userType = queryString.parse(searchParams).userType;
    console.log(userType)
    let customerId = getCookie('customerId');
    console.log("customerid" + customerId)
    //let userId = getCookie('userId');
    var userId = sessionStorage.getItem("userId");
    console.log("userId in stockrefill" + userId)
    var orderStatusValue;
    var orderIdValue;
    const history = useHistory();
    const [stockCat, updatestockCat] = useState([]);
    const [currentView, updateView] = useState('cart');
    const [cartTotal, updateTotal] = useState('');
    // const [orderStatus, updateOrderStatus] = useState('');
    // const [orderId, updateOrderId] = useState('');
     const [catSection, toggleSection] = useState({
        Veggies: {
            show: true,
            list: [],
            stock: []
        },
        Grocery: {
            show: false,
            list: [],
            stock: []
        },
        Fruits: {
            show: false,
            list: [],
            stock: []
        }
    })



    useEffect(() => {
        console.log(stockCat);
        axios.get(window.apiDomain + "/v1/orders/stock")
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data.data);
                    updatestockCat(res.data.data)
                }
            })
            .catch((err) => {
                console.log(err);
            })
        console.log("usertype for get all order api" + userType)
        if (userType == "OWNER") {
            axios.get(window.apiDomain + "/v1/orders?userId=" + userId)
            .then((res) => {
                console.log(res)
                console.log("values" + res.data.data[0])
                //updateOrderLIst(res.data.data[0].items);
              
                // Object.keys(res.data.data[0].items).map((cur) => {
                //     items = [...items, ...res.data.data[0].items[cur]]
                // })

                Object.keys(res.data.data).map((cur) => {
                    console.log("proceed to pay req" + res.data.data[cur].status)
                    sessionStorage.setItem('orderStatusValue' , res.data.data[cur].status)
                    sessionStorage.setItem('orderIdValue' , res.data.data[cur]._id)
                    console.log("cur value" + res.data.data[cur])
                     if(sessionStorage.getItem("orderStatusValue") == 'REQUESTED'){
                        // if(res.data.data[cur].status == 'REQUESTED'){
                        //     props.updateCart(res.data.data[cur].items)    
                        //     console.log("update stock" + JSON.stringify(res.data.data[cur].items))
                        // }
                        //items = [...items, res.data.data[cur].items]
                        let items = [];
                        // res.data.data[cur].items.forEach(function(item){
                        //     items.push(item);
                        // })
                        // for (const item of res.data.data[cur].items) {
                        //     items.push(item)
                        //    // console.log(`${property}: ${object[property]}`);
                           
                        //   }
                          Object.keys(res.data.data[cur].items).map((item) => {
                     items = [...items, ...res.data.data[cur].items[item]]
                 })
                        props.updateCart(items)    
                        console.log("update stock" + JSON.stringify(res.data.data[cur].items))
                   
                       
                        
                        // props.updateCart(items)
                    }
                    else{
                        console.log("update not stock") 
                    }
                })
               
               
            })
            .catch((err) => {
                console.log(err);
            })
        }
        else {
            console.log("cartlist empty")
        }
    }, [])

  


    const changeAddress = () => {
        toggleSliderDrawer({
            selectaddress: true
        })
    }


    const sortList = () => {
        let obj = { ...catSection };
        let total = 0;
        Object.keys(obj).map(curKey => {
            let cart = [];
            cartList.map(cur => {
                total += cur.quantity * cur.originalPrice;
                if (cur.category === curKey.toLowerCase())
                    cart.push({ ...cur });
            });
            obj[curKey].list = cart;
            updateTotal(total + highDemandCharges + deliveryCharges);
            total = 0;
            return curKey;
        })
        Object.keys(stockCat).map(cur => {
            let curSec;
            console.log(cur);
            if (cur === 'veg') {
                curSec = 'Veggies'
                console.log("inside vaggies")
            }
            if (cur == 'fruits') {
                curSec = "Fruits"
                console.log("inside fruits")
            }
            if (cur == "groceries") {
                curSec = "Grocery"
            }
            // let curSec = stockCat[cur].displayName;
            console.log("currentsec name" + curSec)
            obj[curSec].stock = stockCat[cur].map(item => {
                console.log("stocklist for category" + obj[curSec].stock);
                { item.name.toLowerCase() }
                let ele = obj[curSec].list.find(el => el.name.toLowerCase() === item.name.toLowerCase());
                console.log("find elelment" + ele)
                return {
                    ...item,
                    quantity: ele?.quantity ? ele?.quantity : 0
                }
            })
            console.log("object" + JSON.stringify(obj[curSec].stock));
            return cur;
        })
        console.log("slelected" + JSON.stringify(obj))
        toggleSection(obj);
    }

    const enbleAutoApprove = () => {
        toggleSliderDrawer({
            autoApprove: true
        })
    }

    const updateQtyInCart = (qty, index, cur) => {
        let data = { ...catSection };
        data[cur].list[index].quantity = Number(qty) < 0 ? 0 : qty;
        let cartItems = cartList.map(cur => ({ ...cur }));
        let elIndex = cartItems.findIndex(el => el.name.toLowerCase() === data[cur].list[index].name.toLowerCase());
        cartItems[elIndex].quantity = Number(qty) < 0 ? 0 : qty;
        if (!qty) {
            data[cur].list.splice(index, 1);
            cartItems.splice(elIndex, 1);
        }
        toggleSection(data);
        props.updateCart([...cartItems])
    }

    const checkAndUpdateCart = (qty, index, item, category) => {
        let cartItems = cartList.map(cur => ({ ...cur }));
        let elIndex = cartItems.findIndex(el => el.name.toLowerCase() === item.name.toLowerCase());
        let cat = category ? category : currentView
        if (elIndex < 0 && qty > 0) {
            cartItems.push({ ...item, quantity: qty, category: cat });
        } else if (elIndex >= 0) {
            if (qty <= 0) {
                cartItems.splice(elIndex, 1);
            } else {
                cartItems[elIndex].quantity = qty;
                cartItems[elIndex].category = cat;
            }
        }
        props.updateCart([...cartItems]);
    }



    useEffect(() => {
        sortList();
    }, [cartList, currentView])


    const BillingSection = props => {
        const {
            data
        } = props;
        let mrp = 0;
        let discount = 0;
        let total = 0;
        let cartVal = 0
        data.map(cur => {
            mrp += cur.quantity * cur.originalPrice;
            discount += cur.quantity * cur.DiscountedPrice
            total += cur.quantity * cur.originalPrice;
        })
        cartVal = total + highDemandCharges + deliveryCharges;
        updateTotal(cartVal)
        return (
            <div className='billing-holder'>
                <label className='heading'>Billing Details</label>
                <div className='holder'>
                    <label className='title'>MRP</label>
                    <div className='value'><span>₹</span>{mrp}</div>
                    <label className='title'>Product Discount</label>
                    <div className='value discount'><span>-</span>{discount}</div>
                    <label className='title'>Delivery Charges</label>
                    <div className='value'><span>₹</span>{deliveryCharges}</div>
                    <label className='title'>High Demand Surge Charges</label>
                    <div className='value'><span>₹</span>{highDemandCharges}</div>
                    <label className='title heading'>Bill Total</label>
                    <div className='value total'><span>₹</span>{cartVal}</div>
                </div>
            </div>
        )
    }
    const section = () => {
        let arr = [];
        if (currentView === 'cart') {
            Object.keys(catSection).map(cur => {
                arr.push(
                    <>
                        <BoxWithSideBorder
                            title={cur}
                            subTitle={'(' + catSection[cur].list.length + ' items)'}
                            // rightSec={(
                            //     <div className='add-more' onClick={() => updateView(cur.toLowerCase())}>ADD MORE </div>
                            // )}
                            onClick={() => toggleSection({ ...catSection, [cur]: { ...catSection[cur], show: !catSection[cur].show } })}
                        />
                        {catSection[cur].show && catSection[cur].list?.length ?
                            <StockList list={catSection[cur].list} updateQty={(qty, index) => updateQtyInCart(qty, index, cur)} />
                            : null}
                    </>
                );
                return cur;
            })
            arr.push(<BillingSection data={cartList} />);
        } else {
            arr.push(
                <StockList list={catSection[currentView[0].toUpperCase() + currentView.substring(1)].stock} updateQty={checkAndUpdateCart} />
            )
        }
        return arr;
    }

    const fixedBtn = (curView) => {
        const clickHandler = () => {
            curView != 'cart' && updateView('cart');
            if (curView == 'cart') {
                console.log("proceed to pay clicked");
               // let userId = getCookie('userId');
                console.log("get Owner order" + userId)
               
                var orderId = sessionStorage.getItem("orderIdValue");
                var orderStatus = sessionStorage.getItem("orderStatusValue");
                console.log(orderId + "get order values" + orderStatus)
                axios({
                    method: 'put',
                    url: window.apiDomain + '/v1/orders/approve/status',
                    data: {
                        userId: userId,
                        status: "APPROVED",
                        updatedBy: "OWNER",
                        orderId: orderId
                    }
                })
                    .then(res => {
                        if (res.status === 200) {
                            console.log(res);
                            console.log("cook response data" + JSON.stringify(res.data.data))
                            props.updateCart([]);
                           // history.push('/stock-refill?userType=OWNER');
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                
            }

        }

        return (
            <div className='address-details-outer'>
                {userType == "OWNER" && curView == 'cart' ? <div className='address'>
                    <div className='left'>
                        <p><span><img src={require("../assets/images/" + "address-icon.png").default} /></span>Delivering to Home</p>
                        <p>Cook’s next visit </p>
                    </div>
                    <div className='right'>
                        <Button
                            variant='text'
                            className='enable-btn'
                            onClick={changeAddress}
                            children={(
                                <div className='btn-content'>
                                    CHANGE
                                </div>
                            )}
                        />
                    </div>
                </div> : null}
                <StockRefillButton userType={userType} curView={curView} clickHandler={clickHandler} count={cartList.length} amt={cartTotal} btnTxt={curView != 'cart' ? 'VIEW CART' : 'PROCEED TO PAY'} />
            </div>
        )
    }

    return (
        <div className='stock-refill'>
            <div className='border-card'>
                <StockRefillHead onTabChange={(val) => updateView(val)} curTab={['cart', 'fruits', 'veggies', 'grocery'].indexOf(currentView)} count={cartList.length} />
                {!cartList.length && currentView === 'cart' ?
                    <EmptyCart updateQuantity={checkAndUpdateCart}  curTab={['fruits'].indexOf(currentView)} count={cartList.length} /> : <>
                        {section()}
                        {!props.session.paymentAutoApproved && userType == "OWNER" ? <div className='btn-holder'>
                            <Button
                                variant='contained'
                                className='enable-btn'
                                onClick={enbleAutoApprove}
                                children={(
                                    <div className='btn-content'>
                                        ENABLE AUTO APPROVE
                                        <Info style={{ marginLeft: '5px', position: 'relative', top: '1px' }} />
                                        <Info1 style={{ width: '6px', height: '14px', position: 'absolute', top: '11px', right: '19px' }} />
                                    </div>
                                )}
                            />
                        </div> : 
                        null}
                    </>}
            </div>
            {cartList.length ?
                fixedBtn(currentView)
                : null}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        cartList: state.cart.cartList,
        deliveryCharges: state.cart.deliveryCharges,
        highDemandCharges: state.cart.highDemandCharges,
        orderStatus: state.cart.orderStatus,
        session: state.session
    }
}

// const mapDispatchToProps = dispatch =>{
//     getOrder: () =>{
//         dispatch(orderIdAction())
//     }
// }


//export default connect(mapStateToProps, mapDispatchToProps)({ updateCart, toggleSliderDrawer , updateOrderStatus})(withRouter(StockRefill));

export default connect(mapStateToProps, { updateCart, toggleSliderDrawer , updateOrderStatus})(withRouter(StockRefill));
