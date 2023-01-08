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
    const [activeIndex, setActiveIndex] = useState(1);
    const handleClick = (index) => setActiveIndex(index);
    const checkActive = (index, className) => activeIndex === index ? className : "";
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
    const [gasBurners, setGasBurners] = useState(1);
    const [switchStatus, updateStatus] = useState({
        veg: false
    })
    const {
        passToParent,
        passToParentCuisine,
        passToParentStep1Callback
    } = props;

    let summaryObjectStep1 = new Object();

    const ChildCallback = (value) => {
        setSelGuest(value) 
    }

    const handleChange = (event) => {
        var value = event.target.value;
        setOccasion(value)
    };

    const handleSelFoodCat = (cat) => {
        setSelFoodCat(cat);
    };

    const handleSelTime = (time) => {
        setSelTime(time);
    };

    passToParent(selFoodCat);

    summaryObjectStep1.occasion = occasion
    summaryObjectStep1.noGuest = selGuest
    summaryObjectStep1.eventDate = selDate
    summaryObjectStep1.mealType = selFoodCat
    summaryObjectStep1.mealTypeStartTime = selTime
    summaryObjectStep1.cuisineType = cuisineActive
    summaryObjectStep1.gasBurners = gasBurners
    summaryObjectStep1.kitchenApplicances = {"tandoor": 1, "oven": 1,"microwave": 0 }


    passToParentStep1Callback(summaryObjectStep1);

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
                                onChange = {(e) => setSelDate(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="field-holder serv-cat-tab">
                        <label>Meal Type</label>
                        <ServicesCatTabs passToParent={handleSelFoodCat} passToParent2={handleSelTime}/>                    </div>
                    <div>
                        <div className="field-holder cusine-checkbox ser-checkbox">
                            <label>Select upto 3 Cuisine(s)</label>
                            <div className="cuisine-btn-sec">
                                {
                                    ["North-Indian", "Chinese", "Italian-American", "Continental", "Thai", "Mexican"].map(key => {
                                        const isActive = cuisineActive.includes(key)
                                        return (
                                            <button className='cuisine-button'
                                                key={key}
                                                onClick={() => setCuisineActive(isActive
                                                    ? cuisineActive.filter(current => current !== key)
                                                    : (cuisineActive.length < 3 ? ([...cuisineActive, key]) : [...cuisineActive])
                                                )}
                                                style={{ background: isActive ? '#AC6ABE' : 'white', color: isActive ? 'white' : 'black' }}
                                            >
                                                <h1>{key}</h1>
                                            </button>
                                        )
                                    })
                                }
                            </div>
                            {passToParentCuisine(cuisineActive)}
                        </div>
                        <div className="field-holder burnur-checkbox ser-checkbox">
                            <label>No. of Gas Burners</label>
                            <div className="cuisine-btn-sec">
                                <button
                                    className={`burner cuisine-button ${checkActive(1, "active")}`}
                                    onClick={() => { handleClick(1); setGasBurners(1)}}
                                >
                                    <h1>1 burner</h1>
                                </button>
                                <button
                                    className={`burner cuisine-button ${checkActive(2, "active")}`}
                                    onClick={() => { handleClick(2); setGasBurners(2)}}
                                >
                                    <h1>2 burners</h1>
                                </button>
                                <button
                                    className={`burner cuisine-button ${checkActive(3, "active")}`}
                                    onClick={() => { handleClick(3); setGasBurners(3) }}
                                >
                                    <h1>3 burners</h1>
                                </button>
                                <button
                                    className={`burner cuisine-button ${checkActive(4, "active")}`}
                                    onClick={() => { handleClick(4); setGasBurners(4) }}
                                >
                                    <h1>4 burners</h1>
                                </button>
                                <button
                                    className={`burner cuisine-button ${checkActive(5, "active")}`}
                                    onClick={() => { handleClick(5); setGasBurners(5) }}
                                >
                                    <h1>5 burners</h1>
                                </button>
                                <button
                                    className={`burner cuisine-button ${checkActive(6, "active")}`}
                                    onClick={() => { handleClick(6); setGasBurners(6) }}
                                >
                                    <h1>6 burners</h1>
                                </button>
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