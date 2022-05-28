import React, { useState } from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import { Button, InputAdornment, TextField } from '@mui/material';

const RegisterUser = props => {
    return (
        <div className={'login-home signup'}>
            <div className={'upper-sec'}>
            <div className={'title'}>
                    Register
                    <span>As</span>
                </div>
            </div>
            <div className={'lower-sec'}>
                <div className={'data-holder'}>
                    <div className={'label-div'}>Mobile Number</div>
                    <div className='input-ui'>
                        <TextField
                            className="mob-field"
                            sx={{ m: 1}}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">{'(+91) |'}</InputAdornment>,
                                endAdornment: <InputAdornment position="end"><ReplayIcon /></InputAdornment>,
                                placeholder: '000 000 0000'
                            }}
                        />
                    </div>
                    <div className='bottom-txt'>
                        Not Registered?
                        <span className='signup-txt'>Sign Up</span>
                    </div>
                    <Button 
                        variant="contained"
                        className="otp-btn"
                    >
                        Get OTP
                    </Button>
                </div>
            </div>
        </div>
    )
};

export default RegisterUser;