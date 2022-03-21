import React, { useState } from 'react';
import { connect } from 'react-redux';
import Suggestions from '../components/Suggestions';

const Main = props => {
    return (
        <div className='home-page'>
            <Suggestions />
        </div>
    )
};

const mapStateToProps = (state)  => {
    return {
        suggestions: state.foodData.suggestions
    }
}
export default connect(mapStateToProps)(Main);