import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from 'axios';
import { Button, TextField, Switch } from '@mui/material';
import './services-head.scss';
import CollapsableSwitchMealPlan from '../components/CollapsableSwitchMealPlan';
import { MultiSelect } from "react-multi-select-component";

const ChefFormStep2 = (props) => {
    const [selected, setSelected] = useState([]);
    const [switchStatus, updateStatus] = useState({
        veg: false
    })
    const {
        catState
      } = props;
    const options = [
        { label: "Upma 🍇", value: "upma" },
        { label: "Poha 🥭", value: "poha" },
        { label: "Paratha 🍓", value: "paratha"},
      ];
    return (
        <>
            <div className="step2-form">
                <div className="sel-food-cat">
                    <span>Choose from a wide variety</span>
                    <span>
                        <CollapsableSwitchMealPlan status={switchStatus.veg} updateStatus={status => updateStatus({ ...switchStatus, veg: status })}>
                            {switchStatus.veg ? "" : ""}
                        </CollapsableSwitchMealPlan>
                    </span>
                </div>
                <div className="field-holder sel-cat-food-list">
                    <label>{catState}</label>
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