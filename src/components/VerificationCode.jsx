import React, { useState } from 'react';
import { Button, TextField, InputAdornment } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import './verification-code.scss';
import { withRouter } from 'react-router-dom';

const VerificationCode = props => {
    return (
        <div className='main-holder'>
             <div className={'lower-sec'}>
             <div className={'data-holder'}>
             <div className={'label-div'}>
                <p>Verification Code</p>
                <p>Enter the code sent to <b>(+91) 999-888-7777</b></p>
                 </div>
                <div className='input-ui vericode'>
                <TextField
                className="vericode-field"
                sx={{ width: 74 }}
                placeholder="0"
                />
                  <TextField
                className="vericode-field"
                placeholder="0"
                sx={{ width: 74}}
                />
                  <TextField
                className="vericode-field"
                placeholder="0"
                sx={{ width: 74}}
                />
                  <TextField
                className="vericode-field"
                placeholder="0"
                sx={{ width: 74}}
                />
                <div className={'label-div-right-text'}><b>Resend code</b> in 00.25</div>
                    </div>
                    <Button 
                        variant="contained"
                        className="otp-btn"
                    >
                        <span className='signup-txt'>Verify & Proceed</span>
                    </Button>
                    </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        suggestions: state.foodData.VerificationCode
    }
}
export default VerificationCode;