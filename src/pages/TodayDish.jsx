import React, { useState } from 'react';
import BoxWithSideBorder from '../components/BoxWithSideBorder';
import "./todays-dish.scss";
import Button from '@mui/material/Button';
import CookLatestFeedback from "../components/CookLatestFeedback"
import { connect } from 'react-redux';
import { toggleSliderDrawer, setSession } from '../actions/index';
import FeedbackRequest from '../common/FeedbackRequest';
import TodayDishList from '../components/TodayDishList';

const TodayDish = (props) => {
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
                    <Button color="inherit" onClick={() => props.history.push('/stock-refill')}>
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
                    <div className='title'>Today Dish</div>
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

// const mapStateToProps = state => {
//     return {
//         todayDishset: state.foodData.todayDish,
//     }
// }


export default TodayDish;