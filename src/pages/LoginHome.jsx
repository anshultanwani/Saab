import React, { useState } from 'react';
import { Button, TextField, InputAdornment } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import './login-home.scss';
import VerificationCode from '../components/VerificationCode';
import { withRouter } from 'react-router-dom';

const LoginHome = props => {
    const userType = [
        { label: 'Owner', image: 'owner.png' } ,
        { label: 'Helper', image: 'cook.png' },
        { label: 'Owner', image: 'maid.png' }
    ];
    const [selectedType,updateUser] = useState(0)
    const [currentView,updateView] = useState("mobile")
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
                                endAdornment: <InputAdornment position="end"><ReplayIcon /></InputAdornment>,
                                placeholder: '000 000 0000'
                            }}
                        />
                    </div>
                    <Button 
                        variant="contained"
                        className="otp-btn"
                    >
                        <span className='signup-txt' onClick={() => updateView("otp")}>Get OTP</span>
                    </Button>
                </div>
                : <VerificationCode/> }
            </div>
        </div>
    )
}

export default withRouter(LoginHome);