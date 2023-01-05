import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from 'axios';
import { Button, TextField, Switch } from '@mui/material';
import './services-head.scss';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import dayjs from 'dayjs';
import DiscreteSliderMarks from "./DiscreteSliderMarks";
import ServicesCatTabs from "./ServiceCatTabs";
const ChefFormStep1 = (props) => {
    const [value, setValue] = React.useState(dayjs('2023-01-11T21:11:54'));
    const [selGuest, setSelGuest] = useState([]);
    const [selDate, setSelDate] = useState({});
    const [selFoodCat, setSelFoodCat] = useState('Breakfast');
    const [selTime, setSelTime] = useState('');
    const [checked, setChecked] = useState([]);
    const [occasion, setOccasion] = React.useState('');
    const [data, updateData] = useState({
        workingDays: []
    })
    const [cuisineActive, setCuisineActive] = useState([]);
    const [burnerActive, setBurnerActive] = useState([]);
    const [switchStatus, updateStatus] = useState({
        veg: false
    })
    const {
        passToParent
    } = props;

    const ChildCallback = (value) => {
        setSelGuest(value)
    }

    const handleChange = (event) => {
        var value = event.target.value;
        setOccasion(value)
    };


    const handleSelDate = (x) => {
        setSelDate(x['$d']);
    };

    const handleSelFoodCat = (cat) => {
        setSelFoodCat(cat);
    };

    const handleSelTime = (time) => {
        setSelTime(time);
    };

    const label = { inputProps: { 'aria-label': 'Chinese' } };
    return (
        <>
            <div className='service-head-outer'>
                <div className="service-form">
                    <div className='field-holder' style={{
                        margin:"0px 0 26px 1px"
                    }}>
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
                            <MenuItem value={'wedding-functions'}>Wedding function</MenuItem>
                            <MenuItem value={'mehendi-cocktail-event'}>Mehendi Cocktail Event</MenuItem>
                            <MenuItem value={'house-warmimng'}>House Warming</MenuItem>
                            <MenuItem value={'daily-basis'}>Daily Basis</MenuItem>
                            <MenuItem value={'weekly-basis'}>Weekly Basis</MenuItem>
                        </Select>
                    </div>
                    <div className="field-holder" style={{
                            margin: '0 0 4px 0 '
                        }}>
                        <label>Select no of Guests / Person</label>
                        <DiscreteSliderMarks passToParent={ChildCallback} />
                    </div>
                    <div className="field-holder sel-date">
                        <label> Select Date</label>
                        <div style={{
                            margin: 'auto',
                            display: 'block',
                            width: '100%'
                        }}>
                            <TextField
                                id="date"
                                label=""
                                type="date"
                                defaultValue="2023-01-03"
                                inputProps={{
                                    min: new Date().toISOString().slice(0, 10),
                                  }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                    </div>

                    <div className="field-holder serv-cat-tab">
                        <label>Meal Type</label>
                        <ServicesCatTabs passToParent={handleSelFoodCat} passToParent2={handleSelTime}/>                    </div>
                    <div>
                        <div className="field-holder cusine-checkbox ser-checkbox">
                            <label>Select Cuisine(s)</label>
                            <div className="cuisine-btn-sec">
                            <div className="cuisine-btn-sec">
                                {
                                    ["North-Indian", "Chinese", "Italian-American", "Continental", "Thai", "Mexican"].map(key => {
                                        const isActive = cuisineActive.includes(key)
                                        return (
                                            <button className='cuisine-button'
                                                key={key}
                                                onClick={() => setCuisineActive(isActive
                                                    ? cuisineActive.filter(current => current !== key)
                                                    : cuisineActive.length < 3 ? ([...cuisineActive, key]) : ''
                                                )}
                                                style={{ background: isActive ? '#AC6ABE' : 'white', color: isActive ? 'white' : 'black' }}
                                            >
                                                <h1>{key}</h1>
                                            </button>
                                        )
                                    })
                                }
                            </div>
                            </div>
                        </div>
                        <div className="field-holder burnur-checkbox ser-checkbox">
                            <label>No. of Gas Burners</label>
                            <div className="cuisine-btn-sec">
                                {
                                    ["1 burners", "2 burners", "3 burners", "4 burners", "5 burners",  "6 burners"].map(key => {
                                        const isActive = burnerActive.includes(key)

                                        return (
                                            <button className='cuisine-button'
                                                key={key}
                                                onClick={() => setBurnerActive(isActive
                                                    ? burnerActive.filter(current => current !== key)
                                                    : [...burnerActive, key]
                                                )}
                                                style={{ background: isActive ? '#AC6ABE' : 'white', color: isActive ? 'white' : 'black' }}
                                            >
                                                <h1>{key}</h1>
                                            </button>
                                        )
                                    })
                                }
                            </div>
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