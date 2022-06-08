import React, { useState } from 'react';
import { Rating, TextareaAutosize } from '@mui/material';
import BottomDrawer from './BottomDrawer';
import { toggleSliderDrawer } from '../actions/index';
import { connect } from 'react-redux';

const FeedBackDrawer = props => {
    const [infoData,updateInfo] = useState({
        taste: '',
        cleaniness: '',
        instruction: '',
        notes: '',
    })

    const handleChange = (value,key) => {
        let data = {...infoData};
        data[key] = value;
        updateInfo(data);
    }
    
    const onSubmit = () => {
        console.table(infoData);
        props.toggleSliderDrawer({
            feedbackDrawer: false
        }); //will change in future according to requirement
        // props.onClose();
    }

    const RatingBox = info => {
        return (
        <div className='rating-box'>
            <label className='box-label'>{info.label}</label>
            <Rating
                className='custom-rating'
                value={info.value}
                onChange={(event, newValue) => {
                    handleChange(newValue,info.nodeKey)
                }}
            />
        </div>
        )
    }
    const content = (
        <>
            <RatingBox label={'Taste'} value={infoData.taste} nodeKey={'taste'} />
            <RatingBox label={'Cleaniness'} value={infoData.cleaniness} nodeKey={'cleaniness'} />
            <RatingBox label={'Instruction’s Follow'} value={infoData.instruction} nodeKey={'instruction'} />
            <div className='info-txt'>Additional Notes</div>
            <TextareaAutosize
                    className="note-field"
                    minRows={6}
                    maxRows={6}
                    placeholder='Appreciation / Area of Imporvement...'
                    onChange={(e) => handleChange(e.target.value,'notes')}
            />
        </>
    )
    return (
        <BottomDrawer
            {...props}
            onClose={() => props.toggleSliderDrawer({
                feedbackDrawer: false
            })}
            children={content}
            label={'Rate Your Cook'}
            btnArr={[
                {
                    className: 'btn-later',
                    variant: "outlined",
                    children: "REMIND ME LATER",
                    onClick: () => props.toggleSliderDrawer({
                        feedbackDrawer: false
                    })
                },
                {
                    className: 'btn-submit',
                    variant: "contained",
                    onClick: onSubmit,
                    children: "SUBMIT",
                }
            ]}
        />
    );
};

export default connect(null,{toggleSliderDrawer})(FeedBackDrawer);