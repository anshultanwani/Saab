import React, { useState } from 'react';
import { Tab, Tabs } from "@mui/material";
import { Button, TextField, Switch } from '@mui/material';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import './meal-plan.scss';
import Checkbox from '@mui/material/Checkbox';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CollapsableSwitchMealPlan from './CollapsableSwitchMealPlan';
const MealFoodRecipe = props => {
    return (
        <div className='meal-plan-outer'>
            <div className='border-card'>
            <>recipe details</>

            </div>

        </div>
    );
}


export default MealFoodRecipe;