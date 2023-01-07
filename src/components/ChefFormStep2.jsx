import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from 'axios';
import './services-head.scss';
import { MultiSelect } from "react-multi-select-component";
import { getBackdropUtilityClass } from "@mui/material";

const ChefFormStep2 = (props) => {
    const [selected1, setSelected1] = useState([]);
    const [selected2, setSelected2] = useState([]);
    const [selected3, setSelected3] = useState([]);
    const [selected4, setSelected4] = useState([]);
    const [selected5, setSelected5] = useState([]);
    const [selected6, setSelected6] = useState([]);
    const [selected7, setSelected7] = useState([]);
    const [catHead, setCatHead] = useState("")
    const [switchStatus, updateStatus] = useState(1)
    const [options, setOptions] = useState([]);
    const [mocktailOptions, setMocktailOptions] = useState([]);
    const [mocktailCatHead, setmocktailCatHead] = useState([]);
    const [mainCourseOptions, setmainCourseOptions] = useState([]);
    const [mainCourseCatHead, setmainCourseCatHead] = useState([]);
    const [breadRiceAndRaitaOptions, setbreadRiceAndRaitaOptions] = useState([]);
    const [breadRiceAndRaitaCatHead, setbreadRiceAndRaitaHead] = useState([]);
    const [soupsAndBeveragesOptions, setsoupsAndBeveragesOptions] = useState([]);
    const [soupsAndBeveragesCatHead, setsoupsAndBeveragesHead] = useState([]);
    const [dessertOptions, setdessertOptions] = useState([]);
    const [dessertCatHead, setdessertCatHead] = useState([]);

    const [activeIndex, setActiveIndex] = useState(1);
    const handleClick = (index) => setActiveIndex(index);
    const checkActive = (index, className) => activeIndex === index ? className : "";
    const {
        catState,
        cuisineArr,
        passToParentApiCallBack,
        passToParentStep2Callback,
        noOfGasBurner
    } = props;

    let summaryObjectStep2 = new Object();

    summaryObjectStep2.mealItems = [];
    summaryObjectStep2.mealItems.push({'appetizers':selected1.map(x => x.value)})
    summaryObjectStep2.mealItems.push({'soupsAndBeverages':selected2.map(x => x.value)})
    summaryObjectStep2.mealItems.push({'mainCourse':selected3.map(x => x.value)})
    summaryObjectStep2.mealItems.push({'mocktail':selected4.map(x => x.value)})
    summaryObjectStep2.mealItems.push({'dessert':selected5.map(x => x.value)})
    summaryObjectStep2.mealItems.push({'soupsAndBeverages':selected6.map(x => x.value)})
    summaryObjectStep2.mealItems.push({'breadsRiceAndRaita':selected7.map(x => x.value)})

    const handleFoodClick = (value) => {
        updateStatus(value);
        apiCall(value);
    }
    const getBack = () => {
        console.log("FUnction call");

    }
    summaryObjectStep2.vegOnly = switchStatus;

    const apiCall = (value) => {
        axios.get(window.apiDomain + '/v1/dishes?mealType=' + catState + "&vegOnly=" + value + "&cuisine=" + cuisineArr[0] + "&cuisine1=" + cuisineArr[1] + "cuisine2=" + cuisineArr[2])
            .then(res => {
                console.log(res.data.data)
                var tempArr = []
                {
                    if (catState === "Breakfast") {
                        Object.values(res.data.data.breakfast).map((des_val) => {
                            console.log("inside api loop")
                            tempArr.push({ label: des_val["name"], value: des_val["name"] })
                            setCatHead(des_val["type"])
                        })
                        setOptions(tempArr)
                        tempArr = [];
                        Object.values(res.data.data.soupsAndBeverages).map((des_val) => {
                            tempArr.push({ label: des_val["name"], value: des_val["name"] })

                            setsoupsAndBeveragesHead(des_val["type"])
                        })
                        setsoupsAndBeveragesOptions(tempArr)
                    }
                    else if (catState === "Lunch" || catState === "Dinner") {
                        console.log("inside lunch")
                        Object.values(res.data.data.cocktailsAndMocktails).map((des_val) => {
                            console.log("inside api loop")
                            tempArr.push({ label: des_val["name"], value: des_val["name"] })
                            setmocktailCatHead(des_val["type"])
                        })
                        setMocktailOptions(tempArr)
                        tempArr = [];
                        Object.values(res.data.data.mainCourse).map((des_val) => {
                            tempArr.push({ label: des_val["name"], value: des_val["name"] })

                            setmainCourseCatHead(des_val["type"])
                        })
                        setmainCourseOptions(tempArr)
                        tempArr = [];
                        Object.values(res.data.data.breadRiceAndRaita).map((des_val) => {
                            tempArr.push({ label: des_val["name"], value: des_val["name"] })

                            setbreadRiceAndRaitaHead(des_val["type"])
                        })
                        setbreadRiceAndRaitaOptions(tempArr)
                        tempArr = [];
                        Object.values(res.data.data.soupsAndBeverages).map((des_val) => {
                            tempArr.push({ label: des_val["name"], value: des_val["name"] })

                            setsoupsAndBeveragesHead(des_val["type"])
                        })
                        setsoupsAndBeveragesOptions(tempArr)
                        tempArr = [];
                        Object.values(res.data.data.dessert).map((des_val) => {
                            tempArr.push({ label: des_val["name"], value: des_val["name"] })

                            setdessertCatHead(des_val["type"])
                        })
                        setdessertOptions(tempArr)
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
    passToParentStep2Callback(summaryObjectStep2);

    // let noOfDishes = 0;

    // if (noOfGasBurner === 1)
    // {
    //     noOfDishes = 8
    // }
    // else if (noOfGasBurner === 2)
    // {
    //     noOfDishes = 11
    // }
    // else if (noOfGasBurner === 3)
    // {
    //     noOfDishes = 12
    // }
    // else if (noOfGasBurner === 4)
    // {
    //     noOfDishes = 13
    // }
    // else if (noOfGasBurner === 5)
    // {
    //     noOfDishes = 14
    // }
    // else if (noOfGasBurner === 6)
    // {
    //     noOfDishes = 15
    // }
    return (
        <>
            <div className="step2-form">
                <div className="sel-food-cat">
                    <span>Choose from a wide variety</span>
                    <div className="cuisine-btn-sec">
                        <div className="sel-food-cat">
                            <button onClick={() => { updateStatus(0); handleClick(1); handleFoodClick(1) }} className={`cuisine-button veg-nonveg ${checkActive(1, "active")}`} >Veg</button>
                            <button onClick={() => { updateStatus(1); handleClick(2); handleFoodClick(0) }} className={`cuisine-button veg-nonveg ${checkActive(2, "active")}`}>NonVeg</button>
                        </div>
                    </div>
                </div>

                <div className="field-holder sel-cat-food-list">
                    {catState === "Breakfast" ?
                        <>
                            <h2>{catState}</h2>
                            <label>{catHead} </label>
                            <MultiSelect
                                options={options}
                                value={selected1}
                                onChange={setSelected1}
                                labelledBy="Select"
                            />
                            {soupsAndBeveragesOptions.length > 0 ?
                                <>
                                    <label>{soupsAndBeveragesCatHead} </label>
                                    <MultiSelect
                                        options={soupsAndBeveragesOptions}
                                        value={selected2}
                                        onChange={setSelected2}
                                        labelledBy="Select"
                                    />
                                </>
                                : " "
                            }
                        </>
                        :
                        <>
                            <label>{mainCourseCatHead} </label>
                            <MultiSelect
                                options={mainCourseOptions}
                                value={selected3}
                                onChange={setSelected3}
                                labelledBy="Select"
                            />
                            <label>{mocktailCatHead} </label>
                            <MultiSelect
                                options={mocktailOptions}
                                value={selected4}
                                onChange={setSelected4}
                                labelledBy="Select"
                            />
                            <label>{dessertCatHead} </label>
                            <MultiSelect
                                options={dessertOptions}
                                value={selected5}
                                onChange={setSelected5}
                                labelledBy="Select"
                            />
                            <label>{soupsAndBeveragesCatHead} </label>
                            <MultiSelect
                                options={soupsAndBeveragesOptions}
                                value={selected6}
                                onChange={setSelected6}
                                labelledBy="Select"
                            />
                            {breadRiceAndRaitaOptions.length > 0 ?
                                <>
                                    <label>{breadRiceAndRaitaCatHead} </label>
                                    <MultiSelect
                                        options={breadRiceAndRaitaOptions}
                                        value={selected7}
                                        onChange={setSelected7}
                                        labelledBy="Select"
                                    />
                                </>
                                : " "
                            }

                        </>

                    }
                </div>
            </div>
        </>
    )
}
export default ChefFormStep2;