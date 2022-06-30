import React, { useState } from "react";
import { Button } from '@mui/material';
import './emptycart.scss';
import CartSuggetionList from "./CartSuggetionList";
import './stock-row.scss';

const EmptyCart = (props) => {
    const {
        btnTxt = "START SHOPPING"
    } = props;
    return (
        <div class="empty-cart-outer">
            <div className="empty-art">
                <div className="cart-icon">
                    <div className="cart-sec-image">
                        <img src={require('../assets/images/' + "cart.svg").default} />
                    </div>
                    <p>Your Shopping Cart Is Empty</p>
                    <p>Your favourite items are just a cick away</p>
                    <div className='btn-holder'>
                        <Button
                            variant='contained'
                            className='emptycart-btn'
                            children={(
                                <div className='btn-content'>
                                    {btnTxt}
                                </div>
                            )}
                        />
                    </div>
                </div>
            </div>
            <div className="checkout-pro">
                <span>Before You  Checkout</span>
                <span>VIEW ALL</span>
                <div class="pro-list">
                  <CartSuggetionList {...props} /> 

                </div>
            </div>
        </div>
    )

}


export default EmptyCart;