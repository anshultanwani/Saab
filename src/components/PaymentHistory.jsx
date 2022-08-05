import React from "react";
import { connect } from 'react-redux';
import { useRouteMatch } from "react-router-dom";
import './manageveggies.scss';

const PaymentHistory = (props) => {
    return (
        <div className="payment-history-inner">
            {
                props.paymentHistory.map((item, index) => {
                    return (
                        <div key={index} className="payment-history-index">
                            <ul>
                                <li>
                                    <div className="left">
                                        <p>
                                        <img src={require('../assets/' + item.image).default} alt="not loaded" />
                                        </p>
                                        <p>
                                        <span>Received From</span>
                                        <span>{item.date}</span>
                                        <p>{item.ownername}</p>
                                        </p>
                                        
                                    </div>
                                    <div className="right">
                                    ₹  {item.amount}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )
                })}
        </div>
    );
}


const mapStateToProps = state => {
    return {
        paymentHistory: state.paymentData.history
    }
}
export default connect(mapStateToProps)(PaymentHistory);