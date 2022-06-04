import React, { useState } from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import { Button, InputAdornment, TextField, Switch } from '@mui/material';

const RegisterUser = props => {
    const userType = ['Owner', 'Cook', 'Helper'];
    const [selectedType, updateUser] = useState(0)
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return (
        <div className={'login-home signup'}>
            <div className={'upper-sec'}>
                <div className={'title'}>
                    Register
                    <span>As</span>
                </div>
                <div className={'user-type-holder'}>
                    {userType.map((cur, index) => {
                        return (
                            <>
                                <div className={'user-type ' + (selectedType == index ? 'selected' : '')} key={index} onClick={() => updateUser(index)}>
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
                    <div>
                        <TextField
                            className="mob-field"
                            sx={{ width: 1 }}
                            placeholder="Your Name"
                        />
                        <TextField
                            className="mon"
                            sx={{ width: 1 / 2 }}
                            placeholder="House Number"
                        />
                        <TextField
                            className="mob"
                            sx={{ width: 1 / 2 }}
                            placeholder="Apratment"
                        />
                    </div>
                    <div className='searchbar'>
                        <div className={'label-div'}>Reasonality</div>
                        {/* <div className='search-ui'>
                        <SearchBar
                        value={this.state.value}
                        onChange={(newValue) => this.setState({ value: newValue })}
                        onRequestSearch={() => doSomethingWith(this.state.value)}
                        /> */}
                    </div>
                    <div className='have-cook'>
                        <div className={'label-div'}>Do you have cook?</div>
                        <Switch {...label} defaultChecked />
                    </div>
                    <div className={'cook-details'}>
                        <div className={'label-div'}>Cook Details
                        </div>
                        <TextField
                            className="mob-field"
                            sx={{ m: 1 }}
                            placeholder="Cook Name"
                        />
                        <p>cook Number</p>
                    </div>
                    <div className='cook-spcl'>
                        <div className={'label-div'}>Cook Speaciality</div>
                        {/* <div className='search-ui'>
                        <SearchBar
                        value={this.state.value}
                        onChange={(newValue) => this.setState({ value: newValue })}
                        onRequestSearch={() => doSomethingWith(this.state.value)}
                        /> */}
                    </div>
                    <div className={'have-heper'}>
                        <div className={'label-div'}>Do you have Helper</div>
                        <Switch {...label} defaultChecked />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RegisterUser;