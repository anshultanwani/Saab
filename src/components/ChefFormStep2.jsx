import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from 'axios';
import './services-head.scss';
import { MultiSelect } from "react-multi-select-component";

const ChefFormStep2 = (props) => {
    const [selected, setSelected] = useState([]);
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
        passToParentApiCallBack
    } = props;

    var vegOnly = 1;

    const handelFoodCatClick = (value) => {
        console.log("api call again")
        apiCall(value);
    }
    const apiCall = (value) => {
        console.log("veg stats2" + vegOnly)
        console.log("catState=======" + catState)
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

    return (
        <>
            <div className="step2-form">
                <div className="sel-food-cat">
                    <span>Choose from a wide variety</span>
                    <div className="cuisine-btn-sec">
                        <div className="sel-food-cat">
                            <button onClick={() => { updateStatus(0); handleClick(1); handelFoodCatClick(1) }} className={`cuisine-button veg-nonveg ${checkActive(1, "active")}`} >Veg</button>
                            <button onClick={() => { updateStatus(1); handleClick(2); handelFoodCatClick(0) }} className={`cuisine-button veg-nonveg ${checkActive(2, "active")}`}>NonVeg</button>
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
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select"
                            />
                            {soupsAndBeveragesOptions.length > 0 ?
                                <>
                                    <label>{soupsAndBeveragesCatHead} </label>
                                    <MultiSelect
                                        options={soupsAndBeveragesOptions}
                                        value={selected}
                                        onChange={setSelected}
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
                            <label>{dessertCatHead} </label>
                            <MultiSelect
                                options={dessertOptions}
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select"
                            />
                            <label>{soupsAndBeveragesCatHead} </label>
                            <MultiSelect
                                options={soupsAndBeveragesOptions}
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select"
                            />
                            {breadRiceAndRaitaOptions.length > 0 ?
                                <>
                                    <label>{breadRiceAndRaitaCatHead} </label>
                                    <MultiSelect
                                        options={breadRiceAndRaitaOptions}
                                        value={selected}
                                        onChange={setSelected}
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