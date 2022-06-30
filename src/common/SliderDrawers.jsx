import React from 'react';
import { connect } from 'react-redux';
import FeedBackDrawer from './FeedBackDrawer';
import AddMember from './AddMember';
import AutoApprove from './AutoApprove';
import SideMenu from './SideMenu';
import CompleteAddress from './CompleteAddress';

const SliderDrawers = props => {
    const {
        feedbackDrawer,
        addMemberDrawer,
        autoApprove,
        sideMenu,
        CompleteAddress
    } = props;
    return (
        <>
            <FeedBackDrawer open={feedbackDrawer} />
            <AddMember open={addMemberDrawer} />
            <AutoApprove open={autoApprove} />
            <CompleteAddress open={CompleteAddress} />
            <SideMenu open={sideMenu} />
        </>
    )
};

const mapStateToProps = state => {
    return {
        feedbackDrawer: state.sliderDrawer.feedbackDrawer,
        addMemberDrawer: state.sliderDrawer.addMemberDrawer,
        autoApprove: state.sliderDrawer.autoApprove,
        CompleteAddress: state.sliderDrawer.CompleteAddress ,
        sideMenu: state.sliderDrawer.sideMenu
    }
}

export default connect(mapStateToProps)(SliderDrawers);