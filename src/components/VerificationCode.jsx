import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import OtpInput from 'react-otp-input';
import './verification-code.scss';

const VerificationCode = props => {
    const [code,updateCode] = useState('');
    const [apiMsg,updateMsg] = useState('');

    
    useEffect(() => {
        if(code.length === 4) {
            verifyOtp();
        }
    },[code])

    const handleChange = value => {
        updateCode(value);
        updateMsg('');
    }

    const verifyOtp = () => {
        updateMsg('OTP FAILED')
        console.log('verify Otp Code')
    }

    return (
        <div className='main-holder'>
             <div className={'lower-sec'}>
             <div className={'data-holder'}>
             <div className={'label-div'}>
                <p>Verification Code</p>
                <p>Enter the code sent to <b>(+91) 999-888-7777</b></p>
                 </div>
                <div className='input-ui vericode'>
                    <OtpInput
                        value={code}
                        containerStyle={'otp-holder'}
                        inputStyle={'otp-box'}
                        onChange={handleChange}
                        numInputs={4}
                        placeholder={'0000'}
                        isInputNum
                        shouldAutoFocus
                    />
                <div className={'label-div-right-text'}><b>Resend code</b> in 00:{25}</div>
                    </div>
                    {apiMsg?<div style={{textAlign: 'center'}}><b style={{color: 'red'}}>{apiMsg}</b></div>:null}
                    </div>
            </div>
        </div>
    );
};

export default VerificationCode;