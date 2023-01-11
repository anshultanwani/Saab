import React from 'react';
import { Button } from '@mui/material';
import './ChefFormSummary.scss';
import axios from 'axios';
import { useEffect } from 'react';
const ChefFormSummary = (props) => {
    const {
        summaryStep1,
        summaryStep2,
        totalAmount,
        discount,
        finalAmount
    } = props;

    var chefCount = 2;
    var address =  "Kendriya Vihar, Sector 56, Gurugram , Gurugram, Haryana";
    console.log(summaryStep1);
    console.log(summaryStep2);
    const summaryObject = Object.assign(summaryStep1, summaryStep2)
    console.log(summaryObject);
    var chefComingTime = summaryObject.mealTypeStartTime
    chefComingTime = chefComingTime.split(/[, ]+/);
    var chefComingTimeValue = chefComingTime[0] - 3
    var chefComingTimeValue1 = chefComingTimeValue + 3
    chefComingTimeValue = chefComingTimeValue + ".00" + chefComingTime[1]
    chefComingTimeValue1 = chefComingTimeValue1 + ".00" + chefComingTime[1]
    const handleSubmit = () => {
        console.log("cookcLicked")
        axios({
            method: 'post',
            url: window.apiDomain + '/v1/dishes/submit',
            data: summaryObject
        }).then((res) => {
            if (res.status === 200) {
                console.log(res.data.data)
            }
        })

    }

    useEffect(() => {
        console.log("component render")
        axios({
            method: 'get',
            url: window.apiDomain + '/v1/dishes/summary',
            data: {
                chefCount: 2,
                address: address,
                guestCount: summaryObject.noGuest,
                dishCount: summaryStep2.selDish,
                totalAmount: 3500,
                discount: 0,
                finalAmount: 4130
            }
        }).then((res) => {
            if (res.status === 200) {
                console.log(res.data.data)
            }
        })
    },[])
    return (
        <div className='ChefFormSummary'>
            <div className='summaryPoints'>
                <ul className='list-checked'>
                    <li><strong>{chefCount} Chef will come</strong>(Profile is visible once chef accepts Booking)</li>
                    <li><strong>Ingredients list is shared after booking</strong>(List is simple after easily available items) </li>
                    <li><strong>Chef doesn't carry anything</strong></li>
                    <li><strong>{chefComingTimeValue} to {chefComingTimeValue1}</strong>(Chef will arrive at {chefComingTimeValue} )</li>
                    <li><strong>3 January 2023 </strong></li>
                    <li><strong>{address}</strong></li>
                </ul>
            </div>
            <div className='payment-total'>
                <h1>  Payment Summary </h1>
                <ul>
                    <li><span>Total Dishes:</span> {summaryStep2.selDish}</li>
                    <li><span>Persons:</span> {summaryStep1.noGuest}</li>
                    <li><span>Total Amount:</span> 3000</li>
                    <li><span>GST:</span> 18%</li>
                    <li><span>Final Amount:</span> 3540</li>
                </ul>

                {/* <div className='widget-footer'>
                <p>Payment Option</p>
                </div> */}
            </div>
            <div className='paymentButton'>
                <Button className="Nextbtn" style={{ float: 'right' }} onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    );
}

export default ChefFormSummary;