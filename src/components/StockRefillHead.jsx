import { Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import {ReactComponent as Cart} from '../assets/images/cart.svg';
import './stockRefillHead.scss';


const StockRefillHead = (props) => {
    const {
        count,
        curTab
    } = props;


    const getSection = () => {
        let arr = [(
            <Tab className='single-tab cart' id={'cart'} key={'c'} label={(
                <div className={"cart-sec " }>
                    <div className="circle">
                        <p><img src={require('../assets/images/'+ "cart.svg").default}/></p>
                        <p>{'Cart('+count+')'}</p>
                    </div>
                </div>
            )} />
        )];
        arr.push(
            Object.keys(props.stockRefillHeadset).map((item , index)=> {
                return (
                    <Tab className="single-tab" id={item} key={index} label={
                        <>
                        <div key={index} className="stockcat-sec">
                            <img src={require('../assets/'+ props.stockRefillHeadset[item].displayImage).default} />
                        </div>
                        <h6 className="head-title">{props.stockRefillHeadset[item].displayName}</h6>
                        </>
                    }
                    />
                    )
                })
                )
        return (
            <Tabs 
                value={curTab}
                onChange={(e,newVal) => {
                    props.onTabChange(e.currentTarget.id);
                }}
                variant="scrollable"
                className="tabs-sec"
                aria-label="icon tabs example">
                {arr}
            </Tabs>
        );
    }

    return(
         <div className="stockcat-sec-outer">
             <div className="tab-holder">
                {getSection()}
             </div>
         </div>
     );
    
}

const mapStateToProps = state => {
    return {
        stockRefillHeadset: state.cart.stockCat
    }
}

export default connect(mapStateToProps)(StockRefillHead);