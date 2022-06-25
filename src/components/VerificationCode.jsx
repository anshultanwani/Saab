import React, { useState, useEffect } from 'react';
import OtpInput from 'react-otp-input';
import './verification-code.scss';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { setSession } from '../actions'; 
import { connect } from 'react-redux';
import { setCookie } from '../utils';

const VerificationCode = props => {
    const {
        phone,
        userType
    } = props;
    const [code,updateCode] = useState('');
    const [apiMsg,updateMsg] = useState('');
    const history = useHistory();

    
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
        axios({
            method: 'post',
            url: window.apiDomain+'/v1/users/verify/otp',
            data: {
            phone: phone,
            otp: code,
            userType: userType
        }}).then(res => {
            console.log(res);
            if(res.data.data) {
                props.setSession({
                    ...res.data.data
                })
                if(res.data.data.onboarded) {
                    setCookie('isLoggedIn',true,30);
                    setCookie('userId',res.data.data._id,30)
                    history.push('/');
                }else {
                    history.push('/signup?phone='+phone+'&userType='+userType);
                }
            }
        console.log('verify Otp Code')
    }).catch(err => {
        if(err.response.data.appErrorCode == 'INVALID_OTP'){
            updateMsg('Wrong OTP')
        }
    })
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
                        inputStyle={'otp-box '+(apiMsg === 'Wrong OTP'?'error':'')}
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

export default connect(null,{setSession})(VerificationCode);