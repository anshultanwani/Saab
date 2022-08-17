import React, { useState } from 'react';
import BoxWithSideBorder from '../components/BoxWithSideBorder';
import "./todays-dish.scss";
import Button from '@mui/material/Button';
import CookLatestFeedback from "../components/CookLatestFeedback"
import { connect } from 'react-redux';
import { toggleSliderDrawer, setSession } from '../actions/index';
import FeedbackRequest from '../common/FeedbackRequest';
import { useHistory, useLocation } from 'react-router-dom';
import TodayDishList from '../components/TodayDishList';
import { getCookie } from '../utils';
import queryString from 'query-string';

const TodayDish = (props) => {
    const searchParams = useLocation().search;
    const userType = queryString.parse(searchParams).userType;
    let customerId = getCookie('customerId');
    let customerName = getCookie('customerName');
    console.log("customerid"+customerId+"and"+"customerName"+customerName);
    const [showModal, toggleModal] = useState(false)
    const {
        toggleSliderDrawer
    } = props;
    const [catSection, toggleSection] = useState({
        Breakfast: {
            show: true
        },
        Lunch: {
            show: false
        },
        Dinner: {
            show: false
        }
    })
    const handleOpen = () => {
        console.log("harsha");
        toggleModal(true)
    }


    const getBanner = () => {
        return (
            <div className='grocey-sec'>
                <div className='left'>
                    <p>Help your owner to order grocery</p>
                    <Button color="inherit" onClick={() => props.history.push('/stock-refill?userType='+userType)}>
                        Order Now
                    </Button>
                </div>
                <div className='right'>
                    <img src={require('../assets/images/groceyrightimg.svg').default} />
                </div>
            </div>
        )
    }



    const getSection = () => {
        let arr = [];
        Object.keys(catSection).map(cur => {
            arr.push(
                <>
                    <BoxWithSideBorder
                        title={cur}
                        onClick={() => toggleSection({ ...catSection, [cur]: { ...catSection[cur], show: !catSection[cur].show } })}
                    />
                    {catSection[cur].show  ?
                        <TodayDishList/>
                    :null}
                </>
            );
            return cur;
        })
        return arr;
    }


    return (
        <>
            <div className="today-dish">
                <div className='border-card'>
                    <div className='title'>Meals list assigend by {customerName}</div>
                    <div className="owner-list">
                        <div className='dish-details'>
                            {getSection()}
                            {console.log(getSection())}
                        </div>
                        <div className='banner-sec'>
                            {getBanner()}
                        </div>
                        <div className='latest-feedback'>
                            <CookLatestFeedback />
                        </div>
                        <div className='rating-buttn'>
                            <div className='btn-holder'>
                                <Button
                                    variant='contained'
                                    className=''
                                    onClick={handleOpen}
                                    children={(
                                        <div className='btn-content'>
                                            <p>Ask your owner to rate you</p>
                                            <p><img src={require('../assets/images/' + "left-arrow.png").default} /></p>
                                        </div>
                                    )}
                                />

                            </div>
                        </div>

                    </div>
                </div>
                <FeedbackRequest open={showModal} onClose={() => toggleModal(false)} />
            </div>
        </>
    )
}

export default TodayDish;