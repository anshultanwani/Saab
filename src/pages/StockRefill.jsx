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
import { updateCart, toggleSliderDrawer } from '../actions';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import EmptyCart from '../components/EmptyCart';
import { getCookie } from '../utils';
import axios from 'axios';
const StockRefill = props => {
    const {
        cartList,
        deliveryCharges,
        highDemandCharges,
        // stockCat,
        toggleSliderDrawer
    } = props;
    // let userId = getCookie('userId');
    const searchParams = useLocation().search;
    const userType = queryString.parse(searchParams).userType;
    console.log(userType)
    let customerId = getCookie('customerId');
    console.log("customerid" + customerId)

    const [stockCat, updatestockCat] = useState([]);
    const [currentView, updateView] = useState('cart');
    const [cartTotal, updateTotal] = useState('');
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
                console.log("stocklist for category"+obj[curSec].stock);
                    {item.name.toLowerCase()}
                let ele = obj[curSec].list.find(el => el.name.toLowerCase() === item.name.toLowerCase());
               console.log("find elelment"+ ele)
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
        let cat = category ? category: currentView
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
                            rightSec={(
                                <div className='add-more' onClick={() => updateView(cur.toLowerCase())}>ADD MORE </div>
                            )}
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
                <StockRefillButton  userType={userType} curView={curView} clickHandler={clickHandler} count={cartList.length} amt={cartTotal} btnTxt={curView != 'cart' ? 'VIEW CART' : 'PROCEED TO PAY'} />
            </div>
        )
    }

    return (
        <div className='stock-refill'>
            <div className='border-card'>
                <StockRefillHead onTabChange={(val) => updateView(val)} curTab={['cart', 'fruits', 'veggies', 'grocery'].indexOf(currentView)} count={cartList.length} />
                {!cartList.length && currentView === 'cart' ?
                    <EmptyCart updateQuantity={checkAndUpdateCart} /> : <>
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
                        </div> : null}
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
        // stockCat: state.cart.stockCat,
        session: state.session
    }
}
export default connect(mapStateToProps, { updateCart, toggleSliderDrawer })(withRouter(StockRefill));