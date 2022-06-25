import React, { useState } from 'react';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import BoxWithSideBorder from '../components/BoxWithSideBorder';
import StockList from '../components/StockList';
import { connect } from 'react-redux';
import './stock-refill.scss';
import { Button } from '@mui/material';
import {ReactComponent as Info} from '../assets/images/info1.svg';
import {ReactComponent as Info1} from '../assets/images/info2.svg';
import StockRefillHead from '../components/StockRefillHead';
import StockRefillButton from '../components/StockRefillButton';
import { updateCart, toggleSliderDrawer } from '../actions';

const StockRefill = props => {
    const {
        cartList,
        deliveryCharges,
        highDemandCharges,
        stockCat,
        toggleSliderDrawer
    } = props;

    const [currentView,updateView] = useState('cart');
    const [catSection,toggleSection] = useState({
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

    const sortList = () => {
        let obj = {...catSection};
        Object.keys(obj).map(curKey => {
            let cart = [];
             cartList.map(cur => {
                 if(cur.category === curKey.toLowerCase())
                    cart.push({...cur});
                });
             obj[curKey].list = cart;
        })
        Object.keys(stockCat).map(cur => {
            let curSec = stockCat[cur].displayName;
            obj[curSec].stock = stockCat[cur].list.map(item => {
                let ele = obj[curSec].list.find(el => el.name.toLowerCase() == item.name.toLowerCase());
                return {
                    ...item,
                    quantity: ele?.quantity ? ele?.quantity : 0
                }
            })
        })
        toggleSection(obj);
    }

    const enbleAutoApprove = () => {
        toggleSliderDrawer({
            autoApprove: true
        })
    }

    const updateQtyInCart = (qty,index,cur) => {
        let data = {...catSection};
        data[cur].list[index].quantity = Number(qty) < 0 ? 0 : qty;
        let cartItems = cartList.map(cur => ({...cur}));
        let elIndex = cartItems.findIndex(el => el.name.toLowerCase() === data[cur].list[index].name.toLowerCase());
        cartItems[elIndex].quantity = Number(qty) < 0 ? 0 : qty;
        if(!qty) {
            data[cur].list.splice(index,1);
            cartItems.splice(elIndex,1);
        }
        toggleSection(data);
        props.updateCart([...cartItems])
    }
    
    const checkAndUpdateCart = (qty,index,item) => {
        let cartItems = cartList.map(cur => ({...cur}));
        let elIndex = cartItems.findIndex(el => el.name.toLowerCase() === item.name.toLowerCase());
        if(elIndex < 0 && qty > 0){
            cartItems.push({...item,quantity: qty,category: currentView});
        }else if(elIndex >= 0){
            if(qty <= 0){
                cartItems.splice(elIndex,1);
            }else {
                cartItems[elIndex].quantity = qty;
                cartItems[elIndex].category = currentView;
            }
        }
        props.updateCart([...cartItems]);
    }

    useEffect(() => {
        sortList();
    },[cartList,currentView])


    const BillingSection = props => {
        const {
            data
        } = props;
        let mrp = 0;
        let discount = 0;
        let total = 0;
        data.map(cur => {
            mrp += cur.quantity * cur.price;
            discount += cur.quantity * (cur.price - cur.actualPrice);
            total += cur.quantity * cur.actualPrice;
        })
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
                    <div className='value total'><span>₹</span>{total+highDemandCharges+deliveryCharges}</div>
                </div>
            </div>
        )
    }
    const  section = () => {
        let arr = [];
        if(currentView == 'cart') {
            Object.keys(catSection).map(cur => {
                arr.push(
                <>
                    <BoxWithSideBorder
                        title={cur}
                        subTitle={'('+ catSection[cur].list.length +' items)'}
                        rightSec={(
                            <div className='add-more'onClick={() => updateView(cur.toLowerCase())}>ADD MORE </div>
                        )}
                        onClick={() => toggleSection({...catSection,[cur]: {...catSection[cur],show: !catSection[cur].show}})}
                    />
                    {catSection[cur].show && catSection[cur].list?.length ?
                        <StockList list={catSection[cur].list} updateQty={(qty,index) => updateQtyInCart(qty,index,cur)} />
                    :null}
                </>
                );
            })
            arr.push(<BillingSection data={cartList} />);
        }else {
            arr.push(
                <StockList list={catSection[currentView[0].toUpperCase()+currentView.substring(1)].stock} updateQty={checkAndUpdateCart} />
            )
        }
        return arr;
    }
    
    return (
        <div className='stock-refill'>
            <div className='border-card'>
                <StockRefillHead onTabChange={(val) => updateView(val)} curTab={['cart','fruits','veggies','grocery'].indexOf(currentView)} count={cartList.length} />
                {section()}
                <div className='btn-holder'>
                    <Button
                        variant='contained'
                        className='enable-btn'
                        onClick={enbleAutoApprove}
                        children={(
                            <div className='btn-content'>
                                ENABLE AUTO APPROVE
                                <Info style={{marginLeft: '5px',position: 'relative',top: '1px'}}/>
                                <Info1 style={{ width: '6px',height: '14px',position: 'absolute',top: '11px',right: '19px'}} />
                            </div>
                        )}
                    />
                </div> 
            </div>
            <div className='address-details'>
                <div className='address'>
                    <div className='left'>
                        <p><span><img src={require("../assets/images/"+"address-icon.png").default}/></span>Delivering to Home</p>
                        <p>Cook’s next visit </p>
                    </div>
                    <div className='right'>
                        CHANGE
                    </div>
                </div>
                <StockRefillButton/>
                </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        cartList: state.cart.cartList,
        deliveryCharges: state.cart.deliveryCharges,
        highDemandCharges: state.cart.highDemandCharges,
        stockCat: state.cart.stockCat
    }
}
export default connect(mapStateToProps,{updateCart,toggleSliderDrawer})(withRouter(StockRefill));