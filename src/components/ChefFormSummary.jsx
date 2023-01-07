import React from 'react';
import { Button } from '@mui/material';
import './ChefFormSummary.scss';
import axios from 'axios';
const ChefFormSummary = (props) => {
    const {
        summaryStep1,
        summaryStep2
    } = props;

    console.log(summaryStep1);
    console.log(summaryStep2);


    const handleSubmit = () => {
        console.log("cookcLicked")
        axios({
            method: 'post',
            url: window.apiDomain + '/v1/dishes/submit',
            data: {
                summaryStep1,
                summaryStep1  
            }
        }).then((res) => {
            if (res.status === 200) {
                console.log(res.data.data)
            }
        })

    }


    return(
        <div className='ChefFormSummary'>
            <div className='summaryPoints'>
                <ul className='list-checked'>
                    <li><strong>1 Chef will come</strong>(Profile is visible once chef accepts Booking)</li>
                    <li><strong>Ingredients list is shared after booking</strong>(List is simple after easily available items) </li>
                    <li><strong>Chef doesn't carry anything</strong></li>
                    <li><strong>3:00PM to 9:00PM</strong>(Chef will arrive at 3:00PM)</li>
                    <li><strong>3 January 2023, Tuesday</strong></li>
                    <li><strong>Address</strong></li>
                </ul>
            </div>
            <div className='widget'>
                <h1>Payment Details</h1>
                <div className='widget-footer'>
                    <p>Payment Option</p>
                </div>
            </div>
            <div className='paymentButton'>
            <Button className="Nextbtn" style={{ float: 'right' }} onClick={handleSubmit}>Submit</Button>  
            </div>
        </div>
    );
}

export default ChefFormSummary;