import React, { useState } from 'react';
import { Rating, TextareaAutosize } from '@mui/material';
import BottomDrawer from './BottomDrawer';
import { toggleSliderDrawer } from '../actions/index';
import { connect } from 'react-redux';
import BoxWithSideBorder from '../components/BoxWithSideBorder';
import "./latestfeedback.scss";
const LatestFeedback = props => {
    const [infoData, updateInfo] = useState({
        taste: '',
        cleaniness: '',
        instruction: '',
        notes: '',
    })

    const handleChange = (value, key) => {
        let data = { ...infoData };
        data[key] = value;
        updateInfo(data);
    }

    const onSubmit = () => {
        console.table(infoData);
        props.toggleSliderDrawer({
            latestFeedback: false
        }); //will change in future according to requirement
        // props.onClose();
    }

    const RatingBox = info => {
        return (
            <BoxWithSideBorder
                {...info}
                rightSec={
                    <Rating
                        className='custom-rating'
                        value={info.value}
                        onChange={(event, newValue) => {
                            handleChange(newValue, info.nodeKey)
                        }}
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
            onClose={() => props.toggleSliderDrawer({
                latestFeedback: false
            })}
            children={content}
            label={'Latest Feedback'}
            btnArr={[
                {
                    className: 'btn-later',
                    variant: "outlined",
                    children: "REMIND ME LATER",
                    onClick: () => props.toggleSliderDrawer({
                        latestFeedback: false
                    })
                },
                {
                    className: 'btn-submit',
                    variant: "contained",
                    onClick: onSubmit,
                    children: "Accepted",
                }
            ]}
        />
    );
};

export default connect(null, { toggleSliderDrawer })(LatestFeedback);