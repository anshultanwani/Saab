import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import './my-preferences-details.scss';
const History = (props) => {
    const handleAssign = () => {
        console.log("Cliked");
    }
    const handleWishlist = () => {
        console.log("wishlist Cliked");
    }

    const dishData = () => props.historyData.map((cur, index) => {
        var comboStr = '';
        cur.dishCombo.map((dish, index) => {
            comboStr = comboStr + dish + (index === cur.dishCombo.length - 1 ? '' : ' + ');
            return dish;
        })

        return (
            <div className='card' key={index} >
                <div className="left-sec">
                    <div className='img-holder'>
                        {
                            cur.images.map((image, index) => {
                                return (
                                    <img key={cur.category + '_' + index} src={require('../assets/' + image).default} className={"dish-img"} alt="not loaded" />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="right-sec">
                    <div className='cat-holder'>
                        <div className='comboname'>{cur.comboName}</div>
                    </div>
                    <div className='dish'>{comboStr}</div>
                    <Button
                        variant="contained"
                        className="assign-btn"
                        onClick={() => handleAssign(cur.category)}
                    >
                        Re-assign
                    </Button>
                    <Button
                        variant="contained"
                        className="wishlist-btn"
                        onClick={() => handleWishlist(cur.category)}
                    >
                        <img src={require('../assets/images/wishlist.png').default} alt="not loaded" />
                    </Button>
                </div>
            </div>
        );
    })
    return (
        <div className="preferences-details">
             <div className="border-card">
            <div className="filter-sec">
                <span>Sort By :</span>
                <select>
                    <option value="all">All</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                </select>
            </div>
            <div className="myPreferences-sec-details">
               
                {dishData()}
            </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        historyData: state.foodData.history
    }
}
export default connect(mapStateToProps)(History);