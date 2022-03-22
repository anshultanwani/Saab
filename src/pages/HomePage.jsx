import React, { useState } from 'react';
import { connect } from 'react-redux';
import MostCooked from '../components/MostCooked';
import Suggestions from '../components/Suggestions';

const Main = props => {
    return (
        <div className='home-page'>
            <Suggestions />
            <MostCooked />
        </div>
    )
};

const mapStateToProps = (state)  => {
    return {
        suggestions: state.foodData.suggestions
    }
}
export default connect(mapStateToProps)(Main);