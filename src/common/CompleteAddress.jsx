import React from "react";
import { connect } from 'react-redux';
import { toggleSliderDrawer } from '../actions/index';
const CompleteAddress = () => {


return(
    <BottomDrawer
     {...props}
            onClose={() => props.toggleSliderDrawer({
                CompleteAddress: false
            })}
    
    />
)
};

const mapStateToProps = state => {
    return {
        session: state.session
    }
}


export default connect(mapStateToProps,{toggleSliderDrawer})(CompleteAddress);