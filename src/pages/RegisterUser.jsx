import React, { useState } from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import { Button, InputAdornment, TextField, Switch } from '@mui/material';
import './register-user.scss';
import FormControlLabel from '@mui/material/FormControlLabel';

const RegisterUser = props => {
    const userType = [
        { label: 'Owner', image: 'owner.png' },
        { label: 'Helper', image: 'cook.png' },
        { label: 'Owner', image: 'maid.png' }
    ];

    const [selectedType, updateUser] = useState(0)
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const REGION = [
        { name: 'Panjabi'},
        { name: 'Sindhi' },
        { name: 'Gujrati' },
        { name: 'South Indian' },
        { name: 'North Indian' },
        { name: 'Panjabi New' },
        {  name: 'Marwadi' },
        {  name: 'Bengali' },
        {  name: 'Bolo' },
    ];

    // the value of the search field 
    const [name, setName] = useState('');

    // the search result
    const [foundRegion, setFoundRegion] = useState(REGION);

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = REGION.filter((user) => {
                return user.name.toLowerCase().startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setFoundRegion(results);
        } else {
            setFoundRegion(REGION);
            // If the text field is empty, show all users
        }
        setName(keyword);
    }
        return (
            <div className={'login-home signup'}>
                <div className={'upper-sec'}>
                    <div className={'title'}>
                        Sign Up
                    </div>
                </div>
                <div className={'lower-sec'}>
                    <div className={'data-holder'}>
                        <div className={'label-div'}>Your Details</div>
                        <div>
                            <TextField
                                className="reg-field"
                                sx={{
                                    width: 1
                                }}
                                placeholder="Your Name"
                            />
                            <TextField
                                className="reg-half-field"
                                sx={{ width: 1 / 2.09 }}
                                placeholder="House Number"
                            />
                            <TextField
                                className="reg-half-field"
                                sx={{ width: 1 / 2.09 }}
                                placeholder="Apratment"
                            />
                        </div>
                        <div className='reasonality-srchbar'>
                            <div className={'label-div'}>Reasonality</div>
                            <TextField
                                type="search"
                                value={name}
                                onChange={filter}
                                className="input"
                                placeholder="Search here"
                                sx={{ width: 1 }}
                            />
                            <div className="user-list">
                                {foundRegion && foundRegion.length > 0 ? (
                                    foundRegion.map((user) => (
                                        <li key={user.id} className="user">
                                            <span className="user-name">{user.name}</span>
                                        </li>
                                    ))
                                ) : (
                                    <h1>No results found!</h1>
                                )}
                            </div>
                        </div>
                        <div className="selected-regin"></div>
                             <span>Do you have cook?</span>  
                             <span>
                             <FormControlLabel control={<Switch defaultChecked />} label="No" />    
                            </span> 
                        <div className="have-cook">

                        </div>

                    </div>
                </div>
            </div>
        )
    };

    export default RegisterUser;