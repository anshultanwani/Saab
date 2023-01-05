import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from 'axios';
import { Button } from '@mui/material';
import './services-head.scss';
import { MultiSelect } from "react-multi-select-component";

const ChefFormStep2 = (props) => {
    const [selected, setSelected] = useState([]);
    const [catHead, setCatHead] = useState("")
    const [switchStatus, updateStatus] = useState({
        veg: false
    })
    const [selmaincourse, setSelMainCourse] = useState([]);
    const [seldessert, setSelDessert] = useState([]);
    const [options, setOptions] = useState([]);
    
    const {
        catState
    } = props;

    useEffect(() => {
        axios.get(window.apiDomain + '/v1/dishes?mealType=' + catState + "&vegOnly=" + 1).
        then(res => {
                var tempArr = []
                {
                    Object.values(res.data.data.breakfast).map((des_val) => {
                        console.log("inside loop")
                        tempArr.push({ label: des_val["name"], value: des_val["name"] })
                        setCatHead(des_val["cuisine_name"])
                    })
                    setOptions(tempArr)
                    console.log("option in buttom" + tempArr)
                }
        }).catch(err => {
            console.log(err)
            console.log("Please add customer");
        })
    }, [])
    return (
        <>
            <div className="step2-form">
                <div className="sel-food-cat">
                    <span>Choose from a wide variety</span>
                    <div className="cuisine-btn-sec">
                        <div className="sel-food-cat">
                            <button onClick={() => updateStatus(true)} className="cuisine-button veg-nonveg">Veg</button>
                            <button onClick={() => updateStatus(false)} className="cuisine-button veg-nonveg">NonVeg</button>
                        </div>
                    </div>
                </div>

                <div className="field-holder sel-cat-food-list">
                    <label>{catHead}</label>
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