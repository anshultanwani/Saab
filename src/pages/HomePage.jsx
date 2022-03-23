import React, { useState } from 'react';
import { connect } from 'react-redux';
import FollowFav from '../components/FollowFav';
import HomeSlider from '../components/HomeSlider';
import MostCooked from '../components/MostCooked';
import MyPreferences from '../components/MyPreferences';
import Suggestions from '../components/Suggestions';

const Main = props => {
    return (
        <div className='home-page'>
            <HomeSlider/>
            <Suggestions />
            <MostCooked />
            <MyPreferences/>
            <FollowFav/>
       </div>
    )
};

const mapStateToProps = (state)  => {
    return {
        suggestions: state.foodData.suggestions
    }
}
export default connect(mapStateToProps)(Main);