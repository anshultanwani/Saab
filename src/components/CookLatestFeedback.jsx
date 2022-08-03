import React, { useState } from 'react';
import { Rating, TextareaAutosize } from '@mui/material';
import BoxWithSideBorder from './BoxWithSideBorder';
import BottomDrawer from '../common/BottomDrawer';
import { connect } from 'react-redux';
// import "./latestfeedback.scss";
const CookLatestFeedback = props => {
    const [infoData, updateInfo] = useState({
        taste: '',
        cleaniness: '',
        instruction: '',
        notes: '',
    })

   
    const RatingBox = info => {
        return (
            <BoxWithSideBorder
                {...info}
                rightSec={
                    <Rating
                        className='custom-rating'
                        value={info.value}
                        // onChange={(event, newValue) => {
                        //     handleChange(newValue, info.nodeKey)
                        // }}
                    />
                }
            />
        )
    }
    const content = (
        <>
            <div className='cook-feedback'>
                <div className='craitng-left-sec'>
                    <RatingBox title={'Taste'} value={infoData.taste} nodeKey={'taste'} />
                    <RatingBox title={'Cleaniness'} value={infoData.cleaniness} nodeKey={'cleaniness'} />
                    <RatingBox title={'Instruction’s Follow'} value={infoData.instruction} nodeKey={'instruction'} />
                </div>
                <div className='cook-right-sec'>
                    <div className="cook-comments">Comments</div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting.
                    </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                </div>


            </div>
        </>
    )
    return (
        <BottomDrawer
            {...props}
            children={content}
            label={'Latest Feedback'}
        />
    );
};

export default  connect(null)(CookLatestFeedback);