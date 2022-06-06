import React, { useState } from 'react';
import { Button, Drawer, Rating, TextareaAutosize } from '@mui/material';
import {ReactComponent as Ellipse} from '../assets/images/Ellipse.svg';
import {ReactComponent as Cross} from '../assets/images/Vector.svg';
import './feedback.scss';

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
        props.onClose();
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
    return (
        <Drawer
            anchor='bottom'
            open={props.open}
            PaperProps={{className: 'drawer'}}
        >
            <div className='feedback'>
                <Ellipse className='elipse' onClick={() => props.onClose()}/>
                <Cross className='cross' onClick={() => props.onClose()}/>
                <div className='label-txt'>Help Your Cook To Grow</div>
                <div className='holder'>
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
                    <div className='btn-holder'>
                        <Button
                            className={'btn-later'}
                            variant="outlined"
                            children="REMIND ME LATER"
                            onClick={props.onClose}
                        />
                        <Button
                            className={'btn-submit'}
                            variant="contained"
                            onClick={onSubmit}
                            children="SUBMIT"
                        />
                    </div>
                </div>
            </div>
        </Drawer>
    );
};

export default FeedBackDrawer;