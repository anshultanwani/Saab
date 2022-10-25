import React , {useState } from "react";
import { Button } from '@mui/material';
import './emptycart.scss';
import CartSuggetionList from "./CartSuggetionList";
import './stock-row.scss';
import { Tab, Tabs } from "@mui/material";
const EmptyCart = (props) => {
    const {
        btnTxt = "START SHOPPING" , 
        list , 
        curView,
        curTab
    } = props;
    const [currentView, updateView] = useState('fruits');
    return (
        <div className="empty-cart-outer">
            <div className="empty-art">
                <div className="cart-icon">
                    <div className="cart-sec-image">
                        <img src={require('../assets/images/' + "cart.svg").default} alt="not loaded" />
                    </div>
                    <p>Your Shopping Cart Is Empty</p>
                    <p>Your favourite items are just a click away</p>
                    <div className='btn-holder'>
                        <Button
                            variant='contained'
                            className='emptycart-btn'
                            onClick={(e) => {
                              console.log(props.list)
                              console.log(props.curTab)
                            updateView('fruits');
                            }}
                            children={(
                                <div className='btn-content'>
                                    {btnTxt}
                                </div>
                            )}
                        />
                    </div>
                </div>
            </div>
            {/* <div className="checkout-pro">
                <span>Before You  Checkout</span>
                <span>VIEW ALL</span>
                <div className="pro-list">
                  <CartSuggetionList {...props} /> 
                </div>
            </div> */}
        </div>
    )

}


export default EmptyCart;