import React, { useState } from 'react';
import { Rating, TextareaAutosize } from '@mui/material';
import BottomDrawer from './BottomDrawer';
import { toggleSliderDrawer } from '../actions/index';
import { connect } from 'react-redux';
import { getCookie } from '../utils';
import axios from 'axios';
import BoxWithSideBorder from '../components/BoxWithSideBorder';
import { setCookie } from '../utils';
const FeedBackDrawer = props => {
    let userId = getCookie('userId');
    // console.log(userId);
    const [infoData, updateInfo] = useState({
        taste: '',
        cleanliness: '',
        instructionsFollowed: '',
        comment: '',
    })

    const handleChange = (value, key) => {
        console.log({ ...infoData })
        let data = { ...infoData };
        data[key] = value;
        updateInfo(data);
        console.log("values of infodata" + { ...infoData })
    }

    const onSubmit = () => {
        console.log("infodata sec" + { ...infoData });
        axios({
            method: 'post',
            url: window.apiDomain + '/v1/users/feedback',
            data: {
                userId: userId,
                ...infoData,
            }
        }).then(res => {
            if (res.status === 200) {
                console.log("owner feedback response data" + JSON.stringify(res.data.data))
                props.setSession({
                    ...props.session,
                    ...res.data.data
                })
                setCookie('isLoggedIn', true, 30);
            }
        }).catch(err => {
            console.log(err)
        })
        props.toggleSliderDrawer({
            feedbackDrawer: false
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
            <RatingBox title={'Taste'} value={infoData.taste} nodeKey={'taste'} />
            <RatingBox title={'Cleaniness'} value={infoData.cleanliness} nodeKey={'cleanliness'} />
            <RatingBox title={'Instruction’s Follow'} value={infoData.instructionsFollowed} nodeKey={'instructionsFollowed'} />
            <div className='info-txt'>Additional Notes</div>
            <TextareaAutosize
                className="note-field"
                minRows={6}
                maxRows={6}
                placeholder='Appreciation / Area of Imporvement...'
                onChange={(e) => handleChange(e.target.value, 'comment')}
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

export default connect(null, { toggleSliderDrawer })(FeedBackDrawer);