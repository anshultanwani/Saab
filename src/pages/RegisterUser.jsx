import React, { useState } from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import { Button, InputAdornment, TextField } from '@mui/material';

const RegisterUser = props => {
    const userType = ['Owner','Cook','Helper'];
    const [selectedType,updateUser] = useState(0)
    return (
        <div className={'login-home signup'}>
            <div className={'upper-sec'}>
            <div className={'title'}>
                    Register
                    <span>As</span>
                </div>
                <div className={'user-type-holder'}>
                    {userType.map((cur,index) => {
                        return (
                            <>
                                <div className={'user-type '+(selectedType == index ? 'selected':'')} key={index}  onClick={() => updateUser(index)}>
                                    <div className={'type-card'}>
                                    </div>
                                <div className={'user'}>{cur}</div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className={'lower-sec'}>
                <div className={'data-holder'}>
                    <div className={'label-div'}>Your Details</div>
                    
                </div>
            </div>
        </div>
    )
};

export default RegisterUser;