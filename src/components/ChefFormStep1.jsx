import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from 'axios';
import { Button, TextField, Switch } from '@mui/material';
import './services-head.scss';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Box from '@mui/material/Box';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import DiscreteSliderMarks from "./DiscreteSliderMarks";
import CollapsableSwitchMealPlan from '../components/CollapsableSwitchMealPlan';
import ServicesCatTabs from "./ServiceCatTabs";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const ChefFormStep1 = (props) => {
    const [value, setValue] = React.useState(dayjs('2023-01-11T21:11:54'));
    const [checked, setChecked] = useState([]);
    const [occasion, setOccasion] = React.useState('');
    const [data, updateData] = useState({
        workingDays: []
    })
   
    const [switchStatus, updateStatus] = useState({
        veg: false
    })
    const marks = [
        {
            value: 1,
            label: '1',
        },
        {
            value: 5,
            label: '5',
        },
        {
            value: 10,
            label: '10',
        },
        {
            value: 50,
            label: '50',
        },
        {
            value: 100,
            label: '100',
        }
    ];
    const handleChange = (event, newValue) => {
        setOccasion(event.target.value);
    };


    const handleChange1 = (newValue) => {
        setValue(newValue);

    };
    
    // const handleCheckbox = (event) => {
    //     data.workingDays = [...checked];
    //     if (event.target.checked) {
    //         data.workingDays = [...checked, event.target.name];
    //         console.log("working days" +  data.workingDays)
    //     } else {
    //         data.workingDays.splice(checked.indexOf(event.target.name), 1);
    //     }
    //     setChecked(data.workingDays);
    //     console.log("setChecked" + setChecked)
    // }

    const handleCheckbox = (event) => {
        data.workingDays = [...checked];
        if (event.target.checked) {
            data.workingDays = [...checked, event.target.name];
        } else {
            data.workingDays.splice(checked.indexOf(event.target.name), 1);
        }
        setChecked(data.workingDays);
        console.log(checked)
    }
    const label = { inputProps: { 'aria-label': 'Chinese' } };
    return (
        <>
            <div className='service-head-outer'>
                <div className="service-form">
                    <div className='field-holder'>
                        <label>Select Occasion</label>
                        <Select
                            value={occasion}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>Select from dropdown</em>
                            </MenuItem>
                            <MenuItem value={'house-party'}>House Party</MenuItem>
                            <MenuItem value={'birthday-party'}>Birthday Party</MenuItem>
                            <MenuItem value={'anniversary'}>Anniversary</MenuItem>
                        </Select>
                    </div>
                    <div className="field-holder">
                        <label>Select no of Guests / Person</label>
                        <DiscreteSliderMarks marks={marks} />
                    </div>
                    <div className="field-holder sel-date">
                        <label> Select Date</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack>
                                <MobileDatePicker
                                    label="Date mobile"
                                    inputFormat="MM/DD/YYYY"
                                    value={value}
                                    onChange={handleChange1}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider>
                    </div>
                    {/* <div className="field-holder">
                        <span>
                        <label>Choose from a wide variety</label>
                        </span>
                        <span>
                        <CollapsableSwitchMealPlan status={switchStatus.veg} updateStatus={status => updateStatus({ ...switchStatus, veg: status })}>
                        {switchStatus.veg ? "Veg" : "NonVeg"}
                    </CollapsableSwitchMealPlan>    
                        </span>
                    </div> */}
                    <div className="field-holder serv-cat-tab">
                    <label>Meal Type</label>
                        <ServicesCatTabs/>
                    </div>
                    <div>
                    <div className="field-holder cusine-checkbox ser-checkbox">
                    <label>Select Cuisine(s)</label>
                    {/* <ul>
                                {
                                    ["North-Indian", "Chinese", "Italian-American", "Continental", "Thai", "Mexican"].map((index) => {
                                        return (
                                            <>
                                                <li>
                                                    <Checkbox {...label}
                                                        name={index}
                                                        value={index}
                                                        onChange={handleCheckbox}
                                                    />
                                                    <span className={'label-div'}>
                                                        {index.toLowerCase()}
                                                    </span>
                                                </li>
                                            </>
                                        )
                                    })
                                }
                            </ul> */}
                              <ul>
                                {
                                    ["MONDAY", "TUESDAY", "WEDNESDAY", "THRUSDAY", "FRIDAY", "SATURDAY" , "SUNDAY"].map((index) => {
                                        return (
                                            <>
                                                <li>
                                                    <Checkbox {...label}
                                                        name={index}
                                                        value={index}
                                                        onChange={handleCheckbox}
                                                    />
                                                    <span className={'label-div'}>
                                                        {index.toLowerCase()}
                                                    </span>
                                                </li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                    </div>
                    <div className="field-holder burnur-checkbox ser-checkbox">
                    <label>No. of Gas Burners</label>
                    <ul>
                                {
                                    ["1 burners", "2 burners", "3 burners", "4 burners", "5 burners"].map((index) => {
                                        return (
                                            <>
                                                <li>
                                                    <Checkbox {...label}
                                                        name={index}
                                                        onChange={handleCheckbox}
                                                    />
                                                    <span className={'label-div'}>
                                                        {index.toLowerCase()}
                                                    </span>
                                                </li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                    </div>
                    <div>

                    </div>
                   
                    </div>
                </div>

            </div>
        </>


    )
}
export default ChefFormStep1;


