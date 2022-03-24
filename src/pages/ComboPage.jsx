import React, { useState } from 'react';
import { connect } from 'react-redux';
import Makecombo from '../components/makecombo';

const Main = props => {
    return (
        <div className='combo-page'>
        <Makecombo/>
       </div>
    )
};

const mapStateToProps = (state)  => {
    return {
        suggestions: state.foodData.suggestions
    }
}
export default connect(mapStateToProps)(Main);