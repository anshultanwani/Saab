import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleSliderDrawer } from '../actions/index'
import BottomDrawer from './BottomDrawer';
import './auto-approve.scss';

const MealVideoPopup = props => {
    const content = (
        <div className='youtube-video-popup'>
            {
                <div>
                    <iframe width="330" height="300" src="https://www.youtube.com/embed/ghXyNveJXFA" title="पालक पनीर ऐसे बनाएंगे तो उंगलिया चाटते रह जायेंगे| NO MIXIE Lehsuni Palak Paneer recipe -NO GRINDER" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <a href="/meal-food-recipe" className='viewdetailbtn'>Veiw Details</a>
                </div>

            }
        </div>
    )

    return (
        <BottomDrawer
            {...props}
            onClose={() => props.toggleSliderDrawer({
                mealvideoPopup: false
            })}
            children={content}
        />
    );
};

export default connect(null, { toggleSliderDrawer })(MealVideoPopup);