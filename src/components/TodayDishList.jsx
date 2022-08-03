import React from "react";
import { connect } from 'react-redux';
import './stock-row.scss';
import Slider from "react-slick";

const TodayDishList = (props) => {
   
    return (
        <>
          {
                        Object.keys(props.todayDishset).map((data) => {
                            return props.todayDishset[data].map(index =>{
                                <div className="dishlist">
                                    {index}
                                    <p>{index.foodCombo}</p>
                                </div>
                            }
                            )
                          

                        })
                       }
        </>
    )
}


const mapStateToProps = state => {
    return {
        todayDishset: state.foodData.todayDish,
    }
}


export default connect(mapStateToProps)(TodayDishList);