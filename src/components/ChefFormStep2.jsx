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
    
    let noOfDishesSelected = selected1.length + selected2.length + selected3.length + selected4.length + 
    selected5.length + selected6.length + selected7.length
    const handleBurnerAlert = (setSelected, selected) => {
         if (noOfGasBurner === 1 && noOfDishesSelected > 7)
        {
            alert("With 1 gas burner, you can choose max 8 dishes that are prepared on gas.");
            setSelected(selected.slice(0, selected.length - 1));
        }
        else if (noOfGasBurner === 2 && noOfDishesSelected > 10)
        {
            alert("With 2 gas burners, you can choose max 11 dishes that are prepared on gas.");
            setSelected(selected.slice(0, selected.length - 1));
        }
        else if (noOfGasBurner === 3 && noOfDishesSelected > 11)
        {
            alert("With 3 gas burners, you can choose max 12 dishes that are prepared on gas.");
            setSelected(selected.slice(0, selected.length - 1));
        }
        else if (noOfGasBurner === 4 && noOfDishesSelected > 12)
        {
            alert("With 4 gas burners, you can choose max 13 dishes that are prepared on gas.");
            setSelected(selected.slice(0, selected.length - 1));
        }
        else if (noOfGasBurner === 5 && noOfDishesSelected > 13)
        {
            alert("With 5 gas burners, you can choose max 14 dishes that are prepared on gas.");
            setSelected(selected.slice(0, selected.length - 1));
        }
        else if (noOfGasBurner === 6 && noOfDishesSelected > 14)
        {
            alert("With 6 gas burners, you can choose max 15 dishes that are prepared on gas.");
            setSelected(selected.slice(0, selected.length - 1));
        }
        else{
            setSelected(selected);
        }
    }
    summaryObjectStep2.vegOnly = switchStatus;
    summaryObjectStep2.selDish = noOfDishesSelected;
    console.log("----------" + noOfDishesSelected + summaryObjectStep2.selDish)
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
                                onChange={(selected1)=>{handleBurnerAlert(setSelected1, selected1);}}
                                labelledBy="Select"
                                hasSelectAll={false}
                            />
                            {soupsAndBeveragesOptions.length > 0 ?
                                <>
                                    <label>{soupsAndBeveragesCatHead} </label>
                                    <MultiSelect
                                        options={soupsAndBeveragesOptions}
                                        value={selected2}
                                        onChange={(selected2)=>{handleBurnerAlert(setSelected2, selected2);}}
                                        labelledBy="Select"
                                        hasSelectAll={false}
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
                                onChange={(selected3)=>{handleBurnerAlert(setSelected3, selected3);}}
                                labelledBy="Select"
                                hasSelectAll={false}
                            />
                            <label>{mocktailCatHead} </label>
                            <MultiSelect
                                options={mocktailOptions}
                                value={selected4}
                                onChange={(selected4)=>{handleBurnerAlert(setSelected4, selected4);}}
                                labelledBy="Select"
                                hasSelectAll={false}
                            />
                            <label>{dessertCatHead} </label>
                            <MultiSelect
                                options={dessertOptions}
                                value={selected5}
                                onChange={(selected5)=>{handleBurnerAlert(setSelected5, selected5);}}
                                labelledBy="Select"
                                hasSelectAll={false}
                            />
                            <label>{soupsAndBeveragesCatHead} </label>
                            <MultiSelect
                                options={soupsAndBeveragesOptions}
                                value={selected6}
                                onChange={(selected6)=>{handleBurnerAlert(setSelected6, selected6);}}
                                labelledBy="Select"
                                hasSelectAll={false}
                            />
                            {breadRiceAndRaitaOptions.length > 0 ?
                                <>
                                    <label>{breadRiceAndRaitaCatHead} </label>
                                    <MultiSelect
                                        options={breadRiceAndRaitaOptions}
                                        value={selected7}
                                        onChange={(selected7)=>{handleBurnerAlert(setSelected7, selected7);}}
                                        labelledBy="Select"
                                        hasSelectAll={false}
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