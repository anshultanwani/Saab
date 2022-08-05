
import React from 'react';
import './stock-row.scss';
import { Button } from '@mui/material';
import { connect } from 'react-redux';

const OwnerPaymentDetails = props => {
    const {
        selCat
    } = props;
    return (
        <div className='payment-inner'>
            <div className='sec-top'>
                <div className='left'>
                    <p><span>Amt Due</span><span>For May 2022</span></p>
                    <a href="">Hens history</a>
                </div>
                <div className='right'>
                    2200
                </div>
            </div>
            {/* <div className='left'>
                <ul>
                    {
                        Object.keys(props.paymentHistory[selCat].list).map((cur, index) => {
                            return (

                                <li>
                                    {cur}
                                </li>


                            )
                        }
                        )
                    }
                </ul>
            </div> */}
            

            <div className='total amount'>
                <ul>
                    <li>
                        <p>
                            <span>Monthly Agreed Amonut</span>
                            <span>(For 30 working days)</span>
                        </p>
                        <p>₹ 3000</p>
                    </li>
                    <li>
                        <p>
                            <span>Working days</span>
                            <span>(Per day cost: 100)</span>
                        </p>
                        <p>25</p>
                    </li>
                    <li>
                        <p>
                            Eligible Amt
                        </p>
                        <p>
                        ₹ 2500
                        </p>
                    </li>
                    <li>
                        <p>
                            Advances
                        </p>
                        <p>
                            -300
                        </p>
                    </li>
                    <li>
                        <p>
                            Total Recieved
                        </p>
                        <p>
                        ₹ 2200
                        </p>
                    </li>
                </ul>
            </div>
            <div className="order-details-button">
                <div className='btn-holder'>

                    <Button
                        variant='outlined'
                        className='cancel-btn'
                        children={(
                            <div className='btn-content'>
                                REQUEST ALL
                            </div>
                        )}
                    />
                    <Button
                        variant='contained'
                        className=''
                        // onClick={handleOpen}
                        children={(
                            <div className='btn-content'>
                                REQUEST DARAK TO PAY
                            </div>
                        )}
                    />
                </div>
            </div>

        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        paymentHistory: state.paymentData.ownerPayment
    }
}


export default connect(mapStateToProps)(OwnerPaymentDetails);