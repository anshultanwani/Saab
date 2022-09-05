import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCookie } from '../utils';
import { setSession } from '../actions';
import axios from 'axios';

const GroceryOrderHistory = props => {
    return (
        <div>
         
        </div>
    )
};

const mapStateToProps = state => {
    return {
        session: state.session
    }
}

export default connect(mapStateToProps,{setSession})(GroceryOrderHistory);