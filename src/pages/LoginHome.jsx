import React, { useState } from 'react';
import { Button, TextField, InputAdornment } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import './login-home.scss';
import VerificationCode from '../components/VerificationCode';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const LoginHome = props => {
    const userType = [
        { label: 'Owner', image: 'owner.png' } ,
        { label: 'Helper', image: 'cook.png' },
        { label: 'Owner', image: 'maid.png' }
    ];
    const [selectedType,updateUser] = useState(0)
    const [currentView,updateView] = useState("mobile")
    const [mobileNum,updateNum] = useState('');

    const getOtp = () => {
        axios({
            method: 'post',
            url: 'https://f4a5-2401-4900-1c68-c170-3427-4bec-1fdc-30ed.in.ngrok.io/v1/users/login',
            data: {
            phone: Number(mobileNum),
            userType: userType[selectedType].label.toUpperCase()
        }}).then(res => {
            if(res.status == '200') {
                updateView('otp');
            }
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className={'login-home'}>
            <div className={'upper-sec'}>
                <div className={'title'}>
                    Sign In
                    <span>As</span>
                </div>
                <div className={'user-type-holder'}>
                    {userType.map((cur,index) => {
                        return (
                            <>
                                <div className={'user-type '+(selectedType == index ? 'selected':'')} key={index}  onClick={() => updateUser(index)}>
                                    <div className={'type-card'}>
                                     <img src={require("../assets/images/"+cur.image).default}/>
                                    </div>
                                <div className={'user'}>{cur.label}</div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className={'lower-sec'}>
                { currentView == "mobile" ? 
                <div className={'data-holder'}>
                    <div className={'label-div'}>Mobile Number</div>
                    <div className='input-ui'>
                        <TextField
                            className="mob-field"
                            sx={{ m: 1}}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">{'(+91) |'}</InputAdornment>,
                                endAdornment: <InputAdornment position="end"><ReplayIcon onClick={() => updateNum('')}/></InputAdornment>,
                                value: mobileNum,
                                onChange: e => {
                                    if(e.target.value.length > 10){
                                        return;
                                    }
                                    updateNum(e.target.value)
                                },
                                placeholder: '000 000 0000',
                                type: 'Number'
                            }}
                        />
                    </div>
                    <Button 
                        variant="contained"
                        className="otp-btn"
                    >
                        <span className='signup-txt' onClick={() => getOtp()}>Get OTP</span>
                    </Button>
                </div>
                : <VerificationCode phone={Number(mobileNum)} userType={userType[selectedType].label.toUpperCase()} /> }
            </div>
        </div>
    )
}

export default withRouter(LoginHome);