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
    
    const {
        catState,
        cuisineArr 
    } = props;

    {console.log("array of cuisne" + cuisineArr[0])}
    const handelFoodCatClick = () => {
        console.log("veg nonveg button clicked" + switchStatus) 
        apiCall();
    }

    const apiCall =  () =>{
        console.log("catState value" + catState)
        axios.get(window.apiDomain + '/v1/dishes?mealType=' + catState + "&vegOnly=" + switchStatus + "&cuisine="+cuisineArr[0]+"&cuisine1="+cuisineArr[1]+"cuisine2="+cuisineArr[2])
        .then(res => {
                var tempArr = []
                {
                    Object.values(res.data.data.breakfast).map((des_val) => {
                        console.log("inside api loop")
                        tempArr.push({ label: des_val["name"], value: des_val["name"] })
                        setCatHead(des_val["cuisine_name"])
                    })
                    setOptions(tempArr)
                  //  console.log("option in value in api loop" + JSON.stringify(tempArr))
                }
                {
                    Object.values(res.data.data.cocktailsAndMocktails).map((des_val) => {
                        console.log("inside api loop")
                        tempArr.push({ label: des_val["name"], value: des_val["name"] })
                        setCatHead(des_val["cuisine_name"])
                    })
                    setOptions(tempArr)
                   // console.log("option in value in api loop" + JSON.stringify(tempArr))
                }
        }).catch(err => {
            console.log(err)
            console.log("Please add customer");
        })
    }

    useEffect(() => {
        console.log("inside useeffect api call")
        apiCall();
    }, [])

    return (
        <>
            <div className="step2-form">
                <div className="sel-food-cat">
                    <span>Choose from a wide variety</span>
                    <span>{window.apiDomain + '/v1/dishes?mealType=' + catState + "&vegOnly=" + switchStatus + "&cuisine="+cuisineArr[0]+"&cuisine1="+cuisineArr[1]+"&cuisine2="+cuisineArr[2]}</span>
                    <div className="cuisine-btn-sec">
                        <div className="sel-food-cat">
                            <button onClick={() => {updateStatus(1); handelFoodCatClick()}} className="cuisine-button veg-nonveg">Veg</button>
                            <button onClick={() => {updateStatus(0); handelFoodCatClick()}} className="cuisine-button veg-nonveg">NonVeg</button>
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
                </div>
            </div>
        </>
    )
}
export default ChefFormStep2;