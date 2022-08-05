import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './payment.scss';
import { updateCart, toggleSliderDrawer } from '../actions';
import PaymentHead from "../components/PaymentHead";
import OwnerPaymentDetails from "../components/OwnerPaymentDetails";
import PaymentHistory from "../components/PaymentHistory";

const Payment = (props) => {
    const {
        history,
        curTab
    } = props;
    const [currentView, updateView] = useState('owner1');
    // const [cartTotal,updateTotal] = useState('');
    return (
        <div className='payment-outer'>
            <div className="payment-sec">
                <div className='border-card'>
                    <PaymentHead onTabChange={(val) => updateView(val)} curTab={['cart', 'owner1', 'owner2', 'owner3', 'owner4'].indexOf(currentView)} />
                </div>
            </div>
            {currentView === 'cart' ? 
            <div className="payment-history-sec">
                <PaymentHistory/>
            </div>:
            <OwnerPaymentDetails selCat={currentView} />
             }


        </div>
        // <div className="dish-sec">
        //     {
        //         Object.keys(props.paymentHistory).map((data, index) => {
        //             return (
        //                 <>
        //                     {data}
        //                 </>

        //             )
        //         })
        //     }
        // </div>
    )
}



const mapStateToProps = state => {
    return {
        paymentHistory: state.paymentData.history
    }
}



export default connect(mapStateToProps)(withRouter(Payment));