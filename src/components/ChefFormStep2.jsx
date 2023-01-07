import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from 'axios';
import { Button } from '@mui/material';
import './services-head.scss';
import { MultiSelect } from "react-multi-select-component";

const ChefFormStep2 = (props) => {
    const [selected, setSelected] = useState([]);
    const [catHead, setCatHead] = useState("")
    const [switchStatus, updateStatus] = useState(1)
    const [selmaincourse, setSelMainCourse] = useState([]);
    const [seldessert, setSelDessert] = useState([]);
    const [options, setOptions] = useState([]);
    const [mocktailOptions, setMocktailOptions] = useState([]);
    const [mocktailCatHead, setmocktailCatHead] = useState([]);
    const [activeIndex, setActiveIndex] = useState(1);
    const handleClick = (index) => setActiveIndex(index);
    const checkActive = (index, className) => activeIndex === index ? className : "";
    const {
        catState,
        cuisineArr,
        passToParentApiCallBack
    } = props;

    var vegOnly = 1;

    const handelFoodCatClick = () => {
        console.log("veg stats1" + vegOnly)
        apiCall();
    }
    const apiCall = () => {
        console.log("veg stats2" + vegOnly)
        console.log("catState=======" + catState)
        axios.get(window.apiDomain + '/v1/dishes?mealType=' + catState + "&vegOnly=" + vegOnly + "&cuisine=" + cuisineArr[0] + "&cuisine1=" + cuisineArr[1] + "cuisine2=" + cuisineArr[2])
            .then(res => {
                var tempArr = []
                {
                    if (catState === "Breakfast") {
                        Object.values(res.data.data.breakfast).map((des_val) => {
                            console.log("inside api loop")
                            tempArr.push({ label: des_val["name"], value: des_val["name"] })
                            setCatHead(des_val["cuisine_name"])
                        })
                        setOptions(tempArr)
                          console.log("option in value in api loop" + JSON.stringify(tempArr))
                    }
                    else if (catState === "Lunch") {
                        console.log("inside lunch")
                        Object.values(res.data.data.cocktailsAndMocktails).map((des_val) => {
                            console.log("inside api loop")
                            tempArr.push({ label: des_val["name"], value: des_val["name"] })
                            setCatHead(des_val["cuisine_name"])
                        })
                        setOptions(tempArr)
                        tempArr = [];
                        Object.values(res.data.data.mainCourse).map((des_val) => {
                            console.log("inside api loop 11")
                            tempArr.push({ label: des_val["name"], value: des_val["name"] })
                            console.log("main course" + des_val["cuisine_name"])
                            setmocktailCatHead(des_val["cuisine_name"])
                        })
                        setMocktailOptions(tempArr)


                    }
                }
            }).catch(err => {
                console.log(err)
                console.log("Please add customer");
            })
    }

    useEffect(() => {
        console.log("inside useeffect api call")
    }, [])

    passToParentApiCallBack(apiCall)

    return (
        <>
            <div className="step2-form">
                <div className="sel-food-cat">
                    <span>Choose from a wide variety</span>
                    <div className="cuisine-btn-sec">
                        <div className="sel-food-cat">
                            <button onClick={() => { updateStatus(0); handleClick(1); handelFoodCatClick() }} className={`cuisine-button veg-nonveg ${checkActive(1, "active")}`} >Veg</button>
                            <button onClick={() => { updateStatus(1); handleClick(2); handelFoodCatClick() }} className={`cuisine-button veg-nonveg ${checkActive(2, "active")}`}>NonVeg</button>
                        </div>
                    </div>
                </div>

                <div className="field-holder sel-cat-food-list">
                    <h2>{catState}</h2>
                    <label>{catHead} </label>
                    <MultiSelect
                        options={options}
                        value={selected}
                        onChange={setSelected}
                        labelledBy="Select"
                    />
                     <label>{mocktailCatHead} </label>
                     <MultiSelect
                        options={mocktailOptions}
                        value={selected}
                        onChange={setSelected}
                        labelledBy="Select"
                    />

                </div>
            </div>
        </>
    )
}
export default ChefFormStep2;