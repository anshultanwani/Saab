import React from 'react';
import { connect } from 'react-redux';
import FeedBackDrawer from './FeedBackDrawer';
import AddMember from './AddMember';
import AutoApprove from './AutoApprove';
import SideMenu from './SideMenu';
import CompleteAddress from './CompleteAddress';
import VideoPopup from '../common/VideoPopup';

const SliderDrawers = props => {
    const {
        feedbackDrawer,
        addMemberDrawer,
        autoApprove,
        sideMenu,
        completeAddress,
        videoPopup
    } = props;
    return (
        <>
            <FeedBackDrawer open={feedbackDrawer} />
            <AddMember open={addMemberDrawer} />
            <AutoApprove open={autoApprove} />
            <CompleteAddress open={completeAddress}/>
            <SideMenu open={sideMenu} />
            <VideoPopup open={videoPopup} />
        </>
    )
};

const mapStateToProps = state => {
    return {
        feedbackDrawer: state.sliderDrawer.feedbackDrawer,
        addMemberDrawer: state.sliderDrawer.addMemberDrawer,
        autoApprove: state.sliderDrawer.autoApprove,
        completeAddress: state.sliderDrawer.completeAddress,
        sideMenu: state.sliderDrawer.sideMenu,
        videoPopup: state.sliderDrawer.videoPopup
    }
}

export default connect(mapStateToProps)(SliderDrawers);