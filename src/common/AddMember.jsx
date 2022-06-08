import { TextField, InputAdornment } from '@mui/material';
import React from 'react';
import BottomDrawer from './BottomDrawer';
import { toggleSliderDrawer } from '../actions/index'
import { connect } from 'react-redux';
import ReplayIcon from '@mui/icons-material/Replay';

const AddMember = props => {
    const content = (
        <>
            <TextField
                className="mob-field"
                sx={{ m: 1}}
                InputProps={{
                    placeholder: 'Full Name'
                }}
            />
            <TextField
                className="mob-field"
                sx={{ m: 1}}
                InputProps={{
                    startAdornment: <InputAdornment position="start">{'(+91) |'}</InputAdornment>,
                    endAdornment: <InputAdornment position="end"><ReplayIcon /></InputAdornment>,
                    placeholder: '000 000 0000'
                }}
            />
        </>
    )
    return (
        <BottomDrawer
            {...props}
            label={'Add New Member'}
            onClose={() => props.toggleSliderDrawer({
                addMemberDrawer: false
            })}
            children={content}
            btnArr={[{
                className: 'btn-submit',
                variant: "contained",
                onClick: () => console.log('onclick done'),
                children: "DONE !",
            }]}
        />
    )
}

export default connect(null,{toggleSliderDrawer})(AddMember);