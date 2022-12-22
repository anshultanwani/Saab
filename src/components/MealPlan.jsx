import React, { useState } from 'react';
import { Tab, Tabs } from "@mui/material";
import { Button, TextField, Switch } from '@mui/material';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import { withRouter } from 'react-router-dom';
import './meal-plan.scss';
import Checkbox from '@mui/material/Checkbox';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { updateCart, toggleSliderDrawer, updateOrderStatus } from '../actions';
import CollapsableSwitchMealPlan from '../components/CollapsableSwitchMealPlan';
const MealPlan = props => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [switchStatus, updateStatus] = useState({
        veg: false
    })

    const openRecipe = () => {
        console.log("recipde video")
       props.toggleSliderDrawer({
            mealvideoPopup: true
        })
    }

    const VegFoodSection = () => {
        return (
            <>
                <div className='foodtimecat'>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="BreakFast" value="1" />
                                    <Tab label="Lunch" value="2" />
                                    <Tab label="Dinner" value="3" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <ul>
                                    <li>
                                        <a><img src={require("../assets/images/Poha-bf.png").default} /></a>
                                        <p>Poha</p>
                                    </li>
                                    <li>
                                        <a><img src={require("../assets/images/daalparatha.png").default} /></a>
                                        <p>Daal Paratha</p>
                                    </li>
                                </ul>
                            </TabPanel>
                            <TabPanel value="2">
                                <ul>
                                <li>
                                    <a><img src={require("../assets/images/Palak-Panner.png").default} /></a>
                                    <p>Palak Panner</p>
                                </li>
                                <li>
                                    <a><img src={require("../assets/images/panner-lab.png").default} /></a>
                                    <p>Butter Chiken</p>
                                </li>
                                </ul>
                            </TabPanel>
                            <TabPanel value="3">
                                <ul>
                                <li>
                                    <a><img src={require("../assets/images/daalchawal.jpg").default} /></a>
                                    <p>Daal Chawal</p>
                                </li>
                                <li>
                                    <a> <img src={require("../assets/images/panner-lab.png").default} /></a>
                                    <p>Panner Lababdar</p>
                                </li>
                                </ul>
                            </TabPanel>
                        </TabContext>
                    </Box>
                </div>
            </>
        )
    }

    const NONVegFoodSection = () => {
        return (
            <>
                <div className='none-veg-food'>
                    <div className="title">Please select prefered day</div>
                    <ul>
                        {
                            ["MONDAY", "TUESDAY", "WEDNESDAY", "THRUSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].map((index) => {
                                return (
                                    <>
                                        <li>
                                            <Checkbox
                                                name={index}
                                            // onChange={handleCheckbox}
                                            />
                                            <span className={'label-div'}>
                                                {index.toLowerCase()}
                                            </span>
                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                    <div className='foodtimecat'>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="BreakFast" value="1" />
                                        <Tab label="Lunch" value="2" />
                                        <Tab label="Dinner" value="3" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    <ul>
                                        <li>
                                            <a onClick={openRecipe}><img src={require("../assets/images/Poha-bf.png").default} />
                                                <p>Chicken</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={openRecipe}><img src={require("../assets/images/daalparatha.png").default} /></a>
                                            <p>Chiken</p>
                                        </li>
                                    </ul>
                                </TabPanel>
                                <TabPanel value="2">
                                    <ul>
                                    <li>
                                        <a><img src={require("../assets/images/Palak-Panner.png").default} /></a>
                                        <p>Palak Panner</p>
                                    </li>
                                    <li>
                                        <a><img src={require("../assets/images/panner-lab.png").default} /></a>
                                        <p>Butter Chiken</p>
                                    </li>
                                    </ul>
                                   
                                </TabPanel>
                                <TabPanel value="3">
                                    <ul>
                                    <li>
                                        <a><img src={require("../assets/images/daalchawal.jpg").default} /></a>
                                        <p>Daal Chawal</p>
                                    </li>
                                    <li>
                                        <a> <img src={require("../assets/images/panner-lab.png").default} /></a>
                                        <p>Panner Lababdar</p>
                                    </li>
                                    </ul>
                                   
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </div>
                </div>

            </>
        )
    }
    return (
        <div className='meal-plan-outer'>
            <div className='border-card'>
                <div className='top-banner'>
             
                <p className='meal-head'>Enjoy Your Planned Meal</p>
                
               
                <img src={require("../assets/images/meal3.gif").default} />
              
                </div>
                 <div className="chose-cat">

                    <CollapsableSwitchMealPlan status={switchStatus.veg} updateStatus={status => updateStatus({ ...switchStatus, veg: status })}>
                        {switchStatus.veg ? NONVegFoodSection({}) : VegFoodSection({})}
                    </CollapsableSwitchMealPlan>
                </div>

            </div>

        </div>
    );
}

const mapStateToProps = state => {
    return {
        mealplanfood: state.cart.mealplan,
        
    }
}


export default connect(mapStateToProps, { updateCart, toggleSliderDrawer, updateOrderStatus })(withRouter(MealPlan));
