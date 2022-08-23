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
        { label: 'Cook', image: 'cook.png' },
        { label: 'Helper', image: 'maid.png' }
    ];
    const [selectedType,updateUser] = useState(0)
    const [errors,updateErrors] = useState('');
    const [currentView,updateView] = useState("mobile")
    const [mobileNum,updateNum] = useState('');

    const getOtp = () => {
        console.log("api res");
        if(mobileNum.length < 10) {
            updateErrors('Please Enter Valid Mobile Number');
            return;
        }
        axios({
            method: 'post',
            url: window.apiDomain+'/v1/users/login',
            data: {
            phone: Number(mobileNum),
            userType: userType[selectedType].label.toUpperCase()
        }}).then(res => {
            console.log("api res" + res.status);
            if(res.status === 200) {
                console.log("api res" + res.status);
                updateView('otp');
            }
        }).catch(err => {
            console.log("error" + err);
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
                                {cur.label === "Helper" ?
                                <div className="coming-soon" >
                                        Coming Soon
                                </div>
                                 : null}
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className={'lower-sec'}>
                { currentView === "mobile" ? 
                <div className={'data-holder'}>
                    <div className={'label-div'}>Mobile Number</div>
                    <div className='input-ui'>
                        <TextField
                            className="mob-field loginpage"
                            sx={{ m: 1}}
                            error={errors}
                            helperText={errors}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">{'(+91)'}</InputAdornment>,
                                endAdornment: <InputAdornment position="end">
                                <img src={require("../assets/images/reload.png").default} onClick={()=> updateNum('')}/>
                                </InputAdornment>,
                                value: mobileNum,
                                onChange: e => {
                                    if(e.target.value.length > 10 || e.target.value.includes('.')){
                                        return;
                                    }
                                    errors && updateErrors('');
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