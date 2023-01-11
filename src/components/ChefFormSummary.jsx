import React , {useState} from 'react';
import { Button } from '@mui/material';
import './ChefFormSummary.scss';
import axios from 'axios';
import { useEffect } from 'react';
const ChefFormSummary = (props) => {
    const {
        summaryStep1,
        summaryStep2
    } = props;
    const [address, setAddress] = useState('');
    const [chefCount, setChefCount] = useState(0);
    const [dishCount, setDishCount] = useState(0);
    const [finalAmount, setFinalAmount] = useState(0);
    const [guestCount, setGuestCount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
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
        axios.get(window.apiDomain+'/v1/dishes/summary')
        .then((res) => {
            if (res.status === 200) {
                console.log(res.data.data)
                setAddress(res.data.data.address);
                setChefCount(res.data.data.chefCount);
                setDishCount(res.data.data.dishCount);
                setFinalAmount(res.data.data.finalAmount);
                setGuestCount(res.data.data.guestCount);
                setTotalAmount(res.data.data.totalAmount);
            }
        })
    },[])
    return (
        <div className='ChefFormSummary'>
            <div className='summaryPoints'>
                <ul className='list-checked'>
                    <li><strong> {chefCount} Chef will come</strong>(Profile is visible once chef accepts Booking)</li>
                    <li><strong>Ingredients list is shared after booking</strong>(List is simple after easily available items) </li>
                    <li><strong>Chef doesn't carry anything</strong></li>
                    <li><strong>{chefComingTimeValue} to {chefComingTimeValue1}</strong>(Chef will arrive at {chefComingTimeValue} )</li>
                    <li><strong>3 January 2023 </strong></li>
                    <li><strong>{address}</strong></li>
                </ul>
            </div>
            <div className='payment-total'>
                <h1>Payment Summary </h1>
                <ul>
                    <li><span>Total Dishes:</span> {dishCount}</li>
                    <li><span>Persons:</span> {guestCount}</li>
                    <li><span>Total Amount:</span> {finalAmount}</li>
                    <li><span>GST:</span> 18%</li>
                    <li><span>Final Amount:</span> {totalAmount}</li>
                </ul>
            
            </div>
            {/* <div className='summaryPoints'>
                <ul className='list-checked'>
                <li>Advance payment is for booking confirmation and is non-refundable</li>
                <li>Balance payment can be done in cash or online</li>
                <li>Full address needs to be filled after payment</li>
                <li>Overtime charges are ₹8.5/min if you extend service</li>
                <li>Helper is optional and up to the decision of the Chef</li>
                <li>View cancellation policy from here</li>
                <li>I agree to the T&C, privacy policy, covid-19 guidelines</li>
                </ul>
             </div> */}
            <div className='paymentButton'>
                <Button className="Nextbtn" style={{ float: 'right' }} onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    );
}

export default ChefFormSummary;