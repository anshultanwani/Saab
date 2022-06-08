import React from 'react';
import { connect } from 'react-redux';
import FeedBackDrawer from './FeedBackDrawer';
import AddMember from './AddMember';

const SliderDrawers = props => {
    const {
        feedbackDrawer,
        addMemberDrawer
    } = props;
    return (
        <>
            <FeedBackDrawer open={feedbackDrawer} />
            <AddMember open={addMemberDrawer} />
        </>
    )
};

const mapStateToProps = state => {
    return {
        feedbackDrawer: state.sliderDrawer.feedbackDrawer,
        addMemberDrawer: state.sliderDrawer.addMemberDrawer
    }
}

export default connect(mapStateToProps)(SliderDrawers);