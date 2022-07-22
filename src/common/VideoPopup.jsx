import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleSliderDrawer } from '../actions/index'
import BottomDrawer from './BottomDrawer';
import './auto-approve.scss';

const VideoPopup = props => {
    const content = (
        <div className='youtube-video-popup'>
            {/* <iframe
                src={videoUrl}
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
                width="100%"
                height="200px"
            /> */}
        </div>
    )

    return (
        <BottomDrawer
            {...props}
            onClose={() => props.toggleSliderDrawer({
                videoPopup: false
            })}
            children={content}
        />
    );
};

export default connect(null, { toggleSliderDrawer })(VideoPopup);