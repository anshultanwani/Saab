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
import RecipeIngredient from './RecipeIngredient';
import RecipeDetails from './RecipeDetails';
const MealFoodRecipe = props => {
    const Tabs = () => {
        const [activeIndex, setActiveIndex] = useState(3);
        const handleClick = (index) => setActiveIndex(index);
        const checkActive = (index, className) => activeIndex === index ? className : "";
        return (
            <>
                <div className="tabs">
                    <button
                        className={`tab ${checkActive(1, "active")}`}
                        onClick={() => handleClick(1)}
                    >
                       Ingredients
                    </button>
                    <button
                        className={`tab ${checkActive(2, "active")}`}
                        onClick={() => handleClick(2)}
                    >
                       Direction
                    </button>
                    <button
                        className={`tab ${checkActive(3, "active")}`}
                        onClick={() => handleClick(3)}
                    >
                       Review
                    </button>
                </div>
                <div className="panels">
            
                    <div className={`panel ${checkActive(1, "active")}`}>
                       <RecipeIngredient/>
                    </div>
                    <div className={`panel ${checkActive(2, "active")}`}>
                       <RecipeDetails/>
                    </div>
                    <div className={`panel ${checkActive(3, "active")}`}>
                     <h1>4.2</h1>
                    </div>
                   
                </div>
              
            </>
        );
    };
    return (
        <div className='meal-plan-outer'>
            <div className='border-card'>
                <div className='header-recipe'>
                    <img src={require("../assets/images/palak-paneer-recipe.jpg").default} />
                    <div className='recipe-ttile'>
                        <h1>Delicious Palak Panner</h1>
                        <p>qucik & Easy</p>
                        <ul>
                            <li>
                                4.2
                            </li>
                            <li>25 min</li>
                            <li>Easy</li>
                            <li>2 People</li>
                        </ul>


                    </div>
                </div>
                <div className="rcipe-bottom">
                       

                            <Tabs />
                     
                    </div>

            </div>

        </div>
    );
}


export default MealFoodRecipe;