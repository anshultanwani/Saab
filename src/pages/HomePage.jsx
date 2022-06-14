import React, { useState } from 'react';
import { connect } from 'react-redux';
import HomeSlider from '../components/HomeSlider';
import ManageVaggie from '../components/ManageVaggie';
import MostCooked from '../components/MostCooked';
import MyPreferences from '../components/MyPreferences';
import Suggestions from '../components/Suggestions';
import Footer from '../components/Footer';

const Main = props => {
    return (
        <div className='homepage-sec'>
            <HomeSlider /> 
         <div className='home-page container'>
                <div className="main-content">
                    <Suggestions />
                    <MostCooked />
                    <MyPreferences />
                    <ManageVaggie />
                </div>
            </div>
        </div>

    )
};

const mapStateToProps = (state) => {
    return {
        suggestions: state.foodData.suggestions
    }
}
export default connect(mapStateToProps)(Main);