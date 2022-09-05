import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCookie } from '../utils';
import { setSession } from '../actions';
import './splash-screen.scss';
import axios from 'axios';

const SplashScreen = props => {
    return (
        <div>
           <h1>Meal Plannig</h1>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        session: state.session
    }
}

export default connect(mapStateToProps,{setSession})(SplashScreen);