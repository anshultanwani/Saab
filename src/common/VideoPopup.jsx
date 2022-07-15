import React  from 'react';
import BottomDrawer from './BottomDrawer';
import { toggleSliderDrawer } from '../actions/index';
import { connect } from 'react-redux';

const VideoPopup = props => {
    const content = (
        <>
        <h1>harsha</h1>
    </>
    )
    return (
        <BottomDrawer
        {...props}
        onClose={() => props.toggleSliderDrawer({
            videoPopup: false
        })}
        children={content}
        label={'Rate Your Cook'}
        btnArr={[
            {
                className: 'btn-submit',
                variant: "contained",
               // onClick: onSubmit,
                children: "SUBMIT",
            }
        ]}
        />
    );
};

export default connect(null,{toggleSliderDrawer})(VideoPopup);