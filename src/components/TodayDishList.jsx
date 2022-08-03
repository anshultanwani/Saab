import React from "react";
import { connect } from 'react-redux';
import './stock-row.scss';
import Slider from "react-slick";
import {  TextField } from '@mui/material';
const TodayDishList = (props) => {

    return (
        <div className="dish-sec">
            {
                Object.keys(props.todayDishset).map((cur) => {
                    return props.todayDishset[cur].comboRecipe.map((index) =>
                        <div className="dish-details-sec">
                            <div className="left-sec">
                                <h2>{index.name}</h2>
                                <div className="qty-sec">
                                    <span>Qty:</span>
                                    <span>
                                        <TextField
                                            className="mob-field"
                                            sx={{ m: 1 }}
                                            InputProps={{
                                                value: index.quantity || 0,
                                                type: 'number'
                                            }}
                                        />
                                    </span>
                                </div>
                                <div className="adtnl-note">
                                    {index.additionalNotes}
                                </div>
                            </div>
                            <div className="right-sec">
                                {index.foodVideoUrl}
                            </div>


                        </div>
                    )
                })
            }
        </div>
    )
}


const mapStateToProps = state => {
    return {
        todayDishset: state.foodData.todayDish,
    }
}


export default connect(mapStateToProps)(TodayDishList);