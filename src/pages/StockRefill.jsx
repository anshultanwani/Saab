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

const StockRefill = props => {
    const {
        cartList,
        deliveryCharges,
        highDemandCharges
    } = props;

    const [catSection,toggleSection] = useState({
        Veggies: {
            show: true,
            list: []
        },
        Grocery: {
            show: false,
            list: []
        },
        Fruits: {
            show: false,
            list: []
        }
    })

    const sortList = () => {
        let obj = {...catSection};
        Object.keys(catSection).map(curKey => {
            obj[curKey].list = cartList.filter(cur => cur.category === curKey.toLowerCase());
        })
        toggleSection(obj);
    }

    const enbleautoApprove = () => {}


    useEffect(() => {
        sortList()
    },[])

    const BillingSection = props => {
        const {
            data
        } = props;
        let mrp = 0;
        let discount = 0;
        let total = 0;
        data.map(cur => {
            mrp += cur.price;
            discount += (cur.price - cur.actualPrice);
            total += cur.actualPrice;
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
        Object.keys(catSection).map(cur => {
            arr.push(
            <>
                <BoxWithSideBorder
                    title={cur}
                    subTitle={'('+ catSection[cur].list.length +' items)'}
                    rightSec={(
                        <div className='add-more'>ADD MORE </div>
                    )}
                    onClick={() => toggleSection({...catSection,[cur]: {...catSection[cur],show: !catSection[cur].show}})}
                />
                {catSection[cur].show && catSection[cur].list?.length ?
                    <StockList list={catSection[cur].list} updateQty={(qty,index) => {
                        let data = {...catSection};
                        data[cur].list[index].quantity = Number(qty) < 0 ? 0 : qty;
                        toggleSection(data);
                    }} />
                :null}
            </>
            );
        })
        return arr;
    }
    
    return (
        <div className='stock-refill'>
            <div className='border-card'>
                <StockRefillHead/>
                {section()}
                <BillingSection data={cartList} />
                <div className='btn-holder'>
                    <Button
                        variant='contained'
                        className='enable-btn'
                        onClick={enbleautoApprove}
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
                <StockRefillButton/>
                </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        cartList: state.cart.cartList,
        deliveryCharges: state.cart.deliveryCharges,
        highDemandCharges: state.cart.highDemandCharges
    }
}
export default connect(mapStateToProps)(withRouter(StockRefill));