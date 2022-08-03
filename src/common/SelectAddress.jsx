import React from "react";
import { Rating, TextareaAutosize } from '@mui/material';
import BottomDrawer from './BottomDrawer';
import { toggleSliderDrawer } from '../actions/index';
import { connect } from 'react-redux';
import BoxWithSideBorder from '../components/BoxWithSideBorder';

const SelectAddress = (props) => {
    const content = (
        <>
           <div className="addresslist">
            <p>Saved Address</p>
           </div>
        </>
    )
    return(
        <BottomDrawer
        {...props}
        onClose={() => props.toggleSliderDrawer({
            selectaddress: false
        })}
        children={content}
        label={'Select An Address'}
    />
    )
}

const mapStateToProps = state => {
    return {
        session: state.session
    }
}


export default connect(mapStateToProps,{toggleSliderDrawer})(SelectAddress);